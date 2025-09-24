// resources/js/pages/Admin/Staff/Edit.tsx

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
import { ArrowLeft, Upload, X, Users } from 'lucide-react';

interface Staff {
    id: number;
    name: string;
    role: string;
    bio?: string;
    image?: string;
    sort_order: number;
    is_active: boolean;
}

interface StaffFormData {
    name: string;
    role: string;
    bio: string;
    image: File | null;
    sort_order: number;
    is_active: boolean;
}

interface StaffEditProps {
    staff: Staff;
}

export default function StaffEdit({ staff }: StaffEditProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(staff.image || null);
    
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/admin' },
        { title: 'Staff', href: '/admin/staff' },
        { title: staff.name, href: `/admin/staff/${staff.id}` },
        { title: 'Edit', href: `/admin/staff/${staff.id}/edit` },
    ];

    const { data, setData, put, processing, errors } = useForm<StaffFormData>({
        name: staff.name,
        role: staff.role,
        bio: staff.bio || '',
        image: null,
        sort_order: staff.sort_order,
        is_active: staff.is_active,
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
        put(`/admin/staff/${staff.id}`, {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${staff.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <a href={`/admin/staff/${staff.id}`}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Staff Member
                        </a>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Edit Staff Member</h1>
                        <p className="text-muted-foreground">Update team member information</p>
                    </div>
                </div>

                {/* Form */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Staff Information</CardTitle>
                                    <CardDescription>
                                        Update basic information about the team member
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Enter full name"
                                                className={errors.name ? 'border-red-500' : ''}
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-red-600">{errors.name}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="role">Role/Position</Label>
                                            <Input
                                                id="role"
                                                value={data.role}
                                                onChange={(e) => setData('role', e.target.value)}
                                                placeholder="e.g. Head Chef, Manager"
                                                className={errors.role ? 'border-red-500' : ''}
                                            />
                                            {errors.role && (
                                                <p className="text-sm text-red-600">{errors.role}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="bio">Biography</Label>
                                        <Textarea
                                            id="bio"
                                            value={data.bio}
                                            onChange={(e) => setData('bio', e.target.value)}
                                            placeholder="Tell us about this team member..."
                                            rows={4}
                                            className={errors.bio ? 'border-red-500' : ''}
                                        />
                                        {errors.bio && (
                                            <p className="text-sm text-red-600">{errors.bio}</p>
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
                                    <CardTitle>Profile Photo</CardTitle>
                                    <CardDescription>
                                        Update or change the team member's photo
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {!imagePreview ? (
                                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                                                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Click to upload a photo
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
                                                    className="w-full max-w-md mx-auto rounded-lg aspect-square object-cover"
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
                                    <a href={`/admin/staff/${staff.id}`}>Cancel</a>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Updating...' : 'Update Staff Member'}
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
                                    How this will appear on the website
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                                        {imagePreview ? (
                                            <img 
                                                src={imagePreview} 
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                                <Users className="h-12 w-12" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-semibold text-lg">
                                            {data.name || 'Staff Name'}
                                        </h3>
                                        <p className="text-blue-600 font-medium">
                                            {data.role || 'Position'}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            {data.bio || 'Staff biography will appear here'}
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
