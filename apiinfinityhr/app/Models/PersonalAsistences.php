<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PersonalAsistences extends Model
{
    protected $table = 'personal_asistences';
    protected $fillable = [
        'idCheck',
         'time',
          'name',
          'type'
    ];
}
