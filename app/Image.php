<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'file'
    ];
    protected $uploads = '/images/';

    public function getFileAttribute($photo)
    {
        return $this->uploads . $photo;
    }
}
