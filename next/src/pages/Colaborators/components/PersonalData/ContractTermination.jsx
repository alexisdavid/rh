import React from 'react'

export const ContractTermination = ({removeColaborator,handleRemoved}) => {
  return (
    // style={{border: '1px solid red',borderRadius: '25px'}}
    <>
  <div className="col-md-12    d-flex justify-content-between row mt-4 " >
                
                <div className=' col-md-2 mb-3 ' >
                    <input type="checkbox" id="removed" className="filled-in" name='removed'  checked={removeColaborator.removed} onChange={handleRemoved}  />
                    <label htmlFor="removed">Dado de Baja</label>
                </div>
                <div className="col-md-12 white-space-16" ></div>
                <div className='col-md-3'>
                    <input type="checkbox" id="downImss" className="filled-in" name='downImss'  checked={removeColaborator.downImss} onChange={handleRemoved}  />
                    <label htmlFor="downImss">Baja IMSS</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="renunceCard" className="filled-in" name='renunceCard'  checked={removeColaborator.renunceCard} onChange={handleRemoved}  />
                    <label htmlFor="renunceCard">Carta Renuncia</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="exitInterview" className="filled-in" name='exitInterview'  checked={removeColaborator.exitInterview} onChange={handleRemoved}   />
                    <label htmlFor="exitInterview">Entrevista de Salida</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="workConstance" className="filled-in" name='workConstance'  checked={removeColaborator.workConstance} onChange={handleRemoved}  />
                    <label htmlFor="workConstance">Constancia Laboral</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="remuneration" className="filled-in" name='remuneration'  checked={removeColaborator.remuneration} onChange={handleRemoved}  />
                    <label htmlFor="remuneration">Calculo Finiquito</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="poliza" className="filled-in" name='poliza'  checked={removeColaborator.poliza} onChange={handleRemoved}   />
                    <label htmlFor="poliza">Póliza Finiquito</label>

                </div>
                <div className='col-md-12'>
                    <label htmlFor="basic_checkbox_2">Motivo de Baja</label>
                   <textarea  className='form-control' name='cause'  value={removeColaborator.cause} onChange={handleRemoved}  cols="30" rows="3"></textarea>
                </div>
            </div>
    </>
  )
}
