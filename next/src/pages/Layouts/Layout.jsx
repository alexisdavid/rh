import React, { useState } from 'react'
import { Aside } from '../../components/Aside'
import { NavBar } from '../../components/NavBar'
import { useAppContext } from '../../Context/AppContext'
export const Layout = ({children}) => {

  const [toogled,setToogled]=useState(false)

  const toogleElement=()=>{
   
    const elemento = document.querySelector('.g-sidenav-show:not(.rtl) .sidenav');
if (!toogled) {
      elemento.style.transform= 'translateX(0rem)';
    }else{
      elemento.style.transform= 'translateX(-17.125rem)';
}
setToogled(!toogled)
  
  }
  return (
    <>
    <Aside  toogleElement={toogleElement} />
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <NavBar toogleElement={toogleElement}/>
    <div className="container-fluid py-2">
        {children} 

    </div>
    </main>
    
    </>
  )
}
