<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DocumentosModel extends Model
{
    protected $table = 'documentos';
    public $primaryKey = 'id_documento';
}
