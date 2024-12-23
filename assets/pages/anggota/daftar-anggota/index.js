import DataTableDaftarAnggota from 'components/anggota/daftarAnggota/dataTableDaftarAnggota'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import React, { useState } from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import ModalAddDaftarAnggota from 'components/anggota/daftarAnggota/modalAdd';
import ModalConfirmationAdd from 'components/modalConfirmationAdd';
import WithAuth from 'components/config/protect';

const DaftarAnggota = () => {

  const [modalAdd, setmodalAdd] = useState(false)
  const [modalEdit, setmodalEdit] = useState(false)
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false)
  return (
    <Admin>
      <div className='finance-penerimaan-kontainer'>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Daftar Anggota</div>
          <IReload />
        </div>

        <DataTableDaftarAnggota
          setmodalAdd={setmodalAdd}
          modalAdd={modalAdd}
          setmodalEdit={setmodalEdit}
          modalEdit={modalEdit}
        />

      </div>

      <ModalAddDaftarAnggota
        isModalUp={modalAdd}
        setisModal={setmodalAdd}
        handleActCancel={() => {
          setmodalAdd(false)
        }}
        handleActSubmit={() => {
          setmodalAdd(false)
          setmodalConfirmationAdd(true)
        }}
      />
      <ModalConfirmationAdd
        isModalUp={modalConfirmationAdd}
        setisModalUp={setmodalConfirmationAdd}
        actionCallback={() => {
          setmodalConfirmationAdd(false)
        }}
      />
    </Admin>
  )
}

export default WithAuth(DaftarAnggota)