<!DOCTYPE html>
<html
  lang="{{ str_replace('_', '-', app()->getLocale()) }}"
  @class(['dark' => ($appearance ?? 'system') == 'dark'])
  @if(app()->getLocale() === 'ar') dir="rtl" @endif
>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="geo.region" content="CA-ON" />
    <meta name="geo.placename" content="Mississauga" />
    <meta name="geo.position" content="43.5890;-79.6441" />
    <meta name="ICBM" content="43.5890, -79.6441" />

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
      $enTitle = 'Sanaa Alyemen Restaurant | Authentic Yemeni Food in Mississauga, Canada';
      $enDescription = 'Experience authentic Yemeni cuisine at Sanaa Alyemen Restaurant in Mississauga. Traditional dishes prepared with finest local ingredients and aromatic spices. Located at 2121 Dundas St E, Mississauga ON L4X 1M3. Call 905-624-7220 for delivery & reservations.';
      $enUrl = 'https://sanaaalyemen.site/';

      // AR SEO
      $arTitle = 'مطعم صنعاء اليمن | مطبخ يمني أصيل في ميسيساجا، كندا';
      $arDescription = 'استمتع بالمطبخ اليمني الأصيل في مطعم صنعاء اليمن في ميسيساجا. أطباق تقليدية مُعدة بأجود المكونات المحلية والتوابل العطرية. موقعنا: 2121 Dundas St E، ميسيساجا ON L4X 1M3. اتصل على 905-624-7220 للتوصيل والحجوزات.';
      $arUrl = 'https://sanaaalyemen.site/ar';

      $currentTitle = $isArabic ? $arTitle : $enTitle;
      $currentDescription = $isArabic ? $arDescription : $enDescription;
      $currentUrl = $isArabic ? $arUrl : $enUrl;
    @endphp

    {{-- Title controlled by Inertia (fallback set here) --}}
    <title inertia>{{ $currentTitle }}</title>

    {{-- Robots --}}
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

    {{-- Primary meta description (server-rendered for SEO) --}}
    <meta name="description" content="{{ $currentDescription }}">

    {{-- Keywords --}}
    @if($isArabic)
    <meta name="keywords" content="مطعم يمني ميسيساجا, مطبخ يمني أصيل كندا, مطعم شرق أوسطي ميسيساجا, مأكولات يمنية تورنتو, مطعم حلال ميسيساجا, أطباق يمنية تقليدية, صنعاء اليمن, أفضل مطعم يمني أونتاريو, مطعم يمني في كندا, طعام يمني حلال">
    @else
    <meta name="keywords" content="Yemeni restaurant Mississauga, authentic Yemeni food Canada, Middle Eastern restaurant Mississauga, Yemeni cuisine Toronto, halal restaurant Mississauga, traditional Yemeni dishes, Sana'a Al Yemen, best Yemeni restaurant Ontario, Yemeni food Canada, halal dining Mississauga">
    @endif

    {{-- Canonical URL --}}
    <link rel="canonical" href="{{ $currentUrl }}">

    {{-- Hreflang alternates (both pages declare both languages) --}}
    <link rel="alternate" href="https://sanaaalyemen.site/" hreflang="en-CA">
    <link rel="alternate" href="https://sanaaalyemen.site/ar" hreflang="ar">
    <link rel="alternate" href="https://sanaaalyemen.site/" hreflang="x-default">

    {{-- Open Graph --}}
    <meta property="og:type" content="restaurant">
    <meta property="og:site_name" content="{{ $isArabic ? 'مطعم صنعاء اليمن' : 'Sanaa Alyemen Restaurant' }}">
    <meta property="og:url" content="{{ $currentUrl }}">
    <meta property="og:title" content="{{ $currentTitle }}">
    <meta property="og:description" content="{{ $currentDescription }}">
    <meta property="og:image" content="https://sanaaalyemen.site/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="{{ $isArabic ? 'ar_AR' : 'en_CA' }}">
    <meta property="og:locale:alternate" content="{{ $isArabic ? 'en_CA' : 'ar_AR' }}">
    <meta property="restaurant:contact_info:street_address" content="2121 Dundas St E">
    <meta property="restaurant:contact_info:locality" content="Mississauga">
    <meta property="restaurant:contact_info:region" content="ON">
    <meta property="restaurant:contact_info:postal_code" content="L4X 1M3">
    <meta property="restaurant:contact_info:country_name" content="Canada">

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

    {{-- Enhanced JSON-LD restaurant schema --}}
    @php
      $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'Restaurant',
        '@id' => 'https://sanaaalyemen.site/#restaurant',
        'name' => $isArabic ? 'مطعم صنعاء اليمن' : 'Sanaa Alyemen Restaurant',
        'alternateName' => [
          "Sana'a Alyemen Restaurant",
          'Sanaa Al Yemen',
          'مطعم صنعاء اليمن'
        ],
        'description' => $currentDescription,
        'url' => 'https://sanaaalyemen.site/',
        'logo' => 'https://sanaaalyemen.site/logo.png',
        'image' => [
          'https://sanaaalyemen.site/og-image.jpg',
          'https://sanaaalyemen.site/logo.png'
        ],
        'telephone' => '+1-905-624-7220',
        'email' => 'info@sanaaalyemen.site',
        'priceRange' => '$$',
        'address' => [
          '@type' => 'PostalAddress',
          'streetAddress' => '2121 Dundas St E',
          'addressLocality' => 'Mississauga',
          'addressRegion' => 'ON',
          'postalCode' => 'L4X 1M3',
          'addressCountry' => 'CA',
        ],
        'geo' => [
          '@type' => 'GeoCoordinates',
          'latitude' => '43.5890',
          'longitude' => '-79.6441',
        ],
        'servesCuisine' => [
          'Yemeni',
          'Middle Eastern',
          'يمني',
          'شرق أوسطي',
          'Arabic',
          'Halal'
        ],
        'menu' => 'https://sanaaalyemen.site/#menu',
        'acceptsReservations' => 'True',
        'openingHoursSpecification' => [
          '@type' => 'OpeningHoursSpecification',
          'dayOfWeek' => [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
        ],
        'sameAs' => [
          // Add social URLs when ready
        ],
        'hasMenu' => [
          '@type' => 'Menu',
          '@id' => 'https://sanaaalyemen.site/#menu',
          'name' => $isArabic ? 'قائمة الطعام' : 'Menu',
        ],
        'potentialAction' => [
          [
            '@type' => 'ReserveAction',
            'target' => [
              '@type' => 'EntryPoint',
              'urlTemplate' => 'tel:+19056247220',
              'actionPlatform' => [
                'http://schema.org/DesktopWebPlatform',
                'http://schema.org/MobileWebPlatform'
              ]
            ],
            'result' => [
              '@type' => 'Reservation',
              'name' => $isArabic ? 'حجز طاولة' : 'Table Reservation'
            ]
          ],
          [
            '@type' => 'OrderAction',
            'target' => [
              '@type' => 'EntryPoint',
              'urlTemplate' => 'tel:+19056247220',
              'actionPlatform' => [
                'http://schema.org/DesktopWebPlatform',
                'http://schema.org/MobileWebPlatform'
              ]
            ],
            'deliveryMethod' => 'http://purl.org/goodrelations/v1#DeliveryModeOwnFleet'
          ]
        ]
      ];
    @endphp
    <script type="application/ld+json">
      {!! json_encode($schema, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT) !!}
    </script>

    {{-- BreadcrumbList Schema --}}
    @php
      $breadcrumbSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'BreadcrumbList',
        'itemListElement' => [
          [
            '@type' => 'ListItem',
            'position' => 1,
            'name' => $isArabic ? 'الصفحة الرئيسية' : 'Home',
            'item' => $currentUrl
          ]
        ]
      ];
    @endphp
    <script type="application/ld+json">
      {!! json_encode($breadcrumbSchema, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES) !!}
    </script>

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
  </head>
  <body class="font-sans antialiased">
    @inertia
  </body>
</html>
