// resources/js/pages/Admin/Staff/Index.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { 
    Plus, 
    Search, 
    Edit, 
    Trash2, 
    Eye,
    MoreHorizontal,
    Users,
    UserCheck,
    UserX
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Staff {
    id: number;
    name: string;
    role: string;
    bio?: string;
    image?: string;
    sort_order: number;
    is_active: boolean;
    created_at: string;
}

interface StaffIndexProps {
    staff: {
        data: Staff[];
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
        active: number;
        inactive: number;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin' },
    { title: 'Staff', href: '/admin/staff' },
];

export default function StaffIndex({ staff, filters, stats }: StaffIndexProps) {
    const { flash } = usePage().props as any;
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [statusFilter, setStatusFilter] = useState<string | undefined>(
        filters.status || undefined
    );

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        
        const searchParams: Record<string, string> = {};
        
        if (searchTerm) searchParams.search = searchTerm;
        if (statusFilter) searchParams.status = statusFilter;
        
        router.get('/admin/staff', searchParams);
    };

    const handleDelete = (staffId: number) => {
        if (confirm('Are you sure you want to delete this staff member?')) {
            router.delete(`/admin/staff/${staffId}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Staff" />
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
                        <h1 className="text-3xl font-bold tracking-tight">Staff Members</h1>
                        <p className="text-muted-foreground">Manage your team members</p>
                    </div>
                    <Button asChild>
                        <Link href="/admin/staff/create">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Staff Member
                        </Link>
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active</CardTitle>
                            <UserCheck className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Inactive</CardTitle>
                            <UserX className="h-4 w-4 text-red-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-600">{stats.inactive}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <Card>
                    <CardHeader>
                        <CardTitle>Filters</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSearch} className="flex gap-4">
                            <div className="flex-1">
                                <Input
                                    placeholder="Search staff members..."
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
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactive">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button type="submit">
                                <Search className="h-4 w-4 mr-2" />
                                Search
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Staff Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {staff.data.map((member) => (
                        <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-square relative bg-muted">
                                {member.image ? (
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-muted-foreground">
                                        <Users className="h-16 w-16" />
                                    </div>
                                )}
                                <div className="absolute top-2 right-2 flex gap-2">
                                    <Badge variant={member.is_active ? 'default' : 'secondary'}>
                                        {member.is_active ? 'Active' : 'Inactive'}
                                    </Badge>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="secondary" size="sm">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/admin/staff/${member.id}`}>
                                                    <Eye className="h-4 w-4 mr-2" />
                                                    View
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/admin/staff/${member.id}/edit`}>
                                                    <Edit className="h-4 w-4 mr-2" />
                                                    Edit
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem 
                                                className="text-red-600"
                                                onClick={() => handleDelete(member.id)}
                                            >
                                                <Trash2 className="h-4 w-4 mr-2" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg">{member.name}</CardTitle>
                                <CardDescription className="text-base font-medium text-blue-600">
                                    {member.role}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {member.bio && (
                                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                        {member.bio}
                                    </p>
                                )}
                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>Sort: {member.sort_order}</span>
                                    <span>{new Date(member.created_at).toLocaleDateString()}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Empty State */}
                {staff.data.length === 0 && (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-12">
                            <Users className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No staff members found</h3>
                            <p className="text-muted-foreground text-center mb-4">
                                {filters.search || filters.status 
                                    ? "Try adjusting your filters to find what you're looking for."
                                    : "Get started by adding your first team member."
                                }
                            </p>
                            <Button asChild>
                                <Link href="/admin/staff/create">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add First Staff Member
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
