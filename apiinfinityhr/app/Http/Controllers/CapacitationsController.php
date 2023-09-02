<?php

namespace App\Http\Controllers;

use App\Models\Capacitations;
use App\Models\PersonalHanaModel;
use App\Models\CapacitationsUsers;
use App\Models\HananEvents;
use Illuminate\Http\Request;
use DB;
use App\Traits\ArraysManipulations;
use Illuminate\Support\Facades\Log;
class CapacitationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses=Capacitations::all();
        foreach ($courses as $key => $value) {
           $value->usuarios =  $asistants = DB::SELECT('select ph.id,ph.name,ph.lastName,
           (select c.dateOfCapacitation from capacitationsusers c where c.idCapacitation ='. $value->id.' and ph.id = c.idPersonal ) as dateOfCapacitation 
            from personal_hanana ph ');
        }
        


        return response()->json(['success' => true, 'data' =>$courses], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCapacitationsHistory($id)
    {
        $course= HananEvents::where('id_capacitation',$id)->get();
        foreach ($course as $key => $value) {
            $participantes=json_decode($value['aditionals']);
            $nameParticipantes=[];
            foreach ($participantes as $key2 => $value2) {
             array_push($nameParticipantes, PersonalHanaModel::where('id',$value2->id)->select('name','lastName')->first());
                
            }
            $value['participantes']=$nameParticipantes;
        }
     
        return response()->json(['success' => true, 'data' => $course], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $course= Capacitations::create($request->all());
        return response()->json(['success' => true, 'data' => $course], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Capacitations  $capacitations
     * @return \Illuminate\Http\Response
     */
    public function show(Capacitations $capacitations)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Capacitations  $capacitations
     * @return \Illuminate\Http\Response
     */
    public function edit(Capacitations $capacitations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Capacitations  $capacitations
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $curso=$request->curso;
        $users=$request->users;
        Capacitations::where('id',$curso['id'])->update([
            'nameCapacitation'=>$curso['nameCapacitation'],
            'hours'=>$curso['hours'],
            'category'=>$curso['category'],
            'description'=>$curso['description'],
            'instructor'=>$curso['instructor'],
        ]);

        CapacitationsUsers::where('idCapacitation',$request->idCurso)->delete();

            foreach ($users as $key => $value) {

               $userCapacitated=new CapacitationsUsers();
                $userCapacitated->idCapacitation=$request->idCurso;
                $userCapacitated->idPersonal=$value['id'];
                $userCapacitated->dateOfCapacitation=$value['dateOfCapacitation'];
                $userCapacitated->save();
            }
        return response()->json(['success' => true, 'data' => $users], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Capacitations  $capacitations
     * @return \Illuminate\Http\Response
     */
    public function getCapacitationsResume($id)
    {
        $list = CapacitationsUsers::join('capacitationshanan as c2','c2.id','CapacitationsUsers.idCapacitation')
        ->where('CapacitationsUsers.idPersonal', $id)
        ->select('c2.hours','c2.nameCapacitation' ,'c2.instructor' ,'c2.category','c2.description' ,'CapacitationsUsers.dateOfCapacitation')->get();

        $data=ArraysManipulations::groupByProperty('category',$list);
        return response()->json(['success' => true, 'data' => $data], 200);
    }
}
