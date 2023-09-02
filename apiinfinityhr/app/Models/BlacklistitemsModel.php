<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlacklistitemsModel extends Model
{
    protected $table = 'blacklistitems';
    protected $fillable = ['cardCode','Pdv','itemCode','created_at','updated_at' 	];
}
