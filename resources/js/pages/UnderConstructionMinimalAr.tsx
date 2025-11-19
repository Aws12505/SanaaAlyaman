// resources/js/pages/UnderConstructionMinimalAr.tsx

import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Construction, Clock, Sparkles, Phone, Mail } from 'lucide-react';

export default function UnderConstructionMinimalAr() {
  return (
    <>
      <Head>
        {/* Arabic SEO + canonical */}
        <title>مطعم صنعاء اليمن — قريباً</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanaaalyemen.site/ar" />

        <meta
          name="description"
          content="مطعم صنعاء اليمن في تورونتو — المذاق الأصيل للمطبخ اليمني. الموقع قيد الإنشاء حالياً. تواصل معنا على ‎+1 (437) 876-7773 أو info@sanaaalyemen.site."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="مطعم صنعاء اليمن" />
        <meta property="og:url" content="https://sanaaalyemen.site/ar" />
        <meta property="og:title" content="مطعم صنعاء اليمن — قريباً" />
        <meta
          property="og:description"
          content="نحضر لكم تجربة يمنية مميزة. تواصلوا معنا خلال تجهيز افتتاح المطعم."
        />
        <meta property="og:image" content="https://sanaaalyemen.site/og-image.jpg" />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="en_CA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="مطعم صنعاء اليمن — قريباً" />
        <meta
          name="twitter:description"
          content="مطعم يمني أصيل في تورونتو. قريباً الافتتاح — تواصل معنا للاستفسار."
        />
        <meta name="twitter:image" content="https://sanaaalyemen.site/og-image.jpg" />

        {/* Language alternates */}
        <link rel="alternate" href="https://sanaaalyemen.site/" hrefLang="en" />
        <link rel="alternate" href="https://sanaaalyemen.site/ar" hrefLang="ar" />
        <link rel="alternate" href="https://sanaaalyemen.site/" hrefLang="x-default" />

        {/* Contact links */}
        <link rel="me" href="mailto:info@sanaaalyemen.site" />
        <link rel="me" href="tel:+14378767773" />
      </Head>

      {/* RTL layout for Arabic */}
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4"
        dir="rtl"
      >
        <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-12 text-center space-y-8">
            {/* Logo */}
            <div className="relative inline-block">
              <img
                src="/logo.png"
                alt="شعار مطعم صنعاء اليمن"
                className="h-32 w-auto mx-auto drop-shadow-xl"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ed7f11] to-[#d16d0a] opacity-20 blur-2xl rounded-full" />
            </div>

            {/* Status */}
            <Badge className="bg-gradient-to-r from-[#ed7f11] to-[#d16d0a] text-white px-6 py-3 text-base font-semibold rounded-full inline-flex items-center justify-center">
              <Construction className="w-5 h-5 mr-2" />
              الموقع قيد الإنشاء
            </Badge>

            {/* Main message */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                نحضّر لكم
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ed7f11] to-[#d16d0a] mt-1">
                  تجربة يمنية لذيذة
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto">
                يتم تجهيز المطعم بكل حب وعناية لتقديم أشهى الأطباق اليمنية الأصيلة.
                نلتقي بكم قريباً إن شاء الله.
              </p>
            </div>

            {/* Animated elements */}
            <div className="flex justify-center items-center gap-8 py-8">
              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-5 h-5 text-[#ed7f11] animate-pulse" />
                <span className="font-medium">قريباً الافتتاح</span>
              </div>
              <div className="w-px h-8 bg-slate-300" />
              <div className="flex items-center gap-2 text-slate-500">
                <Sparkles className="w-5 h-5 text-[#ed7f11] animate-pulse delay-500" />
                <span className="font-medium">انتظرونا</span>
              </div>
            </div>

            {/* Contact information */}
            <div className="pt-8 border-t border-slate-200">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">تواصل معنا</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#ed7f11]" />
                    <a
                      href="tel:+14378767773"
                      className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors"
                    >
                      ‎+1 (437) 876-7773
                    </a>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-slate-300" />
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
                  يسعدنا تواصلكم معنا لأي استفسار أو تعاون.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
