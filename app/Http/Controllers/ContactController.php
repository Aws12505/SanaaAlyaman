<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;

class ContactController extends Controller
{
    public function store(ContactRequest $request): RedirectResponse
    {
        Contact::create($request->validated());

        return back()->with('success', 'Thank you for your message! We\'ll get back to you soon.');
    }
}
