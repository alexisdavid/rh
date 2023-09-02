<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WarehouseLoadInstructions extends Model
{//
    protected $table = 'warehouse_loadinstructions';
    protected $fillable = [
        'blnumber',
        'booking_number',
        'carrier_name',
        'comments',
        'destiny',
        'eta',
        'etd',
        'fecha',
        'origen',
        'container'
    ];
}
