import IAdd from 'components/icons/IAdd'
import React from 'react'

function ButtonSave({
  action,
  title,
  flex,
  textAligValue,
  justifyContentValue,
}) {
  return (
    <div style={{
      flex: flex ? flex : '',
    }}>
      <div style={{
        justifyContent: justifyContentValue ? justifyContentValue : 'start',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }} onClick={() => action()} className='finance-penerimaan-buttont-buat-wrapp'>
        <div style={{
          marginLeft: '0px',
          textAlign: textAligValue ? textAligValue : 'start' 
        }} className='finance-penerimaan-buttont-buat'>{title}</div>
      </div>
    </div>
  )
}

export default ButtonSave