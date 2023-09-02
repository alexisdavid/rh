<?php

namespace App\Models;
use CapacitationsUsers;
use Illuminate\Database\Eloquent\Model;

class Capacitations extends Model
{
    protected $table = 'capacitationshanan';
    protected $fillable = ['nameCapacitation', 'hours','category', 'description','instructor'];
  
  
}
