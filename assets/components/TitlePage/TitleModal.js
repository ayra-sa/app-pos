import IClose from 'components/icons/Close'
import React from 'react'

const TitleModal = ({
  title,
  setisModalClose,
  icon,
}) => {
  return (
    <div className='finance-penerimaan-modal-detail-kontainer'>
      <div className='finance-penerimaan-modal-detail-top-wrapp'>
        <div className='finance-penerimaan-modal-detail-title'>{title}</div>
        <div onClick={() => setisModalClose(false)} className='cursor-pointer'>
          {
            icon ? icon : <IClose />
          }
        </div>
      </div>
    </div>
  )
}

export default TitleModal