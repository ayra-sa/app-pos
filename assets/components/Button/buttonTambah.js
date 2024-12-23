import IAdd from 'components/icons/IAdd'
import React from 'react'

function ButtonTambah({
  action,
  title
}) {
  return (
    <div>
      <div onClick={() => action()} className='finance-penerimaan-buttont-buat-wrapp'>
        <IAdd />
        <div className='finance-penerimaan-buttont-buat'>{title}</div>
      </div>
    </div>
  )
}

export default ButtonTambah