<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormatsBodyModel extends Model
{
    protected $table = 'exchange_body';
    public $primaryKey = 'uuid_body';
}
