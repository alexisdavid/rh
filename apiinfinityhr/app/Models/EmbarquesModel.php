<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SSCCS;

class EmbarquesModel extends Model
{
    protected $table = 'embarques_ordenes_compras';
    public $primaryKey = 'id';
    protected $fillable = [
     'BaseEntry',
     'CardCode',
     'CardName',
     'CodeBars',
     'DocDate',
     'DocDueDate',
     'DocEntry',
     'DocNum',
     'Dscription',
     'ItemCode',
     'LineNum',
     'NumAtCard',
     'OpenQty',
     'Quantity',
     'ShipToCode',
     'idShipToCode',
     'assignQuantity',
     'cheked',
     'oc',
     'selected',
     'ssccLbels',
     'type',
     'unitMsr',
     'identifier',
     'factura',
     'typedoc'
    ];
    
}
