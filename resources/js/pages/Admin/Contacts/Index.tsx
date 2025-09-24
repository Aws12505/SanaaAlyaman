// resources/js/pages/Admin/Contacts/Index.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { 
    Search, 
    Trash2, 
    Eye,
    MoreHorizontal,
    Mail,
    MailOpen,
    Clock,
    CheckCircle,
    MessageSquare,
    Phone,
    User,
    Calendar,
    Filter,
    Download,
    Archive
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Contact {
    id: number;
    name: string;
    email: string;
    phone?: string;
    message: string;
    status: 'pending' | 'read' | 'responded';
    created_at: string;
    updated_at: string;
}

interface ContactIndexProps {
    contacts: {
        data: Contact[];
        links: Array<{ url: string | null; label: string; active: boolean }>;
        meta: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
    };
    filters: {
        search?: string;
        status?: string;
        sort?: string;
        direction?: string;
    };
    stats: {
        total: number;
        pending: number;
        read: number;
        responded: number;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin' },
    { title: 'Contacts', href: '/admin/contacts' },
];

export default function ContactsIndex({ contacts, filters, stats }: ContactIndexProps) {
    const { flash } = usePage().props as any;
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [statusFilter, setStatusFilter] = useState<string | undefined>(
        filters.status || undefined
    );
    const [selectedContacts, setSelectedContacts] = useState<number[]>([]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        
        const searchParams: Record<string, string> = {};
        
        if (searchTerm) searchParams.search = searchTerm;
        if (statusFilter) searchParams.status = statusFilter;
        
        router.get('/admin/contacts', searchParams);
    };

    const handleDelete = (contactId: number) => {
        if (confirm('Are you sure you want to delete this contact message?')) {
            router.delete(`/admin/contacts/${contactId}`);
        }
    };

    const updateStatus = (contactId: number, status: string) => {
        router.patch(`/admin/contacts/${contactId}/status`, { status });
    };

    const handleSelectContact = (contactId: number, checked: boolean) => {
        if (checked) {
            setSelectedContacts([...selectedContacts, contactId]);
        } else {
            setSelectedContacts(selectedContacts.filter(id => id !== contactId));
        }
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedContacts(contacts.data.map(contact => contact.id));
        } else {
            setSelectedContacts([]);
        }
    };

    const handleBulkDelete = () => {
        if (selectedContacts.length === 0) return;
        
        if (confirm(`Are you sure you want to delete ${selectedContacts.length} contact messages?`)) {
            router.delete('/admin/contacts/bulk-delete', {
                data: { ids: selectedContacts },
                onSuccess: () => setSelectedContacts([])
            });
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'read': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'responded': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'pending': return Clock;
            case 'read': return MailOpen;
            case 'responded': return CheckCircle;
            default: return Mail;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contact Messages" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Flash Messages */}
                {flash?.success && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                        {flash.success}
                    </div>
                )}

                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Contact Messages</h1>
                        <p className="text-muted-foreground">Manage customer inquiries and messages</p>
                    </div>
                    <div className="flex gap-2">
                        {selectedContacts.length > 0 && (
                            <Button variant="destructive" onClick={handleBulkDelete}>
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete Selected ({selectedContacts.length})
                            </Button>
                        )}
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
                            <Mail className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending</CardTitle>
                            <Clock className="h-4 w-4 text-orange-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Read</CardTitle>
                            <MailOpen className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">{stats.read}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Responded</CardTitle>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{stats.responded}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Filter className="h-5 w-5" />
                            Filters
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSearch} className="flex gap-4">
                            <div className="flex-1">
                                <Input
                                    placeholder="Search messages by name, email, or content..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Select value={statusFilter} onValueChange={(value) => 
                                setStatusFilter(value === "all" ? undefined : value)
                            }>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="All Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="read">Read</SelectItem>
                                    <SelectItem value="responded">Responded</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button type="submit">
                                <Search className="h-4 w-4 mr-2" />
                                Search
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Contacts Table */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Messages</CardTitle>
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    checked={selectedContacts.length === contacts.data.length && contacts.data.length > 0}
                                    onCheckedChange={handleSelectAll}
                                />
                                <span className="text-sm text-muted-foreground">Select All</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="space-y-1">
                            {contacts.data.map((contact) => {
                                const StatusIcon = getStatusIcon(contact.status);
                                return (
                                    <div 
                                        key={contact.id} 
                                        className={`flex items-center gap-4 p-4 border-b hover:bg-muted/50 transition-colors ${
                                            contact.status === 'pending' ? 'bg-orange-50/50' : ''
                                        }`}
                                    >
                                        <Checkbox
                                            checked={selectedContacts.includes(contact.id)}
                                            onCheckedChange={(checked) => handleSelectContact(contact.id, checked as boolean)}
                                        />
                                        
                                        <div className="flex-shrink-0">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(contact.status)}`}>
                                                <StatusIcon className="w-5 h-5" />
                                            </div>
                                        </div>
                                        
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <h3 className="font-semibold text-lg">{contact.name}</h3>
                                                        <Badge className={`text-xs ${getStatusColor(contact.status)}`}>
                                                            {contact.status}
                                                        </Badge>
                                                    </div>
                                                    
                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                                        <div className="flex items-center gap-1">
                                                            <Mail className="w-3 h-3" />
                                                            {contact.email}
                                                        </div>
                                                        {contact.phone && (
                                                            <div className="flex items-center gap-1">
                                                                <Phone className="w-3 h-3" />
                                                                {contact.phone}
                                                            </div>
                                                        )}
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            {new Date(contact.created_at).toLocaleDateString()}
                                                        </div>
                                                    </div>
                                                    
                                                    <p className="text-muted-foreground line-clamp-2 text-sm">
                                                        {contact.message}
                                                    </p>
                                                </div>
                                                
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="sm" asChild>
                                                        <Link href={`/admin/contacts/${contact.id}`}>
                                                            <Eye className="h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                    
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="sm">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent>
                                                            <DropdownMenuItem asChild>
                                                                <Link href={`/admin/contacts/${contact.id}`}>
                                                                    <Eye className="h-4 w-4 mr-2" />
                                                                    View Details
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            {contact.status === 'pending' && (
                                                                <DropdownMenuItem 
                                                                    onClick={() => updateStatus(contact.id, 'read')}
                                                                >
                                                                    <MailOpen className="h-4 w-4 mr-2" />
                                                                    Mark as Read
                                                                </DropdownMenuItem>
                                                            )}
                                                            {contact.status !== 'responded' && (
                                                                <DropdownMenuItem 
                                                                    onClick={() => updateStatus(contact.id, 'responded')}
                                                                >
                                                                    <CheckCircle className="h-4 w-4 mr-2" />
                                                                    Mark as Responded
                                                                </DropdownMenuItem>
                                                            )}
                                                            <DropdownMenuItem 
                                                                className="text-red-600"
                                                                onClick={() => handleDelete(contact.id)}
                                                            >
                                                                <Trash2 className="h-4 w-4 mr-2" />
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Empty State */}
                {contacts.data.length === 0 && (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-12">
                            <Mail className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No messages found</h3>
                            <p className="text-muted-foreground text-center mb-4">
                                {filters.search || filters.status 
                                    ? "Try adjusting your filters to find what you're looking for."
                                    : "No customer messages have been received yet."
                                }
                            </p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
