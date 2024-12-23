import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputTextArea from 'components/Input/InputTexArea'
import InputText from 'components/Input/InputText'
import Tab from 'components/Tab/inddex'
import TitlePageBack from 'components/TitlePage/TitlePageBack'
import WithAuth from 'components/config/protect'
import ModalDetailDataTableStokOpname from 'components/finance/stokOpname/modalDetailDataTable'
import IAdd from 'components/icons/IAdd'
import IBack from 'components/icons/IBack'
import ModalConfirmationAdd from 'components/modalConfirmationAdd'
import Admin from 'layouts/Admin'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CreateStokOpname() {

  const tabsAddStokOpnameReducer = useSelector((state) =>
    state?.tabsAddStokOpnameReducer)
  const dispatch = useDispatch()

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const router = useRouter()

  const [stokOpnameDetail, setstokOpnameDetail] = useState(false)

  const SimpanAct = () => {
    setisModalConfirmationAdd(false)
    setstokOpnameDetail(false)
    router.push('/finance/stok-opname')
  }


  return (
    <Admin>
      <TitlePageBack
        title={'Buat stok opname'}
        icon={<IBack />}
      />
      <div style={{
        background: 'white'
      }}>
        <Tab
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_ADD_STOK_OPNAME',
              payload: payload
            })
          }}
          Tabs={tabsAddStokOpnameReducer?.data}
          IsActiveTab={tabsAddStokOpnameReducer?.isActivetab} />

        {
          tabsAddStokOpnameReducer?.isActivetab == 0 && <>
            <div className='p-16px'>
              <TitlePageBack icon={''} title={'Detail ajukan stok opname'} />
              <hr className='mt-16px mb-16px' />
              <div className='grid grid-cols-2 gap-4'>
                <InputDate
                  title={'Tanggal SPK*'}
                  flexParent={1}
                />
                <div style={{ marginTop: '6px' }}>
                  <InputDropdown
                    marginLeftChild={"16px"}
                    flexParent={1}
                    otomatis={true}
                    title={'Nomor SPK*'}
                  />
                </div>
                <InputDate
                  title={'Tanggal SPK*'}
                  flexParent={1}
                />
                <div style={{ marginTop: '6px' }}>
                  <InputText
                    flexParent={1}
                    title={'Penanggung Jawab*'}
                    placeholder={'Masukan penanggung jawab'}
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <InputDropdown
                  marginLeftChild={'16px'}
                  flexParent={1}
                  title={'Didelegasikan kepada/dikerjakan kepada*'}
                />
                <InputTextArea
                  flexParent={1}
                  title={'Keterangan'}
                  placeholder={'Masukan keterangan'}
                />
              </div>
              <hr className='mt-16px mb-16px' />
              <div className='grid grid-cols-1 gap-4'>
                <InputDropdown
                  marginLeftChild={'16px'}
                  title={'Kategori Barang*'}
                  flexParent={1}
                />
                <InputDropdown
                  marginLeftChild={'16px'}
                  title={'Pemasok barang'}
                  flexParent={1}
                />
              </div>
              <div className='d-flex justify-end mt-16px align-center'>
                <div className='mr-16px'>
                  <ButtonCancel
                    action={() => setisModalConfirmationAdd(true)}
                    borderBtn3={true}
                    title={'Simpan'}
                  />
                </div>
                <div className='mr-16px'>
                  <ButtonCancel
                    title={'Print'}
                  />
                </div>
                <ButtonSave
                  title={'Proses stok opname'}
                  action={() => setstokOpnameDetail(true)}
                />
              </div>
            </div>
          </>
        }
        {
          tabsAddStokOpnameReducer?.isActivetab == 1 && <>
            <div className='p-16px'>
              <TitlePageBack icon={''} title={'Detail ajukan hasil stok opname'} />
              <hr className='mt-16px mb-16px' />
              <div className='grid grid-cols-2 gap-4'>
                <InputDate
                  title={'Tanggal opname*'}
                  flexParent={1}
                />
                <div style={{ marginTop: '6px' }}>
                  <InputDropdown
                    marginLeftChild={"16px"}
                    flexParent={1}
                    otomatis={true}
                    title={'Nomor opname*'}
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 mt-16px gap-4'>
                <InputDropdown
                  marginLeftChild={'16px'}
                  flexParent={1}
                  title={'Perintah stok opname*'}
                />
                <InputTextArea
                  flexParent={1}
                  title={'Keterangan'}
                  placeholder={'Masukan keterangan'}
                />
              </div>
              <hr className='mt-16px mb-16px' />
              <TitlePageBack icon={''} title={'Detail barang'} />
              <hr className='mt-16px mb-16px' />
              <div className='grid grid-cols-5 mt-4 gap-4'>
                <InputText
                  flexParent={1}
                  placeholder={'Masukan nama barang'}
                  title={'Nama Barang*'}
                />
                <InputText
                  flexParent={1}
                  placeholder={'Masukan Kode barang'}
                  title={'Kode barang*'}
                />
                <InputText
                  flexParent={1}
                  placeholder={'Masukan Sisa stok sistem'}
                  title={'Sisa stok sistem*'}
                />
                <InputText
                  flexParent={1}
                  placeholder={'Masukan Sisa stok fisik'}
                  title={'Sisa stok fisik*'}
                />
                <InputText
                  isTitleAction={true}
                  typeTitleAction={'add'}
                  flexParent={1}
                  placeholder={'Masukan Satuan'}
                  title={'Satuan*'}
                />
              </div>
              <div className='grid grid-cols-1 mt-4 gap-4'>
                <div className='finance-penerimaan-create-tambah-data'>
                  <div className='flex finance-penerimaan-create-tambah-data-wrapp'>
                    <IAdd color='#44546F' />
                    <div className='finance-penerimaan-create-tambah-data-wrapp-title ml-2'>Tambah Data</div>
                  </div>
                </div>
              </div>

              <div className='d-flex justify-end mt-16px align-center'>
                <div className='mr-16px'>
                  <ButtonCancel
                    title={'Print'}
                  />
                </div>
                <ButtonSave
                  title={'Simpan'}
                  action={() => setstokOpnameDetail(true)}
                />
              </div>
            </div>
          </>
        }

      </div>

      <ModalConfirmationAdd
        actionCallback={() => SimpanAct()}
        isModalUp={isModalConfirmationAdd}
        setisModalUp={setisModalConfirmationAdd}
      />
      <ModalDetailDataTableStokOpname
        create={true}
        setisModalUpConfirmation={setisModalConfirmationAdd}
        isModalUp={stokOpnameDetail}
        setisModalUp={setstokOpnameDetail}
      />
    </Admin>
  )
}

export default WithAuth(CreateStokOpname)