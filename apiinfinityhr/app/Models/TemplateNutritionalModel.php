<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TemplateNutritionalModel extends Model
{
    protected $table = 'nutritional_template';

    protected $fillable = [
        'id_template',
        'ingredients',
        'sugar_content',
        'net_content_item',
        'box_net_content',
        'warnings',
        'portion_size',
        'portion_per_container',
        'calories_per_serving',
        'protein_serving',
        'fat_per_serving',
        'saturatedFat_per_serving',
        'carbs_per_serving',
        'sugars_per_serving',
        'addedSugars_per_serving',
        'DietaryFiber_Serving',
        'sodium_serving',
        'polyols',
        'vitaminA_serving',
        'vitaminC_serving',
        'iron_serving',
        'calcium_serving',
        'box_length',
        'box_depth',
        'box_height',
        'display_length',
        'display_depth',
        'display_height',
        'exhibitArea_Length',
        'depthDisplay_area',
        'heightExhibition_areas',
        'displayAreaShape',
        'piece_length',
        'depth_piece',
        'height_piece',
        'masterBox_volume',
        'masterBox_weight',
        'volume_display',
        'display_weight',
        'pallets_box',
        'pallet_bed',
        'totalBox_pallet',
        'low_fat',
        'fat_free',
        'fluten__free',
        'organic',
        'vegetarian',
        'vegan',
        'kosher',
        'no_egg',
        'no_milk',
        'no_msg',
        'no_nuts'
    ];
}
