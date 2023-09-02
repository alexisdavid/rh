<?php

namespace App;
use App\Traits\VerifyRules;
use Illuminate\Database\Eloquent\Model;

class NotasCreditoModel extends Model
{
    use VerifyRules;

    protected $table = 'purchases_credit_notes';
    public $primaryKey = 'id_nota';
}
