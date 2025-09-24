<?php
// app/Http/Controllers/Admin/StaffController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StaffRequest;
use App\Models\Staff;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StaffController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Staff::query();

        // Search functionality
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('role', 'like', '%' . $request->search . '%')
                  ->orWhere('bio', 'like', '%' . $request->search . '%');
            });
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('is_active', $request->status === 'active');
        }

        // Sort functionality
        $sortField = $request->get('sort', 'sort_order');
        $sortDirection = $request->get('direction', 'asc');
        $query->orderBy($sortField, $sortDirection);

        $staff = $query->paginate(10);

        return Inertia::render('Admin/Staff/Index', [
            'staff' => $staff,
            'filters' => $request->only(['search', 'status', 'sort', 'direction']),
            'stats' => [
                'total' => Staff::count(),
                'active' => Staff::active()->count(),
                'inactive' => Staff::where('is_active', false)->count(),
            ]
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Staff/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = app(StaffRequest::class)->validated();

        // Handle image upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('staff', 'public');
            $data['image'] = asset('storage/' . $path);
        }

        Staff::create($data);

        return redirect()
            ->route('admin.staff.index')
            ->with('success', 'Staff member created successfully.');
    }

    public function show(Staff $staff): Response
    {
        return Inertia::render('Admin/Staff/Show', [
            'staff' => $staff,
        ]);
    }

    public function edit(Staff $staff): Response
    {
        return Inertia::render('Admin/Staff/Edit', [
            'staff' => $staff,
        ]);
    }

    public function update(Request $request, Staff $staff): RedirectResponse
    {
        $data = app(StaffRequest::class)->validated();

        // Handle image upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('staff', 'public');
            $data['image'] = asset('storage/' . $path);
        }

        $staff->update($data);

        return redirect()
            ->route('admin.staff.index')
            ->with('success', 'Staff member updated successfully.');
    }

    public function destroy(Staff $staff): RedirectResponse
    {
        $staff->delete();

        return redirect()
            ->route('admin.staff.index')
            ->with('success', 'Staff member deleted successfully.');
    }
}
