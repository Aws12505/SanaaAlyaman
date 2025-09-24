<?php
// database/seeders/CategorySeeder.php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Appetizers',
                'description' => 'Start your meal with our delicious appetizers, crafted to awaken your palate with fresh ingredients and bold flavors.',
                'image' => 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&h=600&fit=crop',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Soups & Salads',
                'description' => 'Fresh, healthy options featuring seasonal ingredients, house-made dressings, and hearty soups perfect for any season.',
                'image' => 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'Main Courses',
                'description' => 'Our signature entrees showcase the finest ingredients, expertly prepared and beautifully presented.',
                'image' => 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'Seafood Specialties',
                'description' => 'Fresh catch of the day and premium seafood, prepared with Mediterranean flair and seasonal accompaniments.',
                'image' => 'https://images.unsplash.com/photo-1559847844-d1b74158ca6d?w=800&h=600&fit=crop',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'Pasta & Risotto',
                'description' => 'House-made pasta and creamy risottos, featuring traditional recipes with modern twists and premium ingredients.',
                'image' => 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop',
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'name' => 'Vegetarian Delights',
                'description' => 'Plant-based creations that celebrate vegetables, grains, and legumes in innovative and flavorful combinations.',
                'image' => 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop',
                'sort_order' => 6,
                'is_active' => true,
            ],
            [
                'name' => 'Desserts',
                'description' => 'Sweet endings to your dining experience, featuring house-made pastries, artisanal ice creams, and seasonal fruits.',
                'image' => 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop',
                'sort_order' => 7,
                'is_active' => true,
            ],
            [
                'name' => 'Beverages',
                'description' => 'Carefully curated selection of wines, craft cocktails, artisanal coffees, and refreshing non-alcoholic options.',
                'image' => 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop',
                'sort_order' => 8,
                'is_active' => true,
            ],
        ];

        foreach ($categories as $category) {
            $category['slug'] = Str::slug($category['name']);
            Category::create($category);
        }
    }
}
