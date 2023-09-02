import React, { useState,useEffect } from 'react'
import { ReactModal } from '../../../../components/ReactModal';
import { ModalHeader } from '../../../../components/ReactModal/ModalHeader';
import { ModalBody } from '../../../../components/ReactModal/ModalBody';
import Request from '../../../../utils/http'
import {ALERTERROR,ALERTSUCCESS} from '../../../../components/constantes'
import { ModalButtons } from '../../../../components/ReactModal/ModalButtons';
const request = new Request();
export const ModalVacations = ({id,reload,edit,dataEdit,setEditVacation,icon,titleButton})=>{
    const [vacation, setVacation] = useState({
        start:new Date(),
        end:new Date(),
        type:1,
        comments:'',
        id_empleado:0,
        id:0,
        taken:0,
        status:0

    });
    const [disabledData,setDisabled] = useState(true)
   

    useEffect(() => { id>0&&setVacation({...vacation,id_empleado:id})  },[id])
    useEffect(() => {
        if (edit) {
            setVacation(dataEdit)
            setDisabled(true)
        }else{
            setDisabled(false)
        }
    },[edit])
    const handleClick=() => {
        setVacation({
            start:new Date(),
            end:new Date(),
            type:1,
            comments:'',
            id_empleado:id,
            id:0 ,
            taken:0,
            status:0
        })
        setEditVacation(false)
       
    }
    const handleSubmit = async () => {
        let response=''
       
        if (edit) {
          response = await request.put(`humanResourses/updateVacation/${vacation.id}`,vacation)
        }else{
          response = await request.post(`humanResourses/saveVacation/${id}`,vacation)
        }
       if (response && response.statusCode === 200) {
      
        reload()
      return ALERTSUCCESS;
       }else{
        return ALERTERROR
       }
    }
   
    return(
      <ReactModal icon={icon} titleButton={titleButton}>
          <ModalHeader titleHeader={'Gestión de vacaciones'} />

       
          <ModalBody >
                   {vacation.taken==0&& <div onClick={e=>setDisabled(!disabledData)}>
               {edit && <>
              
                
                 <button className="btn "><i className='fa fa-edit'></i>Editar</button>
               </>  }

             </div>}
             {edit &&  <div className='justify-end'>
                     <strong>Estatus</strong> 
                     </div>}
                 <div className="justify-end ">
             
                     <div>
                     <select className="form-control" disabled={disabledData} style={{width:'200px'}}  value={vacation.status} onChange={e=>setVacation({...vacation,status:e.target.value})}>
                         <option value="1">Pendiente</option>
                         <option value="2">Aprobado</option>
                     </select>
                     </div>
                 </div>
             <div className="row">
                 <div className="col-md-12">
                     <strong htmlFor="">Inicio del Periodo</strong>
                     <input type="date" value={vacation.start} disabled={disabledData} onChange={(e) => setVacation({...vacation, start:e.target.value})} className="form-control"/>
                 </div>
                 <div className="col-md-12">
                     <strong htmlFor="">Termino del Periodo</strong>
                     <input type="date" className="form-control" disabled={disabledData} value={vacation.end} onChange={(e) => setVacation({...vacation, end:e.target.value})} />
                 </div>
                 <div className="col-md-12">
                     <strong htmlFor="">Tipo de Periodo</strong>
                     <select className='form-control' disabled={disabledData} value={vacation.type} onChange={(e) => setVacation({...vacation, type:e.target.value})}>
                         <option value="1">Vacaciones</option>
                         <option value="2">Permiso Especial</option>
                         <option value="3">Permiso Medico / Incapacidad</option>
                         <option value="4">Permiso Medico / Maternidad</option>
                        
                     </select>
                 </div>
                 <div className="col-md-12">
                     <strong htmlFor="">Comentarios</strong>
                     <textarea className='form-control' disabled={disabledData} cols="20" rows="3" value={vacation.comments||''} onChange={(e) => setVacation({...vacation, comments:e.target.value})}></textarea>
                 </div>
                 {/* {vacation.status ==2 && (
                     <>
                         <div className='col-md-12'>
                             <strong>Solicitud de Prima Vacacional</strong>
                             <input type="date" disabled={vacation.taken>0} value={vacation.payment_request||''} onChange={(e) => setVacation({...vacation, payment_request:e.target.value})} className= 'form-control' />
                         </div>
                         <div className='col-md-12'>
                             <strong>Pago de Prima Vacacional</strong>
                             <input type="date"  disabled={vacation.taken>0}value={vacation.payment_Date||''} onChange={(e) => setVacation({...vacation, payment_Date:e.target.value})}className= 'form-control' />
                         </div>   
                     </>
                 )} */}
                
            
             </div>
          </ModalBody>
          <ModalButtons  handleSubmit={handleSubmit} handleCancel={handleClick}  /> 
         
    </ReactModal> 
       
    )
}
