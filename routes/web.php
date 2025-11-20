<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

// English landing (default)
Route::get('/', function () {
    App::setLocale('en');

    return Inertia::render('UnderConstructionMinimal', [
        'locale' => 'en',
    ]);
})->name('under-construction.en');

// Arabic landing
Route::get('/ar', function () {
    App::setLocale('ar');

    return Inertia::render('UnderConstructionMinimalAr', [
        'locale' => 'ar',
    ]);
})->name('under-construction.ar');

// Optional: redirect all other non-admin routes to EN version
Route::fallback(function () {
    return redirect()->route('under-construction.en');
});


// If you later re-enable the full site, put those routes BELOW and remove the fallback,
// or adjust as needed. For now they're commented out to keep only the under-construction pages.

/*

use App\Http\Controllers\{PagesController, ContactController};
use App\Http\Controllers\Admin\CategoryController as AdminCategoryController;
use App\Http\Controllers\Admin\ContactController as AdminContactController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DishController as AdminDishController;
use App\Http\Controllers\Admin\StaffController as AdminStaffController;
use App\Http\Controllers\Admin\TestimonialController as AdminTestimonialController;

// Public routes
Route::get('/', [PagesController::class, 'home'])->name('home');
// ...

*/
