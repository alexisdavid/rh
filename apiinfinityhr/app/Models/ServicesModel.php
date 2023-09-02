<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServicesModel extends Model
{
    protected $table = 'repair_pendings';
    public $primaryKey = 'id';
}
