import React, { useEffect, useState } from 'react'
import { ReactModal } from '../../../../components/ReactModal'
import { ModalHeader } from '../../../../components/ReactModal/ModalHeader'
import { ModalBody } from '../../../../components/ReactModal/ModalBody'
import moment from 'moment-timezone'
import { ModalButtons } from '../../../../components/ReactModal/ModalButtons'


export const ModalAddEvents = ({handleSubmit,info}) => {
  const [data,setData]= useState({
    start: moment().format('YYYY-MM-DD HH:mm:ss'),
    end: moment().format('YYYY-MM-DD HH:mm:ss'), 
    title: '',
    comments:'',
    type: '6',
    color:'#3c8ffb'
    })
useEffect(() => {
    setData(info)
},[info])
const sendData=async()=>{
    let resp = await handleSubmit(data)
   
    return resp
}
  return (
    <>
     
        <ReactModal classNameParam="btn bg-gradient-primary btn-sm w-16" titleButton='agregar evento al calendario' icon='' title='Añadir al calendario'>
            <ModalHeader titleHeader={'Nuevo Evento '}/>
        <ModalBody>
            <div className="row">
                
                
                <div className="col-md-12">
                    <label >Nombre de Evento</label>
                    <input type="text"  className="form-control" value={data.title} onChange={e=>setData({...data,title:e.target.value})}/>
                </div>
                <div className="col-md-12">
                    <label>Fecha de Inicio</label>
                    <input type="date" className="form-control" value={data.start} onChange={e=>setData({...data,start:e.target.value})}/>
                </div>
                <div className="col-md-12">
                <label>Fecha de Fin</label>
                    <input type="date" className="form-control" value={data.end} onChange={e=>setData({...data,end:e.target.value})} />
                </div>
              
                <div className="col-md-12">
                    <label >Comentarios</label>
                    <textarea name="" id="" cols="30" rows="10" value={data.comments} onChange={e=>setData({...data,comments:e.target.value})} className="form-control"></textarea>
                </div>
                <div className="col-md-12">
                    <input type="color" className="form-control" value={data.color||''} onChange={e=>setData({...data,color:e.target.value})}/>
              
                </div>
              
            </div>
        </ModalBody>
        <ModalButtons handleSubmit={sendData} handleCancel={()=>{}}/>
        </ReactModal>
    </>
  )
}
