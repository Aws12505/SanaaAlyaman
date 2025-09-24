// resources/js/pages/Admin/Dishes/Create.tsx

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
import { useState } from 'react';
import { ArrowLeft, Upload, X, Plus } from 'lucide-react';

interface Category {
    id: number;
    name: string;
}

interface DishFormData {
    name: string;
    description: string;
    ingredients: string;
    allergen_info: string;
    price: number;
    images: File[];
    category_id: number | '';
    is_signature: boolean;
    is_featured: boolean;
    is_available: boolean;
    sort_order: number;
}

interface DishCreateProps {
    categories: Category[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin' },
    { title: 'Dishes', href: '/admin/dishes' },
    { title: 'Create Dish', href: '/admin/dishes/create' },
];

export default function DishCreate({ categories }: DishCreateProps) {
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    
    const { data, setData, post, processing, errors } = useForm<DishFormData>({
        name: '',
        description: '',
        ingredients: '',
        allergen_info: '',
        price: 0,
        images: [],
        category_id: '',
        is_signature: false,
        is_featured: false,
        is_available: true,
        sort_order: 0,
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
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
        const newImages = data.images.filter((_, i) => i !== index);
        const newPreviews = imagePreviews.filter((_, i) => i !== index);
        setData('images', newImages);
        setImagePreviews(newPreviews);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/dishes', {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Dish" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/admin/dishes">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Dishes
                        </a>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Create Dish</h1>
                        <p className="text-muted-foreground">Add a new dish to your menu</p>
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
                                        Essential details about the dish
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
                                    <CardTitle>Dish Images</CardTitle>
                                    <CardDescription>
                                        Upload up to 5 images of this dish
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {imagePreviews.length > 0 && (
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {imagePreviews.map((preview, index) => (
                                                    <div key={index} className="relative">
                                                        <img
                                                            src={preview}
                                                            alt={`Preview ${index + 1}`}
                                                            className="w-full h-32 object-cover rounded-lg"
                                                        />
                                                        <Button
                                                            type="button"
                                                            variant="destructive"
                                                            size="sm"
                                                            className="absolute top-1 right-1 h-6 w-6 p-0"
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

                                        {data.images.length < 5 && (
                                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                                                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Click to upload dish images ({data.images.length}/5)
                                                </p>
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    multiple
                                                    onChange={handleImageChange}
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
                                        Configure dish availability and special features
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
                                    <a href="/admin/dishes">Cancel</a>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Creating...' : 'Create Dish'}
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
                                                <Upload className="h-8 w-8" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold">
                                                {data.name || 'Dish Name'}
                                            </h3>
                                            {data.is_signature && (
                                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                                                    Signature
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground">
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
