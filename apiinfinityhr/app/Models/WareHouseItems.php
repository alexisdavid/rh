<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WareHouseItems extends Model
{
    protected $table = 'wareHouseItems';
    protected $fillable=[
        'ItemCode',
        'id_warehouse',
        'Dscription',
        'Quantity',
        'DocEntry',
        'VendorNum',
        'CodeBars',
        'unitMsr',
        'TaxCode',
        'Price',
        'NumPerMsr',
        'INMPrice',
        'TotalFrgn',
        'codeSat',
        'multiplo',
        'divition',
        'skuSup',
        'sscc',
        'expireDate',
        'positions',
    ];
}
