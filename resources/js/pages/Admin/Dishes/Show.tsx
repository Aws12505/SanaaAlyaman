// resources/js/pages/Admin/Dishes/Show.tsx

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
    Star,
    DollarSign,
    Clock,
    Users,
    AlertTriangle,
    Eye,
    Camera
} from 'lucide-react';

interface Dish {
    id: number;
    name: string;
    slug: string;
    description: string;
    ingredients?: string;
    allergen_info?: string;
    price: number;
    images: string[];
    main_image?: string;
    category: {
        id: number;
        name: string;
        slug: string;
    };
    is_signature: boolean;
    is_featured: boolean;
    is_available: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface DishShowProps {
    dish: Dish;
}

export default function DishShow({ dish }: DishShowProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/admin' },
        { title: 'Dishes', href: '/admin/dishes' },
        { title: dish.name, href: `/admin/dishes/${dish.id}` },
    ];

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this dish? This action cannot be undone.')) {
            router.delete(`/admin/dishes/${dish.id}`, {
                onSuccess: () => {
                    router.visit('/admin/dishes');
                }
            });
        }
    };

    const toggleStatus = (field: string) => {
        router.patch(`/admin/dishes/${dish.id}/toggle-status`, { field });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={dish.name} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/admin/dishes">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Dishes
                            </Link>
                        </Button>
                        <div>
                            <div className="flex items-center gap-3 flex-wrap">
                                <h1 className="text-3xl font-bold tracking-tight">{dish.name}</h1>
                                <div className="flex gap-2">
                                    <Badge variant={dish.is_available ? 'default' : 'secondary'}>
                                        {dish.is_available ? 'Available' : 'Unavailable'}
                                    </Badge>
                                    {dish.is_signature && (
                                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                            <Star className="h-3 w-3 mr-1" />
                                            Signature
                                        </Badge>
                                    )}
                                    {dish.is_featured && (
                                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                            Featured
                                        </Badge>
                                    )}
                                </div>
                            </div>
                            <p className="text-muted-foreground">Dish details and management</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href={`/admin/dishes/${dish.id}/edit`}>
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

                {/* Content Grid */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Dish Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Name</label>
                                            <p className="text-lg font-semibold">{dish.name}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Slug</label>
                                            <p className="text-lg font-mono bg-muted px-2 py-1 rounded">
                                                {dish.slug}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">Description</label>
                                        <p className="text-base mt-1 leading-relaxed">{dish.description}</p>
                                    </div>

                                    {dish.ingredients && (
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Ingredients</label>
                                            <p className="text-base mt-1 leading-relaxed">{dish.ingredients}</p>
                                        </div>
                                    )}

                                    {dish.allergen_info && (
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                                <AlertTriangle className="h-4 w-4 text-orange-500" />
                                                Allergen Information
                                            </label>
                                            <p className="text-base mt-1 leading-relaxed bg-orange-50 p-3 rounded-lg">
                                                {dish.allergen_info}
                                            </p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Price</label>
                                            <p className="text-2xl font-bold text-green-600 flex items-center">
                                                <DollarSign className="h-5 w-5" />
                                                {dish.price}
                                            </p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Category</label>
                                            <Link 
                                                href={`/admin/categories/${dish.category.id}`}
                                                className="text-lg font-semibold text-blue-600 hover:text-blue-800 block"
                                            >
                                                {dish.category.name}
                                            </Link>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Sort Order</label>
                                            <p className="text-lg font-semibold">#{dish.sort_order}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Images</label>
                                            <p className="text-lg font-semibold">{dish.images.length}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Created</label>
                                            <p className="text-sm">{new Date(dish.created_at).toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
                                            <p className="text-sm">{new Date(dish.updated_at).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Dish Images */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="flex items-center gap-2">
                                            <Camera className="h-5 w-5" />
                                            Dish Images ({dish.images.length})
                                        </CardTitle>
                                        <CardDescription>All images for this dish</CardDescription>
                                    </div>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={`/admin/dishes/${dish.id}/edit`}>
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit Images
                                        </Link>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {dish.images.length > 0 ? (
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {dish.images.map((image, index) => (
                                            <div key={index} className="relative group">
                                                <img
                                                    src={image}
                                                    alt={`${dish.name} ${index + 1}`}
                                                    className="w-full h-32 object-cover rounded-lg"
                                                />
                                                {index === 0 && (
                                                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                                        Main Image
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                                    <Button variant="secondary" size="sm">
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-muted-foreground">
                                        <Camera className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                        <p>No images uploaded</p>
                                        <Button className="mt-4" asChild>
                                            <Link href={`/admin/dishes/${dish.id}/edit`}>Add Images</Link>
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Stats</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Price</span>
                                        <span className="font-bold text-green-600">${dish.price}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Category</span>
                                        <Badge variant="outline">{dish.category.name}</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Status</span>
                                        <Badge variant={dish.is_available ? 'default' : 'secondary'}>
                                            {dish.is_available ? 'Available' : 'Unavailable'}
                                        </Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Images</span>
                                        <span className="font-semibold">{dish.images.length}</span>
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
                                <div className="space-y-3">
                                    <Button 
                                        className="w-full" 
                                        variant={dish.is_available ? "outline" : "default"}
                                        onClick={() => toggleStatus('is_available')}
                                    >
                                        <Package className="h-4 w-4 mr-2" />
                                        {dish.is_available ? 'Mark Unavailable' : 'Mark Available'}
                                    </Button>
                                    
                                    <Button 
                                        className="w-full" 
                                        variant={dish.is_signature ? "outline" : "default"}
                                        onClick={() => toggleStatus('is_signature')}
                                    >
                                        <Star className="h-4 w-4 mr-2" />
                                        {dish.is_signature ? 'Remove Signature' : 'Make Signature'}
                                    </Button>
                                    
                                    <Button 
                                        className="w-full" 
                                        variant={dish.is_featured ? "outline" : "default"}
                                        onClick={() => toggleStatus('is_featured')}
                                    >
                                        <Star className="h-4 w-4 mr-2" />
                                        {dish.is_featured ? 'Remove Featured' : 'Make Featured'}
                                    </Button>
                                    
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href={`/admin/dishes/${dish.id}/edit`}>
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit Dish
                                        </Link>
                                    </Button>
                                    
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href={`/dish/${dish.slug}`} target="_blank">
                                            <Eye className="h-4 w-4 mr-2" />
                                            View on Site
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Preview Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Customer Preview</CardTitle>
                                <CardDescription>How this appears to customers</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                                        {dish.main_image ? (
                                            <img 
                                                src={dish.main_image} 
                                                alt={dish.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                                <Camera className="h-8 w-8" />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{dish.name}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {dish.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-lg font-bold text-green-600">
                                                ${dish.price}
                                            </span>
                                            <Badge variant="outline">{dish.category.name}</Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
