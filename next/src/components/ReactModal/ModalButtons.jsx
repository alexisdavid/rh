import React,{useEffect,useState} from 'react'

export const ModalButtons = ({handleSubmit,handleCancel=()=>{}}) => {
  
  const [hovered, setHovered] = useState(false);
  const [hoveredOpacity, setHoveredOpacity] = useState('opacity-5');
  const [message, setMessage] = useState('')
  const [currentColor,setCurrentColor] = useState('#d9e3e354');
  const handleHover = () => { setHovered(!hovered) };

  const changeColor = (banderaParam) => {
    
    switch (banderaParam) {
      case 'error':
        setCurrentColor('linear-gradient(310deg, rgb(121 40 202 / 67%) 0%, rgb(255 0 128 / 77%) 100%)')
        setHoveredOpacity('')
        setMessage('Error al guardar')
        
        break;
        case 'success':
          setCurrentColor('linear-gradient(310deg, rgb(23 173 55 / 97%) 0%, rgb(128 201 35 / 76%) 100%)')
          setHoveredOpacity('')
          setMessage('Guardado con exito')
          break;
          
          default:
          setMessage('')
          setCurrentColor('#d9e3e354')
          break;
        }

        clearColor()
        
      }
      const clearColor = () => { 
        setTimeout(() => {
      setMessage('')
      setCurrentColor('')
      setHoveredOpacity('opacity-5')
    }, 3000);
  }

  // useEffect(() => {
  //   changeColor(bandera)
  // }, [bandera]);
  const handleData=async() => {
    
    let returnedStatus=await handleSubmit()
    changeColor(returnedStatus)
  }
  return (
    <div  className={`fixed-plugin   ${hovered?'':hoveredOpacity} modal-footer`} onMouseEnter={handleHover} onMouseLeave={handleHover} style={{backgroundImage:currentColor,marginTop:'15px',height:'40px',marginBottom:'10px'}}> 
    <strong className="text-white" style={{marginTop:'-20px'}}>{message}</strong>
          <button onClick={handleData} className="buttonSave btn-sm btn bg-gradient-primary mr-2"><i className="fa-solid fa-check font-15" > </i> &nbsp;Guardar</button>&nbsp;&nbsp;&nbsp;
          <button onClick={handleCancel} className="buttonSave btn btn-sm text-primary ml-3" data-bs-dismiss="modal"><i className="fa-solid fa-xmark font-15"/> &nbsp;Cancelar</button>
    </div>
  )
}
