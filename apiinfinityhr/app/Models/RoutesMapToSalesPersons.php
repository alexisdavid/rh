<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoutesMapToSalesPersons extends Model
{
    protected $table = 'routesmaptosalespersons';
    protected $fillable=[
        'id',
        'code',
        'day',
        'comments',
        'fname',
        'inventory',
        'label',
        'latitude',
        'latitudeout',
        'longitude',
        'longitudeout',
        'name1',
        'num',
        'sent',
        'sentwpics',
        'slpCode',
        'slpname',
        'synctime1',
        'time1',
        'timeout1',
        'value',
        'numberList',
        'positionRoute',
        'current'
    ];
}
