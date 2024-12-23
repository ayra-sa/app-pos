import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputEmail from 'components/Input/InputEmail'
import InputRadio from 'components/Input/InputRadio'
import InputTextArea from 'components/Input/InputTexArea'
import InputText from 'components/Input/InputText'
import ModalWrapper from 'components/Modal/ModalWrapper'
import Tab from 'components/Tab/inddex'
import TitleModal from 'components/TitlePage/TitleModal'
import IAdd from 'components/icons/IAdd'
import ModalConfirmationAdd from 'components/modalConfirmationAdd'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ModalTambahKontak({
  isModal,
  setIsModal,
}) {
  const TabsAddKontakReducer = useSelector((state) =>
    state?.tabsAddKontakReducer)
  const dispatch = useDispatch()

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const router = useRouter()

  const SimpanAct = () => {
    setIsModal(false)
    setisModalConfirmationAdd(false)
  }

  return (
    <>
      <ModalWrapper
        overflow={'auto'}
        isModalUp={isModal}
        setisModalUp={setIsModal}
        bottom={'10%'}
        top={'10%'}
        right={'10%'}
        left={'10%'}
      >

        <div className='p-16px'>
          <TitleModal setisModalClose={() => setIsModal(false)} title={'Tambah Kontak'} />
        </div>
        <hr />
        <div className='p-16px grid grid-cols-2 gap-4'>
          <InputText
            placeholder={'Masukan Nama Depan'}
            flexParent={1}
            title={'Nama Depan*'} />
          <InputText
            placeholder={'Masukan Nama Belakang'}
            flexParent={1}
            title={'Nama Belakang*'} />
        </div>
        <div className='p-16px grid grid-cols-1 gap-4'>
          <InputRadio
            multi={true}
            valueMulti={[
              { titleCheck: 'Pelanggan' },
              { titleCheck: 'Suplier' },
              { titleCheck: 'Karyawan' },
              { titleCheck: 'Lainnya' },
            ]}
            title={'Type kontak'} />
        </div>

        <Tab
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_ADD_KONTAK',
              payload: payload
            })
          }}
          Tabs={TabsAddKontakReducer?.data}
          IsActiveTab={TabsAddKontakReducer?.isActivetab} />
        {
          TabsAddKontakReducer?.isActivetab == 0 && <>
            <div className='p-16px grid grid-cols-2 gap-4'>
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                title={'Kategori*'} />
              <InputText
                placeholder={'Masukan nomor identitas sesuai KTP'}
                title={'Nomer identitas*'}
                flexParent={1} />
              <InputEmail
                placeholder={'Masukan Email'}
                title={'Email*'} />
              <InputText
                placeholder={'Masukan website'}
                title={'Website*'}
                flexParent={1} />
              <InputText
                placeholder={'+62'}
                title={'Nomer HP*'}
                flexParent={1} />
              <InputText
                placeholder={'Nomor telepon perusahaan'}
                title={'Nomer Perusahaan*'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan Fax'}
                title={'Fax*'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan NPWP'}
                title={'NPWP*'}
                flexParent={1} />
            </div>
          </>
        }
        {
          TabsAddKontakReducer?.isActivetab == 1 && <>
            <div className='p-16px grid grid-cols-2 gap-4'>
              <InputDropdown
                marginLeftChild={'16px'}
                title={'Kota'}
                flexParent={1} />
              <InputDropdown
                marginLeftChild={'16px'}
                title={'Provinsi'}
                flexParent={1} />
              <InputDropdown
                title={'Negara'}
                marginLeftChild={'16px'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan Kode Pos'}
                title={'Kode Pos'}
                flexParent={1} />
            </div>
            <div className='p-16px grid grid-cols-1 gap-4'>
              <InputTextArea
                placeholder={'Isi alamat lengkap disini'}
                title={'Alamat pembayaran/penagihan'} />
              <InputTextArea
                placeholder={'Isi alamat lengkap disini'}
                title={'Alamat pengiriman'} />
            </div>
          </>
        }
        {
          TabsAddKontakReducer?.isActivetab == 2 && <>
            <div className='p-16px grid grid-cols-2 gap-4'>
              <InputText
                placeholder={'Masukan Nama Bank'}
                title={'Nama Bank*'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan Cabang Bank'}
                title={'Cabang Bank*'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan Pemegang Akun Bank'}
                title={'Pemegang Akun Bank*'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan Nama Rekening'}
                title={'Nama Rekening*'}
                flexParent={1} />
            </div>
          </>
        }
        {
          TabsAddKontakReducer?.isActivetab == 3 && <>
            <div className='p-16px grid grid-cols-2 gap-4'>
              <InputDropdown
                marginLeftChild={'16px'}
                title={'Metode Pembayaran'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan Default diskon'}
                title={'Default diskon%'}
                flexParent={1} />
            </div>
            <div className='p-16px grid grid-cols-1 gap-4'>
              <InputTextArea
                placeholder={'Isi defualt deskripsi disini'}
                title={'Default deskripsi'} />
            </div>
            <div className='p-16px grid grid-cols-2 gap-4'>
              <InputDropdown
                marginLeftChild={'16px'}
                title={'Akun Utang'}
                flexParent={1} />
              <InputDropdown
                title={'Akun Pembelian'}
                marginLeftChild={'16px'}
                flexParent={1} />
            </div>
          </>
        }
        {
          TabsAddKontakReducer?.isActivetab == 4 && <>
            <div className='p-16px grid grid-cols-1 gap-4'>
              <InputRadio
                multi={false}
                title={'Pajak'}
                titleCheck={'Default faktur sudah temasuk pajak'} />
            </div>
            <div className='p-16px grid grid-cols-2 gap-4'>
              <InputText
                placeholder={'Masukan Masukan NPWP'}
                title={'NPWP'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan Masukan NIK/Pasport'}
                title={'NIK/Pasport*'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan nama pemegang pajak'}
                title={'Wajib pajak*'}
                flexParent={1} />
              <InputDropdown
                marginLeftChild={'16px'}
                placeholder={'Masukan Masukan NIK/Pasport'}
                title={'Jenis dokumen'}
                flexParent={1} />
            </div>
            <hr />
            <div className='p-16px grid grid-cols-1 gap-4'>
              <InputRadio
                titleCheck={'Alamat pajak sama dengan alamat pembayaran'}
                title={'Alamat pajak'} />
            </div>
            <div className='p-16px grid grid-cols-2 gap-4'>
              <InputDropdown
                marginLeftChild={'16px'}
                title={'Kota'}
                flexParent={1} />
              <InputDropdown
                marginLeftChild={'16px'}
                title={'Provinsi'}
                flexParent={1} />
              <InputDropdown
                title={'Negara'}
                marginLeftChild={'16px'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan Kode Pos'}
                title={'Kode Pos'}
                flexParent={1} />
            </div>
            <div className='p-16px grid grid-cols-1 gap-4'>
              <InputTextArea
                placeholder={'Isi alamat lengkap disini'}
                title={'Detail Alamat '} />
            </div>
          </>
        }
        {
          TabsAddKontakReducer?.isActivetab == 5 && <>
            <div className='p-16px grid grid-cols-6 gap-4'>
              <InputDropdown
                title={'Mata uang'}
                marginLeftChild={'16px'}
                flexParent={1} />
              <InputDate
                title={'Tanggal*'}
                flexParent={1}
              />
              <InputDropdown
                title={'Metode pembayaran*'}
                marginLeftChild={'16px'}
                flexParent={1} />
              <InputText
                isTitleAction={true}
                typeTitleAction={'otomatis'}
                placeholder={'Masukan Nomor'}
                title={'Nomor*'}
                flexParent={1} />
              <InputText
                placeholder={'Masukan Nilai'}
                title={'Nilai*'}
                flexParent={1} />
              <InputText
                isTitleAction={true}
                typeTitleAction={'add'}
                placeholder={'Masukan Keterangan'}
                title={'Keterangan*'}
                flexParent={1} />
            </div>
            <div className='grid grid-cols-1 mt-4 gap-4'>
              <div className='finance-penerimaan-create-tambah-data'>
                <div className='flex finance-penerimaan-create-tambah-data-wrapp'>
                  <IAdd color='#44546F' />
                  <div className='finance-penerimaan-create-tambah-data-wrapp-title ml-2'>Tambah Data</div>
                </div>
              </div>
            </div>
          </>
        }
        {
          TabsAddKontakReducer?.isActivetab == 6 && <>
            <div className='p-16px grid grid-cols-1 gap-4'>
              <InputRadio
                title={'Nomor faktur'}
                titleCheck={'Ya, pemohon memberikan nomor faktur'}
              />

            </div>
            <div className='p-16px grid grid-cols-1 gap-4'>
              <InputTextArea
                flexParent={1}
                title={'Catatan'}
                placeholder={'Masukan catatan disini'}
              />

            </div>
          </>
        }
        <div className='p-16px grid grid-cols-1 gap-4'>
          <div className='d-flex align-center justify-end'>
            <div className='d-flex gap-10px'>
              <ButtonCancel
                title={'Batal'}
                paddingBottom={'6px'}
                paddingTop={'6px'} />
              <ButtonSave
                action={() => setisModalConfirmationAdd(true)}
                title={'Tambah Kontak'} />
            </div>
          </div>
        </div>

      </ModalWrapper>
      <ModalConfirmationAdd
        actionCallback={() => SimpanAct()}
        isModalUp={isModalConfirmationAdd}
        setisModalUp={setisModalConfirmationAdd}
      />
    </>
  )
}

export default ModalTambahKontak