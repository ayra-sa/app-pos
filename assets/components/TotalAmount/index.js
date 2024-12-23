import React from 'react'

function TotalAmount({
  amount,
  paddingWrapp,
  paddingBottomWrapp,
}) {
  return (
    <div style={{
      padding: paddingWrapp,
      paddingBottom: paddingBottomWrapp,
    }}>
      <div className='total-amount'>
        <div className='total-amount-title'>Total Amount</div>
        <div className='total-amount-title-value'>Rp {amount}</div>
      </div>
    </div>
  )
}

export default TotalAmount