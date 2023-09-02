<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ComparisonHeader extends Model
{
    protected $table = 'comparisonHeader';
    public function lines()
    {
        return $this->hasMany('App\ComparisonBody');
    }
}
