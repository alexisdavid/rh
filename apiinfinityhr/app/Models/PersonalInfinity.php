<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInfinity extends Model
{
    use HasFactory;
    protected $table = 'personal_hanana';
    protected $fillable = [
        'actualContract',
        'dateContractFinish',
        'name',                       
        'lastName',                       
        'activo',                       
        'id_check',                      
        'direction',                       
        'cp',                       
        'phone',                       
        'birthday',                       
        'rfc',                       
        'curp',                       
        'nss',                       
        'school',                       
        'ine',                       
        'alergist',                       
        'personalContact',                       
        'phoneContact',                       
        'empresa',                       
        'puesto',                       
        'ingreso',                       
        'id_empleado',                       
        'inmBoss',                       
        'wArea',                       
        'infonavit',                       
        'numCart',                       
        'company',                       
        'idLicNum',                       
        'documents',  
        'contracts',                     
        'documentsCompany',                       
        'removeColaborator',
        'img',
        'numExt'                       
    ];
}
