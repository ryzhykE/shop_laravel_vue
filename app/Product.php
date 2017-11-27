<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'product', 'description', 'details', 'price', 'active', 'id_img'
    ];

    public function image()
    {
       return $this->belongsTo(Image::class);
    }

}
