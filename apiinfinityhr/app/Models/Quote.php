<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    protected $table = 'quote';
    public function lines()
    {
        return $this->hasMany('App\QuoteBody');
    }
}
