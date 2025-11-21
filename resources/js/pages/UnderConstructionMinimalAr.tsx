import { Head, Link } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Construction, Clock, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export default function UnderConstructionMinimalAr() {
  return (
    <>
      <Head>
        <title>مطعم صنعاء اليمن | مطبخ يمني أصيل في ميسيساجا، كندا</title>
        <meta name="description" content="مطعم صنعاء اليمن في ميسيساجا - استمتع بالمطبخ اليمني الأصيل المُعد بالطرق التقليدية وأجود المكونات المحلية. نحن في 2121 Dundas St E، ميسيساجا ON L4X 1M3. اتصل على 905-624-7220 للتوصيل والحجوزات." />
        <meta name="keywords" content="مطعم يمني ميسيساجا, مطبخ يمني أصيل كندا, مطعم شرق أوسطي ميسيساجا, مأكولات يمنية تورنتو, مطعم حلال ميسيساجا, أطباق يمنية تقليدية, صنعاء اليمن, أفضل مطعم يمني أونتاريو" />
      </Head>

      {/* RTL layout for Arabic */}
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4 relative"
        dir="rtl"
        lang="ar"
      >
        {/* Language switcher (RTL order) */}
        <div className="absolute top-4 left-4 flex items-center gap-2 text-sm font-medium">
          <span className="px-3 py-1 rounded-full bg-slate-900/5 text-slate-900 border border-slate-200">
            العربية
          </span>
          <span className="text-slate-400">/</span>
          <Link
            href="/"
            hrefLang="en-CA"
            className="px-3 py-1 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-colors"
          >
            English
          </Link>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-12 text-center space-y-8">
            {/* Logo */}
            <div className="relative inline-block">
              <img
                src="/logo.png"
                alt="مطعم صنعاء اليمن - مطبخ يمني أصيل في ميسيساجا"
                className="h-32 w-auto mx-auto drop-shadow-xl"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ed7f11] to-[#d16d0a] opacity-20 blur-2xl rounded-full" />
            </div>

            {/* Status */}
            <Badge className="bg-gradient-to-r from-[#ed7f11] to-[#d16d0a] text-white px-6 py-3 text-base font-semibold rounded-full inline-flex items-center justify-center">
              <Construction className="w-5 h-5 ml-2" />
              الموقع قيد الإنشاء
            </Badge>

            {/* Main message */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                مطعم صنعاء اليمن
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ed7f11] to-[#d16d0a] mt-1">
                  تجربة يمنية أصيلة قريباً
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto">
                <strong>مطعم صنعاء اليمن</strong> يقدم المطبخ اليمني الأصيل في ميسيساجا، أونتاريو. 
                استمتع بالأطباق اليمنية التقليدية المُعدة بأجود المكونات المحلية والتوابل العطرية 
                التي تجسد الجوهر الحقيقي لليمن. يتم تجهيز مطعمنا بكل حب وعناية فائقة لتقديم 
                تجربة طعام تعكس الكرم والنكهات الغنية للثقافة اليمنية الأصيلة.
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

            {/* Location & Contact information */}
            <div className="pt-8 border-t border-slate-200">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-800">قريباً في خدمتكم</h2>
                <div className="flex items-center justify-center gap-2 text-slate-600 mb-4">
                  <MapPin className="w-5 h-5 text-[#ed7f11]" />
                  <address className="not-italic">
                    <a
                      href="https://maps.google.com/?q=2121+Dundas+St+E,+Mississauga+ON+L4X+1M3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors"
                    >
                      2121 Dundas St E، ميسيساجا ON L4X 1M3، كندا
                    </a>
                  </address>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 pt-4">تواصل معنا</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#ed7f11]" />
                    <a
                      href="tel:+19056247220"
                      className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors"
                      dir="ltr"
                    >
                      905-624-7220
                    </a>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-slate-300" />
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#ed7f11]" />
                    <a
                      href="mailto:info@sanaaalyemen.site"
                      className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors"
                      dir="ltr"
                    >
                      info@sanaaalyemen.site
                    </a>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-4">
                  اتصل بنا للتوصيل والحجوزات. نتطلع لخدمتكم بأشهى النكهات اليمنية الأصيلة!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
