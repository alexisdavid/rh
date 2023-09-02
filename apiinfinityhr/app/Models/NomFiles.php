<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NomFiles extends Model
{
    protected $table = 'nomfiles';
    protected $fillable = [
        'type', 
        'itemCode', 
        'fileName', 
        'size', 
        'localcode', 
        'adicionalSticker', 
        'comments'
    ];
}


