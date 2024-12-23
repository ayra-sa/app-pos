import Tab from 'components/Tab/inddex';
import DataTableKontak from 'components/finance/kontak/dataTableKontak';
import Admin from 'layouts/Admin'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import ModalTambahKontak from 'components/finance/kontak/modalTambahKontak';
import ModalConfirmationDelete from 'components/modalConfirmationDelete';
import ModalEditKontak from 'components/finance/kontak/modalEditKontak';
import ModalDetailKontak from 'components/finance/kontak/modalDetailKontak';
import WithAuth from 'components/config/protect';

const Kontak = () => {

  const dispatch = useDispatch();
  const tabsKontakReducer = useSelector((state) => state.tabsKontakReducer);
  const [isModalConfirmationDelete, setisModalConfirmationDelete] = useState(false);
  const [IsModal, setIsModal] = useState(false)
  const [IsModalEdit, setIsModalEdit] = useState(false)
  const [IsModalDetail, setIsModalDetail] = useState(false)

  const SimpanAct = () => {
    setisModalConfirmationDelete(false)
  }

  return (
    <Admin>
      <div>

        <Tab
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_KONTAK_SET',
              payload: payload
            })
          }}
          Tabs={tabsKontakReducer?.data}
          IsActiveTab={tabsKontakReducer?.isActivetab} />

        <ModalDetailKontak
          isModal={IsModalDetail}
          setIsModal={setIsModalDetail}
        />
        <ModalTambahKontak
          isModal={IsModal}
          setIsModal={setIsModal} />
        <ModalEditKontak
          isModal={IsModalEdit}
          setIsModal={setIsModalEdit}
        />
        <DataTableKontak
          isModalConfirmationDelete={isModalConfirmationDelete}
          setisModalConfirmationDelete={setisModalConfirmationDelete}
          setIsModalEdit={setIsModalEdit}
          setIsModalDetail={setIsModalDetail}
          setIsModal={setIsModal} />
        <ModalConfirmationDelete
          actionCallback={() => SimpanAct()}
          isModalUp={isModalConfirmationDelete}
          setisModalUp={setisModalConfirmationDelete}
        />
      </div>
    </Admin>
  )
}

export default WithAuth(Kontak)