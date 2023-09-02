<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KaanbanBoardCard extends Model
{
    protected $table = 'cardskaanban';

    protected $fillable = [	'id_columnkaanban',	'title',	'description','id_card'];	

}
