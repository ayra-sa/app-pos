import DataTableProduk from 'components/finance/produk/dataTableProduk'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import React, { useState } from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import ModalAddProduk from 'components/finance/produk/modalAddProduk';
import { useRouter } from 'next/router';
import ModalConfirmationAdd from 'components/modalConfirmationAdd';
import ModalEditProduk from 'components/finance/produk/modalEditroduk';
import ModalConfirmationEdit from 'components/modalConfirmationEdit';
import ModalConfirmationDelete from 'components/modalConfirmationDelete';
import WithAuth from 'components/config/protect';

const Produk = () => {
  const [modalAddProduk, setmodalAddProduk] = useState(false)
  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const [isModalConfirmationEdit, setisModalConfirmationEdit] = useState(false);
  const [isModalConfirmationDelete, setisModalConfirmationDelete] = useState(false);
  const [modalEditProduk, setmodalEditProduk] = useState(false)
  const router = useRouter()

  const SimpanAct = () => {
    setisModalConfirmationAdd(false)
    setisModalConfirmationEdit(false)
    setisModalConfirmationDelete(false)
    setmodalAddProduk(false)
    setmodalEditProduk(false)
  }

  return (
    <Admin>
      <div className='finance-simpanan-kontainer'>

        <div className='finance-simpanan-title-wrapp'>
          <div className='finance-simpanan-title'>Produk</div>
          <div className='cursor-pointer'><IReload /></div>
        </div>

        <div className='garis-tipis'></div>

        <DataTableProduk
          setisModalConfirmationDelete={setisModalConfirmationDelete}
          setmodalEditProduk={setmodalEditProduk}
          setmodalAddProduk={setmodalAddProduk} />
        <ModalAddProduk
          setisModalConfirmationAdd={setisModalConfirmationAdd}
          isModalUp={modalAddProduk}
          setisModalUp={setmodalAddProduk} />
        <ModalEditProduk
          setisModalUp={setmodalEditProduk}
          isModalUp={modalEditProduk}
          setisModalConfirmationEdit={setisModalConfirmationEdit}
        />
        <ModalConfirmationAdd
          actionCallback={() => SimpanAct()}
          isModalUp={isModalConfirmationAdd}
          setisModalUp={setisModalConfirmationAdd}
        />
        <ModalConfirmationEdit
          actionCallback={() => SimpanAct()}
          isModalUp={isModalConfirmationEdit}
          setisModalUp={setisModalConfirmationEdit}
        />
        <ModalConfirmationDelete
          actionCallback={() => SimpanAct()}
          isModalUp={isModalConfirmationDelete}
          setisModalUp={setisModalConfirmationDelete}
        />
      </div>
    </Admin>
  )
}

export default WithAuth(Produk)