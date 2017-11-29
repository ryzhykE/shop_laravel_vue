<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'details', 'price', 'discount','active', 'image_id'
    ];

    public function image()
    {
        return $this->belongsTo(Image::class);
    }
}
