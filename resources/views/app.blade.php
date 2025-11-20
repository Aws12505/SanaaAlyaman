<!DOCTYPE html>
<html
  lang="{{ str_replace('_', '-', app()->getLocale()) }}"
  @class(['dark' => ($appearance ?? 'system') == 'dark'])
  @if(app()->getLocale() === 'ar') dir="rtl" @endif
>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Dark mode setup --}}
    <script>
      (function() {
        const appearance = '{{ $appearance ?? "system" }}';
        if (appearance === 'system') {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDark) document.documentElement.classList.add('dark');
        } else if (appearance === 'dark') {
          document.documentElement.classList.add('dark');
        }
      })();
    </script>

    {{-- Background fallback colors --}}
    <style>
      html { background-color: oklch(1 0 0); }
      html.dark { background-color: oklch(0.145 0 0); }
    </style>

    @php
      $isArabic = app()->getLocale() === 'ar';

      // EN SEO
      $enTitle = 'Sanaa Alyemen Restaurant — Coming Soon';
      $enDescription = 'Sanaa Alyemen Restaurant — authentic Yemeni cuisine in Canada. Our new site is coming soon. Reach us at +1 (437) 876-7773 or info@sanaaalyemen.site.';
      $enUrl = 'https://sanaaalyemen.site/';

      // AR SEO
      $arTitle = 'مطعم صنعاء اليمن — قريباً';
      $arDescription = 'مطعم صنعاء اليمن في كندا — المذاق الأصيل للمطبخ اليمني. الموقع قيد الإنشاء حالياً. تواصل معنا على ‎+1 (437) 876-7773 أو info@sanaaalyemen.site.';
      $arUrl = 'https://sanaaalyemen.site/ar';

      $currentTitle = $isArabic ? $arTitle : $enTitle;
      $currentDescription = $isArabic ? $arDescription : $enDescription;
      $currentUrl = $isArabic ? $arUrl : $enUrl;
    @endphp

    {{-- Title controlled by Inertia (fallback set here) --}}
    <title inertia>{{ $currentTitle }}</title>

    {{-- Robots --}}
    <meta name="robots" content="index, follow">

    {{-- Primary meta description (server-rendered for SEO) --}}
    <meta name="description" content="{{ $currentDescription }}">

    {{-- Canonical URL --}}
    <link rel="canonical" href="{{ $currentUrl }}">

    {{-- Hreflang alternates (both pages declare both languages) --}}
    <link rel="alternate" href="https://sanaaalyemen.site/" hreflang="en-CA">
    <link rel="alternate" href="https://sanaaalyemen.site/ar" hreflang="ar">
    <link rel="alternate" href="https://sanaaalyemen.site/" hreflang="x-default">

    {{-- Open Graph --}}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="{{ $isArabic ? 'مطعم صنعاء اليمن' : 'Sanaa Alyemen' }}">
    <meta property="og:url" content="{{ $currentUrl }}">
    <meta property="og:title" content="{{ $currentTitle }}">
    <meta property="og:description" content="{{ $currentDescription }}">
    <meta property="og:image" content="https://sanaaalyemen.site/og-image.jpg">
    <meta property="og:locale" content="{{ $isArabic ? 'ar' : 'en_CA' }}">
    <meta property="og:locale:alternate" content="{{ $isArabic ? 'en_CA' : 'ar' }}">

    {{-- Twitter --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $currentTitle }}">
    <meta name="twitter:description" content="{{ $currentDescription }}">
    <meta name="twitter:image" content="https://sanaaalyemen.site/og-image.jpg">

    {{-- Theme colors --}}
    <meta name="theme-color" content="#ed7f11" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#0f0f10" media="(prefers-color-scheme: dark)">
    <meta name="color-scheme" content="light dark">

    {{-- Icons / PWA --}}
    <link rel="icon" href="/favicon-48x48.png?v=2" sizes="48x48">
    <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml">
    <link rel="icon" href="/favicon.ico?v=2" sizes="any">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2">
    <link rel="manifest" href="/site.webmanifest">

    {{-- Fonts --}}
    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    {{-- Preload logo --}}
    <link
      rel="preload"
      as="image"
      href="/logo.png"
      imagesizes="(max-width: 768px) 128px, 256px"
      imagesrcset="/logo.png 256w"
    >

    {{-- Global JSON-LD restaurant schema --}}
    @php
      $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'Restaurant',
        'name' => [
          'Sanaa Alyemen',
          'مطعم صنعاء اليمن',
        ],
        'alternateName' => "Sana'a Alyemen Restaurant",
        'url' => 'https://sanaaalyemen.site/',
        'logo' => 'https://sanaaalyemen.site/logo.png',
        'image' => 'https://sanaaalyemen.site/og-image.jpg',
        'telephone' => '+14378767773',
        'email' => 'info@sanaaalyemen.site',
        'address' => [
          '@type' => 'PostalAddress',
          'addressCountry' => 'CA',
        ],
        'servesCuisine' => ['Yemeni', 'Middle Eastern', 'يمني', 'شرق أوسطي'],
        'sameAs' => [
          // Add social URLs when ready: Facebook, Instagram, Google Maps
        ],
      ];
    @endphp
    <script type="application/ld+json">
      {!! json_encode($schema, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES) !!}
    </script>

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
  </head>
  <body class="font-sans antialiased">
    @inertia
  </body>
</html>
