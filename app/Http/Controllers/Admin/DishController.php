<?php
// app/Http/Controllers/Admin/DishController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\DishRequest;
use App\Models\Category;
use App\Models\Dish;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class DishController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Dish::with('category');

        // Search functionality
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('description', 'like', '%' . $request->search . '%')
                  ->orWhere('ingredients', 'like', '%' . $request->search . '%');
            });
        }

        // Filter by category
        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        // Filter by status
        if ($request->filled('status')) {
            switch ($request->status) {
                case 'available':
                    $query->available();
                    break;
                case 'unavailable':
                    $query->where('is_available', false);
                    break;
                case 'signature':
                    $query->signature();
                    break;
                case 'featured':
                    $query->featured();
                    break;
            }
        }

        // Sort functionality
        $sortField = $request->get('sort', 'sort_order');
        $sortDirection = $request->get('direction', 'asc');
        $query->orderBy($sortField, $sortDirection);

        $dishes = $query->paginate(12);

        return Inertia::render('Admin/Dishes/Index', [
            'dishes' => $dishes,
            'categories' => Category::active()->ordered()->get(),
            'filters' => $request->only(['search', 'category_id', 'status', 'sort', 'direction']),
            'stats' => [
                'total' => Dish::count(),
                'available' => Dish::available()->count(),
                'signature' => Dish::signature()->count(),
                'featured' => Dish::featured()->count(),
            ]
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Dishes/Create', [
            'categories' => Category::active()->ordered()->get(),
        ]);
    }

    public function store(DishRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['slug'] = Str::slug($data['name']);

        // Handle image uploads
        if ($request->hasFile('images')) {
            $images = [];
            foreach ($request->file('images') as $image) {
                $path = $image->store('dishes', 'public');
                $images[] = asset('storage/' . $path);
            }
            $data['images'] = $images;
        }

        Dish::create($data);

        return redirect()
            ->route('admin.dishes.index')
            ->with('success', 'Dish created successfully.');
    }

    public function show(Dish $dish): Response
    {
        return Inertia::render('Admin/Dishes/Show', [
            'dish' => $dish->load('category'),
        ]);
    }

    public function edit(Dish $dish): Response
    {
        return Inertia::render('Admin/Dishes/Edit', [
            'dish' => $dish,
            'categories' => Category::active()->ordered()->get(),
        ]);
    }

    public function update(DishRequest $request, Dish $dish): RedirectResponse
    {
        $data = $request->validated();
        $data['slug'] = Str::slug($data['name']);

        // Handle image uploads
        if ($request->hasFile('images')) {
            $images = [];
            foreach ($request->file('images') as $image) {
                $path = $image->store('dishes', 'public');
                $images[] = asset('storage/' . $path);
            }
            $data['images'] = $images;
        }

        $dish->update($data);

        return redirect()
            ->route('admin.dishes.index')
            ->with('success', 'Dish updated successfully.');
    }

    public function destroy(Dish $dish): RedirectResponse
    {
        $dish->delete();

        return redirect()
            ->route('admin.dishes.index')
            ->with('success', 'Dish deleted successfully.');
    }

    public function toggleStatus(Request $request, Dish $dish): RedirectResponse
    {
        $request->validate([
            'field' => 'required|in:is_available,is_signature,is_featured',
        ]);

        $field = $request->field;
        $dish->update([$field => !$dish->$field]);

        $status = $dish->$field ? 'enabled' : 'disabled';
        $fieldName = str_replace('is_', '', $field);

        return redirect()
            ->route('admin.dishes.index')
            ->with('success', "Dish {$fieldName} {$status} successfully.");
    }
}
