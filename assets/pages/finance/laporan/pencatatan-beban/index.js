import DataTablePencatatanBeban from 'components/finance/laporan/dataTableLaporanPencatatanBeban'
import ModalDetailDataTablePencatatanBeban from 'components/finance/laporan/modalDetailDataTablePencatatanBeban'
import IBack from 'components/icons/IBack'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import Link from 'next/link'
import React, { useState } from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const PencatatanBeban = () => {

  const [isModalUp, setisModalUp] = useState(false)
  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);

  return (
    <Admin>
      <div className='finance-laporan-buku-besar'>

        <div className='display-flex-align-center justify-between'>
          <div className='display-flex-align-center'>
            <Link href={'/finance/laporan/'}>
              <div className='cursor-pointer'><IBack /></div>
            </Link>
            <div className='ml-3 finance-laporan-neraca-title'>Pencatatan Beban</div>
          </div>
          <IReload />
        </div>

        <div className='garis-tipis'></div>
        <DataTablePencatatanBeban
          isModalUp={isModalUp}
          setisModalUp={setisModalUp} />

        <ModalDetailDataTablePencatatanBeban
          setisModalConfirmationAdd={setisModalConfirmationAdd}
          setisModalUp={setisModalUp}
          isModalUp={isModalUp} />
      </div>
    </Admin>
  )
}

export default WithAuth(PencatatanBeban)