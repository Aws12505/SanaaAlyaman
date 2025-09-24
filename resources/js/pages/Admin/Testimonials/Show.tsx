// resources/js/pages/Admin/Testimonials/Show.tsx

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
    Star,
    ThumbsUp,
    MessageSquare,
    CheckCircle,
    X,
    Calendar,
    Mail,
    Quote
} from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    email?: string;
    message: string;
    avatar?: string;
    rating: number;
    likes: number;
    comments: number;
    is_approved: boolean;
    is_featured: boolean;
    time_ago: string;
    created_at: string;
    updated_at: string;
}

interface TestimonialShowProps {
    testimonial: Testimonial;
}

export default function TestimonialShow({ testimonial }: TestimonialShowProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/admin' },
        { title: 'Testimonials', href: '/admin/testimonials' },
        { title: testimonial.name, href: `/admin/testimonials/${testimonial.id}` },
    ];

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this testimonial? This action cannot be undone.')) {
            router.delete(`/admin/testimonials/${testimonial.id}`, {
                onSuccess: () => {
                    router.visit('/admin/testimonials');
                }
            });
        }
    };

    const toggleApproval = () => {
        router.patch(`/admin/testimonials/${testimonial.id}/approve`);
    };

    const toggleFeatured = () => {
        router.patch(`/admin/testimonials/${testimonial.id}/toggle-featured`);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-5 w-5 ${
                    i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Testimonial by ${testimonial.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/admin/testimonials">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Testimonials
                            </Link>
                        </Button>
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-bold tracking-tight">Testimonial</h1>
                                <div className="flex gap-2">
                                    <Badge variant={testimonial.is_approved ? 'default' : 'secondary'}>
                                        {testimonial.is_approved ? 'Approved' : 'Pending'}
                                    </Badge>
                                    {testimonial.is_featured && (
                                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                            Featured
                                        </Badge>
                                    )}
                                </div>
                            </div>
                            <p className="text-muted-foreground">by {testimonial.name}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
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
                        {/* Testimonial Content */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Quote className="h-5 w-5" />
                                    Customer Review
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0">
                                            {testimonial.avatar ? (
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                                                    <Users className="w-8 h-8 text-muted-foreground" />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                            {testimonial.email && (
                                                <p className="text-muted-foreground">{testimonial.email}</p>
                                            )}
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="flex">
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                                <span className="text-sm text-muted-foreground">
                                                    ({testimonial.rating}/5)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <blockquote className="text-lg leading-relaxed p-6 bg-muted/50 rounded-lg border-l-4 border-blue-500">
                                        "{testimonial.message}"
                                    </blockquote>

                                    <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t">
                                        <div className="flex items-center gap-2">
                                            <ThumbsUp className="w-4 h-4" />
                                            <span>{testimonial.likes} likes</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4" />
                                            <span>{testimonial.comments} comments</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{testimonial.time_ago}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Metadata */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Testimonial Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">Status</label>
                                        <div className="pt-1">
                                            <Badge variant={testimonial.is_approved ? 'default' : 'secondary'}>
                                                {testimonial.is_approved ? 'Approved' : 'Pending'}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">Featured</label>
                                        <div className="pt-1">
                                            <Badge variant={testimonial.is_featured ? 'default' : 'outline'}>
                                                {testimonial.is_featured ? 'Yes' : 'No'}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">Rating</label>
                                        <div className="flex items-center gap-2 pt-1">
                                            <div className="flex">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                            <span className="font-semibold">{testimonial.rating}/5</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">Engagement</label>
                                        <p className="font-semibold">{testimonial.likes + testimonial.comments} total</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">Created</label>
                                        <p className="text-sm">{new Date(testimonial.created_at).toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">Last Updated</label>
                                        <p className="text-sm">{new Date(testimonial.updated_at).toLocaleString()}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <Button 
                                        className="w-full" 
                                        variant={testimonial.is_approved ? "outline" : "default"}
                                        onClick={toggleApproval}
                                    >
                                        {testimonial.is_approved ? (
                                            <>
                                                <X className="h-4 w-4 mr-2" />
                                                Unapprove
                                            </>
                                        ) : (
                                            <>
                                                <CheckCircle className="h-4 w-4 mr-2" />
                                                Approve
                                            </>
                                        )}
                                    </Button>
                                    
                                    <Button 
                                        className="w-full" 
                                        variant={testimonial.is_featured ? "outline" : "default"}
                                        onClick={toggleFeatured}
                                    >
                                        <Star className="h-4 w-4 mr-2" />
                                        {testimonial.is_featured ? 'Remove Featured' : 'Make Featured'}
                                    </Button>
                                    
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit Testimonial
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Customer Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Customer Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0">
                                            {testimonial.avatar ? (
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                                                    <Users className="w-6 h-6 text-muted-foreground" />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            {testimonial.email && (
                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    <Mail className="w-3 h-3" />
                                                    {testimonial.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
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
                                <div className="space-y-4 p-4 border rounded-lg bg-muted/50">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0">
                                            {testimonial.avatar ? (
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                                    <Users className="w-5 h-5 text-muted-foreground" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-sm">{testimonial.name}</p>
                                            <div className="flex">
                                                {Array.from({ length: testimonial.rating }, (_, i) => (
                                                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-relaxed">
                                        "{testimonial.message.length > 100 
                                            ? testimonial.message.substring(0, 100) + '...' 
                                            : testimonial.message}"
                                    </p>
                                    <p className="text-xs text-muted-foreground">{testimonial.time_ago}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
