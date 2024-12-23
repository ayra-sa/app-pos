import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import IndexDropdown from 'components/Dropdowns/IndexDropdown'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputRadio from 'components/Input/InputRadio'
import InputTextArea from 'components/Input/InputTexArea'
import InputText from 'components/Input/InputText'
import ModalWrapper from 'components/Modal/ModalWrapper'
import Tab from 'components/Tab/inddex'
import TitleModal from 'components/TitlePage/TitleModal'
import UploadImage from 'components/UploadImage'
import IAdd from 'components/icons/IAdd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ModalAddProduk({
  isModalUp,
  setisModalUp,
  setisModalConfirmationAdd,
}) {
  const TabsAddProdukReducer = useSelector((state) => state?.tabsAddProdukReducer)
  const dispatch = useDispatch()
  return (
    <ModalWrapper
      isModalUp={isModalUp}
      bottom={'10%'}
      top={'10%'}
      left={'10%'}
      right={'10%'}
      overflow={'auto'}
      setisModalUp={setisModalUp}
    >
      <div className='p-16px'>
        <TitleModal setisModalClose={setisModalUp} title={'Tambah produk baru'} />
      </div>
      <hr />
      <div className='p-16px grid grid-cols-2 gap-4' >
        <InputText
          flexParent={1}
          placeholder={'Masukan nama barang'}
          title={'Nama barang*'}
        />
        <InputDropdown
          marginLeftChild={'16px'}
          flexParent={1}
          title={'Kategori'}
        />
        <InputRadio
          multi={true}
          valueMulti={[
            { titleCheck: 'Aktifkan' },
            { titleCheck: 'Tidak' },
          ]}
        />
      </div>
      <Tab
        onClick={(payload) => {
          dispatch({
            type: 'STATUS_TAB_ADD_PRODUK',
            payload: payload
          })
        }}
        Tabs={TabsAddProdukReducer?.data}
        IsActiveTab={TabsAddProdukReducer?.isActivetab} />
      <hr className='mt-16px' />
      {
        TabsAddProdukReducer?.isActivetab == 0 && <>
          <div className='p-16px grid grid-cols-2 mt-4 gap-4'>
            <InputDropdown
              title={'Jenis barang'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputDropdown
              otomatis={true}
              title={'Nama barang*'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputText
              title={'UPC/Barcode*'}
              placeholder={'0'}
            />
            <InputDropdown
              title={'Satuan*'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
          </div>
        </>
      }
      {
        TabsAddProdukReducer?.isActivetab == 1 && <>
          <div className='p-16px grid grid-cols-2 mt-4 gap-4'>
            <InputText
              flexParent={1}
              title={'Default diskon%'}
              placeholder={'0'}
            />
            <InputText
              flexParent={1}
              title={'Def. hrg. jual satuan #1'}
              placeholder={'Rp 0'}
            />
            <InputRadio
              title={'Menampilkan harga/ diskon Grosir'}
              multi={true}
              valueMulti={[
                { titleCheck: 'Aktifkan' },
                { titleCheck: 'Tidak' },
              ]}
            />
            <InputRadio
              title={'Substitusi dengan'}
              multi={true}
              valueMulti={[
                { titleCheck: 'Aktifkan' },
                { titleCheck: 'Tidak' },
              ]}
            />
          </div>
          <hr className='mt-16px mb-16px' />
          <div className='p-16px grid grid-cols-2 mt-4 gap-4'>
            <InputDropdown
              flexParent={1}
              title={'Pemasok Utama'}
              marginLeftChild={'16px'}
            />
            <InputDropdown
              flexParent={1}
              title={'Satuan beli'}
              marginLeftChild={'16px'}
            />
            <InputText
              flexParent={1}
              title={'Harga beli'}
              placeholder={'Rp 0'}
            />
            <InputText
              flexParent={1}
              title={'Minimum beli'}
              placeholder={'0'}
            />
            <InputText
              flexParent={1}
              title={'Batas minimum stok'}
              placeholder={'0'}
            />
            <InputDropdown
              flexParent={1}
              title={'Pajak Penjualan dan Pembelian'}
              marginLeftChild={'16px'}
            />
          </div>
        </>
      }
      {
        TabsAddProdukReducer?.isActivetab == 2 && <>
          <div className='p-16px grid grid-cols-6 mt-4 gap-4'>
            <InputDropdown
              title={'Gudang'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputDate
              classTitle={'dropdown-status-data-table-title'}
              flexParent={1}
              title={'Tanggal*'}
            />
            <InputText
              classTitle={'dropdown-status-data-table-title'}
              flexParent={1}
              title={'Kuantitas*'}
              placeholder={'0'}
            />
            <InputDropdown
              title={'Satuan'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputText
              classTitle={'dropdown-status-data-table-title'}
              flexParent={1}
              title={'Biaya satuan'}
              placeholder={'Rp 0'}
            />
            <InputText
              classTitle={'dropdown-status-data-table-title'}
              flexParent={1}
              isTitleAction={true}
              typeTitleAction={'add'}
              title={'Total*'}
              placeholder={'0'}
            />
          </div>
          <div className='p-16px grid grid-cols-1 mt-4 gap-4'>
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
        TabsAddProdukReducer?.isActivetab == 3 && <>
          <div className='p-16px grid grid-cols-2 gap-4'>
            <InputDropdown
              title={'Persediaan'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputDropdown
              title={'Penjualan'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputDropdown
              title={'Retur Penjualan'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputDropdown
              title={'Diskon Penjualan'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputDropdown
              title={'Barang Terkirim'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputDropdown
              title={'Beban Pokok Penjualan'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputDropdown
              title={'Retur Pembelian'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
            <InputDropdown
              title={'Pembelian Belum Tertagih'}
              flexParent={1}
              marginLeftChild={'16px'}
            />
          </div>
        </>
      }
      {
        TabsAddProdukReducer?.isActivetab == 4 && <>
          <div className='p-16px grid grid-cols-1 gap-4'>
            <UploadImage />
          </div>
        </>
      }
      {
        TabsAddProdukReducer?.isActivetab == 5 && <>
          <div className='p-16px grid grid-cols-2 gap-4'>
            <InputText
              classTitle={'dropdown-status-data-table-title'}
              flexParent={1}
              title={'Panjang (cm)'}
              placeholder={'0'}
            />
            <InputText
              classTitle={'dropdown-status-data-table-title'}
              flexParent={1}
              title={'Lebar (cm)'}
              placeholder={'0'}
            />
            <InputText
              classTitle={'dropdown-status-data-table-title'}
              flexParent={1}
              title={'Tinggi (cm)'}
              placeholder={'0'}
            />
            <InputText
              classTitle={'dropdown-status-data-table-title'}
              flexParent={1}
              title={'Berat (kg)'}
              placeholder={'0'}
            />
          </div>
          <div className='p-16px grid grid-cols-1 gap-4'>
            <InputTextArea
              flexParent={1}
              title={'Catatan'}
              placeholder={'Isi catatan disini'}
            />
          </div>
        </>
      }
      <div className='p-16px d-flex align-center justify-end'>
        <div className='mr-16px'>
          <ButtonCancel
            title={'Batal'}
            paddingBottom={'6px'}
            paddingTop={'6px'}
          />
        </div>
        <ButtonSave
          action={() => setisModalConfirmationAdd(true)}
          title={'Tambah Produk'}
        />
      </div>
    </ModalWrapper>
  )
}

export default ModalAddProduk