<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Dish;
use App\Models\Staff;
use App\Models\Testimonial;
use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('Home', [
            'featuredCategories' => Category::active()
                ->ordered()
                ->take(4)
                ->get(),
            'signatureDishes' => Dish::signature()
                ->available()
                ->with('category')
                ->ordered()
                ->take(2)
                ->get(),
        ]);
    }

    public function menu(): Response
    {
        return Inertia::render('Menu', [
            'categories' => Category::active()
                ->ordered()
                ->with(['dishes' => function ($query) {
                    $query->available()->ordered();
                }])
                ->get(),
        ]);
    }

    public function about(): Response
    {
        return Inertia::render('About', [
            'staff' => Staff::active()
                ->ordered()
                ->get(),
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('Contact', [
            'testimonials' => Testimonial::approved()
                ->latest()
                ->take(5)
                ->get(),
        ]);
    }

    public function dishDetail(string $slug): Response
    {
        $dish = Dish::where('slug', $slug)
            ->with('category')
            ->available()
            ->firstOrFail();

        return Inertia::render('DishDetail', [
            'dish' => $dish,
        ]);
    }

    public function privacy(): Response
    {
        return Inertia::render('Privacy');
    }

    public function terms(): Response
    {
        return Inertia::render('Terms');
    }
}
