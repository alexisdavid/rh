<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PurchasesOrderModel extends Model
{
    protected $table = 'purchase_order';
    public $primaryKey = 'id';
}
