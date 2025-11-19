<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLocaleFromUrl
{
    public function handle(Request $request, Closure $next)
    {
        // Very simple rule: /ar = Arabic, everything else = English
        $firstSegment = $request->segment(1);

        $locale = $firstSegment === 'ar' ? 'ar' : 'en';

        app()->setLocale($locale);

        return $next($request);
    }
}
