export const PersonalDocumentation = ({documents,handleDocuments}) => {
    return (
      <>
           <div className="col-md-12 d-flex s p-1 justify-content-between row mt-4 b-rad-15">
                  <div className='col-md-3'>
                      <input type="checkbox" id="solEmp" className="filled-in" name='solEmp'  checked={documents.solEmp} onChange={handleDocuments} />
                      <label htmlFor="solEmp">Solicitud de empleo</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="birthDayDoc" className="filled-in" name='birthDayDoc'  checked={documents.birthDayDoc} onChange={handleDocuments}   />
                      <label htmlFor="birthDayDoc">Acta de Nacimiento</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="imssDoc" className="filled-in" name='imssDoc'  checked={documents.imssDoc} onChange={handleDocuments} />
                      <label htmlFor="imssDoc">Comprobante de domicilio</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="idDoc" className="filled-in"  name='idDoc'  checked={documents.idDoc} onChange={handleDocuments}/>
                      <label htmlFor="idDoc">Identificacion Oficial</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="infonavit" className="filled-in" name='infonavit'  checked={documents.infonavit} onChange={handleDocuments}  />
                      <label htmlFor="infonavit">Aviso de retencion de INFONAVIT</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="curp" className="filled-in" name='curp'  checked={documents.curp} onChange={handleDocuments} />
                      <label htmlFor="curp">CURP</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="sitFisc" className="filled-in" name='sitFisc'  checked={documents.sitFisc} onChange={handleDocuments} />
                      <label htmlFor="sitFisc">Constancia de Situacion Fiscal</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="compEst" className="filled-in" name='compEst'  checked={documents.compEst} onChange={handleDocuments} />
                      <label htmlFor="compEst">Comprobante de Estudios</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="recDoc" className="filled-in" name='recDoc'  checked={documents.recDoc} onChange={handleDocuments} />
                      <label htmlFor="recDoc">Cartas de Recomendacion</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="photos" className="filled-in" name='photos'  checked={documents.photos} onChange={handleDocuments} />
                      <label htmlFor="photos">Fotografias</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="antPenales" className="filled-in" name='antPenales'  checked={documents.antPenales} onChange={handleDocuments}  />
                      <label htmlFor="antPenales">Antecedentes No Penales</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="driverLic" className="filled-in"  name='driverLic'  checked={documents.driverLic} onChange={handleDocuments}/>
                      <label htmlFor="driverLic">Licencia de conducir (segun Puesto)</label>
  
                  </div>
                  <div className='col-md-3'>
                      <input type="checkbox" id="marriageDoc" className="filled-in" name='marriageDoc' checked={documents.marriageDoc} onChange={handleDocuments} />
                      <label htmlFor="marriageDoc">Copia de Acta de Matrimonio (Si lo esta)</label>
  
                  </div>
              </div>
      </>
    )
  }
  