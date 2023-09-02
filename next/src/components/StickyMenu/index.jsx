import React, { useState } from 'react'

export const StickyMenu = ({menu}) => {
  const [activekey,setActivekey]=useState(0)
  const activeClass={
    backgroundColor: '#cb0c9f',
    color:'white !important',
    borderRadius: '10px',
    textAlign: 'center'
  }
  const activeClassA={ color:'white' }

  const handleActive=(key) =>{
    setActivekey(key)
  }
  return (
    <div className=" position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky blur shadow-blur opacity-10 p-1" style={{borderRadius:'15px',overflowX:'auto'}} >
    <table className="table">
      <thead>
        <tr>
          {menu.map((line,key)=>{
            return(
            <td key={line.id} className="PersonalInformation text-center " style={activekey==key?activeClass:null} onClick={e=>handleActive(key)}>
              <a href={`#${line.id}`} style={activekey==key?activeClassA:null}>{line.label}</a>
            </td>

            )
          })}
        
        </tr> 
      </thead>
    </table>

  </div>
  
  )
}
