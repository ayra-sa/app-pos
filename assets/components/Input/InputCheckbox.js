import React from 'react'

function InputCheckbox({
  data,
  marginLeftTitle = '8px',
  flexWrap = 1,
}) {
  return (
    <>
      {
        data?.map((obj) => {
          return (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flex: flexWrap,
            }}>
              <input
                name={obj?.name}
                type='checkbox'
              />
              <div
                className='input-checkbox'
                style={{
                  marginLeft: marginLeftTitle,
                }}
              >{obj?.label}</div>
            </div>
          )
        })
      }
    </>
  )
}

export default InputCheckbox