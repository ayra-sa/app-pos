import React from 'react'

function StepTitle({
    number,
    title,
}) {
    return (
        <div className='d-flex align-center gap-16px'>
            <div className='step-title-number'>
                {number}</div>
            <div className='step-title'>
                {title}</div>
        </div>
    )
}

export default StepTitle