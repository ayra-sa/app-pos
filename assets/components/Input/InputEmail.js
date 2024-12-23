import React from 'react'

const InputEmail = ({
  title,
  placeholder,
  disabled,
  flexParent,
}) => {
  return (
    <div style={{
      flex: flexParent
    }}>
      <div className='mb-4px input-text-label'>{title}</div>
      <input 
        disabled={disabled}
        placeholder={placeholder} 
        className={disabled 
          ? 'input-text-label-value-disable' 
            : 'input-text-label-value' }
        type="email"/>
    </div>
  )
}

export default InputEmail