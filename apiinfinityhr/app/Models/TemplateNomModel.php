<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TemplateNomModel extends Model
{
    protected $table = 'nom_template';

    protected $fillable = [
        'id_template',
        'special_stamp'
    ];
}
