import DataTableHakAkses from 'components/anggota/hakAkses/dataTableHakAkses'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import React, { useState } from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import ModalConfirmationDelete from 'components/modalConfirmationDelete';
import ModalTambahHakAkses from 'components/anggota/hakAkses/modalTambahHakAses';
import ModalConfirmationAdd from 'components/modalConfirmationAdd';
import WithAuth from 'components/config/protect';

const DaftarAkses = () => {

  const [isModalConfirmationDelete,
    setisModalConfirmationDelete] = useState(false)
  const [isModalConfirmationAdd,
    setisModalConfirmationAdd] = useState(false)
  const [isModalTambahHakAkses,
    setisModalTambahHakAkses] = useState(false)
  return (
    <Admin>
      <div className='finance-penerimaan-kontainer'>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Hak Akses</div>
          <IReload />
        </div>

        <DataTableHakAkses
          setisModalConfirmationDelete={setisModalConfirmationDelete}
          setisModalTambahHakAkses={setisModalTambahHakAkses}
        />
        <ModalConfirmationDelete
          isModalUp={isModalConfirmationDelete}
          setisModalUp={setisModalConfirmationDelete}
          actionCallback={() => {
            setisModalConfirmationDelete(false)
          }}
        />
        <ModalConfirmationAdd
          isModalUp={isModalConfirmationAdd}
          setisModalUp={setisModalConfirmationAdd}
          actionCallback={() => {
            setisModalTambahHakAkses(false)
            setisModalConfirmationAdd(false)
          }}
        />
        <ModalTambahHakAkses
          isModalUp={isModalTambahHakAkses}
          setisModal={setisModalTambahHakAkses}
          setisModalConfirmation={setisModalConfirmationAdd}
        />
      </div>
    </Admin>
  )
}

export default WithAuth(DaftarAkses)