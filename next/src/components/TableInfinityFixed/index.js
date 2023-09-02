import React, { useEffect, useState } from 'react'

export const TableInfinityFixed = ({children,columnsParam,aditionalClass=''}) => {

    const [columns,setColumns]=useState([])

    useEffect(() => {
        if (columnsParam) {
            setColumns(columnsParam)
        }
    },[])


  return (
    <div className="table-responsive table-container">
          <table className={`table align-items-center mb-0 table-fixed ${aditionalClass} `}>
            <thead>
              <tr>
                {columns.map((column,key) =>{
                    const {classColumn,label} = column
                    return(
                        
                        <th key={key} className={classColumn}><h6 className={'mb-0 text-xs'}>{label}</h6>  </th>
                        )
                    })}
               
              </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
  )
}
