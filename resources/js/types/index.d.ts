import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
// types/index.ts

export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
    image?: string;
    sort_order: number;
    is_active: boolean;
    dishes_count?: number;
    created_at: string;
    updated_at: string;
}

export interface Dish {
    id: number;
    name: string;
    slug: string;
    description: string;
    ingredients?: string;
    allergen_info?: string;
    price: number;
    images: string[];
    main_image?: string;
    category_id: number;
    category?: Category;
    is_signature: boolean;
    is_featured: boolean;
    is_available: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

export interface Staff {
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

export interface Testimonial {
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

export interface Contact {
    id: number;
    name: string;
    email: string;
    message: string;
    phone?: string;
    status: 'pending' | 'read' | 'responded';
    created_at: string;
    updated_at: string;
}
