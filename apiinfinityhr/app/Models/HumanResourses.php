<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HumanResourses extends Model
{
    protected $table = 'personal_hanana';
    protected $fillable = [
        'name',
        'lastName',
        'activo',
        'id_check',
        'created_at',
        'updated_at',
        'direction',
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
        'antiquity',
        'inmBoss',
        'wArea',
        'infonavit',
        'numCart',
        'company',
        'idLicNum',
        'documents',
        'documentsCompany',
        'removeColaborator'
    ];
}
