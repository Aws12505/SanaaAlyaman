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
