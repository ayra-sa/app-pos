import IAdd from 'components/icons/IAdd'
import React from 'react'

function ButtonPrint({
  action,
  title
}) {
  return (
    <div>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '3px',
          border: '1px solid #0F0F0F',
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px',
          gap: '10px',
        }}
        onClick={() => action()}
      >
        <IPrint />
        <div
          style={{
            color: '#172B4D',
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

const IPrint = () => {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 5.5H16V0.5H4V5.5H3C1.34 5.5 0 6.84 0 8.5V14.5H4V18.5H16V14.5H20V8.5C20 6.84 18.66 5.5 17 5.5ZM6 2.5H14V5.5H6V2.5ZM14 14.5V16.5H6V12.5H14V14.5ZM16 12.5V10.5H4V12.5H2V8.5C2 7.95 2.45 7.5 3 7.5H17C17.55 7.5 18 7.95 18 8.5V12.5H16Z" fill="#44546F" />
    </svg>

  )
}
export default ButtonPrint