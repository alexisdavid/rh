<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AttachmentCreditoModel extends Model
{
    protected $table = 'purchase_credit_memo_attachments';
    
    public $primaryKey = 'id_nota';
}
