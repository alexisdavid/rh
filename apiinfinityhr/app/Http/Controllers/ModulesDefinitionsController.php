<?php

namespace App\Http\Controllers;

use App\Models\Modules_definitions;
use Illuminate\Http\Request;

class ModulesDefinitionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Modules_definitions  $modules_definitions
     * @return \Illuminate\Http\Response
     */
    public function show(Modules_definitions $modules_definitions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Modules_definitions  $modules_definitions
     * @return \Illuminate\Http\Response
     */
    public function edit(Modules_definitions $modules_definitions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Modules_definitions  $modules_definitions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Modules_definitions $modules_definitions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Modules_definitions  $modules_definitions
     * @return \Illuminate\Http\Response
     */
    public function destroy(Modules_definitions $modules_definitions)
    {
        //
    }

    /**
     * traer modulo a los que tiene acceso el usuario por id.
     *
     * @param  \App\Models\Modules_definitions  $modules_definitions
     * @return \Illuminate\Http\Response
     */
    public function getModules(Request $request)
    {

        $modulos = Modules_definitions::where('active','=',1)->orderBy('orden', 'ASC')->get();
      
        $data=[];
        foreach ($modulos as $key => $modulo) {
            $submodulosP=DB::table('user_access as u')
            ->select('sm.*')
            ->join('sub_modules_definitions as sm','sm.id_submodule', '=','u.id_submodule')
            ->where('sm.id_module','=',$modulo['id_modulo'])
            ->where('u.id_user','=',$request->id)
            ->where('u.lectura','=',1)
            ->orderBy('orden', 'ASC')
            ->get();
            if (count($submodulosP)) {
               foreach ($submodulosP as $keyP => $subP) {
                   if ($subP->identificador==1) {
                       $items = DB::table('submodulositem as si')
                       ->join('user_accessitem as ua','ua.id_submoduleItem','=','si.id_subModulosList')
                       ->where('si.id_submodule','=', $subP->id_submodule)
                       ->where('ua.id_user','=',$request->id)
                       ->where('ua.lectura','=',1)
                       ->get();
                      $subP->items= $items;
                   }
               }
            }
            $modulo['submodulos']=$submodulosP;

        }
       $data = $modulos;

        return response()->json(['success' => true, 'data' => $data, 'empty' => false], 200);
    }
}
