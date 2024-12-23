import DataTablePembayaran from 'components/finance/pembayaran/dataTablePembayaran'
import ModalDetailDataTable from 'components/finance/pembayaran/modalDetailDataTable'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import React from 'react'
import { useState } from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const Pembayaran = () => {

  const [isModalUp, setisModalUp] = useState(false)
  const [objModalUp, setobjModalUp] = useState(false)

  return (
    <Admin>
      <div className='finance-penerimaan-kontainer'>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Pembayaran</div>
          <IReload />
        </div>

        <DataTablePembayaran
          setobjModalUp={setobjModalUp}
          objModalUp={objModalUp}
          isModalUp={isModalUp}
          setisModalUp={setisModalUp}
          urlCreatePenerimaan='/finance/pembayaran/create' />

        <div style={{ minHeight: '20px' }}></div>

        <ModalDetailDataTable
          setisModalUp={setisModalUp}
          isModalUp={isModalUp} />
      </div>
    </Admin>
  )
}

export default WithAuth(Pembayaran)