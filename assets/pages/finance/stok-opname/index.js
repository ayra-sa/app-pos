import DataTableStokOpname from 'components/finance/stokOpname/dataTableStokOpname'
import ModalDetailDataTableStokOpname from 'components/finance/stokOpname/modalDetailDataTable'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import React, { useState } from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const StokOpname = () => {
  const [isModalUp, setisModalUp] = useState(false)
  const [objModalUp, setobjModalUp] = useState(false)

  return (
    <Admin>
      <div className='finance-penerimaan-kontainer'>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Stok Opname</div>
          <IReload />
        </div>

        <div className='garis-tipis'></div>

        <DataTableStokOpname
          setobjModalUp={setobjModalUp}
          objModalUp={objModalUp}
          isModalUp={isModalUp}
          setisModalUp={setisModalUp}
        />

        <ModalDetailDataTableStokOpname
          setisModalUp={setisModalUp}
          isModalUp={isModalUp} />
      </div>
    </Admin>
  )
}

export default WithAuth(StokOpname)