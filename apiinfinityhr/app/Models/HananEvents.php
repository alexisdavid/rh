<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HananEvents extends Model
{
   protected $table = 'hanan_events';
   protected $fillable=[
      'type', 'title', 'startdate', 'enddate', 'comments', 'color', 'aditionals','id_capacitation'
   ];
}
