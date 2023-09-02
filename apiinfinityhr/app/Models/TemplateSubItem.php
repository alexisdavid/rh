<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TemplateSubItem extends Model
{
   public $table='template_subitem';
   protected $fillable=[
        'id_template',
        'name',
        'ingredients',
        'warnings',
        'sugar_content',
        'net_content_item',
        'box_net_content',
        'portion_size',
        'portion_per_container',
        'calories_per_serving',
        'protein_serving',
        'fat_per_serving',
        'saturatedFat_per_serving',
        'fatTrans',
        'carbs_per_serving',
        'sugars_per_serving',
        'addedSugars_per_serving',
        'DietaryFiber_Serving',
        'sodium_serving',
        'polyols',
        'vitaminA_serving',
        'vitaminC_serving',
        'iron_serving',
        'calcium_serving'
    ];
}
