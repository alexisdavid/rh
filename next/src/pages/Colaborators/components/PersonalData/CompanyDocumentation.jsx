import React from 'react'

export const CompanyDocumentation = ({documentsCompany,handleDocumentsCompany}) => {
  return (
    <>
    
    <div className="col-md-12 d-flex   p-1 justify-content-between row mt-4 b-rad-15">
                <div className='col-md-3'>
                    <input type="checkbox" id="emailCard" className="filled-in" name='emailCard'  checked={documentsCompany.emailCard} onChange={handleDocumentsCompany}  />
                    <label htmlFor="emailCard">Carta de Correo</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="privacyCard" className="filled-in" name='privacyCard'  checked={documentsCompany.privacyCard} onChange={handleDocumentsCompany}  />
                    <label htmlFor="privacyCard">Aviso de Privacidad</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="initialContract" className="filled-in" name='initialContract'  checked={documentsCompany.initialContract} onChange={handleDocumentsCompany}  />
                    <label htmlFor="initialContract">Contrato Inicial</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="imssReleased" className="filled-in" name='imssReleased'  checked={documentsCompany.imssReleased} onChange={handleDocumentsCompany}  />
                    <label htmlFor="imssReleased">Alta IMSS</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="nominContract" className="filled-in" name='nominContract'  checked={documentsCompany.nominContract} onChange={handleDocumentsCompany} />
                    <label htmlFor="nominContract">Contrato de Tarjete de Nomina</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="uniform" className="filled-in" name='uniform'  checked={documentsCompany.uniform} onChange={handleDocumentsCompany} />
                    <label htmlFor="uniform">Vale de Uniforme</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="finalContract" className="filled-in" name='finalContract'  checked={documentsCompany.finalContract} onChange={handleDocumentsCompany} />
                    <label htmlFor="finalContract">Contrato Indefinido</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="psicometrics" className="filled-in" name='psicometrics'  checked={documentsCompany.psicometrics} onChange={handleDocumentsCompany} />
                    <label htmlFor="psicometrics">Pruebas Psicometricas</label>

                </div>
                <div className='col-md-3'>
                    <input type="checkbox" id="noConflict" className="filled-in" name='noConflict'  checked={documentsCompany.noConflict} onChange={handleDocumentsCompany} />
                    <label htmlFor="noConflict">Carta de No Conflicto de Intereses</label>

                </div>
            </div>
    </>
  )
}
