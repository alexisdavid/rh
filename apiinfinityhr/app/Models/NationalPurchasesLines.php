<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NationalPurchasesLines extends Model
{
    protected $table = 'national_purchases_lines';
    protected $fillable = [
        'currency',
        'id_header',
        'docEntry',
        'itemCode',
        'lineNum',
        'lineTotal',
        'price',
        'quantity',
    ];
}
