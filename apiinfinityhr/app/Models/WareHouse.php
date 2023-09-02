<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WareHouse extends Model
{
    protected $table = 'warehouse';
    protected $fillable = [
        'CardCode',
        'CardName',
        'DiscSumFC',
        'DocCur',
        'DocDate',
        'DocDueDate',
        'DocEntry',
        'DocNum',
        'DocStatus',
        'NumAtCard',
        'comments',
        'impuesto',
        'qty',
        'realTimeDelivey',
        'refWhs',
        'refPlanta',
        'subtotal',
        'timeDeliveyEstimated',
        'total',
       
    ];
}
