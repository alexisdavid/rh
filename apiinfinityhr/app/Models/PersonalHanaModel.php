<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PersonalHanaModel extends Model
{
    protected $table = 'personal_hanana';
    protected $fillable = [
        'actualContract',
        'dateContractFinish',
        'name',                       
        'lastName',                       
        'activo',                       
        'id_check',                       
        'created_at',                       
        'updated_at',                       
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

