import DataTableTagAnggota from 'components/anggota/tagAnggota/dataTableTagAnggota'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import React, { useState } from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import ModalConfirmationDelete from 'components/modalConfirmationDelete';
import ModalTambahTagAnggota from 'components/anggota/tagAnggota/modalTambahAddTag';
import ModalConfirmationAdd from 'components/modalConfirmationAdd';
import ModalTambahTagAnggotaSub from 'components/anggota/tagAnggota/modalTambahAddTagSub';
import ModalTambahEditAnggota from 'components/anggota/tagAnggota/modalTambahEditTag';
import ModalConfirmationEdit from 'components/modalConfirmationEdit';
import WithAuth from 'components/config/protect';

const TagAnggota = () => {

  const [isModalConfirmationAdd,
    setisModalConfirmationAdd] = useState(false);
  const [isModalConfirmationEdit,
    setisModalConfirmationEdit] = useState(false);
  const [isModalConfirmationDelete,
    setisModalConfirmationDelete] = useState(false);
  const [isModalAddTagAnggota,
    setisModalAddTagAnggota] = useState(false);
  const [isModalAddTagAnggotaSub,
    setisModalAddTagAnggotaSub] = useState(false);
  const [isModaEditTagAnggota,
    setisModaEditTagAnggota] = useState(false);

  return (
    <Admin>
      <div className='finance-penerimaan-kontainer'>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Tag Anggota</div>
          <IReload />
        </div>

        <DataTableTagAnggota
          setisModalAddTagAnggota={setisModalAddTagAnggota}
          setisModalAddTagAnggotaSub={setisModalAddTagAnggotaSub}
          setisModaEditTagAnggota={setisModaEditTagAnggota}
          setisModalConfirmationDelete={setisModalConfirmationDelete}

        />

        <ModalTambahTagAnggota
          isModalUp={isModalAddTagAnggota}
          setisModal={setisModalAddTagAnggota}
          setisModalConfirmation={setisModalConfirmationAdd}
        />
        <ModalTambahTagAnggotaSub
          isModalUp={isModalAddTagAnggotaSub}
          setisModal={setisModalAddTagAnggotaSub}
          setisModalConfirmation={setisModalConfirmationAdd}
        />
        <ModalTambahEditAnggota
          isModalUp={isModaEditTagAnggota}
          setisModal={setisModaEditTagAnggota}
          setisModalConfirmation={setisModalConfirmationEdit}
        />
        <ModalConfirmationAdd
          isModalUp={isModalConfirmationAdd}
          setisModalUp={setisModalConfirmationAdd}
          actionCallback={() => {
            setisModalAddTagAnggota(false)
            setisModalAddTagAnggotaSub(false)
            setisModalConfirmationAdd(false)
          }}
        />
        <ModalConfirmationEdit
          isModalUp={isModalConfirmationEdit}
          setisModalUp={setisModalConfirmationEdit}
          actionCallback={() => {
            setisModaEditTagAnggota(false)
            setisModalConfirmationEdit(false)
          }}
        />
        <ModalConfirmationDelete
          isModalUp={isModalConfirmationDelete}
          setisModalUp={setisModalConfirmationDelete}
          actionCallback={() => setisModalConfirmationDelete(false)}
        />
      </div>
    </Admin>
  )
}

export default WithAuth(TagAnggota)