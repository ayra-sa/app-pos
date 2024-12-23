import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import React, { useState } from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DataTablePenerimaan from 'components/finance/penerimaan/dataTablePenerimaan';
import ModalDetailDataTable from 'components/finance/penerimaan/modalDetailDataTable';
import WithAuth from 'components/config/protect';

const Penerimaan = () => {

  const [isModalUp, setisModalUp] = useState(false)
  const [objModalUp, setobjModalUp] = useState(false)

  return (
    <Admin>
      <div className='finance-penerimaan-kontainer'>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Penerimaan</div>
          <IReload />
        </div>

        <DataTablePenerimaan
          setobjModalUp={setobjModalUp}
          objModalUp={objModalUp}
          isModalUp={isModalUp}
          setisModalUp={setisModalUp}
          urlCreatePenerimaan='/finance/penerimaan/create' />

        <div style={{ minHeight: '20px' }}></div>

      </div>
      <ModalDetailDataTable
        setisModalUp={setisModalUp}
        isModalUp={isModalUp} />
    </Admin>
  )
}

export default WithAuth(Penerimaan)