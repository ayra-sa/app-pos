import DataTableLaporanBukuBesarDetail from 'components/finance/laporan/DataTableLaporanBukuBesarDetail'
import IBack from 'components/icons/IBack'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import Link from 'next/link'
import React from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const BukuBesarDetail = () => {
  return (
    <Admin>
      <div className='finance-laporan-buku-besar'>

        <div className='display-flex-align-center justify-between'>
          <div className='display-flex-align-center'>
            <Link href={'/finance/laporan/buku-besar'}>
              <div className='cursor-pointer'><IBack /></div>
            </Link>
            <div className='ml-3 finance-laporan-neraca-title'>Detail</div>
          </div>
          <IReload />
        </div>

        <div className='garis-tipis'></div>
        <DataTableLaporanBukuBesarDetail />

      </div>
    </Admin>
  )
}

export default WithAuth(BukuBesarDetail)