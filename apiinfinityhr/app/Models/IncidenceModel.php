<?php

// Gerson Gomez 11/05/2022

namespace App;

use Illuminate\Database\Eloquent\Model;

class IncidenceModel extends Model
{
    protected $table = 'incidences';

    protected $fillable = [
        'eventDate',
        'noConformity',
        'responsible',
        'correctiveAction',
        'commitmentDate',
        'alertDate',
        'status',
        'startEvidence',
        'finalEvidence',
        'comments'
    ];
}