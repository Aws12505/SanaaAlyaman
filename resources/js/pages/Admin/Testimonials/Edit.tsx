// resources/js/pages/Admin/Testimonials/Edit.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { ArrowLeft, Upload, X, Star, Users } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    email?: string;
    message: string;
    avatar?: string;
    rating: number;
    is_approved: boolean;
    is_featured: boolean;
}

interface TestimonialFormData {
    name: string;
    email: string;
    message: string;
    avatar: File | null;
    rating: number;
    is_approved: boolean;
    is_featured: boolean;
}

interface TestimonialEditProps {
    testimonial: Testimonial;
}

export default function TestimonialEdit({ testimonial }: TestimonialEditProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(testimonial.avatar || null);
    
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/admin' },
        { title: 'Testimonials', href: '/admin/testimonials' },
        { title: testimonial.name, href: `/admin/testimonials/${testimonial.id}` },
        { title: 'Edit', href: `/admin/testimonials/${testimonial.id}/edit` },
    ];

    const { data, setData, put, processing, errors } = useForm<TestimonialFormData>({
        name: testimonial.name,
        email: testimonial.email || '',
        message: testimonial.message,
        avatar: null,
        rating: testimonial.rating,
        is_approved: testimonial.is_approved,
        is_featured: testimonial.is_featured,
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('avatar', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setData('avatar', null);
        setImagePreview(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/admin/testimonials/${testimonial.id}`, {
            forceFormData: true,
        });
    };

    const renderStars = (rating: number, interactive = false) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-6 w-6 ${
                    i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
                onClick={() => interactive && setData('rating', i + 1)}
            />
        ));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Testimonial by ${testimonial.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <a href={`/admin/testimonials/${testimonial.id}`}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Testimonial
                        </a>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Edit Testimonial</h1>
                        <p className="text-muted-foreground">Update customer testimonial</p>
                    </div>
                </div>

                {/* Form */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Customer Information</CardTitle>
                                    <CardDescription>
                                        Update customer information
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Customer Name</Label>
                                            <Input
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Enter customer name"
                                                className={errors.name ? 'border-red-500' : ''}
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-red-600">{errors.name}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email (Optional)</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                placeholder="customer@example.com"
                                                className={errors.email ? 'border-red-500' : ''}
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-red-600">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Review Details</CardTitle>
                                    <CardDescription>
                                        Update the customer's review and rating
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="rating">Rating</Label>
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {renderStars(data.rating, true)}
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                ({data.rating}/5 stars)
                                            </span>
                                        </div>
                                        {errors.rating && (
                                            <p className="text-sm text-red-600">{errors.rating}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Review Message</Label>
                                        <Textarea
                                            id="message"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            placeholder="Enter the customer's review..."
                                            rows={6}
                                            className={errors.message ? 'border-red-500' : ''}
                                        />
                                        {errors.message && (
                                            <p className="text-sm text-red-600">{errors.message}</p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Customer Avatar</CardTitle>
                                    <CardDescription>
                                        Update or change the customer's photo
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {!imagePreview ? (
                                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                                                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Click to upload avatar
                                                </p>
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="max-w-xs mx-auto"
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative text-center">
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="w-32 h-32 mx-auto rounded-full object-cover"
                                                />
                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                    size="sm"
                                                    className="absolute -top-2 right-[calc(50%-4rem)]"
                                                    onClick={removeImage}
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                                <div className="mt-2">
                                                    <Input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleImageChange}
                                                        className="max-w-xs mx-auto"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        {errors.avatar && (
                                            <p className="text-sm text-red-600">{errors.avatar}</p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Publication Settings</CardTitle>
                                    <CardDescription>
                                        Control how this testimonial appears
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="is_approved">Approved</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Allow this testimonial to be displayed publicly
                                                </p>
                                            </div>
                                            <Switch
                                                id="is_approved"
                                                checked={data.is_approved}
                                                onCheckedChange={(checked) => setData('is_approved', checked)}
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="is_featured">Featured</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Highlight this testimonial in featured sections
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
                                    <a href={`/admin/testimonials/${testimonial.id}`}>Cancel</a>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Updating...' : 'Update Testimonial'}
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
                                    How this testimonial will appear
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0">
                                            {imagePreview ? (
                                                <img 
                                                    src={imagePreview} 
                                                    alt="Preview"
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                                    <Users className="w-6 h-6 text-muted-foreground" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold">
                                                {data.name || 'Customer Name'}
                                            </h3>
                                            <div className="flex">
                                                {renderStars(data.rating)}
                                            </div>
                                        </div>
                                    </div>
                                    <blockquote className="text-sm leading-relaxed p-3 bg-muted rounded">
                                        "{data.message || 'Customer review will appear here...'}"
                                    </blockquote>
                                    <div className="flex gap-2">
                                        {data.is_approved && (
                                            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                                Approved
                                            </div>
                                        )}
                                        {data.is_featured && (
                                            <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                                Featured
                                            </div>
                                        )}
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
