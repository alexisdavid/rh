
export const ReactModal = ({title,titleButton='Agregar',classNameParam='btn bg-gradient-primary btn-sm  ',identifier='modal-default',icon='ni ni-fat-add',children}) => {
  return (
    <>
        <div className="d-flex justify-content-end">

            <button className={classNameParam} data-bs-toggle="modal" data-bs-target={`#${identifier}`}> <i className={icon} style={{fontSize:12}}></i>{titleButton}</button>
        </div>

        <div className="">
          <div className="modal fade" id={identifier} tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
            <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
              <div className="modal-content">
                  {children}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
{/*
*/}