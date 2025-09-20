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
    category: Category;
    is_signature: boolean;
    is_featured: boolean;
    is_available: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
    image?: string;
    sort_order: number;
    is_active: boolean;
    dishes?: Dish[];
    created_at: string;
    updated_at: string;
}
