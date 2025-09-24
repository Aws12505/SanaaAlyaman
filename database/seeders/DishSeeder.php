<?php
// database/seeders/DishSeeder.php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Dish;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DishSeeder extends Seeder
{
    public function run(): void
    {
        $dishes = [
            // Appetizers
            [
                'category' => 'Appetizers',
                'name' => 'Truffle Arancini',
                'description' => 'Golden risotto balls filled with wild mushrooms and truffle oil, served with roasted garlic aioli and microgreens.',
                'ingredients' => 'Arborio rice, wild mushrooms, truffle oil, parmesan, garlic, herbs',
                'allergen_info' => 'Contains: Gluten, Dairy, Eggs',
                'price' => 16.00,
                'images' => [
                    'https://images.unsplash.com/photo-1563379091369-5b4041e483db?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&h=600&fit=crop',
                ],
                'is_signature' => true,
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 1,
            ],
            [
                'category' => 'Appetizers',
                'name' => 'Burrata Caprese',
                'description' => 'Creamy burrata cheese with heirloom tomatoes, fresh basil, aged balsamic, and extra virgin olive oil.',
                'ingredients' => 'Burrata cheese, heirloom tomatoes, fresh basil, balsamic glaze, olive oil',
                'allergen_info' => 'Contains: Dairy',
                'price' => 18.00,
                'images' => [
                    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
                ],
                'is_signature' => false,
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 2,
            ],
            [
                'category' => 'Appetizers',
                'name' => 'Pan-Seared Scallops',
                'description' => 'Fresh diver scallops with cauliflower purée, crispy pancetta, and micro herbs.',
                'ingredients' => 'Diver scallops, cauliflower, pancetta, butter, herbs',
                'allergen_info' => 'Contains: Shellfish, Dairy. Gluten-free.',
                'price' => 22.00,
                'images' => [
                    'https://images.unsplash.com/photo-1559847844-d1b74158ca6d?w=800&h=600&fit=crop',
                ],
                'is_signature' => true,
                'is_featured' => false,
                'is_available' => true,
                'sort_order' => 3,
            ],

            // Soups & Salads
            [
                'category' => 'Soups & Salads',
                'name' => 'Lobster Bisque',
                'description' => 'Rich and creamy lobster bisque with cognac, finished with fresh cream and chives.',
                'ingredients' => 'Maine lobster, cream, cognac, shallots, tomato paste, herbs',
                'allergen_info' => 'Contains: Shellfish, Dairy, Alcohol',
                'price' => 14.00,
                'images' => [
                    'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop',
                ],
                'is_signature' => true,
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 1,
            ],
            [
                'category' => 'Soups & Salads',
                'name' => 'Golden Beet Salad',
                'description' => 'Roasted golden beets with goat cheese, candied walnuts, arugula, and honey-thyme vinaigrette.',
                'ingredients' => 'Golden beets, goat cheese, walnuts, arugula, honey, thyme, olive oil',
                'allergen_info' => 'Contains: Dairy, Tree Nuts. Gluten-free.',
                'price' => 15.00,
                'images' => [
                    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
                ],
                'is_signature' => false,
                'is_featured' => false,
                'is_available' => true,
                'sort_order' => 2,
            ],

            // Main Courses
            [
                'category' => 'Main Courses',
                'name' => 'Wagyu Beef Tenderloin',
                'description' => 'Premium A5 Wagyu beef tenderloin with roasted bone marrow, seasonal vegetables, and red wine jus.',
                'ingredients' => 'A5 Wagyu beef, bone marrow, seasonal vegetables, red wine, herbs',
                'allergen_info' => 'Contains: None. Gluten-free.',
                'price' => 68.00,
                'images' => [
                    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
                ],
                'is_signature' => true,
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 1,
            ],
            [
                'category' => 'Main Courses',
                'name' => 'Herb-Crusted Rack of Lamb',
                'description' => 'New Zealand lamb rack with herb crust, ratatouille, and rosemary jus.',
                'ingredients' => 'Lamb rack, fresh herbs, breadcrumbs, eggplant, zucchini, tomatoes, rosemary',
                'allergen_info' => 'Contains: Gluten',
                'price' => 42.00,
                'images' => [
                    'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop',
                ],
                'is_signature' => true,
                'is_featured' => false,
                'is_available' => true,
                'sort_order' => 2,
            ],
            [
                'category' => 'Main Courses',
                'name' => 'Duck Breast à l\'Orange',
                'description' => 'Roasted duck breast with orange glaze, confit leg croquette, and seasonal root vegetables.',
                'ingredients' => 'Duck breast, duck leg, orange, root vegetables, herbs, cognac',
                'allergen_info' => 'Contains: Gluten, Eggs, Alcohol',
                'price' => 38.00,
                'images' => [
                    'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=800&h=600&fit=crop',
                ],
                'is_signature' => false,
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 3,
            ],

            // Seafood Specialties
            [
                'category' => 'Seafood Specialties',
                'name' => 'Chilean Sea Bass',
                'description' => 'Miso-glazed Chilean sea bass with forbidden rice, baby bok choy, and ginger-soy reduction.',
                'ingredients' => 'Chilean sea bass, miso paste, forbidden rice, bok choy, ginger, soy sauce',
                'allergen_info' => 'Contains: Fish, Soy. Gluten-free.',
                'price' => 46.00,
                'images' => [
                    'https://images.unsplash.com/photo-1559847844-d1b74158ca6d?w=800&h=600&fit=crop',
                ],
                'is_signature' => true,
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 1,
            ],
            [
                'category' => 'Seafood Specialties',
                'name' => 'Maine Lobster Thermidor',
                'description' => 'Classic lobster thermidor with cognac cream sauce, served in the shell with herb butter.',
                'ingredients' => 'Maine lobster, cream, cognac, gruyere cheese, herbs, butter',
                'allergen_info' => 'Contains: Shellfish, Dairy, Alcohol',
                'price' => 52.00,
                'images' => [
                    'https://images.unsplash.com/photo-1625937329935-982506beb3f9?w=800&h=600&fit=crop',
                ],
                'is_signature' => true,
                'is_featured' => false,
                'is_available' => true,
                'sort_order' => 2,
            ],

            // Pasta & Risotto
            [
                'category' => 'Pasta & Risotto',
                'name' => 'Truffle Risotto',
                'description' => 'Creamy Arborio rice with black truffle shavings, parmesan, and white wine.',
                'ingredients' => 'Arborio rice, black truffle, parmesan, white wine, onion, stock',
                'allergen_info' => 'Contains: Dairy, Alcohol. Gluten-free.',
                'price' => 32.00,
                'images' => [
                    'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop',
                ],
                'is_signature' => true,
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 1,
            ],
            [
                'category' => 'Pasta & Risotto',
                'name' => 'Handmade Pappardelle',
                'description' => 'Fresh pappardelle with wild boar ragu, aged parmesan, and fresh herbs.',
                'ingredients' => 'Fresh pasta, wild boar, tomatoes, red wine, parmesan, herbs',
                'allergen_info' => 'Contains: Gluten, Eggs, Dairy, Alcohol',
                'price' => 28.00,
                'images' => [
                    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
                ],
                'is_signature' => false,
                'is_featured' => false,
                'is_available' => true,
                'sort_order' => 2,
            ],

            // Vegetarian Delights
            [
                'category' => 'Vegetarian Delights',
                'name' => 'Roasted Vegetable Wellington',
                'description' => 'Seasonal vegetables wrapped in flaky pastry with mushroom duxelles and red wine jus.',
                'ingredients' => 'Seasonal vegetables, puff pastry, mushrooms, herbs, red wine',
                'allergen_info' => 'Contains: Gluten. Vegan option available.',
                'price' => 26.00,
                'images' => [
                    'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop',
                ],
                'is_signature' => false,
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 1,
            ],

            // Desserts
            [
                'category' => 'Desserts',
                'name' => 'Chocolate Soufflé',
                'description' => 'Warm dark chocolate soufflé with vanilla bean ice cream and berry coulis.',
                'ingredients' => 'Dark chocolate, eggs, sugar, vanilla, mixed berries',
                'allergen_info' => 'Contains: Eggs, Dairy. Allow 20 minutes preparation.',
                'price' => 14.00,
                'images' => [
                    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop',
                ],
                'is_signature' => true,
                'is_featured' => true,
                'is_available' => true,
                'sort_order' => 1,
            ],
            [
                'category' => 'Desserts',
                'name' => 'Crème Brûlée Trio',
                'description' => 'Classic vanilla, lavender honey, and seasonal fruit crème brûlée with shortbread cookies.',
                'ingredients' => 'Heavy cream, vanilla, eggs, sugar, lavender, seasonal fruit',
                'allergen_info' => 'Contains: Dairy, Eggs, Gluten',
                'price' => 12.00,
                'images' => [
                    'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=800&h=600&fit=crop',
                ],
                'is_signature' => false,
                'is_featured' => false,
                'is_available' => true,
                'sort_order' => 2,
            ],
        ];

        foreach ($dishes as $dishData) {
            $category = Category::where('name', $dishData['category'])->first();
            if ($category) {
                $dish = array_merge($dishData, [
                    'category_id' => $category->id,
                    'slug' => Str::slug($dishData['name']),
                ]);
                unset($dish['category']);
                Dish::create($dish);
            }
        }
    }
}
