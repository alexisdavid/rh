import React, { useEffect, useState } from 'react'
import { Layout } from '../Layouts/Layout'
import Request from '../../utils/http'

import userImage from '../../static/img/user.png'
import { AddColaborator } from './components/PersonalData/AddColaborator'
import { ButtonAddColaborator } from './components/PersonalData/ButtonAddColaborator'
import { TableColaborators } from './components/PersonalData/TableColaborators'
import { ALERTSUCCESS,ALERTERROR,SUCCESSMESSAGE,ERRORMESSAGE } from '../../components/constantes'
const request = new Request()

export const Colaborators = () => {

  const [edad,setEdad] = useState('')
  const [antiguedad,setAntiguedad] = useState('')
  const [colaborators,setColaborator] =useState([])
    const [documents,setDocuments] = useState({
      solEmp:false,
      birthDayDoc: false,
      imssDoc: false,
      idDoc: false,
      infonavit: false,
      curp: false,
      sitFisc: false,
      compEst: false,
      recDoc: false,
      photos: false,
      antPenales: false,
      driverLic: false,
      marriageDoc: false,
  })
  const [documentsCompany,setDocumentsCompany] = useState({
    emailCard: false,
    privacyCard: false,
    initialContract: false,
    imssReleased: false,
    nominContract: false,
    uniform: false,
    finalContract: false,
    psicometrics: false,
    noConflict: false,
  })
  const [removeColaborator,setRemoveColaborator]= useState({
    removed:false,
    downImss: false,
    renunceCard: false,
    exitInterview: false,
    workConstance: false,
    remuneration: false,
    poliza: false,
    cause: '',
  })
  const [contratos,setContratos]= useState([
    {tipo:'Prueba',inicio:'',termino:''},
    {tipo:'Capacitacion',inicio:'',termino:''},
    {tipo:'Evaluacion',inicio:'',termino:''},
    {tipo:'Indeterminado',inicio:'',termino:''}
  ])
  const [type, setType] = useState(1)
  const [errortoRequest,setErortoRequest]= useState({
    type:'',
    message: ''
  })
  const [department, setDepartment] = useState([])
  const [tags, setTags] = useState([])
  const [tagsBoss, setTagsBoss] = useState([])
  const [newColaborator,setNewColaborator] =useState(false)
  const [user,setUser] = useState({
        id:0,
        actualContract:'Prueba',
        dateContractFinish:'',
        name:'',
        lastName:'',
        direction:'',
        cp:'',
        phone:'',
        birthday:'',
        rfc:'',
        curp:'',
        nss:'',
        school:'',
        ine:'',
        alergist:'',
        personalContact:'',
        phoneContact:''  ,
        empresa:'INFINITYHR',
        puesto:[{value:'0',label:'No especificado'}],
        ingreso:'',
        antiquity:'',
        inmBoss:[{value:'0',label:'No especificado'}],
        wArea:[{value:'0',label:'No especificado'}],
        infonavit:'',
        numCart:'',
        company:'',
        idLicNum:'',
        id_empleado:'',
        id_check:'',
        numExt:'',
        activo:true
      })
  const getDataAditional =async (tipo)=>{
        const response = await request.get(`personalHana/allData/${tipo}`)

        if (response && response.statusCode === 200) {
            
            setDepartment(response.result.departamento)
            setTags(response.result.tags)
            setTagsBoss(response.result.tagsBoss)
        }
      
    }
    const getData = async() =>{
      const response= await request.get('getColaborators')
      if (response && response.statusCode === 200) {
        setColaborator(response.result.data)
      }
    }
    useEffect(() => {
      getData();
      getDataAditional(type)
    }, []);
    useEffect(() => {
      let nac =new Date(user.birthday).getTime();
      let today =new Date().getTime();
      var diff =( today - nac)/(1000*60*60*24).toFixed(2);
      let annios =(diff/365 ).toFixed(2)
      let arr= annios.split('.')
      let meses= ((arr[1]/100)*365)/30

      setEdad( `${arr[0]} años ${Math.round(meses)} meses`)
          let ing =new Date(user.ingreso).getTime();
          let todayAnt =new Date().getTime();
          var diffAnt =( todayAnt - ing)/(1000*60*60*24).toFixed(2);
          let anniosAnt =(diffAnt/365 ).toFixed(2)
          let arrAnt= anniosAnt.split('.')
          let mesesAnt= ((arrAnt[1]/100)*365)/30
   setAntiguedad(`${arrAnt[0]} años ${Math.round(mesesAnt)} meses`)

  },[user])
  
   
  const handleData=(event)=>setUser({...user,[event.target.name]:event.target.value})
  const handleSubmit=async()=>{
    let data = JSON.parse(JSON.stringify(user))
   
    if (!data.name || !data.lastName || !data.rfc || !data.curp|| data.cp=='') {
      setErortoRequest({message:'Campos incompletos',type:'error'})
      return
  }
  let response

  let dataToSubmit=JSON.parse( JSON.stringify(data))

  dataToSubmit.wArea=JSON.stringify(dataToSubmit.wArea)
  dataToSubmit.inmBoss=JSON.stringify(dataToSubmit.inmBoss)
  dataToSubmit.puesto=JSON.stringify(dataToSubmit.puesto)

  dataToSubmit.documents=JSON.stringify(documents)
  dataToSubmit.documentsCompany=JSON.stringify(documentsCompany)
  dataToSubmit.removeColaborator=JSON.stringify(removeColaborator)
  dataToSubmit.contracts=JSON.stringify(contratos)


  if (data.id==0) {
      response = await request.post('humanResourses/newColaborator',dataToSubmit)
  }else{
      response = await request.put(`humanResourses/updateColaborator/${data.id}`,dataToSubmit)
  }
  if (response && response.statusCode === 200) {
    const { success } = response.result;
    const message = success ? SUCCESSMESSAGE : ERRORMESSAGE;
    const type = success ? ALERTSUCCESS : ALERTERROR;
    setErortoRequest({ message, type });
    setTimeout(()=>{ window.location.reload() },1500)
  } else {
    setErortoRequest({ message: ERRORMESSAGE, type: ALERTERROR });
    return;
  }

  }
 

  const handleEdit = (user) => {

   
    let copy = JSON.parse(JSON.stringify(user))
    let doc=''
    let docC=''
    let rem=''
    let contracts=[]
    try {
     if(copy.wArea) {copy.wArea = JSON.parse(copy.wArea)}
     if(copy.puesto) {copy.puesto = JSON.parse(copy.puesto)}
     if(copy.inmBoss) {copy.inmBoss = JSON.parse(copy.inmBoss)}
     doc =  JSON.parse(copy.documents)
     docC = JSON.parse(copy.documentsCompany)
     rem =  JSON.parse(copy.removeColaborator)
     contracts =  JSON.parse(copy.contracts)
   
    } catch (error) {
        copy.wArea=copy.wArea
        copy.pueso=copy.pueso
        copy.inmBoss=copy.inmBoss
    }
     setUser(copy);
     setDocuments(doc)
     setDocumentsCompany(docC)
     setRemoveColaborator(rem)
     setContratos(contracts.length > 0?contracts:contratos)
    setNewColaborator(true)
  
  }

  const handleCancel = () => {
    setUser({
      id:0,
      actualContract:'Prueba',
      dateContractFinish:'',
      name:'',
      lastName:'',
      direction:'',
      cp:'',
      phone:'',
      birthday:'',
      rfc:'',
      curp:'',
      nss:'',
      school:'',
      ine:'',
      alergist:'',
      personalContact:'',
      phoneContact:''  ,
      empresa:'INFINITYHR',
      puesto:[{value:'0',label:'No especificado'}],
      ingreso:'',
      antiquity:'',
      inmBoss:[{value:'0',label:'No especificado'}],
      wArea:[{value:'0',label:'No especificado'}],
      infonavit:'',
      numCart:'',
      company:'',
      idLicNum:'',
      id_empleado:'',
      id_check:'',
      numExt:'',
      activo:true
    })
    setNewColaborator(false)
    
  }
  return (
    <Layout>
      { newColaborator ? 
     
        <AddColaborator 
            handleCancel={handleCancel} 
            dataparam={user} 
            handleData={handleData} 
            edad={edad} 
            antiguedad={antiguedad} 
            handleSubmit={handleSubmit}
            type={type}
            department={department}
            tags={tags}
            tagsBoss={tagsBoss}
            setUser={setUser}
            documents={documents}
            setDocuments={setDocuments}
            documentsCompany={documentsCompany}
            setDocumentsCompany={setDocumentsCompany}
            removeColaborator={removeColaborator}
            setRemoveColaborator={setRemoveColaborator}
            contratos={contratos}
            setContratos={setContratos}
            errorProps={errortoRequest}
            setErortoRequest={setErortoRequest}
        />
          
        : (
          <>
            <ButtonAddColaborator label={'Agregar '} icon={'fat-add'} classNameButtonParam={" btn btn-sm btn-primary"} align={'start'} handleClick={e=>setNewColaborator(true)}/>
            <TableColaborators userImage={userImage} colaborators={colaborators} handleUpdate={handleEdit} />
          </>
      )}
    </Layout>
  )
}
