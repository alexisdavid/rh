<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PurchasesTagsModel extends Model
{
    protected $table = 'tags';
    public $primaryKey = 'value';
}
