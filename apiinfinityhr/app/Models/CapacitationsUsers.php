<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CapacitationsUsers extends Model
{
  protected $table = 'CapacitationsUsers';
  protected $fillable = [
    'idCapacitation', 'idPersonal', 'dateOfCapacitation',
  ];
}
