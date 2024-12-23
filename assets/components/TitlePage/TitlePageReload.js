import IReload from 'components/icons/IReload'
import React from 'react'

function TitlePageReload({
  title
}) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }} 
      className='title-page-wrapp'>
      <div className='title-page'>{title}</div>
      <div>
        <IReload/>
      </div>
    </div>
  )
}

export default TitlePageReload