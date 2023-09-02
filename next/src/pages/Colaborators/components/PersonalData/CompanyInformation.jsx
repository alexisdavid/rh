import React from 'react'
import Select from 'react-select'
export const CompanyInformation = ({data,handleData,antiguedad,department=[],tags=[],tagsBoss ,setUser}) => {
    
    const handleDataSelect=(value,bandera)=>setUser({...data,[bandera]:value})
    const handleOpen = (data) =>{}
    

  return (
    <>
      <div className=" row  p-1">
                <div className="col-md-3 input-group-sm">
                    <label>Empresa</label>
                   <select name="empresa" value={data.empresa ||'INFINITYHR'} onChange={handleData} className="form-control">
                    <option value="HANAN"> Hanan Distribuciones</option>
                    <option value="IMKOM">Imcom Kaizen</option>
                    <option value="INFINITYHR">Infinity HR</option>
                   </select>
                </div>
                <div className="col-md-3 input-group-sm">
                    <label>Puesto</label>
                    <div className="d-flex">
                        <div style={{width:'400px'}}>
                            <Select  options={tags} isMulti value={data.puesto} onChange={value=>handleDataSelect(value,'puesto')}/>
                        </div>
                        <div>
                            <button onClick={e=>handleOpen(3,'Nuevo Puesto')} className='btn bg-gradient-primary   btn-sm ml-2'><i className="fa fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 input-group-sm">
                    <label>Fecha de Ingreso</label>
                    <input type="date" className={` form-control ${data.ingreso==''?'border-danger':''}`} onChange={handleData} name='ingreso' value={data.ingreso || ''}/>
                </div>
                <div className="col-md-3 input-group-sm">
                    <label>Antiguedad</label>
                    <input type="text" className='form-control' disabled onChange={handleData} name='antiquity' value={antiguedad || ''}/>
                </div>
                <div className="col-md-3 input-group-sm">
                    <label>Jefe Inmediato</label>
                    <div className="d-flex">
                        <div style={{width:'400px'}}>

                            <Select options={tagsBoss} isMulti value={data.inmBoss} onChange={value=>handleDataSelect(value,'inmBoss')}/>
                        </div>
                    <div>
                        <button onClick={e=>handleOpen(4,'Nuevo Jefe inmediato')} className='btn bg-gradient-primary  btn-sm ml-2'><i className="fa fa-plus"></i></button>

                    </div>
                   </div>
                    {/* <input type="text" className='form-control' name='inmBoss' value={data.inmBoss || ''} onChange={handleData}/> */}
                </div>
                <div className="col-md-3 input-group-sm">
                    <label>Departamento</label>
                    <Select options={department} value={data.wArea} onChange={value=>handleDataSelect(value,'wArea')}/>
                    {/* <input type="text" className='form-control' name='wArea' value={data.wArea || ''} onChange={handleData}/> */}
                </div>




                <div className="col-md-3 input-group-sm">
                    <label>Número de Infonavit</label>
                    <input type="text" className='form-control' name='infonavit' value={data.infonavit || ''} onChange={handleData}/>
                </div>
                <div className="col-md-3 input-group-sm">
                    <label>Número de tarjeta de nómina</label>
                    <input type="text" className='form-control' name='numCart' value={data.numCart || ''} onChange={handleData}/>
                </div>
                
                <div className="col-md-3 input-group-sm">
                    <label>Número de licencia </label>
                    <input type="text" className='form-control' name='idLicNum' value={data.idLicNum || ''} onChange={handleData}/>
                </div>
                <div className="col-md-3 input-group-sm">
                    <label>Vencimiento de licencia</label>
                    {/* el campo es el de id_check en bd, se utilizo ese por que no estaba en uso y no era necesario */}
                    <input type="date" className='form-control' name='id_check' value={data.id_check || ''} onChange={handleData}/>
                </div>
                <div className="col-md-3 input-group-sm">
                    <label>Numero de Empleado</label>
                    <input type="number" className='form-control' name='id_empleado' value={data.id_empleado || ''} onChange={handleData}/>
                </div>

            </div>  
    
    
    
    
    </>
  )
}
