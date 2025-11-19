<!DOCTYPE html>
<html
  lang="{{ str_replace('_', '-', app()->getLocale()) }}"
  @class(['dark' => ($appearance ?? 'system') == 'dark'])
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

    {{-- Title via Inertia; fallback provided --}}
    <title inertia>{{ config('app.name', 'Sana\'a Alyemen Restaurant') }}</title>

    {{-- NOTE: canonical & robots now handled per-page in Inertia <Head> --}}
    {{-- So we do NOT put a fixed canonical or robots meta here. --}}

    {{-- Default SEO description (can be overridden in pages) --}}
    <meta name="description" content="Sana'a Alyemen Restaurant — authentic Yemeni cuisine. Our new website is coming soon.">
    <meta name="author" content="Sana'a Alyemen Restaurant">

    {{-- Open Graph defaults (can be overridden by page-level meta) --}}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Sana'a Alyemen Restaurant">
    <meta property="og:title" content="Sana'a Alyemen Restaurant — Coming Soon">
    <meta property="og:description" content="We’re cooking up something special. Contact us while we prepare our launch.">
    <meta property="og:image" content="https://sanaaalyemen.site/og-image.jpg">

    {{-- Minimal Twitter (safe to remove if you don't want it) --}}
    <meta name="twitter:card" content="summary_large_image">

    {{-- Theme colors for light/dark --}}
    <meta name="theme-color" content="#ed7f11" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#0f0f10" media="(prefers-color-scheme: dark)">
    <meta name="color-scheme" content="light dark">

    {{-- Icons / PWA --}}
    <link rel="icon" href="/favicon-48x48.png" sizes="48x48">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
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

    {{-- JSON-LD (built via PHP to avoid Blade @ parsing issues) --}}
    @php
      $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'Restaurant',
        // Support both English and Arabic naming
        'name' => [
          'Sanaa Alyemen',
          'مطعم صنعاء اليمن',
        ],
        'alternateName' => 'Sana\'a Alyemen Restaurant',
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
