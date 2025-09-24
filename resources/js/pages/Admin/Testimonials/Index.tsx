// resources/js/pages/Admin/Testimonials/Index.tsx

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
    MessageSquare,
    Star,
    ThumbsUp,
    CheckCircle,
    Clock,
    Users
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
}

interface TestimonialIndexProps {
    testimonials: {
        data: Testimonial[];
        links: Array<{ url: string | null; label: string; active: boolean }>;
        meta: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
    };
    filters: {
        search?: string;
        status?: string;
        rating?: string;
        sort?: string;
        direction?: string;
    };
    stats: {
        total: number;
        approved: number;
        pending: number;
        featured: number;
        average_rating: number;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin' },
    { title: 'Testimonials', href: '/admin/testimonials' },
];

export default function TestimonialsIndex({ testimonials, filters, stats }: TestimonialIndexProps) {
    const { flash } = usePage().props as any;
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [statusFilter, setStatusFilter] = useState<string | undefined>(
        filters.status || undefined
    );
    const [ratingFilter, setRatingFilter] = useState<string | undefined>(
        filters.rating || undefined
    );

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        
        const searchParams: Record<string, string> = {};
        
        if (searchTerm) searchParams.search = searchTerm;
        if (statusFilter) searchParams.status = statusFilter;
        if (ratingFilter) searchParams.rating = ratingFilter;
        
        router.get('/admin/testimonials', searchParams);
    };

    const handleDelete = (testimonialId: number) => {
        if (confirm('Are you sure you want to delete this testimonial?')) {
            router.delete(`/admin/testimonials/${testimonialId}`);
        }
    };

    const toggleApproval = (testimonialId: number) => {
        router.patch(`/admin/testimonials/${testimonialId}/approve`);
    };

    const toggleFeatured = (testimonialId: number) => {
        router.patch(`/admin/testimonials/${testimonialId}/toggle-featured`);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-4 w-4 ${
                    i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Testimonials" />
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
                        <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
                        <p className="text-muted-foreground">Manage customer reviews and testimonials</p>
                    </div>
                    <Button asChild>
                        <Link href="/admin/testimonials/create">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Testimonial
                        </Link>
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-5">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total</CardTitle>
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Approved</CardTitle>
                            <CheckCircle className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending</CardTitle>
                            <Clock className="h-4 w-4 text-orange-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
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
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
                            <Star className="h-4 w-4 text-yellow-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-600">{stats.average_rating}</div>
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
                                    placeholder="Search testimonials..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Select value={statusFilter} onValueChange={(value) => 
                                setStatusFilter(value === "all" ? undefined : value)
                            }>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="All Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="approved">Approved</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="featured">Featured</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select value={ratingFilter} onValueChange={(value) => 
                                setRatingFilter(value === "all" ? undefined : value)
                            }>
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All Ratings" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Ratings</SelectItem>
                                    <SelectItem value="5">5 Stars</SelectItem>
                                    <SelectItem value="4">4 Stars</SelectItem>
                                    <SelectItem value="3">3 Stars</SelectItem>
                                    <SelectItem value="2">2 Stars</SelectItem>
                                    <SelectItem value="1">1 Star</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button type="submit">
                                <Search className="h-4 w-4 mr-2" />
                                Search
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Testimonials List */}
                <div className="space-y-4">
                    {testimonials.data.map((testimonial) => (
                        <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
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
                                    
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                                    <div className="flex gap-1">
                                                        {renderStars(testimonial.rating)}
                                                    </div>
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
                                                <p className="text-muted-foreground mb-4 line-clamp-3">
                                                    "{testimonial.message}"
                                                </p>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <ThumbsUp className="w-4 h-4" />
                                                        {testimonial.likes} likes
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MessageSquare className="w-4 h-4" />
                                                        {testimonial.comments} comments
                                                    </div>
                                                    <span>{testimonial.time_ago}</span>
                                                </div>
                                            </div>
                                            
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem asChild>
                                                        <Link href={`/admin/testimonials/${testimonial.id}`}>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View Details
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem 
                                                        onClick={() => toggleApproval(testimonial.id)}
                                                    >
                                                        <CheckCircle className="h-4 w-4 mr-2" />
                                                        {testimonial.is_approved ? 'Unapprove' : 'Approve'}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem 
                                                        onClick={() => toggleFeatured(testimonial.id)}
                                                    >
                                                        <Star className="h-4 w-4 mr-2" />
                                                        {testimonial.is_featured ? 'Remove Featured' : 'Make Featured'}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem 
                                                        className="text-red-600"
                                                        onClick={() => handleDelete(testimonial.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-2" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Empty State */}
                {testimonials.data.length === 0 && (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-12">
                            <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-semibold mb-2">No testimonials found</h3>
                            <p className="text-muted-foreground text-center mb-4">
                                {filters.search || filters.status || filters.rating
                                    ? "Try adjusting your filters to find what you're looking for."
                                    : "Get started by adding your first testimonial."
                                }
                            </p>
                            <Button asChild>
                                <Link href="/admin/testimonials/create">
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add First Testimonial
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppLayout>
    );
}
