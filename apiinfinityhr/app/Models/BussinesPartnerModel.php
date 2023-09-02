<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BussinesPartnerModel extends Model
{
    protected $table = 'business_partners';
    public $primaryKey = 'id';
    protected $fillable = [
        'id',
        'codigo_cliente',
        'nombre',
        'nombre_ext',
        'moneda',
        'rfc',
        'idFiscalUnificado',
        'telefono',
        'telefono2',
        'movil',
        'email',
        'persona_contacto',
        'adr_fax1',
        'adr_strasse',
        'adr_zip',
        'adr_city',
        'adr_land',
        'adr_region',
        'adr_vertreternr4',
        'adr_rabattgruppe',
        'adr_aktiv',
        'adr_penetration',
        'listNum',
        'activo',
        'cardType',
        'propiedades',
        'vendedor1',
        'groupCode',
        'intrntSite',
        'groupNum',
        'embarque'
      ];
}
