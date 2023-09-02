<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
class LiverpoolHeader extends Model
{
    protected $table = 'liverpool_orders';


    public function order_lines()
    {
        return $this->hasMany('App\LiverpoolLinesRfid','id_header','id');
    }




    
    public function lists($id)
    {
        $listas = LiverpoolBoardingList::where('active',1)->get();
    
        foreach ($listas as $key => $lista) {
            $groupList = DB::table('liverpool_boarding_products as lbp')
            ->select('llr.store_number','ls.nombre','llr.rfid','llr.quantity','llr.bar_code','llr.itemCode','pi.ItemName','llr.order_number')
            ->join('products_inventory as pi','pi.ItemCode','=','lbp.itemCode')
            ->join('liverpool_lines_rfid as llr','llr.itemCode', '=', 'lbp.itemCode')
            ->join('liverpool_stores as ls','ls.id','=','llr.store_number')
            ->where('llr.id_header',$id)
            ->where('lbp.id_lista', '=', $lista['id'])->orderBy('llr.itemCode','asc')->orderBy('llr.store_number','asc')->get();
           
            $lista['items']=$groupList;
        }
        return $listas;
    }
}
