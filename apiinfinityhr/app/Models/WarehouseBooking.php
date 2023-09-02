<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WarehouseBooking extends Model
{
    protected $table = 'warehouse_booking';
    protected $fillable = [
        'id_wareHouse',
        'id_wareHouseItem',
        'booking_number',
        'blnumber',
        'arrivateDate',
        'departureDate',
        'generalComments',
        'comments'
    ];
}
