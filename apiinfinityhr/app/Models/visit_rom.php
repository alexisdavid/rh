<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Visit_rom extends Model
{
    protected $table = 'visit_rom';
   
    public function photos()
    {
        return $this->hasMany('App\Visit_rom_photo');
    }
}
