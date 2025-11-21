import { Head, Link } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Construction, Clock, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export default function UnderConstructionMinimal() {
  return (
    <>
      <Head>
        <title>Sanaa Alyemen Restaurant | Authentic Yemeni Food in Mississauga, Canada</title>
        <meta name="description" content="Sanaa Alyemen Restaurant in Mississauga - Experience authentic Yemeni cuisine prepared with traditional methods and finest local ingredients. Located at 2121 Dundas St E, Mississauga ON L4X 1M3. Call 905-624-7220 for delivery & reservations." />
        <meta name="keywords" content="Yemeni restaurant Mississauga, authentic Yemeni food Canada, Middle Eastern restaurant Mississauga, Yemeni cuisine Toronto, halal restaurant Mississauga, traditional Yemeni dishes, Sana'a Al Yemen, best Yemeni restaurant Ontario" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4 relative">
        {/* Language switcher */}
        <div className="absolute top-4 right-4 flex items-center gap-2 text-sm font-medium">
          <span className="px-3 py-1 rounded-full bg-slate-900/5 text-slate-900 border border-slate-200">
            English
          </span>
          <span className="text-slate-400">/</span>
          <Link
            href="/ar"
            hrefLang="ar"
            className="px-3 py-1 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-colors"
          >
            العربية
          </Link>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-12 text-center space-y-8">
            {/* Logo */}
            <div className="relative inline-block">
              <img
                src="/logo.png"
                alt="Sanaa Alyemen Restaurant - Authentic Yemeni Cuisine in Mississauga"
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
              Under Construction
            </Badge>

            {/* Main Message */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
                We're Cooking Up
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ed7f11] to-[#d16d0a]">
                  Something Special
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto">
                <strong>Sanaa Alyemen</strong> brings authentic Yemeni cuisine to Mississauga, Ontario. 
                Experience traditional Yemeni dishes prepared with the finest local ingredients and aromatic 
                spices that capture the true essence of Yemen. Our restaurant is being prepared with love and 
                attention to detail. Enjoy a dining experience that reflects the generosity and rich flavors 
                of authentic Yemeni culture.
              </p>
            </div>

            {/* Animated Elements */}
            <div className="flex justify-center items-center gap-8 py-8">
              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-5 h-5 text-[#ed7f11] animate-pulse" />
                <span className="font-medium">Coming Soon</span>
              </div>
              <div className="w-px h-8 bg-slate-300" />
              <div className="flex items-center gap-2 text-slate-500">
                <Sparkles className="w-5 h-5 text-[#ed7f11] animate-pulse delay-500" />
                <span className="font-medium">Worth the Wait</span>
              </div>
            </div>

            {/* Location & Contact Information */}
            <div className="pt-8 border-t border-slate-200">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-800">Visit Us Soon</h2>
                <div className="flex items-center justify-center gap-2 text-slate-600 mb-4">
                  <MapPin className="w-5 h-5 text-[#ed7f11]" />
                  <address className="not-italic">
                    <a
                      href="https://maps.google.com/?q=2121+Dundas+St+E,+Mississauga+ON+L4X+1M3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors"
                    >
                      2121 Dundas St E, Mississauga ON L4X 1M3, Canada
                    </a>
                  </address>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 pt-4">Get in Touch</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#ed7f11]" />
                    <a
                      href="tel:+19056247220"
                      className="text-[#ed7f11] hover:text-[#d16d0a] font-medium transition-colors"
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
                    >
                      info@sanaaalyemen.site
                    </a>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-4">
                  Contact us for delivery and reservations. We look forward to serving you authentic Yemeni flavors!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
