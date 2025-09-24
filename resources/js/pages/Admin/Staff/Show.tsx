// resources/js/pages/Admin/Staff/Show.tsx

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
    Users,
    Calendar,
    User,
    Briefcase
} from 'lucide-react';

interface Staff {
    id: number;
    name: string;
    role: string;
    bio?: string;
    image?: string;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

interface StaffShowProps {
    staff: Staff;
}

export default function StaffShow({ staff }: StaffShowProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/admin' },
        { title: 'Staff', href: '/admin/staff' },
        { title: staff.name, href: `/admin/staff/${staff.id}` },
    ];

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this staff member? This action cannot be undone.')) {
            router.delete(`/admin/staff/${staff.id}`, {
                onSuccess: () => {
                    router.visit('/admin/staff');
                }
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={staff.name} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/admin/staff">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Staff
                            </Link>
                        </Button>
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-bold tracking-tight">{staff.name}</h1>
                                <Badge variant={staff.is_active ? 'default' : 'secondary'}>
                                    {staff.is_active ? 'Active' : 'Inactive'}
                                </Badge>
                            </div>
                            <p className="text-muted-foreground text-lg">{staff.role}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href={`/admin/staff/${staff.id}/edit`}>
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
                        {/* Staff Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <User className="h-5 w-5" />
                                    Staff Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                                            <p className="text-lg font-semibold">{staff.name}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Position</label>
                                            <p className="text-lg font-semibold text-blue-600">{staff.role}</p>
                                        </div>
                                    </div>
                                    
                                    {staff.bio && (
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Biography</label>
                                            <p className="text-base mt-2 leading-relaxed">{staff.bio}</p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Sort Order</label>
                                            <p className="text-lg font-semibold">#{staff.sort_order}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Status</label>
                                            <div className="pt-1">
                                                <Badge variant={staff.is_active ? 'default' : 'secondary'}>
                                                    {staff.is_active ? 'Active' : 'Inactive'}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Added</label>
                                            <p className="text-sm">{new Date(staff.created_at).toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
                                            <p className="text-sm">{new Date(staff.updated_at).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Profile Photo */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Photo</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {staff.image ? (
                                    <div className="space-y-4">
                                        <img
                                            src={staff.image}
                                            alt={staff.name}
                                            className="w-full rounded-lg object-cover aspect-square"
                                        />
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <Link href={`/admin/staff/${staff.id}/edit`}>
                                                <Edit className="h-4 w-4 mr-2" />
                                                Change Photo
                                            </Link>
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                                        <div className="text-center">
                                            <Users className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">No photo uploaded</p>
                                            <Button variant="outline" size="sm" className="mt-2" asChild>
                                                <Link href={`/admin/staff/${staff.id}/edit`}>
                                                    Upload Photo
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
                                <CardTitle>Quick Info</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Position</p>
                                            <p className="font-semibold">{staff.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Joined</p>
                                            <p className="font-semibold">{new Date(staff.created_at).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Status</p>
                                            <Badge variant={staff.is_active ? 'default' : 'secondary'} className="text-xs">
                                                {staff.is_active ? 'Active' : 'Inactive'}
                                            </Badge>
                                        </div>
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
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href={`/admin/staff/${staff.id}/edit`}>
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit Information
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Preview Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Website Preview</CardTitle>
                                <CardDescription>How this appears to visitors</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                                        {staff.image ? (
                                            <img 
                                                src={staff.image} 
                                                alt={staff.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-muted-foreground">
                                                <Users className="h-8 w-8" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-semibold">{staff.name}</h3>
                                        <p className="text-blue-600 font-medium text-sm">{staff.role}</p>
                                        {staff.bio && (
                                            <p className="text-xs text-muted-foreground mt-1 line-clamp-3">
                                                {staff.bio}
                                            </p>
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
