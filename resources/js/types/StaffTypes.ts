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
