<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SSCCS extends Model
{
    protected $table = 'embarques_ordenes_sccss';
    public $primaryKey = 'id';
    protected $fillable = [ 'id_header', 'sscc' ,'lote'];

   


}
