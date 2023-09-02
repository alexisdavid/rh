import React from 'react'

export const PersonalContract = ({data,handleData,handleContract,contratos}) => {
  
  return (
    <>
  
     <div className="col-md-12  d-flex justify-content-between row mt-4 p-1" >
             
               <label style={{color: 'red'}}>Contrato Actual </label>
           <div className="justify-end col-md-12 mb-2 input-group-sm ">
                <select value={data.actualContract} onChange={handleData} name='actualContract'  className="form-control" style={{width:'300px'}}>
                    <option value="Prueba">Prueba</option>
                    <option value="Capacitacion">Capacitacion</option>
                    <option value="Evaluacion">Evaluacion</option>
                    <option value="Indeterminado">Indeterminado</option>
                </select>
           </div>
            {contratos.map((c,i) => {
                return(
                <div className='col-md-3  row' key={i}>
                   <div className='col-md-12'> 
                        <h5 type="text">{c.tipo}</h5>
                    </div>
                   <div className='col-md-6 input-group-sm'>
                        <label >Inicio</label>
                        <input type="date" readOnly={data.actualContract!=c.tipo} className='form-control' value={c.inicio} onChange={e=>handleContract(i,e.target.value,'inicio')}/>
                   </div>
                   <div className='col-md-6 input-group-sm'>
                        <label >Fin</label>
                        <input type="date" readOnly={data.actualContract!=c.tipo} className='form-control'  value={c.termino} onChange={e=>handleContract(i,e.target.value,'termino')}/>
                   </div>
                </div>
                )
            })}
            </div>
    </>
  )
}
