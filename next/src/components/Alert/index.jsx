import React, { useEffect, useState } from 'react'

export const Alert = ({alert,typeAlert,setTypeAlert}) => {
    const {title,message,type,} =alert

    const [showAlert,setShowAlert]=useState(false)
  
    useEffect(()=>{
        console.log(type);
        if (type=='error') {
            
            setTypeAlert('alert-danger')
            setShowAlert(true)
            dissmissAlert()
        }else if(type=='success'){

            setTypeAlert('alert-success')
            setShowAlert(true)
            dissmissAlert()
        }else{
            setShowAlert(false)
        }
       
       
       
    },[type])
    const dissmissAlert =()=>{
        setTimeout(() => {
            setShowAlert(false)
            setTypeAlert('')
            
    }, 2500);
}
  return (
    showAlert && (
    <div class={`alert ${typeAlert} font-weight-bold  text-white `} role="alert">
         <strong>{title}</strong> {message}
    </div>
    )
  )
}
