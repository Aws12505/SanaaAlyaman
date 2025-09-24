<?php
// database/seeders/StaffSeeder.php

namespace Database\Seeders;

use App\Models\Staff;
use Illuminate\Database\Seeder;

class StaffSeeder extends Seeder
{
    public function run(): void
    {
        $staff = [
            [
                'name' => 'Marco Rodriguez',
                'role' => 'Executive Chef',
                'bio' => 'With over 15 years of culinary experience, Chef Marco brings passion and innovation to every dish. Trained in classical French techniques and inspired by Mediterranean flavors, he leads our kitchen with dedication to excellence and creativity.',
                'image' => 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop&face',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Isabella Chen',
                'role' => 'Sous Chef',
                'bio' => 'Isabella is our talented Sous Chef who specializes in contemporary Asian fusion cuisine. Her attention to detail and creative plating have made her an invaluable member of our culinary team.',
                'image' => 'https://images.unsplash.com/photo-1594824930330-87f3dc2e0c60?w=400&h=400&fit=crop&face',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'James Thompson',
                'role' => 'Restaurant Manager',
                'bio' => 'James ensures every guest has an exceptional dining experience. With his warm hospitality and attention to service excellence, he oversees our front-of-house operations with professionalism and care.',
                'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&face',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'Sofia Dubois',
                'role' => 'Pastry Chef',
                'bio' => 'Sofia creates our exquisite desserts with artistry and precision. Her French patisserie training and innovative approach to sweets provide the perfect finale to our dining experience.',
                'image' => 'https://images.unsplash.com/photo-1607631568010-0479aa4cd814?w=400&h=400&fit=crop&face',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'Antonio Ricci',
                'role' => 'Sommelier',
                'bio' => 'Antonio curates our wine selection and helps guests discover the perfect pairing for their meal. His extensive knowledge of wines from around the world enhances every dining experience.',
                'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face',
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'name' => 'Elena Vasquez',
                'role' => 'Head Server',
                'bio' => 'Elena leads our service team with grace and expertise. Her knowledge of our menu and wine pairings, combined with her warm personality, ensures every guest feels welcomed and well-cared for.',
                'image' => 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&face',
                'sort_order' => 6,
                'is_active' => true,
            ],
        ];

        foreach ($staff as $member) {
            Staff::create($member);
        }
    }
}
