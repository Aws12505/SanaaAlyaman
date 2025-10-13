<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
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

    {{-- Title: Inertia controls this; default here is a sensible fallback --}}
    <title inertia>{{ config('app.name', 'Sanaa Alyemen') }}</title>

    {{-- Canonical (page-level Head can override) --}}
    <link rel="canonical" href="https://sanaaalyemen.site/">

    {{-- Indexable by default --}}
    <meta name="robots" content="index, follow">

    {{-- Default SEO (page can override) --}}
    <meta name="description" content="Sanaa Alyemen — authentic Yemeni cuisine. Our new website is coming soon.">
    <meta name="author" content="Sanaa Alyemen">

    {{-- Open Graph defaults (page can override) --}}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Sanaa Alyemen">
    <meta property="og:url" content="https://sanaaalyemen.site/">
    <meta property="og:title" content="Sanaa Alyemen — Coming Soon">
    <meta property="og:description" content="We’re cooking up something special. Contact us while we prepare our launch.">
    <meta property="og:image" content="https://sanaaalyemen.site/og-image.jpg">

    {{-- Twitter defaults --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Sanaa Alyemen — Coming Soon">
    <meta name="twitter:description" content="Authentic Yemeni cuisine. Opening soon — contact us for inquiries.">
    <meta name="twitter:image" content="https://sanaaalyemen.site/og-image.jpg">

    {{-- Theme colors for light/dark --}}
    <meta name="theme-color" content="#ed7f11" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#0f0f10" media="(prefers-color-scheme: dark)">
    <meta name="color-scheme" content="light dark">

    {{-- Icons / PWA (optional manifest) --}}
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">

    {{-- Performance: preconnect & font CSS --}}
    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    {{-- Performance: preload critical image (logo) --}}
    <link rel="preload" as="image" href="/logo.png" imagesizes="(max-width: 768px) 128px, 256px" imagesrcset="/logo.png 256w">

    {{-- Business/Restaurant JSON-LD for rich results --}}
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Sanaa Alyemen",
      "url": "https://sanaaalyemen.site/",
      "logo": "https://sanaaalyemen.site/logo.png",
      "image": "https://sanaaalyemen.site/og-image.jpg",
      "telephone": "+14378767773",
      "email": "info@sanaaalyemen.site",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CA"
      },
      "servesCuisine": ["Yemeni", "Middle Eastern"],
      "sameAs": []
    }
    </script>

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
  </head>
  <body class="font-sans antialiased">
    @inertia
  </body>
</html>
