<!DOCTYPE html>
<html
  lang="{{ str_replace('_', '-', app()->getLocale()) }}"
  @class(['dark' => ($appearance ?? 'system') == 'dark'])
  @if(app()->getLocale() === 'ar') dir="rtl" @endif
>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Apply system dark mode immediately to avoid flash --}}
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

    {{-- Title controlled by Inertia pages --}}
    <title inertia>{{ config('app.name', "Sanaa Alyemen Restaurant") }}</title>

    {{-- IMPORTANT:
         Do NOT put canonical, robots, description, OG, or Twitter meta here.
         Those are defined PER PAGE via Inertia <Head> in your React components.
    --}}

    {{-- Theme colors for light/dark --}}
    <meta name="theme-color" content="#ed7f11" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#0f0f10" media="(prefers-color-scheme: dark)">
    <meta name="color-scheme" content="light dark">

    {{-- Icons / PWA (with cache-busting query params for browsers) --}}
    <link rel="icon" href="/favicon-48x48.png?v=2" sizes="48x48">
    <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml">
    <link rel="icon" href="/favicon.ico?v=2" sizes="any">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2">
    <link rel="manifest" href="/site.webmanifest">

    {{-- Performance: preconnect & font CSS --}}
    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    {{-- Performance: preload critical image (logo) --}}
    <link
      rel="preload"
      as="image"
      href="/logo.png"
      imagesizes="(max-width: 768px) 128px, 256px"
      imagesrcset="/logo.png 256w"
    >

    {{-- JSON-LD (global restaurant schema) --}}
    @php
      $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'Restaurant',
        // Support both English and Arabic naming
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
          // Add social profiles when ready, e.g. Facebook, Instagram, Google Maps URL
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
