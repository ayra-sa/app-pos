import React from 'react'

function Total({
  title,
  total,
  paddingWrapp,
}) {
  return (
    <div style={{
      padding: paddingWrapp
    }}>
      <div className='total'>
        <div className='total-title'>{title}</div>
        <div className='total-title-value'>Rp {total}</div>
      </div>
    </div>
  )
}

export default Total