import React from 'react'

export const StickySection = ({identificator,customClass="card p-3 mt-2 ",children}) => {
  return (
    <div className={customClass} id={identificator} >
        {children}
    </div>
  )
}
