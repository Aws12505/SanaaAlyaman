// resources/js/pages/Admin/Contacts/Show.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { 
    ArrowLeft, 
    Trash2, 
    Mail,
    Phone,
    Calendar,
    Clock,
    MailOpen,
    CheckCircle,
    Reply,
    Archive,
    Flag,
    User,
    MessageSquare,
    Send,
    Copy,
    ExternalLink
} from 'lucide-react';

interface Contact {
    id: number;
    name: string;
    email: string;
    phone?: string;
    message: string;
    status: 'pending' | 'read' | 'responded';
    created_at: string;
    updated_at: string;
}

interface ContactShowProps {
    contact: Contact;
}

export default function ContactShow({ contact }: ContactShowProps) {
    const [showReplyForm, setShowReplyForm] = useState(false);
    
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/admin' },
        { title: 'Contacts', href: '/admin/contacts' },
        { title: `Message from ${contact.name}`, href: `/admin/contacts/${contact.id}` },
    ];

    const { data, setData, post, processing } = useForm({
        reply_message: '',
    });

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this contact message? This action cannot be undone.')) {
            router.delete(`/admin/contacts/${contact.id}`, {
                onSuccess: () => {
                    router.visit('/admin/contacts');
                }
            });
        }
    };

    const updateStatus = (status: string) => {
        router.patch(`/admin/contacts/${contact.id}/status`, { status });
    };

    const handleReply = (e: React.FormEvent) => {
        e.preventDefault();
        // This would typically send an email and update the status
        post(`/admin/contacts/${contact.id}/reply`, {
            onSuccess: () => {
                setShowReplyForm(false);
                updateStatus('responded');
            }
        });
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // You could show a toast notification here
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'read': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'responded': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'pending': return Clock;
            case 'read': return MailOpen;
            case 'responded': return CheckCircle;
            default: return Mail;
        }
    };

    const StatusIcon = getStatusIcon(contact.status);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Message from ${contact.name}`} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/admin/contacts">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Messages
                            </Link>
                        </Button>
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-bold tracking-tight">Contact Message</h1>
                                <Badge className={`${getStatusColor(contact.status)}`}>
                                    <StatusIcon className="w-3 h-3 mr-1" />
                                    {contact.status}
                                </Badge>
                            </div>
                            <p className="text-muted-foreground">from {contact.name}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={() => setShowReplyForm(!showReplyForm)}>
                            <Reply className="h-4 w-4 mr-2" />
                            Reply
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
                        {/* Message Content */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(contact.status)}`}>
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl">{contact.name}</CardTitle>
                                            <CardDescription className="text-base">{contact.email}</CardDescription>
                                        </div>
                                    </div>
                                    <div className="text-right text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1 justify-end mb-1">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(contact.created_at).toLocaleDateString()}
                                        </div>
                                        <div>{new Date(contact.created_at).toLocaleTimeString()}</div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div>
                                        <Label className="text-sm font-medium text-muted-foreground">Message</Label>
                                        <div className="mt-2 p-4 bg-muted/50 rounded-lg border-l-4 border-blue-500">
                                            <p className="text-base leading-relaxed whitespace-pre-wrap">
                                                {contact.message}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Contact Email</Label>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-base">{contact.email}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => copyToClipboard(contact.email)}
                                                >
                                                    <Copy className="w-3 h-3" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    asChild
                                                >
                                                    <a href={`mailto:${contact.email}`}>
                                                        <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                        
                                        {contact.phone && (
                                            <div>
                                                <Label className="text-sm font-medium text-muted-foreground">Phone Number</Label>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-base">{contact.phone}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => copyToClipboard(contact.phone!)}
                                                    >
                                                        <Copy className="w-3 h-3" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        asChild
                                                    >
                                                        <a href={`tel:${contact.phone}`}>
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                                            <div className="mt-1">
                                                <Badge className={`${getStatusColor(contact.status)}`}>
                                                    <StatusIcon className="w-3 h-3 mr-1" />
                                                    {contact.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t text-sm text-muted-foreground">
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Received</Label>
                                            <p>{new Date(contact.created_at).toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Last Updated</Label>
                                            <p>{new Date(contact.updated_at).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Reply Form */}
                        {showReplyForm && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Reply className="h-5 w-5" />
                                        Send Reply
                                    </CardTitle>
                                    <CardDescription>
                                        Send a response to {contact.name} at {contact.email}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleReply} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="reply_message">Reply Message</Label>
                                            <Textarea
                                                id="reply_message"
                                                value={data.reply_message}
                                                onChange={(e) => setData('reply_message', e.target.value)}
                                                placeholder={`Dear ${contact.name},\n\nThank you for contacting us...`}
                                                rows={8}
                                                className="min-h-32"
                                            />
                                        </div>
                                        <div className="flex justify-end gap-4">
                                            <Button 
                                                type="button" 
                                                variant="outline" 
                                                onClick={() => setShowReplyForm(false)}
                                            >
                                                Cancel
                                            </Button>
                                            <Button type="submit" disabled={processing}>
                                                <Send className="h-4 w-4 mr-2" />
                                                {processing ? 'Sending...' : 'Send Reply'}
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        )}
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
                                    {contact.status === 'pending' && (
                                        <Button 
                                            className="w-full" 
                                            onClick={() => updateStatus('read')}
                                        >
                                            <MailOpen className="h-4 w-4 mr-2" />
                                            Mark as Read
                                        </Button>
                                    )}
                                    
                                    {contact.status !== 'responded' && (
                                        <Button 
                                            className="w-full" 
                                            onClick={() => updateStatus('responded')}
                                        >
                                            <CheckCircle className="h-4 w-4 mr-2" />
                                            Mark as Responded
                                        </Button>
                                    )}
                                    
                                    <Button 
                                        variant="outline" 
                                        className="w-full"
                                        onClick={() => setShowReplyForm(!showReplyForm)}
                                    >
                                        <Reply className="h-4 w-4 mr-2" />
                                        {showReplyForm ? 'Hide Reply' : 'Send Reply'}
                                    </Button>
                                    
                                    <Button variant="outline" className="w-full" asChild>
                                        <a href={`mailto:${contact.email}?subject=Re: Your inquiry&body=Dear ${contact.name},%0D%0A%0D%0AThank you for contacting The Golden Spoon...`}>
                                            <Mail className="h-4 w-4 mr-2" />
                                            Open in Email Client
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <User className="w-5 h-5 text-muted-foreground" />
                                        <div>
                                            <p className="font-medium">{contact.name}</p>
                                            <p className="text-sm text-muted-foreground">Customer Name</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-muted-foreground" />
                                        <div className="min-w-0 flex-1">
                                            <p className="font-medium truncate">{contact.email}</p>
                                            <p className="text-sm text-muted-foreground">Email Address</p>
                                        </div>
                                    </div>
                                    
                                    {contact.phone && (
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-muted-foreground" />
                                            <div>
                                                <p className="font-medium">{contact.phone}</p>
                                                <p className="text-sm text-muted-foreground">Phone Number</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-muted-foreground" />
                                        <div>
                                            <p className="font-medium">{new Date(contact.created_at).toLocaleDateString()}</p>
                                            <p className="text-sm text-muted-foreground">Message Received</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Message Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Message Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Status</span>
                                        <Badge className={`text-xs ${getStatusColor(contact.status)}`}>
                                            {contact.status}
                                        </Badge>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Word Count</span>
                                        <span className="font-semibold">{contact.message.split(' ').length} words</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Character Count</span>
                                        <span className="font-semibold">{contact.message.length} chars</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Has Phone</span>
                                        <span className="font-semibold">{contact.phone ? 'Yes' : 'No'}</span>
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
