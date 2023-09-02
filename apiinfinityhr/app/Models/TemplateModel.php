<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TemplateModel extends Model
{
   protected $table = 'products_template';

   protected $fillable = [
      'type',
      'catalogNumber',
      'imkomDescription',
      'codeSAP',
      'description',
      'codebars',
      'displayBarcode',
      'boxBarcode',
      'manufacturer',
      'itemManagement',
      'codeSAT',
      'defaultProvider',
      'defaultProviderIMKOM',
      'unitMesurePurchase',
      'unitsByMeasurePurchase',
      'purchasesTaxesImkom',
      'salesTaxesImkom',
      'purchasesTaxesHanan',
      'salesTaxesHanan',
      'nameUnitMeasure',
      'quantityUnitMeasure',
      'descriptionNOM',
      'brand',
      'multipleOrder',
      'minimumOrder',
      'visualizarIpad',
      'planograma',
      'pmxUnitMeasure',
      'pmxCaducity',
      'pmxCodTypePackage',
      'traductionPediment',
      'fraccionArancelaria',
      'origenCountry',
      'origenCountryTwo',
      'viewValogix',
      'nafta',
      'planningCode',
      'serviceLevel',
      'preparation'
   ];
}
