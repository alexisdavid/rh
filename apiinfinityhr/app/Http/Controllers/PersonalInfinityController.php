<?php

namespace App\Http\Controllers;

use App\Models\PersonalInfinity;
use App\Models\LabelingTag;
use App\Models\VacationsModel;
use App\Models\HananEvents;
use App\Http\Controllers\DepartmentsController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use DB;
class PersonalInfinityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=PersonalInfinity::where('activo',1)->get();

        return response()->json(['success' => true,'data' => $data ],200);
    }
    public function indexAdionales($id)
    {
       
        $departamentos= app(DepartmentsController::class)->index(); 
        $dep=json_decode($departamentos->content(), true);
        $datos=$dep['datos'];
        $data=[];
        foreach ($datos['Department'] as $key => $value) { array_push($data,array('label'=>$value['description'],'value'=>$value['iddepartment'])); }

        $tags=LabelingTag::where('active',1)->where('identificador',3)->select('tag as label','id as value')->get();
        $tagsBoss=LabelingTag::where('active',1)->where('identificador',4)->select('tag as label','id as value')->get();
        return response()->json(['success' => true,  'departamento' =>$data,'tags'=>$tags,'tagsBoss'=>$tagsBoss], 200);
    }

    public function saveVacation($id,Request $request)
    {
       $vacation =  VacationsModel::create($request->all());
        return response()->json(['success' => true, 'data' => $request->all() ], 200);
    }
    public function updateVacation($id,Request $request)
    {
       $vacation =  VacationsModel::where('id',$id)->update([
         'start'=>$request->start,
         'end'=>$request->end,
         'type'=>$request->type,
         'comments'=>$request->comments,
         'status'=>$request->status,
         'payment_request'=>$request->payment_request,
         'payment_Date'=>$request->payment_Date
       ]);
     
       $empleado = PersonalInfinity::where('id',$request->id_empleado)->select('name','lastName')->first(); 
       $exists = HananEvents::where([
        ['title','=','Vacaciones de '.$empleado->name." ".$empleado->lastName],
        ['startdate','=',$request->start.' 00:00:00'],
        ['enddate','=',$request->end.' 23:59:59'],
       ])->get();
    
       
       if ($request->status==2 && count($exists)==0) {
          
        $event= new HananEvents();
        $event->type='7';
        $event->title='Vacaciones de '.$empleado->name." ".$empleado->lastName;
        $event->startdate=$request->start.' 00:00:00';
        $event->enddate=$request->end.' 23:59:59';
        $event->comments=$request->comments;
        $event->color='#BF04A3';
        $event->aditionals='[]';
        $event->id_capacitation='0';
        $event->save();
       }
    
        return response()->json(['success' => true, 'data' => $vacation ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $data = array('rfc' => $request->rfc,'curp' => $request->curp);

        $validator = Validator::make($data, [
            'rfc' => 'required|unique:personal_hanana|max:255',
            'curp' => 'required|unique:personal_hanana|max:255',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['success' => false, 'error' => $errors], 200);
        }else{
            $data=$request->all();
            if ($data['puesto'] == '[]') {
                $data['puesto']='[{"label": "No especificado", "value": "0"}]';
              
            }
            if ($data['inmBoss'] == '[]') {
                $data['inmBoss']='[{"label": "No especificado", "value": "0"}]';
              
            }
            $personalHana=PersonalInfinity::create($data);
    
            return response()->json(['success' => true, 'data' => $personalHana], 200);
        }
    }

    public function update(Request $request, $id)
    {
     
        PersonalInfinity::where('id', $request->id)->update([
            'name'=>$request->name,
            'lastName'=>$request->lastName,
            'actualContract'=>$request-> actualContract,
            'dateContractFinish'=>$request->dateContractFinish,
            'activo'=>$request->activo,
            'id_check'=>$request->id_check,
            'direction'=>$request->direction,
            'cp'=>$request->cp,
            'phone'=>$request->phone,
            'birthday'=>$request->birthday,
            'rfc'=>$request->rfc,
            'curp'=>$request->curp,
            'nss'=>$request->nss,
            'school'=>$request->school,
            'ine'=>$request->ine,
            'alergist'=>$request->alergist,
            'personalContact'=>$request->personalContact,
            'phoneContact'=>$request->phoneContact,
            'empresa'=>$request->empresa,
            'puesto'=>$request->puesto=='null'|| $request->puesto=='[]'?'NA':$request->puesto,
            'ingreso'=>$request->ingreso,
            'id_empleado'=>$request->id_empleado,
            'inmBoss'=>$request->inmBoss=='null' ?'NA': $request->inmBoss ,
            'wArea'=>$request->wArea==='null'?'NA':$request->wArea,
            'infonavit'=>$request->infonavit,
            'numCart'=>$request->numCart,
            'company'=>$request->company,
            'idLicNum'=>$request->idLicNum,
            'numExt'=>$request->numExt,
            'documents'=>$request->documents,
            'contracts'=>$request->contracts,
            'documentsCompany'=>$request->documentsCompany,
            'removeColaborator'=>$request->removeColaborator,
        ]);

        return response()->json(['success' => true, 'data' => $request->all()], 200);
        // $personalHana=PersonalHanaModel::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PersonalInfinity  $personalInfinity
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $vacation =  VacationsModel::where('id_empleado', $id)->orderBy('start','desc')->get();
        return response()->json(['success' => true, 'data' => $vacation ], 200);
    }

    public function getEvents(Request $request)
    {
        $dateStart = date_create($request->start);
        $dateEnd = date_create($request->end);
        $start=date_format($dateStart, 'm');
        $end=date_format($dateEnd, 'm');
        $contratos=[];
        $cumpleaños=[];
        $vacation=[];
        $capacitation=[];
        $licencias=[];
        $eventos=[];
        $otherEvents=[];
        // obtener fin de contratos
        if ($request->categories[0]['checked']) {
            $contratos=DB::SELECT('SELECT `actualContract`,`dateContractFinish`,`name`,`lastName` 
            FROM `personal_hanana` where `activo`= 1 AND month (dateContractFinish) 
            BETWEEN '. "'".$start."'".' and '. "'".$end."'". ' AND actualContract <> '."'Indeterminado'");
          
        }
        if ($request->categories[1]['checked']) {
           if ($start=='11' and $end=='01') {
            $cumpleaños = DB::SELECT('select name,lastName,birthday from personal_hanana ph where activo = 1 and month (birthday) between 11 and 12');
            }else if($start=='12' and $end=='02'){
                $cumpleaños = DB::SELECT('select name,lastName,birthday from personal_hanana ph where activo = 1 and month (birthday) between 01 and 02');
                
            }else{
                $cumpleaños = DB::SELECT('select name,lastName,birthday from personal_hanana ph where activo = 1 and month (birthday) between'. "'".$start."'".' and '. "'".$end."'");

            }
        }
        if ($request->categories[2]['checked']) {
          $vacation=  HananEvents::where('type',7)->whereBetween('startdate',[$request->start,$request->end])->get();
        }
        if ($request->categories[3]['checked']) {
          $capacitation=  HananEvents::where('type',2)->whereBetween('startdate',[$request->start,$request->end])->get();
        }
        if ($request->categories[4]['checked']) {
            $licencias=DB::SELECT('SELECT `actualContract`,`dateContractFinish`,`name`,`lastName`,`id_check` FROM `personal_hanana` where `activo`= 1 AND month (id_check)  BETWEEN '. "'".$start."'".' and '. "'".$end."'". ' AND actualContract <>'."'Indeterminado'");
        }
        if ($request->categories[5]['checked']) {
           $otherEvents=HananEvents::whereNotIn('type',[7,2])->whereBetween('startdate',[$request->start,$request->end])->get();
        }

      $personal=PersonalInfinity::where('activo',1)->get();
        foreach ($personal as $key => $value) {
           $value->checked=false;
           $value->comments='';
        }
     
        return response()->json([
            'success' => true, 
            'eventos' => $otherEvents,
            'c' =>$cumpleaños,
            "vacations"=>$vacation,
            "capacitation"=>$capacitation,
            "personal"=>$personal,
            "contratos"=>$contratos,
            'licencias'=>$licencias
        ], 200);   
    }
    public function saveEvents(Request $request)
    {
        HananEvents::create($request->all());
        return response()->json(['success' => true, 'data' => '' ], 200);
    }
}
