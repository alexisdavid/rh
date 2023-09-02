import React from 'react'


 export const PersonalInformation =({data,handleData,edad})=>{
     
     
        return(
    
            
                <div className=" row " >
                    <div className="col-md-3 col-lg-3 input-group-sm">
                        <label  >Nombre(s)</label>
                        <input type="text" className={`text-uppercase form-control ${!data.name?'border-danger':''}`}  name='name' value={data.name  || ''} onChange={handleData} />
                       
                    </div>
                    <div className="input-group-sm col-md-3 col-lg-3">
                        <label  >Apellido(s)</label>
                        <input type="text" className={`text-uppercase form-control ${!data.lastName?'border-danger':''}`}  name='lastName' value={data.lastName || ''} onChange={handleData}/>
                       
                    </div>
                    
                    <div className="input-group-sm col-md-3 col-lg-2">
                        <label  >Telefono</label>
                        <input type="number" className='form-control'  name='phone' value={data.phone || ''} onChange={handleData}/>
                    </div>
                    <div className="input-group-sm col-md-12 col-lg-2">
                        <label  >Num. Ext</label>
                        <input type="text" className='text-uppercase form-control ' name='numExt' value={data.numExt || ''} onChange={handleData}/>
                    </div>
                    <div className="input-group-sm col-md-2 col-2">
                        <label  >Código Postal</label>
                        <input type="number" className={`form-control ${data.cp==''?'border-danger':''}`} name='cp' value={data.cp || ''} onChange={handleData}/>
                        
                    </div>
                    <div className="input-group-sm col-md-12 col-lg-8">
                        <label  >Direccion</label>
                        <input type="text" className='text-uppercase form-control' name='direction' value={data.direction || ''} onChange={handleData}/>
                    </div>
                  
                    <div className="input-group-sm col-md-6 col-lg-4 d-flex justify-content-between">
                        <div>
                            <label  >Fecha de Nacimiento</label>
                                <input type="date"  className={` form-control ${data.birthday==''?'border-danger':''}`} name='birthday'  value={data.birthday} onChange={handleData}/>
                            </div>
    
                            <div className=''>
                                <label >Edad</label>
                                <input type="text" value={edad} disabled className="form-control" />
                            </div>
                    </div>
                    <div className="input-group-sm col-md-6 col-lg-2">
                        <label >R.F.C</label>
                        <input type="text" className={`text-uppercase form-control ${!data.rfc?'border-danger':''}`} name='rfc' value={data.rfc || ''} onChange={handleData}/>
                        
                    </div>
                    <div className="input-group-sm col-md-6 col-lg-3">
                        <label >C.U.R.P</label>
                        <input type="text" className={`text-uppercase form-control ${!data.curp?'border-danger':''}`} name='curp' value={data.curp || ''} onChange={handleData}/>
                       
                    </div>
                    <div className="input-group-sm col-md-6 col-lg-3">
                        <label >N.S.S</label>
                        <input type="text" className='text-uppercase form-control' name='nss' value={data.nss || ''} onChange={handleData}/>
                    </div>
                    <div className="input-group-sm col-md-6 col-lg-2">
                        <label >Nivel de Estudios</label>
                        <select className="form-control" name="school" value={data.school || ''} onChange={handleData}>
                            <option value="No Especificado">No Especificado</option>
                            <option value="Primaria">Primaria</option>
                            <option value="Secundaria">Secundaria</option>
                            <option value="Preparatoria">Preparatoria</option>
                            <option value="Licenciatura">Licenciatura</option>
                            <option value="Maestria">Maestria</option>
                            <option value="Doctorado">Doctorado</option>
                        </select>
                    </div>
                    <div className="input-group-sm col-md-6 col-lg-2">
                        <label >Número de INE</label>
                        <input type="text" className='text-uppercase form-control' name='ine' value={data.ine || ''} onChange={handleData}/>
                    </div>
                    <div className="input-group-sm col-md-6 col-lg-3">
                        <label >Alergias</label>
                        <input type="text" className='text-uppercase form-control' name='alergist' value={data.alergist || ''} onChange={handleData}/>
                    </div>
                    <div className="input-group-sm col-md-6 col-lg-3">
                        <label >Persona de Contacto</label>
                        <input type="text" className='text-uppercase form-control' name='personalContact' value={data.personalContact || ''} onChange={handleData}/>
                    </div>
                    <div className="input-group-sm col-md-6 col-lg-2">
                        <label >Telefono de Contacto</label>
                        <input type="number" className='form-control' name='phoneContact' value={data.phoneContact || ''} onChange={handleData}/>
                    </div>
                    
                </div>
           
        )
    }
  

