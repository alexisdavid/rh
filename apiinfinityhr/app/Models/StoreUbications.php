<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StoreUbications extends Model
{


    protected $table = 'storeUbications';


    protected $fillable = [
        'valido',
        'cliente',
        'formato',
        'sucursal',
        'direccion',
        'ciudad',
        'estado',
        'numSucursal',
        'cp',
        'nabisco',
        'milka',
        'cadbury',
        'toblerone',
        'latitude',
        'longitude'
    ];
}
