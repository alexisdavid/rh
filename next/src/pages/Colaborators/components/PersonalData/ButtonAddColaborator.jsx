import React from 'react'

export const ButtonAddColaborator = ({classNameButtonParam,align,label,handleClick,icon}) => {
  return (
    <div className={`d-flex justify-content-${align}`} >
        <button className={classNameButtonParam} onClick={handleClick}> <i className={`ni ni-${icon}`} style={{fontSize:'inherit'}}/> {label}</button>
    </div>
  )
}
