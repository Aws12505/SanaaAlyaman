// resources/js/pages/Admin/Categories/Edit.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { ArrowLeft, Upload, X } from 'lucide-react';

interface Category {
    id: number;
    name: string;
    description?: string;
    image?: string;
    sort_order: number;
    is_active: boolean;
}

interface CategoryFormData {
    name: string;
    description: string;
    image: File | null;
    sort_order: number;
    is_active: boolean;
}

interface CategoryEditProps {
    category: Category;
}

export default function CategoryEdit({ category }: CategoryEditProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(category.image || null);
    
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/admin' },
        { title: 'Categories', href: '/admin/categories' },
        { title: category.name, href: `/admin/categories/${category.id}` },
        { title: 'Edit', href: `/admin/categories/${category.id}/edit` },
    ];

    const { data, setData, put, processing, errors } = useForm<CategoryFormData>({
        name: category.name,
        description: category.description || '',
        image: null,
        sort_order: category.sort_order,
        is_active: category.is_active,
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setData('image', null);
        setImagePreview(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/admin/categories/${category.id}`, {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${category.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/admin/categories">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Categories
                        </a>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Edit Category</h1>
                        <p className="text-muted-foreground">Update category information</p>
                    </div>
                </div>

                {/* Form */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Category Information</CardTitle>
                                    <CardDescription>
                                        Update basic information about the category
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Category Name</Label>
                                        <Input
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder="Enter category name"
                                            className={errors.name ? 'border-red-500' : ''}
                                        />
                                        {errors.name && (
                                            <p className="text-sm text-red-600">{errors.name}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            placeholder="Enter category description"
                                            rows={4}
                                            className={errors.description ? 'border-red-500' : ''}
                                        />
                                        {errors.description && (
                                            <p className="text-sm text-red-600">{errors.description}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
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

                                        <div className="space-y-2">
                                            <Label htmlFor="is_active">Status</Label>
                                            <div className="flex items-center space-x-2 pt-2">
                                                <Switch
                                                    id="is_active"
                                                    checked={data.is_active}
                                                    onCheckedChange={(checked) => setData('is_active', checked)}
                                                />
                                                <Label htmlFor="is_active">
                                                    {data.is_active ? 'Active' : 'Inactive'}
                                                </Label>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Category Image</CardTitle>
                                    <CardDescription>
                                        Upload or update the category image
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {!imagePreview ? (
                                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                                                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Click to upload an image
                                                </p>
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="max-w-xs mx-auto"
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative">
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="w-full max-w-md mx-auto rounded-lg"
                                                />
                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                    size="sm"
                                                    className="absolute top-2 right-2"
                                                    onClick={removeImage}
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                                <div className="mt-2 text-center">
                                                    <Input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleImageChange}
                                                        className="max-w-xs mx-auto"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        {errors.image && (
                                            <p className="text-sm text-red-600">{errors.image}</p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex justify-end gap-4">
                                <Button type="button" variant="outline" asChild>
                                    <a href="/admin/categories">Cancel</a>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Updating...' : 'Update Category'}
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
                                    How this category will appear
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                                        {imagePreview ? (
                                            <img 
                                                src={imagePreview} 
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                                <Upload className="h-8 w-8" />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">
                                            {data.name || 'Category Name'}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {data.description || 'Category description will appear here'}
                                        </p>
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
