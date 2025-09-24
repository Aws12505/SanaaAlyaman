<?php
// database/seeders/ContactSeeder.php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ContactSeeder extends Seeder
{
    public function run(): void
    {
        $contacts = [
            [
                'name' => 'Jessica Adams',
                'email' => 'jessica.adams@email.com',
                'phone' => '+1 (555) 123-4567',
                'message' => 'Hi there! I\'m planning a surprise birthday dinner for my husband next Friday evening. Could you please let me know if you have availability for 6 people around 7 PM? We\'d love to try your tasting menu. Thank you!',
                'status' => 'pending',
                'created_at' => Carbon::now()->subHours(3),
            ],
            [
                'name' => 'Thomas Mitchell',
                'email' => 'tmitchell@company.com',
                'phone' => '+1 (555) 987-6543',
                'message' => 'Good afternoon, I\'m organizing a business dinner for 12 executives next month. We\'re looking for a private dining option with a set menu. Could someone please contact me to discuss available dates and pricing? We\'re flexible with timing.',
                'status' => 'read',
                'created_at' => Carbon::now()->subDays(1),
            ],
            [
                'name' => 'Sophie Laurent',
                'email' => 'sophie.laurent@email.com',
                'message' => 'Hello! I have a severe shellfish allergy and wanted to inquire about your kitchen\'s ability to accommodate this safely. I\'ve heard wonderful things about your restaurant and would love to dine with you, but safety is my primary concern.',
                'status' => 'responded',
                'created_at' => Carbon::now()->subDays(2),
            ],
            [
                'name' => 'Carlos Rivera',
                'email' => 'crivera@email.com',
                'phone' => '+1 (555) 246-8135',
                'message' => 'Hi! My wife and I are celebrating our 25th wedding anniversary next weekend. We\'d love to make a reservation and were wondering if you offer any special anniversary packages or could help make the evening extra special for us.',
                'status' => 'pending',
                'created_at' => Carbon::now()->subDays(3),
            ],
            [
                'name' => 'Amanda Foster',
                'email' => 'amanda.foster@email.com',
                'message' => 'Dear Golden Spoon team, I\'m a food blogger with 50K followers and would love to feature your restaurant in my upcoming series on fine dining establishments. Could we discuss a potential collaboration? I can provide references from other restaurants I\'ve featured.',
                'status' => 'read',
                'created_at' => Carbon::now()->subDays(4),
            ],
            [
                'name' => 'Ryan O\'Connor',
                'email' => 'roconnor@email.com',
                'phone' => '+1 (555) 369-2580',
                'message' => 'Hello, I\'m interested in potentially hosting my daughter\'s graduation dinner at your establishment. We\'d need space for about 15 people. Do you have private dining options available, and what would be the process for booking?',
                'status' => 'responded',
                'created_at' => Carbon::now()->subDays(5),
            ],
            [
                'name' => 'Elena Rossi',
                'email' => 'elena.rossi@email.com',
                'message' => 'Good evening! I\'m visiting from Italy next month and have heard wonderful things about your restaurant from friends. Do you take reservations for international guests, and do you have any recommendations for wine pairings with your signature dishes?',
                'status' => 'pending',
                'created_at' => Carbon::now()->subDays(6),
            ],
            [
                'name' => 'Mark Stevens',
                'email' => 'mstevens@company.com',
                'phone' => '+1 (555) 147-2589',
                'message' => 'Hi, I\'m looking to book a table for this Saturday evening for 4 people. I tried calling but the line was busy. Could you please confirm availability around 8 PM? We\'re flexible with timing if needed.',
                'status' => 'read',
                'created_at' => Carbon::now()->subWeek(),
            ],
        ];

        foreach ($contacts as $contact) {
            Contact::create($contact);
        }
    }
}
