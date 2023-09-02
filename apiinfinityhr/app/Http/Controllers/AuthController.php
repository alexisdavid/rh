<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserAccess;
use App\Models\Sub_modules_definitions;
use App\Models\Modules_definitions;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use DB;
class AuthController extends Controller
{
    public function register(Request $request){

        $data = array(
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
           
        );

        $validator = Validator::make($data, [
            'name' => 'required|string|max:50',
            'email' => 'required|email|max:80|unique:users',
            'password' => 'required|string|min:8'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();

            return response()->json(['success' => false, 'error' => $errors], 200);

        }

        //se crea el usuario en la base de datos
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        //se crea token de acceso personal para el usuario
        $token = $user->createToken('auth_token')->plainTextToken;

        //se devuelve una respuesta JSON con el token generado y el tipo de token
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }
    public function login(Request $request)
    {

        $password = $request->password;
        $codigo = $request->email;
        $user = User::where('UserCode', $codigo)->firstOrFail();
     
         if (!Hash::check($password, $user->Password)) {
            return response()->json([ 'message' => 'Invalid access credentials' ], 401);
         }

         $home= $this->getHome($user->UserId);
         $permisos= $this->getModules($user->UserId);
         //Genera un nuevo token para el usuario
         $token = $user->createToken('auth_token')->plainTextToken;
         
         //devuelve una respuesta JSON con el token generado y el tipo de token
         return response()->json([ 'access_token' => $token,'token_type' => 'Bearer','user' => $user,'home' =>$home,'permisos'=>$permisos],200);

    }
    public function dataUser(Request $request){
       
        $user = Auth::user();
        return response()->json(['data'=>$request->user()], 200);
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }

    public function getModules($id)
    {
        $modulos = Modules_definitions::where('active','=',1)->orderBy('orden', 'ASC')->get();
      
        $data=[];
        foreach ($modulos as $key => $modulo) {
            $submodulosP=DB::table('user_access as u')
            ->select('sm.*')
            ->join('sub_modules_definitions as sm','sm.id_submodule', '=','u.id_submodule')
            ->where('sm.id_module','=',$modulo['id_modulo'])
            ->where('u.id_user','=',$id)
            ->where('u.lectura','=',1)
            ->orderBy('orden', 'ASC')
            ->get();
            if (count($submodulosP)) {
               foreach ($submodulosP as $keyP => $subP) {
                   if ($subP->identificador==1) {
                       $items = DB::table('submodulositem as si')
                       ->join('user_accessitem as ua','ua.id_submoduleItem','=','si.id_subModulosList')
                       ->where('si.id_submodule','=', $subP->id_submodule)
                       ->where('ua.id_user','=',$id)
                       ->where('ua.lectura','=',1)
                       ->get();
                      $subP->items= $items;
                   }
               }
            }
            $modulo['submodulos']=$submodulosP;

        }
       $data = $modulos;
       return $data;

    }
    public function getHome($id) 
    {
        $home= UserAccess::join('sub_modules_definitions as sm','sm.id_submodule','=','user_access.id_submodule')
        ->where('user_access.id_user', '=', $id)
        ->where('user_access.lectura', '=', 1)
        ->where('user_access.principal','=',1)
        ->get();
        
        return $home;
    }

}
