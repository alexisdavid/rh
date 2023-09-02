<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImagesLabeledGestion extends Model
{
    protected $table = 'labelled_images';
    protected $fillable = [
        'image',
        'type',
        'updated_at', 
        'created_at'
    ];
}
