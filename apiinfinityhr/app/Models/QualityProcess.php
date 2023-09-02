<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QualityProcess extends Model
{
    protected $table = 'qualityprocess';
    protected $fillable=  [
        'id',
        'id_list',
        'item_code',
        'id_listProduct',
        'id_user',
        'comments',
        'sscc',
        'testDate',
        'valid'
    ];
}
