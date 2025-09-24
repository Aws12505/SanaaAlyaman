// resources/js/pages/Admin/Dishes/Edit.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { ArrowLeft, Upload, X, Camera } from 'lucide-react';

interface Category {
    id: number;
    name: string;
}

interface Dish {
    id: number;
    name: string;
    description: string;
    ingredients?: string;
    allergen_info?: string;
    price: number;
    images: string[];
    category_id: number;
    is_signature: boolean;
    is_featured: boolean;
    is_available: boolean;
    sort_order: number;
}

interface DishFormData {
    name: string;
    description: string;
    ingredients: string;
    allergen_info: string;
    price: number;
    images: File[];
    category_id: number;
    is_signature: boolean;
    is_featured: boolean;
    is_available: boolean;
    sort_order: number;
}

interface DishEditProps {
    dish: Dish;
    categories: Category[];
}

export default function DishEdit({ dish, categories }: DishEditProps) {
    const [imagePreviews, setImagePreviews] = useState<string[]>(dish.images || []);
    const [newImages, setNewImages] = useState<File[]>([]);
    
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/admin' },
        { title: 'Dishes', href: '/admin/dishes' },
        { title: dish.name, href: `/admin/dishes/${dish.id}` },
        { title: 'Edit', href: `/admin/dishes/${dish.id}/edit` },
    ];

    const { data, setData, put, processing, errors } = useForm<DishFormData>({
        name: dish.name,
        description: dish.description,
        ingredients: dish.ingredients || '',
        allergen_info: dish.allergen_info || '',
        price: dish.price,
        images: [],
        category_id: dish.category_id,
        is_signature: dish.is_signature,
        is_featured: dish.is_featured,
        is_available: dish.is_available,
        sort_order: dish.sort_order,
    });

    const handleNewImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            setNewImages(prev => [...prev, ...files]);
            setData('images', [...data.images, ...files]);
            
            files.forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImagePreviews(prev => [...prev, reader.result as string]);
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const removeImage = (index: number) => {
        const newPreviews = imagePreviews.filter((_, i) => i !== index);
        setImagePreviews(newPreviews);
        
        // If it's a new image (File object), remove from new images
        const existingImageCount = dish.images.length;
        if (index >= existingImageCount) {
            const newImageIndex = index - existingImageCount;
            const updatedNewImages = newImages.filter((_, i) => i !== newImageIndex);
            setNewImages(updatedNewImages);
            setData('images', updatedNewImages);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/admin/dishes/${dish.id}`, {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${dish.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <a href={`/admin/dishes/${dish.id}`}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Dish
                        </a>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Edit Dish</h1>
                        <p className="text-muted-foreground">Update dish information</p>
                    </div>
                </div>

                {/* Form */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Basic Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Basic Information</CardTitle>
                                    <CardDescription>
                                        Update essential details about the dish
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Dish Name</Label>
                                            <Input
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Enter dish name"
                                                className={errors.name ? 'border-red-500' : ''}
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-red-600">{errors.name}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="category_id">Category</Label>
                                            <Select 
                                                value={data.category_id.toString()} 
                                                onValueChange={(value) => setData('category_id', parseInt(value))}
                                            >
                                                <SelectTrigger className={errors.category_id ? 'border-red-500' : ''}>
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {categories.map((category) => (
                                                        <SelectItem key={category.id} value={category.id.toString()}>
                                                            {category.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.category_id && (
                                                <p className="text-sm text-red-600">{errors.category_id}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            placeholder="Describe the dish"
                                            rows={4}
                                            className={errors.description ? 'border-red-500' : ''}
                                        />
                                        {errors.description && (
                                            <p className="text-sm text-red-600">{errors.description}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="ingredients">Ingredients</Label>
                                        <Textarea
                                            id="ingredients"
                                            value={data.ingredients}
                                            onChange={(e) => setData('ingredients', e.target.value)}
                                            placeholder="List the main ingredients"
                                            rows={3}
                                            className={errors.ingredients ? 'border-red-500' : ''}
                                        />
                                        {errors.ingredients && (
                                            <p className="text-sm text-red-600">{errors.ingredients}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="allergen_info">Allergen Information</Label>
                                        <Textarea
                                            id="allergen_info"
                                            value={data.allergen_info}
                                            onChange={(e) => setData('allergen_info', e.target.value)}
                                            placeholder="List allergens and dietary information"
                                            rows={2}
                                            className={errors.allergen_info ? 'border-red-500' : ''}
                                        />
                                        {errors.allergen_info && (
                                            <p className="text-sm text-red-600">{errors.allergen_info}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="price">Price ($)</Label>
                                            <Input
                                                id="price"
                                                type="number"
                                                step="0.01"
                                                value={data.price}
                                                onChange={(e) => setData('price', parseFloat(e.target.value))}
                                                placeholder="0.00"
                                                className={errors.price ? 'border-red-500' : ''}
                                            />
                                            {errors.price && (
                                                <p className="text-sm text-red-600">{errors.price}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="sort_order">Sort Order</Label>
                                            <Input
                                                id="sort_order"
                                                type="number"
                                                value={data.sort_order}
                                                onChange={(e) => setData('sort_order', parseInt(e.target.value))}
                                                placeholder="0"
                                                className={errors.sort_order ? 'border-red-500' : ''}
                                            />
                                            {errors.sort_order && (
                                                <p className="text-sm text-red-600">{errors.sort_order}</p>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Dish Images */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Camera className="h-5 w-5" />
                                        Dish Images
                                    </CardTitle>
                                    <CardDescription>
                                        Current images and add new ones (up to 5 total)
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {imagePreviews.length > 0 && (
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {imagePreviews.map((preview, index) => (
                                                    <div key={index} className="relative group">
                                                        <img
                                                            src={preview}
                                                            alt={`Preview ${index + 1}`}
                                                            className="w-full h-32 object-cover rounded-lg"
                                                        />
                                                        <Button
                                                            type="button"
                                                            variant="destructive"
                                                            size="sm"
                                                            className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            onClick={() => removeImage(index)}
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </Button>
                                                        {index === 0 && (
                                                            <div className="absolute bottom-1 left-1 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                                                Main
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {imagePreviews.length < 5 && (
                                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                                                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Add more images ({imagePreviews.length}/5)
                                                </p>
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    multiple
                                                    onChange={handleNewImageChange}
                                                    className="max-w-xs mx-auto"
                                                />
                                            </div>
                                        )}

                                        {errors.images && (
                                            <p className="text-sm text-red-600">{errors.images}</p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Status Settings */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Status & Features</CardTitle>
                                    <CardDescription>
                                        Update dish availability and special features
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="is_available">Available</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Customers can order this dish
                                                </p>
                                            </div>
                                            <Switch
                                                id="is_available"
                                                checked={data.is_available}
                                                onCheckedChange={(checked) => setData('is_available', checked)}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="is_signature">Signature Dish</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Mark as one of your signature dishes
                                                </p>
                                            </div>
                                            <Switch
                                                id="is_signature"
                                                checked={data.is_signature}
                                                onCheckedChange={(checked) => setData('is_signature', checked)}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="is_featured">Featured Dish</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Show in featured section on homepage
                                                </p>
                                            </div>
                                            <Switch
                                                id="is_featured"
                                                checked={data.is_featured}
                                                onCheckedChange={(checked) => setData('is_featured', checked)}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex justify-end gap-4">
                                <Button type="button" variant="outline" asChild>
                                    <a href={`/admin/dishes/${dish.id}`}>Cancel</a>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Updating...' : 'Update Dish'}
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Preview Card */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-6">
                            <CardHeader>
                                <CardTitle>Preview</CardTitle>
                                <CardDescription>
                                    How this dish will appear to customers
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                                        {imagePreviews.length > 0 ? (
                                            <img 
                                                src={imagePreviews[0]} 
                                                alt="Main preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                                <Camera className="h-8 w-8" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="font-semibold">
                                                {data.name || 'Dish Name'}
                                            </h3>
                                            {data.is_signature && (
                                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                                                    Signature
                                                </span>
                                            )}
                                            {data.is_featured && (
                                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {data.description || 'Dish description will appear here'}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-green-600">
                                                ${data.price.toFixed(2)}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {categories.find(c => c.id === data.category_id)?.name || 'Category'}
                                            </span>
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
