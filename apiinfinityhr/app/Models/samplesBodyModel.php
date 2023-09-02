<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SamplesBodyModel extends Model
{
    protected $table = 'sample_body';
    public $primaryKey = 'uuid_body';
}
