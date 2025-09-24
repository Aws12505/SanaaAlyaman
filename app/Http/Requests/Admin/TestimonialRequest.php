<?php
// app/Http/Requests/Admin/TestimonialRequest.php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class TestimonialRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'message' => 'required|string|max:1000',
            'avatar' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:1024',
            'rating' => 'required|integer|min:1|max:5',
            'is_approved' => 'boolean',
            'is_featured' => 'boolean',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Customer name is required.',
            'message.required' => 'Testimonial message is required.',
            'rating.required' => 'Rating is required.',
            'rating.between' => 'Rating must be between 1 and 5.',
            'avatar.image' => 'The avatar must be a valid image file.',
            'avatar.max' => 'The avatar must not be larger than 1MB.',
        ];
    }
}
