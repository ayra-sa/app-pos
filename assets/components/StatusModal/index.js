import React from 'react'

function StatusModalData({
  status = 'Belum selesai'
}) {
  return (
    <div className='mb-16px mt-16px w-100 d-flex align-center justify-between'>
      <div className='id-detail'>
        #23456789
      </div>
      <div style={{
        background: status == 'Belum selesai' ? '#EB5757' : '#219653'
      }} className='id-detail-status'>
        {status}
      </div>
    </div>
  )
}

export default StatusModalData