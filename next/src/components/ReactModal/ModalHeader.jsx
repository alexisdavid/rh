import React from 'react'

export const ModalHeader = ({titleHeader='',id="modal-title-default"}) => {
  return (
    <div className="modal-header">
    <h6 className="modal-title" id={id}>{titleHeader}</h6>
    <button type="button" className="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  )
}
