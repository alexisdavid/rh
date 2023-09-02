<?php

namespace App\Http\Controllers;

use App\DepartmentsModel;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DepartmentsController extends Controller
{
    public function index()
    {
        $department = DB::table('usrdepartment as ud')->select('ud.*')->orderBy('ud.iddepartment', 'desc')->get();

        $data = array('Department' => $department);
        return response()->json(['success' => true, 'datos' => $data], 200);
    }

    public function saveDepartment(Request $request)
    {
        $data = array(
            'description' => $request->descripcion,
            'Active' => $request->activo,
        );
        // return response()->json(['success' => true, 'message' => 'datos almacenados con exito','empty'=>$data], 200);

        $validator = Validator::make($data, [

            'description' => 'required',
            'Active' => 'required|int',

        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['success' => false, 'error' => $errors], 200);

        } else {
            $department = new DepartmentsModel();
            $department->description = $data['description'];
            $department->Active = $data['Active'];

            $department->save();

            return response()->json(['success' => true, 'message' => 'datos almacenados con exito', 'empty' => 'false'], 200);
        }

    }
    // delete or desactivate user
    public function desactivate(Request $request)
    {
        try {
            $departamt = DepartmentsModel::findOrFail($request->id);
            $departamt->Active = $request->activo;
            $departamt->save();
            return response()->json(['success' => true, 'datos' => 'SIN DATOS'], 200);

            //
        } catch (\Exception $e) {

            return response()->json(['success' => false, 'datos' => 'not found'], 200);

        }
    }

    public function update(Request $request)
    {
        //
        $department = DepartmentsModel::findOrFail($request->id);

        $data = array(
            'description' => $request->descripcion,
            'Active' => $request->activo,

        );

        $validator = Validator::make($data, [

            'description' => 'required',
            'Active' => 'required',
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['success' => false, 'error' => $errors], 200);

        } else {

            $department->description = $data['description'];
            $department->Active = $data['Active'];

            $department->save();
            return response()->json(['success' => true, 'error' => 'false'], 200);
        }

    }
}
