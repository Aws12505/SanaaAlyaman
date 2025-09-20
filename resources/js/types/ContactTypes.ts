export interface ContactFormData {
    name: string;
    email: string;
    message: string;
    phone?: string;
}

export interface ContactFormErrors {
    name?: string;
    email?: string;
    message?: string;
    phone?: string;
}
