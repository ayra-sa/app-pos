import React from 'react'

const InputTextArea = ({
  title,
  placeholder,
  flexParent,
  marginLeftChild,
  classTitle,
  rows,
  name,
  value,
  handleChange,
}) => {
  return (
    <div style={{
      flex: flexParent,
    }}>
      <div className={
        classTitle
          ? classTitle
          : 'finance-penerimaan-filter-tgl-style'
      }>{title}</div>
      <textarea
        name={name}
        value={value}
        rows={rows}
        onChange={handleChange}
        style={{
          marginLeft: marginLeftChild,
        }}
        placeholder={placeholder}
        className='input-text-label-value'
        type="text" />
    </div>
  )
}

export default InputTextArea