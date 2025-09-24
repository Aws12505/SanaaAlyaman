<?php
// app/Http/Controllers/Admin/ContactController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Contact::query();

        // Search functionality
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('email', 'like', '%' . $request->search . '%')
                  ->orWhere('message', 'like', '%' . $request->search . '%')
                  ->orWhere('phone', 'like', '%' . $request->search . '%');
            });
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Sort functionality
        $sortField = $request->get('sort', 'created_at');
        $sortDirection = $request->get('direction', 'desc');
        $query->orderBy($sortField, $sortDirection);

        $contacts = $query->paginate(10);

        return Inertia::render('Admin/Contacts/Index', [
            'contacts' => $contacts,
            'filters' => $request->only(['search', 'status', 'sort', 'direction']),
            'stats' => [
                'total' => Contact::count(),
                'pending' => Contact::where('status', 'pending')->count(),
                'read' => Contact::where('status', 'read')->count(),
                'responded' => Contact::where('status', 'responded')->count(),
            ]
        ]);
    }

    public function show(Contact $contact): Response
    {
        // Mark as read if it's pending
        if ($contact->status === 'pending') {
            $contact->update(['status' => 'read']);
        }

        return Inertia::render('Admin/Contacts/Show', [
            'contact' => $contact,
        ]);
    }

    public function updateStatus(Request $request, Contact $contact): RedirectResponse
    {
        $request->validate([
            'status' => 'required|in:pending,read,responded',
        ]);

        $contact->update(['status' => $request->status]);

        return redirect()
            ->route('admin.contacts.index')
            ->with('success', 'Contact status updated successfully.');
    }

    public function destroy(Contact $contact): RedirectResponse
    {
        $contact->delete();

        return redirect()
            ->route('admin.contacts.index')
            ->with('success', 'Contact deleted successfully.');
    }

    public function bulkDelete(Request $request): RedirectResponse
    {
        $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'exists:contacts,id',
        ]);

        Contact::whereIn('id', $request->ids)->delete();

        return redirect()
            ->route('admin.contacts.index')
            ->with('success', count($request->ids) . ' contacts deleted successfully.');
    }
}
