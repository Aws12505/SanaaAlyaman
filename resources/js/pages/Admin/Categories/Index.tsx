// resources/js/pages/Admin/Categories/Index.tsx

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
    Package
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
    image?: string;
    sort_order: number;
    is_active: boolean;
    dishes_count: number;
    created_at: string;
    updated_at: string;
}

interface CategoryIndexProps {
    categories: {
        data: Category[];
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
    { title: 'Categories', href: '/admin/categories' },
];

export default function CategoriesIndex({ categories, filters, stats }: CategoryIndexProps) {
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
        
        router.get('/admin/categories', searchParams);
    };

    const handleDelete = (categoryId: number) => {
        if (confirm('Are you sure you want to delete this category?')) {
            router.delete(`/admin/categories/${categoryId}`, {
                onSuccess: () => {
                    // Handle success
                }
            });
        }
    };

    // Safe pagination check
    const showPagination = categories?.meta?.last_page > 1;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Flash Messages */}
                {flash?.success && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                        {flash.success}
                    </div>
                )}
                {flash?.error && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                        {flash.error}
                    </div>
                )}

                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
                        <p className="text-muted-foreground">Manage your menu categories</p>
                    </div>
                    <Button asChild>
                        <Link href="/admin/categories/create">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Category
                        </Link>
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Categories</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active</CardTitle>
                            <Package className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Inactive</CardTitle>
                            <Package className="h-4 w-4 text-red-600" />
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
                                    placeholder="Search categories..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full"
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

                {/* Categories Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categories.data.map((category) => (
                        <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video relative bg-muted">
                                {category.image ? (
                                    <img 
                                        src={category.image} 
                                        alt={category.name}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-muted-foreground">
                                        <Package className="h-12 w-12" />
                                    </div>
                                )}
                                <div className="absolute top-2 right-2 flex gap-2">
                                    <Badge variant={category.is_active ? 'default' : 'secondary'}>
                                        {category.is_active ? 'Active' : 'Inactive'}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <CardTitle className="text-lg">{category.name}</CardTitle>
                                        <CardDescription className="line-clamp-2">
                                            {category.description || 'No description available'}
                                        </CardDescription>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="sm">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/admin/categories/${category.id}`}>
                                                    <Eye className="h-4 w-4 mr-2" />
                                                    View
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/admin/categories/${category.id}/edit`}>
                                                    <Edit className="h-4 w-4 mr-2" />
                                                    Edit
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem 
                                                className="text-red-600"
                                                onClick={() => handleDelete(category.id)}
                                            >
                                                <Trash2 className="h-4 w-4 mr-2" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>{category.dishes_count} dishes</span>
                                    <span>Sort: {category.sort_order}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Simple Pagination */}
                {showPagination && (
                    <div className="flex justify-center items-center gap-4">
                        {categories.links.map((link, index) => {
                            if (link.url) {
                                return (
                                    <Button
                                        key={index}
                                        variant={link.active ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => router.get(link.url!)}
                                        disabled={!link.url}
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                    </Button>
                                );
                            }
                            return (
                                <span key={index} className="px-3 py-2 text-sm text-muted-foreground">
                                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                </span>
                            );
                        })}
                    </div>
                )}

                {/* Show pagination info */}
                {categories?.meta && (
                    <div className="text-center text-sm text-muted-foreground">
                        Showing {((categories.meta.current_page - 1) * categories.meta.per_page) + 1} to{' '}
                        {Math.min(categories.meta.current_page * categories.meta.per_page, categories.meta.total)}{' '}
                        of {categories.meta.total} results
                    </div>
                )}

                {/* Empty State */}
                {categories.data.length === 0 && (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-12">
                            <Package className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No categories found</h3>
                            <p className="text-muted-foreground text-center mb-4">
                                {filters.search || filters.status 
                                    ? "Try adjusting your filters to find what you're looking for."
                                    : "Get started by adding your first category."
                                }
                            </p>
                            <Button asChild>
                                <Link href="/admin/categories/create">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add First Category
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
