import IPengaturan from 'components/icons/IDaftarPengaturan'
import INext from 'components/icons/INext'
import IReload from 'components/icons/IReload'
import DataTablePengaturan from 'components/produk-digital/dataTablePengaturan'
import Admin from 'layouts/Admin'
import React from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const Pengaturan = () => {
  return (
    <Admin>
      <div style={{
        background: 'white'
      }}>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Pengaturan</div>
          <IReload />
        </div>

        <div className='grid grid-cols-2 gap-4 p-2'>

          <div className='produk-digital-pengaturan'>
            <IPengaturan />
            <div className='ml-3'>
              <div className='produk-digital-pengaturan-title'>Atur semua margin produk</div>
              <div className='produk-digital-pengaturan-title-sub'>Mengubah semua nominal komisi semua produk-produk end user sesuai dengan nominal yang dimasukkan</div>
            </div>
            <INext />
          </div>

          <div className='produk-digital-pengaturan'>
            <IPengaturan />
            <div className='ml-3'>
              <div className='produk-digital-pengaturan-title'>Atur default margin</div>
              <div className='produk-digital-pengaturan-title-sub'>Mengubah semua nominal komisi semua produk-produk end user sesuai dengan nominal yang dimasukkan</div>
            </div>
            <INext />
          </div>

        </div>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Riwayat Transaksi</div>
          <IReload />
        </div>

        <DataTablePengaturan />

      </div>
    </Admin>
  )
}

export default WithAuth(Pengaturan)