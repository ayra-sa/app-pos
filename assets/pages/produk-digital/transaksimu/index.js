import IReload from 'components/icons/IReload'
import DataTableTransaksimu from 'components/produk-digital/dataTableTransaksimu'
import Admin from 'layouts/Admin'
import React from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect';

const TransaksiMu = () => {
  return (
    <Admin>
      <div>

        <div className='grid grid-cols-4 gap-4'>

          <div className='backround-produk-digital'>
            <div className='finance-penerimaan-wrapp-top'>
              <div className='finance-penerimaan-title'>Total Transksi Bulan Ini</div>
              <IReload />
            </div>
            <div className='backround-produk-digital-bottom'>
              <div className='backround-produk-digital-bottom-title'>Total</div>
              <div className='backround-produk-digital-bottom-title-count'>12 trx</div>
            </div>
          </div>

          <div className='backround-produk-digital'>
            <div className='finance-penerimaan-wrapp-top'>
              <div className='finance-penerimaan-title'>Transksi Sukses Bulan Ini</div>
              <IReload />
            </div>
            <div className='backround-produk-digital-bottom'>
              <div className='backround-produk-digital-bottom-title'>Total</div>
              <div className='backround-produk-digital-bottom-title-count'>12 trx</div>
            </div>
          </div>

          <div className='backround-produk-digital'>
            <div className='finance-penerimaan-wrapp-top'>
              <div className='finance-penerimaan-title'>Transksi gagal Bulan Ini</div>
              <IReload />
            </div>
            <div className='backround-produk-digital-bottom'>
              <div className='backround-produk-digital-bottom-title'>Total</div>
              <div className='backround-produk-digital-bottom-title-count'>12 trx</div>
            </div>
          </div>

          <div className='backround-produk-digital'>
            <div className='finance-penerimaan-wrapp-top'>
              <div className='finance-penerimaan-title'>Transksi pending Bulan Ini</div>
              <IReload />
            </div>
            <div className='backround-produk-digital-bottom'>
              <div className='backround-produk-digital-bottom-title'>Total</div>
              <div className='backround-produk-digital-bottom-title-count'>12 trx</div>
            </div>
          </div>

        </div>

        <div className='grid grid-cols-2 gap-4 mt-3'>

          <div className='backround-produk-digital'>
            <div className='finance-penerimaan-wrapp-top'>
              <div className='finance-penerimaan-title'>Transksi pendapatan Pending Bulan Ini</div>
              <IReload />
            </div>
            <div className='backround-produk-digital-bottom'>
              <div className='backround-produk-digital-bottom-title'>Total</div>
              <div style={{ color: '#2684FF' }} className='backround-produk-digital-bottom-title-count'>20.000.000</div>
            </div>
          </div>

          <div className='backround-produk-digital'>
            <div className='finance-penerimaan-wrapp-top'>
              <div className='finance-penerimaan-title'>Transksi pendapatan Pending Bulan Ini</div>
              <IReload />
            </div>
            <div className='backround-produk-digital-bottom'>
              <div className='backround-produk-digital-bottom-title'>Jumlah Omset</div>
              <div style={{ color: '#2684FF' }} className='backround-produk-digital-bottom-title-count'>20.000.000</div>
            </div>
          </div>

        </div>

        <div className='garis-tipis'></div>
        <div style={{
          background: 'white'
        }}>

          <div className='finance-penerimaan-wrapp-top'>
            <div className='finance-penerimaan-title'>Riwayat Transaksi</div>
            <IReload />
          </div>

          <DataTableTransaksimu />
        </div>

      </div>
    </Admin>
  )
}

export default WithAuth(TransaksiMu)