<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KaanbanBoardModel extends Model
{
    protected $table = 'columnkaanban';

    protected $fillable = [
       	'title',	'id_user'
    ];	

}
