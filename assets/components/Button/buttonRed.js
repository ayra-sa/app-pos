import IAdd from 'components/icons/IAdd'
import React from 'react'

function ButtonRed({
  action,
  title
}) {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#C9372C',
          borderRadius: '3px',
          border: '1px solid red',
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px',
          gap: '10px',
        }}
        onClick={() => action()}
      >
        <div
          style={{
            color: '#FFF',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '16px',
          }}
        >
          {title}</div>
      </div>
    </div>
  )
}

export default ButtonRed