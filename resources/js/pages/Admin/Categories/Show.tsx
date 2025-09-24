// resources/js/pages/Admin/Categories/Show.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { 
    ArrowLeft, 
    Edit, 
    Trash2, 
    Package,
    ChefHat,
    Calendar,
    Eye
} from 'lucide-react';
import { Label } from '@/components/ui/label';

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

interface Dish {
    id: number;
    name: string;
    slug: string;
    price: number;
    is_available: boolean;
    created_at: string;
}

interface CategoryShowProps {
    category: Category;
    recentDishes: Dish[];
}

export default function CategoryShow({ category, recentDishes }: CategoryShowProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/admin' },
        { title: 'Categories', href: '/admin/categories' },
        { title: category.name, href: `/admin/categories/${category.id}` },
    ];

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this category? This action cannot be undone.')) {
            router.delete(`/admin/categories/${category.id}`, {
                onSuccess: () => {
                    router.visit('/admin/categories');
                }
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={category.name} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/admin/categories">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Categories
                            </Link>
                        </Button>
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
                                <Badge variant={category.is_active ? 'default' : 'secondary'}>
                                    {category.is_active ? 'Active' : 'Inactive'}
                                </Badge>
                            </div>
                            <p className="text-muted-foreground">Category details and management</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href={`/admin/categories/${category.id}/edit`}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Link>
                        </Button>
                        <Button variant="destructive" onClick={handleDelete}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </Button>
                    </div>
                </div>

                {/* Category Details */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Category Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Name</Label>
                                            <p className="text-lg font-semibold">{category.name}</p>
                                        </div>
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Slug</Label>
                                            <p className="text-lg font-mono bg-muted px-2 py-1 rounded">
                                                {category.slug}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {category.description && (
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Description</Label>
                                            <p className="text-base mt-1">{category.description}</p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Sort Order</Label>
                                            <p className="text-lg font-semibold">{category.sort_order}</p>
                                        </div>
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                                            <div className="pt-1">
                                                <Badge variant={category.is_active ? 'default' : 'secondary'}>
                                                    {category.is_active ? 'Active' : 'Inactive'}
                                                </Badge>
                                            </div>
                                        </div>
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Total Dishes</Label>
                                            <p className="text-lg font-semibold">{category.dishes_count}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Created</Label>
                                            <p className="text-sm">
                                                {new Date(category.created_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Last Updated</Label>
                                            <p className="text-sm">
                                                {new Date(category.updated_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Dishes */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle>Recent Dishes</CardTitle>
                                        <CardDescription>Latest dishes in this category</CardDescription>
                                    </div>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={`/admin/dishes?category_id=${category.id}`}>
                                            <Eye className="h-4 w-4 mr-2" />
                                            View All
                                        </Link>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {recentDishes.length > 0 ? (
                                    <div className="space-y-3">
                                        {recentDishes.map((dish) => (
                                            <div key={dish.id} className="flex items-center justify-between p-3 border rounded-lg">
                                                <div>
                                                    <h4 className="font-semibold">{dish.name}</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        ${dish.price} • Added {new Date(dish.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant={dish.is_available ? 'default' : 'secondary'}>
                                                        {dish.is_available ? 'Available' : 'Unavailable'}
                                                    </Badge>
                                                    <Button variant="ghost" size="sm" asChild>
                                                        <Link href={`/admin/dishes/${dish.id}`}>
                                                            <Eye className="h-3 w-3" />
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-muted-foreground">
                                        <ChefHat className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                        <p>No dishes found in this category</p>
                                        <Button className="mt-4" asChild>
                                            <Link href="/admin/dishes/create">Add First Dish</Link>
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Category Image */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Category Image</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {category.image ? (
                                    <div className="space-y-4">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full rounded-lg object-cover aspect-video"
                                        />
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <Link href={`/admin/categories/${category.id}/edit`}>
                                                <Edit className="h-4 w-4 mr-2" />
                                                Change Image
                                            </Link>
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                        <div className="text-center">
                                            <Package className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">No image uploaded</p>
                                            <Button variant="outline" size="sm" className="mt-2" asChild>
                                                <Link href={`/admin/categories/${category.id}/edit`}>
                                                    Add Image
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Quick Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Stats</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Total Dishes</span>
                                        <span className="font-semibold">{category.dishes_count}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Sort Position</span>
                                        <span className="font-semibold">#{category.sort_order}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Status</span>
                                        <Badge variant={category.is_active ? 'default' : 'secondary'} className="text-xs">
                                            {category.is_active ? 'Active' : 'Inactive'}
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Button className="w-full" asChild>
                                        <Link href={`/admin/dishes/create?category_id=${category.id}`}>
                                            <ChefHat className="h-4 w-4 mr-2" />
                                            Add Dish
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href={`/admin/categories/${category.id}/edit`}>
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit Category
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href={`/admin/dishes?category_id=${category.id}`}>
                                            <Eye className="h-4 w-4 mr-2" />
                                            View All Dishes
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
