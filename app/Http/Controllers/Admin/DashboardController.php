<?php
// app/Http/Controllers/Admin/DashboardController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Contact;
use App\Models\Dish;
use App\Models\Staff;
use App\Models\Testimonial;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $stats = [
            'dishes' => [
                'total' => Dish::count(),
                'available' => Dish::available()->count(),
                'signature' => Dish::signature()->count(),
                'featured' => Dish::featured()->count(),
            ],
            'categories' => [
                'total' => Category::count(),
                'active' => Category::active()->count(),
            ],
            'staff' => [
                'total' => Staff::count(),
                'active' => Staff::active()->count(),
            ],
            'testimonials' => [
                'total' => Testimonial::count(),
                'approved' => Testimonial::approved()->count(),
                'pending' => Testimonial::where('is_approved', false)->count(),
                'average_rating' => round(Testimonial::approved()->avg('rating'), 1),
            ],
            'contacts' => [
                'total' => Contact::count(),
                'pending' => Contact::pending()->count(),
                'recent' => Contact::latest()->limit(5)->get(),
            ],
        ];

        $recentActivity = [
            'recent_dishes' => Dish::with('category')->latest()->limit(5)->get(),
            'recent_testimonials' => Testimonial::latest()->limit(5)->get(),
            'recent_contacts' => Contact::latest()->limit(5)->get(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentActivity' => $recentActivity,
        ]);
    }
}
