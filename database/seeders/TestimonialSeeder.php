<?php
// database/seeders/TestimonialSeeder.php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        $testimonials = [
            [
                'name' => 'Sarah Johnson',
                'email' => 'sarah.johnson@email.com',
                'message' => 'Absolutely incredible dining experience! The Wagyu beef was cooked to perfection and the service was impeccable. Chef Marco truly knows how to create magic in the kitchen. This is definitely our new favorite restaurant for special occasions.',
                'avatar' => 'https://images.unsplash.com/photo-1494790108755-2616b612f42b?w=150&h=150&fit=crop&face',
                'rating' => 5,
                'likes' => 23,
                'comments' => 4,
                'is_approved' => true,
                'is_featured' => true,
                'created_at' => Carbon::now()->subDays(2),
            ],
            [
                'name' => 'Michael Chen',
                'email' => 'mchen@example.com',
                'message' => 'The truffle risotto was absolutely divine! Every bite was a perfect balance of flavors. The ambiance is elegant yet cozy, and our server Elena was knowledgeable and attentive throughout the evening.',
                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&face',
                'rating' => 5,
                'likes' => 18,
                'comments' => 2,
                'is_approved' => true,
                'is_featured' => true,
                'created_at' => Carbon::now()->subDays(5),
            ],
            [
                'name' => 'Emma Rodriguez',
                'email' => 'emma.r@email.com',
                'message' => 'Celebrated our anniversary here and it was perfect! The lobster thermidor was exceptional, and Sofia\'s chocolate soufflé was the ideal ending to our meal. Thank you for making our evening so special.',
                'avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&face',
                'rating' => 5,
                'likes' => 31,
                'comments' => 7,
                'is_approved' => true,
                'is_featured' => true,
                'created_at' => Carbon::now()->subDays(7),
            ],
            [
                'name' => 'David Thompson',
                'email' => 'dthompson@company.com',
                'message' => 'Outstanding food and service! The Chilean sea bass was cooked perfectly and the presentation was artistic. Antonio recommended the perfect wine pairing that elevated the entire meal.',
                'avatar' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&face',
                'rating' => 5,
                'likes' => 15,
                'comments' => 3,
                'is_approved' => true,
                'is_featured' => false,
                'created_at' => Carbon::now()->subDays(10),
            ],
            [
                'name' => 'Lisa Park',
                'email' => 'lisa.park@email.com',
                'message' => 'The vegetarian Wellington was surprisingly delicious! As someone who doesn\'t usually enjoy vegetarian dishes, I was blown away by the flavors and creativity. The Golden Spoon truly caters to all dietary preferences.',
                'avatar' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&face',
                'rating' => 4,
                'likes' => 12,
                'comments' => 1,
                'is_approved' => true,
                'is_featured' => false,
                'created_at' => Carbon::now()->subDays(12),
            ],
            [
                'name' => 'Robert Martinez',
                'email' => 'rmartinez@email.com',
                'message' => 'Exceptional dining experience from start to finish. The pan-seared scallops were perfectly cooked and the service was attentive without being intrusive. Will definitely be returning soon!',
                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&face',
                'rating' => 5,
                'likes' => 19,
                'comments' => 2,
                'is_approved' => true,
                'is_featured' => true,
                'created_at' => Carbon::now()->subDays(14),
            ],
            [
                'name' => 'Jennifer Kim',
                'email' => 'jkim@example.com',
                'message' => 'The lobster bisque was rich and flavorful, and the duck breast was cooked to perfection. The atmosphere is elegant and romantic - perfect for our date night!',
                'avatar' => 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&face',
                'rating' => 4,
                'likes' => 8,
                'comments' => 0,
                'is_approved' => true,
                'is_featured' => false,
                'created_at' => Carbon::now()->subDays(16),
            ],
            [
                'name' => 'Alex Wilson',
                'email' => 'alex.wilson@email.com',
                'message' => 'Fantastic food and impeccable service! The herb-crusted lamb was tender and flavorful. James, our server, made excellent recommendations. This place sets the standard for fine dining.',
                'rating' => 5,
                'likes' => 14,
                'comments' => 1,
                'is_approved' => true,
                'is_featured' => false,
                'created_at' => Carbon::now()->subDays(18),
            ],
            [
                'name' => 'Maria Gonzalez',
                'email' => 'maria.g@email.com',
                'message' => 'The truffle arancini appetizer was absolutely incredible! Each bite was bursting with flavor. The presentation was beautiful and the taste even better. Highly recommended!',
                'avatar' => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&face',
                'rating' => 5,
                'likes' => 22,
                'comments' => 3,
                'is_approved' => true,
                'is_featured' => true,
                'created_at' => Carbon::now()->subDays(20),
            ],
            [
                'name' => 'Kevin Brown',
                'email' => 'kbrown@company.com',
                'message' => 'Good food overall, though I felt the portions could have been slightly larger for the price point. The service was excellent and the wine selection impressive.',
                'avatar' => 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&face',
                'rating' => 4,
                'likes' => 6,
                'comments' => 0,
                'is_approved' => false,
                'is_featured' => false,
                'created_at' => Carbon::now()->subDays(22),
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}
