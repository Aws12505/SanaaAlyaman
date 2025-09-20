<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Dish extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'ingredients',
        'allergen_info',
        'price',
        'images',
        'category_id',
        'is_signature',
        'is_featured',
        'is_available',
        'sort_order',
    ];

    protected $casts = [
        'images' => 'array',
        'price' => 'decimal:2',
        'is_signature' => 'boolean',
        'is_featured' => 'boolean',
        'is_available' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeAvailable($query)
    {
        return $query->where('is_available', true);
    }

    public function scopeSignature($query)
    {
        return $query->where('is_signature', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    public function getMainImageAttribute(): ?string
    {
        return $this->images[0] ?? null;
    }
}
