<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PackingList extends Model
{
    protected $table='embarquespakinglist';
    protected $fillable = [
        'carrierName',
        'deliveryDate',
        'appointment',
        'appointmentDate',
        'id_sscc',
        'shippingNumber'
    ];
}
