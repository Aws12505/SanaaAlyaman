// resources/js/pages/UnderConstructionMinimalAr.tsx

import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Construction, Clock, Sparkles, Phone, Mail } from 'lucide-react';

export default function UnderConstructionMinimalAr() {
  return (
    <>
      <Head>
        <title>مطعم صنعاء اليمن — قريباً</title>
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
                مطعم صنعاء اليمن
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ed7f11] to-[#d16d0a] mt-1">
                  تجربة يمنية لذيذة قريباً
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto">
                يتم تجهيز مطعم صنعاء اليمن في كندا بكل حب وعناية لتقديم
                أشهى الأطباق اليمنية الأصيلة. نلتقي بكم قريباً إن شاء الله.
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
