import React from 'react'

function StatusModalDataTranferBarang({
  status = 'Belum selesai'
}) {
  return (
    <div className='w-100 d-flex align-center justify-between'>
      <div>
        <div className='transfer-barang-detail-status-title'>
          Tanggal Pembuatan Surat Pengiriman :</div>
        <div className='transfer-barang-detail-status-title-data mt-4px'>
          23 Juli 2023, 21:00</div>
      </div>
      <div style={{
        background: status == 'Belum selesai' ? '#EB5757' : '#219653'
      }} className='id-detail-status'>
        {status}
      </div>
    </div>
  )
}

export default StatusModalDataTranferBarang