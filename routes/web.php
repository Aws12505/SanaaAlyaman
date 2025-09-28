<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\{PagesController, ContactController};
use App\Http\Controllers\Admin\CategoryController as AdminCategoryController;
use App\Http\Controllers\Admin\ContactController as AdminContactController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DishController as AdminDishController;
use App\Http\Controllers\Admin\StaffController as AdminStaffController;
use App\Http\Controllers\Admin\TestimonialController as AdminTestimonialController;

// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';

Route::get('/', function () {
    return Inertia::render('UnderConstructionMinimal');
})->name('under-construction');

// Optional: Redirect all other routes to under construction
Route::fallback(function () {
    return Inertia::render('UnderConstructionMinimal');
});

Route::get('{any}', function () {
    return Inertia::render('UnderConstructionMinimal');
})->where('any', '^(?!admin).*$');



// // Public routes
// Route::get('/', [PagesController::class, 'home'])->name('home');
// Route::get('/menu', [PagesController::class, 'menu'])->name('menu');
// Route::get('/about', [PagesController::class, 'about'])->name('about');
// Route::get('/contact', [PagesController::class, 'contact'])->name('contact');
// Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
// Route::get('/dish/{slug}', [PagesController::class, 'dishDetail'])->name('dish.detail');
// Route::get('/privacy', [PagesController::class, 'privacy'])->name('privacy');
// Route::get('/terms', [PagesController::class, 'terms'])->name('terms');

// // Admin routes (you can add middleware for authentication/authorization)
// Route::prefix('admin')->name('admin.')->middleware(['auth'])->group(function () {
//     // Dashboard
//     Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    
//     // Categories
//     Route::resource('categories', AdminCategoryController::class);
//     Route::post('categories/update-order', [AdminCategoryController::class, 'updateOrder'])
//         ->name('categories.update-order');
    
//     // Dishes
//     Route::resource('dishes', AdminDishController::class);
//     Route::patch('dishes/{dish}/toggle-status', [AdminDishController::class, 'toggleStatus'])
//         ->name('dishes.toggle-status');
    
//     // Staff
//     Route::resource('staff', AdminStaffController::class);
    
//     // Testimonials
//     Route::resource('testimonials', AdminTestimonialController::class)
//         ->except(['create', 'edit']); // Since these are usually submitted via contact form
//     Route::patch('testimonials/{testimonial}/approve', [AdminTestimonialController::class, 'approve'])
//         ->name('testimonials.approve');
//     Route::patch('testimonials/{testimonial}/toggle-featured', [AdminTestimonialController::class, 'toggleFeatured'])
//         ->name('testimonials.toggle-featured');
    
//     // Contacts
//     Route::resource('contacts', AdminContactController::class)
//         ->only(['index', 'show', 'destroy']);
//     Route::patch('contacts/{contact}/status', [AdminContactController::class, 'updateStatus'])
//         ->name('contacts.update-status');
//     Route::delete('contacts/bulk-delete', [AdminContactController::class, 'bulkDelete'])
//         ->name('contacts.bulk-delete');
// });
