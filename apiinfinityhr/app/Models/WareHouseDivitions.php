<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WareHouseDivitions extends Model
{
    protected $table = 'warehousedivitions';
    protected $fillable = [
        'id_warehouseItems',
        'expire',
        'quantity',
        'sscc'
    ];
}
