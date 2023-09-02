<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VacationsModel extends Model
{
    protected $table = 'vacation_hanan';
    protected $fillable = ['id_empleado','start','end','type','comments','payment_request','payment_Date','taken' ];
}
