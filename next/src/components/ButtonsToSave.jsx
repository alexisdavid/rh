import React, { useEffect, useState } from 'react'

export const ButtonsToSave = ({handleSave,handleCancel,bandera='',mensaje='',setErortoRequest}) => {

  const [hovered, setHovered] = useState(false);
  const [hoveredOpacity, setHoveredOpacity] = useState('opacity-5');
  const [currentColor,setCurrentColor] = useState('');
  const handleHover = () => { setHovered(!hovered) };

  const changeColor = (banderaParam) => {
    switch (banderaParam) {
      case 'error':
        setCurrentColor('linear-gradient(310deg, rgb(121 40 202 / 67%) 0%, rgb(255 0 128 / 77%) 100%)')
        setHoveredOpacity('')
       
        break;
      case 'success':
        setCurrentColor('linear-gradient(310deg, rgb(23 173 55 / 97%) 0%, rgb(128 201 35 / 76%) 100%)')
        setHoveredOpacity('')
        break;
        
        default:
        setCurrentColor('')
        break;
    }

    clearColor()

  }
  const clearColor = () => { 
    setTimeout(() => {
      setCurrentColor('')
      setErortoRequest({ type:'',message: ''})
      setHoveredOpacity('opacity-5')
    }, 3000);
  }

  useEffect(() => {
    changeColor(bandera)
  }, [bandera]);

  return (
    <>
    <div style={{height:'80px'}}></div> 
    
    <div className={`fixed-plugin p-2 ${hovered?'':hoveredOpacity} `} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className="  fixed-plugin-button p-3 position-fixed d-flex justify-content-between " style={{backgroundImage:currentColor}}>
        <div>
            <h6 style={{color:'white'}}> <i className="fa-solid fa-xmark font-15"/> {mensaje}</h6>
        </div>
        <div>
          <button onClick={handleSave} className="buttonSave btn-sm btn bg-gradient-primary mr-2"><i className="fa-solid fa-check font-15" > </i> &nbsp;Guardar</button>&nbsp;&nbsp;&nbsp;
          <button onClick={handleCancel} className="buttonSave btn text-primary ml-3"><i className="fa-solid fa-xmark font-15"/> &nbsp;Cancelar</button>
        </div>
      </div>
    </div>
    </>
  )
}
