// resources/js/pages/UnderConstructionMinimal.tsx

import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Construction, Clock, Sparkles, Phone, Mail } from 'lucide-react';

export default function UnderConstructionMinimal() {
  return (
    <>
      <Head>
        {/* Indexable + canonical */}
        <title>Under Construction — Sanaa Alyemen</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanaaalyemen.site/" />

        {/* SEO description */}
        <meta
          name="description"
          content="Sanaa Alyemen — authentic Yemeni cuisine in Toronto. Our new site is coming soon. Reach us at +1 (437) 876-7773 or info@sanaaalyemen.site."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sanaa Alyemen" />
        <meta property="og:url" content="https://sanaaalyemen.site/" />
        <meta property="og:title" content="Sanaa Alyemen — Coming Soon" />
        <meta
          property="og:description"
          content="We’re cooking up something special. Contact us while we prepare our launch."
        />
        <meta property="og:image" content="https://sanaaalyemen.site/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanaa Alyemen — Coming Soon" />
        <meta
          name="twitter:description"
          content="Authentic Yemeni cuisine. Opening soon — contact us for inquiries."
        />
        <meta name="twitter:image" content="https://sanaaalyemen.site/og-image.jpg" />

        {/* Optional: business contact links for better UX in SERP */}
        <link rel="me" href="mailto:info@sanaaalyemen.site" />
        <link rel="me" href="tel:+14378767773" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-12 text-center space-y-8">
            {/* Logo */}
            <div className="relative inline-block">
              <img
                src="/logo.png"
                alt="Sanaa Alyemen logo"
                className="h-32 w-auto mx-auto drop-shadow-xl"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ed7f11] to-[#d16d0a] opacity-20 blur-2xl rounded-full"></div>
            </div>

            {/* Status */}
            <Badge className="bg-gradient-to-r from-[#ed7f11] to-[#d16d0a] text-white px-6 py-3 text-base font-semibold rounded-full">
              <Construction className="w-5 h-5 mr-2" />
              Under Construction
            </Badge>

            {/* Main Message */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-slate-800">
                We're Cooking Up
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ed7f11] to-[#d16d0a]">
                  Something Special
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto">
                Our restaurant is being prepared with love and attention to detail.
                We’ll be serving you soon!
              </p>
            </div>

            {/* Animated Elements */}
            <div className="flex justify-center items-center gap-8 py-8">
              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-5 h-5 text-[#ed7f11] animate-pulse" />
                <span className="font-medium">Coming Soon</span>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div className="flex items-center gap-2 text-slate-500">
                <Sparkles className="w-5 h-5 text-[#ed7f11] animate-pulse delay-500" />
                <span className="font-medium">Worth the Wait</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="pt-8 border-t border-slate-200">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Get in Touch</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#ed7f11]" />
                    <a
                      href="tel:+14378767773"
                      className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors"
                    >
                      +1 (437) 876-7773
                    </a>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#ed7f11]" />
                    <a
                      href="mailto:info@sanaaalyemen.site"
                      className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors"
                    >
                      info@sanaaalyemen.site
                    </a>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-4">
                  We’d love to hear from you! Feel free to reach out with any questions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
