<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NationalPurchasesModel extends Model
{
    protected $table = 'national_purchases';
    protected $fillable = [
        'arrivate_dat',
        'status',
        'comments',
        'cardCode',
        'docCur',
        'docEntry',
        'docNum',
        'docTotal',
        'vatSum',
        'totalDoc',
        'DocDate',
        'DocDueDate',
        'NumAtCard',
       
    ];
    public function lines()
    {
        return $this->hasMany('App\NationalPurchasesLines','id_header','id');
    }
}
