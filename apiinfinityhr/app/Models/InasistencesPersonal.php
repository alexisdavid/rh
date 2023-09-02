<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InasistencesPersonal extends Model
{
   protected $table = 'inasistencespersonal';
   protected $fillable = [
    'id_persona',
    'comments',
    'dateInasistences'
   ];
}
