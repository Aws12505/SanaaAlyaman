<?php
// app/Http/Controllers/Admin/TestimonialController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TestimonialRequest;
use App\Models\Testimonial;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TestimonialController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Testimonial::query();

        // Search functionality
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('email', 'like', '%' . $request->search . '%')
                  ->orWhere('message', 'like', '%' . $request->search . '%');
            });
        }

        // Filter by status
        if ($request->filled('status')) {
            switch ($request->status) {
                case 'approved':
                    $query->approved();
                    break;
                case 'pending':
                    $query->where('is_approved', false);
                    break;
                case 'featured':
                    $query->featured();
                    break;
            }
        }

        // Filter by rating
        if ($request->filled('rating')) {
            $query->where('rating', $request->rating);
        }

        // Sort functionality
        $sortField = $request->get('sort', 'created_at');
        $sortDirection = $request->get('direction', 'desc');
        $query->orderBy($sortField, $sortDirection);

        $testimonials = $query->paginate(10);

        return Inertia::render('Admin/Testimonials/Index', [
            'testimonials' => $testimonials,
            'filters' => $request->only(['search', 'status', 'rating', 'sort', 'direction']),
            'stats' => [
                'total' => Testimonial::count(),
                'approved' => Testimonial::approved()->count(),
                'pending' => Testimonial::where('is_approved', false)->count(),
                'featured' => Testimonial::featured()->count(),
                'average_rating' => round(Testimonial::approved()->avg('rating'), 1),
            ]
        ]);
    }

    public function store(TestimonialRequest $request): RedirectResponse
    {
        $data = $request->validated();

        // Handle avatar upload
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('testimonials', 'public');
            $data['avatar'] = asset('storage/' . $path);
        }

        Testimonial::create($data);

        return redirect()
            ->route('admin.testimonials.index')
            ->with('success', 'Testimonial created successfully.');
    }

    public function show(Testimonial $testimonial): Response
    {
        return Inertia::render('Admin/Testimonials/Show', [
            'testimonial' => $testimonial,
        ]);
    }

    public function update(TestimonialRequest $request, Testimonial $testimonial): RedirectResponse
    {
        $data = $request->validated();

        // Handle avatar upload
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('testimonials', 'public');
            $data['avatar'] = asset('storage/' . $path);
        }

        $testimonial->update($data);

        return redirect()
            ->route('admin.testimonials.index')
            ->with('success', 'Testimonial updated successfully.');
    }

    public function destroy(Testimonial $testimonial): RedirectResponse
    {
        $testimonial->delete();

        return redirect()
            ->route('admin.testimonials.index')
            ->with('success', 'Testimonial deleted successfully.');
    }

    public function approve(Testimonial $testimonial): RedirectResponse
    {
        $testimonial->update(['is_approved' => !$testimonial->is_approved]);
        
        $status = $testimonial->is_approved ? 'approved' : 'unapproved';

        return redirect()
            ->route('admin.testimonials.index')
            ->with('success', "Testimonial {$status} successfully.");
    }

    public function toggleFeatured(Testimonial $testimonial): RedirectResponse
    {
        $testimonial->update(['is_featured' => !$testimonial->is_featured]);
        
        $status = $testimonial->is_featured ? 'featured' : 'unfeatured';

        return redirect()
            ->route('admin.testimonials.index')
            ->with('success', "Testimonial {$status} successfully.");
    }
}
