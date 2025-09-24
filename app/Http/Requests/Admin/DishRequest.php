<?php
// app/Http/Requests/Admin/DishRequest.php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DishRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $dishId = $this->route('dish')?->id;

        return [
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('dishes')->ignore($dishId),
            ],
            'description' => 'required|string|max:1000',
            'ingredients' => 'nullable|string|max:1000',
            'allergen_info' => 'nullable|string|max:500',
            'price' => 'required|numeric|min:0|max:9999.99',
            'images' => 'nullable|array|max:5',
            'images.*' => 'image|mimes:jpg,jpeg,png,webp|max:2048',
            'category_id' => 'required|exists:categories,id',
            'is_signature' => 'boolean',
            'is_featured' => 'boolean',
            'is_available' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Dish name is required.',
            'name.unique' => 'A dish with this name already exists.',
            'price.required' => 'Price is required.',
            'price.numeric' => 'Price must be a valid number.',
            'category_id.required' => 'Please select a category.',
            'category_id.exists' => 'Selected category does not exist.',
            'images.max' => 'You can upload maximum 5 images.',
            'images.*.image' => 'All uploaded files must be images.',
            'images.*.max' => 'Each image must not be larger than 2MB.',
        ];
    }
}
