import DataTableLaporanJurnalUmum from 'components/finance/laporan/dataTableLaporajJurnalUmum'
import IBack from 'components/icons/IBack'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import Link from 'next/link'
import React, { useEffect } from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const JurnalUmum = () => {
return (
    <Admin>
      <div>

        <div className='display-flex-align-center justify-between'>
          <div className='display-flex-align-center'>
            <Link href={'/finance/laporan/'}>
              <div className='cursor-pointer'><IBack /></div>
            </Link>
            <div className='ml-3 finance-laporan-neraca-title'>Jurnal Umum</div>
          </div>
          <IReload />
        </div>

        <div className='garis-tipis'></div>

        <DataTableLaporanJurnalUmum />
      </div>
    </Admin>
  )
}

export default WithAuth(JurnalUmum)