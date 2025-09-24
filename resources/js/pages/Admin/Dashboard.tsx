// resources/js/pages/Admin/Dashboard.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { 
    Users, 
    ChefHat, 
    MessageSquare, 
    Mail, 
    TrendingUp, 
    Star,
    Eye,
    Plus,
    ArrowRight
} from 'lucide-react';

interface DashboardStats {
    dishes: {
        total: number;
        available: number;
        signature: number;
        featured: number;
    };
    categories: {
        total: number;
        active: number;
    };
    staff: {
        total: number;
        active: number;
    };
    testimonials: {
        total: number;
        approved: number;
        pending: number;
        average_rating: number;
    };
    contacts: {
        total: number;
        pending: number;
    };
}

interface RecentActivity {
    recent_dishes: Array<{
        id: number;
        name: string;
        category: { name: string };
        created_at: string;
    }>;
    recent_testimonials: Array<{
        id: number;
        name: string;
        rating: number;
        created_at: string;
    }>;
    recent_contacts: Array<{
        id: number;
        name: string;
        email: string;
        status: string;
        created_at: string;
    }>;
}

interface DashboardProps {
    stats: DashboardStats;
    recentActivity: RecentActivity;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/admin',
    },
];

export default function Dashboard({ stats, recentActivity }: DashboardProps) {
    const statCards = [
        {
            title: 'Total Dishes',
            value: stats.dishes.total,
            description: `${stats.dishes.available} available`,
            icon: ChefHat,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
            trend: '+12% from last month'
        },
        {
            title: 'Staff Members',
            value: stats.staff.total,
            description: `${stats.staff.active} active`,
            icon: Users,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
            trend: '+2 new this week'
        },
        {
            title: 'Testimonials',
            value: stats.testimonials.total,
            description: `${stats.testimonials.pending} pending approval`,
            icon: MessageSquare,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
            trend: `${stats.testimonials.average_rating}★ avg rating`
        },
        {
            title: 'Contact Messages',
            value: stats.contacts.total,
            description: `${stats.contacts.pending} unread`,
            icon: Mail,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50',
            trend: '+8 today'
        },
    ];

    const quickActions = [
        {
            title: 'Add New Dish',
            description: 'Create a new dish for your menu',
            href: '/admin/dishes/create',
            icon: ChefHat,
            color: 'bg-blue-600'
        },
        {
            title: 'Add Staff Member',
            description: 'Add a new team member',
            href: '/admin/staff/create',
            icon: Users,
            color: 'bg-green-600'
        },
        {
            title: 'View Contacts',
            description: 'Check pending messages',
            href: '/admin/contacts',
            icon: Mail,
            color: 'bg-orange-600'
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {statCards.map((stat, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </CardTitle>
                                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-muted-foreground">
                                    {stat.description}
                                </p>
                                <div className="flex items-center pt-1">
                                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                                    <span className="text-xs text-green-600">{stat.trend}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Plus className="h-5 w-5" />
                            Quick Actions
                        </CardTitle>
                        <CardDescription>
                            Common tasks to get you started
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                            {quickActions.map((action, index) => (
                                <Link key={index} href={action.href}>
                                    <Card className="hover:shadow-md transition-shadow duration-200 cursor-pointer">
                                        <CardContent className="p-4">
                                            <div className="flex items-start gap-3">
                                                <div className={`p-2 rounded-lg ${action.color} text-white`}>
                                                    <action.icon className="h-4 w-4" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-sm">{action.title}</h3>
                                                    <p className="text-xs text-muted-foreground">{action.description}</p>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Recent Dishes */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Recent Dishes</CardTitle>
                            <CardDescription>Latest additions to your menu</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {recentActivity.recent_dishes.slice(0, 5).map((dish) => (
                                    <div key={dish.id} className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-sm">{dish.name}</p>
                                            <p className="text-xs text-muted-foreground">{dish.category.name}</p>
                                        </div>
                                        <Badge variant="secondary" className="text-xs">
                                            {new Date(dish.created_at).toLocaleDateString()}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                            <Button variant="ghost" size="sm" className="w-full mt-4" asChild>
                                <Link href="/admin/dishes">
                                    View All Dishes
                                    <ArrowRight className="h-3 w-3 ml-1" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Recent Testimonials */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Recent Testimonials</CardTitle>
                            <CardDescription>Latest customer feedback</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {recentActivity.recent_testimonials.slice(0, 5).map((testimonial) => (
                                    <div key={testimonial.id} className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-sm">{testimonial.name}</p>
                                            <div className="flex items-center gap-1">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <Badge variant="secondary" className="text-xs">
                                            {new Date(testimonial.created_at).toLocaleDateString()}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                            <Button variant="ghost" size="sm" className="w-full mt-4" asChild>
                                <Link href="/admin/testimonials">
                                    View All Testimonials
                                    <ArrowRight className="h-3 w-3 ml-1" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Recent Contacts */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Recent Contacts</CardTitle>
                            <CardDescription>Latest customer inquiries</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {recentActivity.recent_contacts.slice(0, 5).map((contact) => (
                                    <div key={contact.id} className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-sm">{contact.name}</p>
                                            <p className="text-xs text-muted-foreground truncate">{contact.email}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <Badge 
                                                variant={contact.status === 'pending' ? 'destructive' : 'secondary'} 
                                                className="text-xs"
                                            >
                                                {contact.status}
                                            </Badge>
                                            <span className="text-xs text-muted-foreground">
                                                {new Date(contact.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="ghost" size="sm" className="w-full mt-4" asChild>
                                <Link href="/admin/contacts">
                                    View All Contacts
                                    <ArrowRight className="h-3 w-3 ml-1" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
