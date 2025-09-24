// resources/js/pages/Admin/Dishes/Index.tsx

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
    ChefHat,
    Star,
    DollarSign,
    Package
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Dish {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    images: string[];
    main_image?: string;
    category: {
        id: number;
        name: string;
    };
    is_signature: boolean;
    is_featured: boolean;
    is_available: boolean;
    sort_order: number;
    created_at: string;
}

interface Category {
    id: number;
    name: string;
}

interface DishIndexProps {
    dishes: {
        data: Dish[];
        links: Array<{ url: string | null; label: string; active: boolean }>;
        meta: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
    };
    categories: Category[];
    filters: {
        search?: string;
        category_id?: string;
        status?: string;
        sort?: string;
        direction?: string;
    };
    stats: {
        total: number;
        available: number;
        signature: number;
        featured: number;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin' },
    { title: 'Dishes', href: '/admin/dishes' },
];

export default function DishesIndex({ dishes, categories, filters, stats }: DishIndexProps) {
    const { flash } = usePage().props as any;
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [categoryFilter, setCategoryFilter] = useState<string | undefined>(
        filters.category_id || undefined
    );
    const [statusFilter, setStatusFilter] = useState<string | undefined>(
        filters.status || undefined
    );

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        
        const searchParams: Record<string, string> = {};
        
        if (searchTerm) searchParams.search = searchTerm;
        if (categoryFilter) searchParams.category_id = categoryFilter;
        if (statusFilter) searchParams.status = statusFilter;
        
        router.get('/admin/dishes', searchParams);
    };

    const handleDelete = (dishId: number) => {
        if (confirm('Are you sure you want to delete this dish?')) {
            router.delete(`/admin/dishes/${dishId}`);
        }
    };

    const toggleStatus = (dishId: number, field: string) => {
        router.patch(`/admin/dishes/${dishId}/toggle-status`, { field });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dishes" />
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
                        <h1 className="text-3xl font-bold tracking-tight">Dishes</h1>
                        <p className="text-muted-foreground">Manage your restaurant menu items</p>
                    </div>
                    <Button asChild>
                        <Link href="/admin/dishes/create">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Dish
                        </Link>
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Dishes</CardTitle>
                            <ChefHat className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Available</CardTitle>
                            <Package className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{stats.available}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Signature</CardTitle>
                            <Star className="h-4 w-4 text-yellow-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-600">{stats.signature}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Featured</CardTitle>
                            <Star className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">{stats.featured}</div>
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
                                    placeholder="Search dishes..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Select value={categoryFilter} onValueChange={(value) => 
                                setCategoryFilter(value === "all" ? undefined : value)
                            }>
                                <SelectTrigger className="w-48">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    {categories.map((category) => (
                                        <SelectItem key={category.id} value={category.id.toString()}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={statusFilter} onValueChange={(value) => 
                                setStatusFilter(value === "all" ? undefined : value)
                            }>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="All Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="available">Available</SelectItem>
                                    <SelectItem value="unavailable">Unavailable</SelectItem>
                                    <SelectItem value="signature">Signature</SelectItem>
                                    <SelectItem value="featured">Featured</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button type="submit">
                                <Search className="h-4 w-4 mr-2" />
                                Search
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Dishes Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {dishes.data.map((dish) => (
                        <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video relative bg-muted">
                                {dish.main_image ? (
                                    <img 
                                        src={dish.main_image} 
                                        alt={dish.name}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-muted-foreground">
                                        <ChefHat className="h-12 w-12" />
                                    </div>
                                )}
                                <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                                    <Badge variant={dish.is_available ? 'default' : 'secondary'} className="text-xs">
                                        {dish.is_available ? 'Available' : 'Unavailable'}
                                    </Badge>
                                    {dish.is_signature && (
                                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">
                                            Signature
                                        </Badge>
                                    )}
                                    {dish.is_featured && (
                                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                            Featured
                                        </Badge>
                                    )}
                                </div>
                                <div className="absolute top-2 right-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="secondary" size="sm">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/admin/dishes/${dish.id}`}>
                                                    <Eye className="h-4 w-4 mr-2" />
                                                    View
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/admin/dishes/${dish.id}/edit`}>
                                                    <Edit className="h-4 w-4 mr-2" />
                                                    Edit
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem 
                                                onClick={() => toggleStatus(dish.id, 'is_available')}
                                            >
                                                <Package className="h-4 w-4 mr-2" />
                                                {dish.is_available ? 'Mark Unavailable' : 'Mark Available'}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem 
                                                onClick={() => toggleStatus(dish.id, 'is_signature')}
                                            >
                                                <Star className="h-4 w-4 mr-2" />
                                                {dish.is_signature ? 'Remove Signature' : 'Make Signature'}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem 
                                                className="text-red-600"
                                                onClick={() => handleDelete(dish.id)}
                                            >
                                                <Trash2 className="h-4 w-4 mr-2" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg line-clamp-1">{dish.name}</CardTitle>
                                <CardDescription className="line-clamp-2">
                                    {dish.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <DollarSign className="h-4 w-4 text-green-600" />
                                        <span className="text-lg font-bold text-green-600">${dish.price}</span>
                                    </div>
                                    <Badge variant="outline">{dish.category.name}</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Empty State */}
                {dishes.data.length === 0 && (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-12">
                            <ChefHat className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No dishes found</h3>
                            <p className="text-muted-foreground text-center mb-4">
                                {filters.search || filters.category_id || filters.status 
                                    ? "Try adjusting your filters to find what you're looking for."
                                    : "Get started by adding your first dish to the menu."
                                }
                            </p>
                            <Button asChild>
                                <Link href="/admin/dishes/create">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Your First Dish
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
