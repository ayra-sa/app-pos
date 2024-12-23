import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputRadio from 'components/Input/InputRadio'
import InputTextArea from 'components/Input/InputTexArea'
import InputText from 'components/Input/InputText'
import Tab from 'components/Tab/inddex'
import TitlePage from 'components/TitlePage/TitlePage'
import TitlePageBack from 'components/TitlePage/TitlePageBack'
import TotalAll from 'components/TotalAll'
import WithAuth from 'components/config/protect'
import ModalChoosePengiriman from 'components/finance/pembelian/modalChoosePengiriman'
import ModalDetailPembelian from 'components/finance/pembelian/modalDetailPenjualan'
import IAdd from 'components/icons/IAdd'
import ModalConfirmationAdd from 'components/modalConfirmationAdd'
import ModalConfirmationEdit from 'components/modalConfirmationEdit'
import Admin from 'layouts/Admin'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CreatePembelian() {

  const tabsAddPembelianReducer = useSelector((state) => state?.tabsAddPembelianReducer)
  const tabsAddPembelianPesananReducer = useSelector((state) => state?.tabsAddPembelianPesananReducer)
  const tabsAddPembelianPenerimaanBarangReducer = useSelector((state) => state?.tabsAddPembelianPenerimaanBarangReducer)
  const tabsAddPembelianFakturPembelianReducer = useSelector((state) => state?.tabsAddPembelianFakturPembelianReducer)
  const tabsAddPeberimaanPenjualanReducer = useSelector((state) => state?.tabsAddPeberimaanPenjualanReducer)

  const [isModalProces, setisModalProces] = useState(false);
  const [isModalDetailPembelian, setisModalDetailPembelian] = useState(false);
  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const [isModalConfirmationEdit, setisModalConfirmationEdit] = useState(false);
  const router = useRouter()

  const SimpanAct = () => {
    setisModalConfirmationAdd(false)
    setisModalConfirmationEdit(false)
    setisModalDetailPembelian(false)
    router.push('/finance/pembelian')
  }
  const dispatch = useDispatch();

  return (
    <Admin>
      <div style={{
        background: 'white'
      }}>
        <div className='p-16px'>
          <TitlePageBack
            action={() => router.push('/finance/pembelian')}
            title={'Tambah Pembelian'}
          />
        </div>

        <Tab
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_ADD_PEMBELIAN',
              payload: payload
            })
          }}
          Tabs={tabsAddPembelianReducer?.data}
          IsActiveTab={tabsAddPembelianReducer?.isActivetab} />
        {
          tabsAddPembelianReducer?.isActivetab == 0 && <>
            <div className='p-16px'>
              <TitlePageBack
                title={'Detail Pesanan Pembelian'}
                icon={''}
              />
            </div>
            <hr />
            <div className='grid grid-cols-2 gap-4 p-16px'>
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Suplier*'}
              />
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Nomor*'}
                otomatis={true}
              />
              <InputDate
                classTitle={'dropdown-status-data-table-title'}
                flexParent={1}
                title={'Tanggal*'}
              />
            </div>
            <div className='grid grid-cols-1 gap-4 p-16px'>
              <InputTextArea
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                rows={5}
                title={'Keterangan'}
                placeholder={'Beri keterangan disini'}
              />
            </div>
            <Tab
              onClick={(payload) => {
                dispatch({
                  type: 'STATUS_TAB_ADD_PEMBELIAN_PESANAN',
                  payload: payload
                })
              }}
              Tabs={tabsAddPembelianPesananReducer?.data}
              IsActiveTab={tabsAddPembelianPesananReducer?.isActivetab} />
            {
              tabsAddPembelianPesananReducer?.isActivetab == 0 && <>
                <div className='p-16px'>
                  <TitlePageBack
                    title={'Detail transaksi'}
                    icon={''}
                  />
                </div>
                <hr />
                <div className='grid grid-cols-7 gap-4 p-16px'>
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Nama Barang*'}
                    placeholder={'Cari'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Kode*'}
                    placeholder={'0'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Kuantitas*'}
                    placeholder={'0'}
                  />
                  <InputDropdown
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Satuan*'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Harga*'}
                    placeholder={'Rp 0'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Diskon%'}
                    placeholder={'Cari'}
                  />
                  <InputText
                    isTitleAction={true}
                    typeTitleAction={'add'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'nilai*'}
                    placeholder={'Rp 0'}
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
              tabsAddPembelianPesananReducer?.isActivetab == 1 && <>
                <div className='p-16px'>
                  <TitlePageBack
                    icon={''}
                    title={'Detail Informasi Transaksi'} />
                  <div className='mt-16px'></div>
                  <TitlePage title={'Informasi Pembayaran'} />
                  <div className='grid mb-16px grid-cols-1 mt-16px gap-4'>
                    <InputDropdown
                      classTitle={'dropdown-status-data-table-title'}
                      flexParent={1}
                      title={'Metode Pembayaran*'}
                      marginLeftChild={'16px'}
                    />
                    <InputRadio
                      multi={true}
                      title={'Penggunaan pajak*'}
                      valueMulti={[
                        { titleCheck: 'Tidak ada' },
                        { titleCheck: 'Kena Pajak' },
                        { titleCheck: 'Total termasuk pajak' },
                      ]}
                    />
                  </div>
                  <TitlePage title={'Informasi Pengiriman'} />
                  <div className='grid grid-cols-1 mt-16px mb-16px gap-4'>
                    <InputDate
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      title={'Tanggal pengiriman*'}
                    />
                    <InputDate
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      title={'Kurir pengiriman*'}
                    />
                    <InputTextArea
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      title={'Alamat pengiriman'}
                      placeholder={'Masukan alamat pengiriman'}
                    />
                  </div>
                  <TitlePage title={'Informasi Tambahan'} />
                  <div className='grid grid-cols-1 mt-16px gap-4'>
                    <InputDropdown
                      classTitle={'dropdown-status-data-table-title'}
                      flexParent={1}
                      title={'FOCB*'}
                      marginLeftChild={'16px'}
                    />
                  </div>
                </div>
              </>
            }
            {
              tabsAddPembelianPesananReducer?.isActivetab == 2 && <>
                <div className='p-16px'>
                  <TitlePageBack
                    title={'Detail Biaya Lainnya'}
                    icon={''}
                  />
                </div>
                <hr />
                <div className='grid grid-cols-4 gap-4 p-16px'>
                  <InputDropdown
                    marginLeftChild={'16px'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Akun*'}
                    placeholder={'Cari'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Kode*'}
                    placeholder={'0'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Nilai*'}
                    placeholder={'Rp 0'}
                  />
                  <InputText
                    isTitleAction={true}
                    typeTitleAction={'add'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Keterangan*'}
                    placeholder={'Masukan keterangan'}
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
            <TotalComp />
          </>
        }
        {
          tabsAddPembelianReducer?.isActivetab == 1 && <>
            <div className='p-16px'>
              <TitlePageBack
                title={'Detail Peneriaman Barang'}
                icon={''}
              />
            </div>
            <hr />
            <div className='p-16px grid grid-cols-2 mt-4 gap-4'>
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Pemasok*'}
                placeholder={'Cari'}
              />
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Nomor Form*'}
                otomatis={true}
                placeholder={'Cari'}
              />
              <InputDate
                classTitle={'dropdown-status-data-table-title'}
                flexParent={1}
                title={'Tanggal*'}
              />
              <InputText
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Nomor Terima*'}
                placeholder={'Cari'}
              />
            </div>
            <div className='grid grid-cols-1 gap-4 p-16px'>
              <InputTextArea
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                rows={5}
                title={"Keterangan"}
                placeholder={'Beri keterangan disini'}
              />
            </div>
            <Tab
              onClick={(payload) => {
                dispatch({
                  type: 'STATUS_TAB_ADD_PEMBELIAN_PENERIMAAN_BARANG',
                  payload: payload
                })
              }}
              Tabs={tabsAddPembelianPenerimaanBarangReducer?.data}
              IsActiveTab={tabsAddPembelianPenerimaanBarangReducer?.isActivetab} />
            {
              tabsAddPembelianPenerimaanBarangReducer?.isActivetab == 0 && <>
                <div className='p-16px'>
                  <TitlePageBack
                    title={'Detail transaksi'}
                    icon={''}
                  />
                </div>
                <hr />
                <div className='grid grid-cols-6 gap-4 p-16px'>
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Nama Barang*'}
                    placeholder={'Cari'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Kode*'}
                    placeholder={'0'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Kuantitas*'}
                    placeholder={'0'}
                  />
                  <InputDropdown
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Satuan*'}
                  />
                  <InputDropdown
                    marginLeftChild={'16px'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Gudang'}
                    placeholder={'Cari'}
                  />
                  <InputText
                    isTitleAction={true}
                    typeTitleAction={'add'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Keterangan'}
                    placeholder={'Keterangan'}
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
              tabsAddPembelianPenerimaanBarangReducer?.isActivetab == 1 && <>

                <div className='p-16px grid grid-cols-1 mt-4 gap-4'>
                  <TitlePage
                    title={'Informasi Pengiriman'}
                  />
                  <InputDate
                    classTitle={'dropdown-status-data-table-title'}
                    flexParent={1}
                    title={'Tanggal Pengiriman*'}
                  />
                  <InputDropdown
                    marginLeftChild={'16px'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Kurir pengiriman'}
                    placeholder={'Cari'}
                  />
                  <InputDropdown
                    marginLeftChild={'16px'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'PCB'}
                    placeholder={'Cari'}
                  />
                  <InputTextArea
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Alamat pengiriman'}
                    placeholder={'Masukan alamat pengiriman'}
                  />
                </div>
              </>
            }
          </>
        }
        {
          tabsAddPembelianReducer?.isActivetab == 2 && <>
            <div className='p-16px'>
              <TitlePageBack
                title={'Detail uang muka pembelian'}
                icon={''}
              />
            </div>
            <hr />
            <div className='p-16px grid grid-cols-2 mt-4 gap-4'>
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Pemasok'}
                placeholder={'Cari'}
              />
              <InputDropdown
                otomatis={true}
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Nomor form*'}
                placeholder={'Cari'}
              />
              <InputDate
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Tanggal pengiriman*'}
              />
            </div>
            <div className='grid grid-cols-1 gap-4 p-16px'>
              <InputTextArea
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                rows={5}
                placeholder={'Beri keterangan disini'}
              />
            </div>
            <hr />
            <div className='p-16px'>
              <TitlePageBack
                icon={''}
                title={'Detail  Transaksi'} />
              <div className='mt-16px'></div>
              <TitlePage title={'Informasi Pembayaran'} />
              <div className='grid mb-16px grid-cols-1 mt-16px gap-4'>
                <InputText
                  classTitle={'dropdown-status-data-table-title'}
                  flexParent={1}
                  title={'Jumlah uang saku*'}
                  placeholder={'Rp 0'}

                // marginLeftChild={'16px'}
                />
                <InputRadio
                  multi={true}
                  title={'Penggunaan pajak*'}
                  valueMulti={[
                    { titleCheck: 'Tidak ada' },
                    { titleCheck: 'Kena Pajak' },
                    { titleCheck: 'Total termasuk pajak' },
                  ]}
                />
                <InputDropdown
                  marginLeftChild={'16px'}
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Akun pembayaran*'}
                  placeholder={'Cari'}
                />
                <InputDropdown
                  marginLeftChild={'16px'}
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Pilih metode pembayaran*'}
                  placeholder={'Cari'}
                />
                <InputTextArea
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Alamat pengiriman'}
                  placeholder={'Masukan alamat pengiriman'}
                />
              </div>
            </div>
            <div className='p-16px d-flex align-center justify-end'>
              <TotalAll
                title={'Total'}
                value={'0'}
              />
            </div>
          </>
        }
        {
          tabsAddPembelianReducer?.isActivetab == 3 && <>
            <div className='p-16px'>
              <TitlePageBack
                title={'Detail Faktur Pembelian'}
                icon={''}
              />
            </div>
            <hr />
            <div className='grid grid-cols-2 gap-4 p-16px'>
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Pemasok*'}
              />
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Nomor*'}
                otomatis={true}
              />
              <InputDate
                classTitle={'dropdown-status-data-table-title'}
                flexParent={1}
                title={'Tanggal*'}
              />
            </div>
            <div className='grid grid-cols-1 gap-4 p-16px'>
              <InputTextArea
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                rows={5}
                title={'Keterangan'}
                placeholder={'Beri keterangan disini'}
              />
            </div>
            <Tab
              onClick={(payload) => {
                dispatch({
                  type: 'STATUS_TAB_ADD_PEMBELIAN_FAKTUR_PEMBELIAN',
                  payload: payload
                })
              }}
              Tabs={tabsAddPembelianFakturPembelianReducer?.data}
              IsActiveTab={tabsAddPembelianFakturPembelianReducer?.isActivetab} />
            {
              tabsAddPembelianFakturPembelianReducer?.isActivetab == 0 && <>
                <div className='p-16px'>
                  <TitlePageBack
                    title={'Detail transaksi'}
                    icon={''}
                  />
                </div>
                <hr />
                <div className='grid grid-cols-7 gap-4 p-16px'>
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Nama Barang*'}
                    placeholder={'Cari'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Kode*'}
                    placeholder={'0'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Kuantitas*'}
                    placeholder={'0'}
                  />
                  <InputDropdown
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Satuan*'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Harga*'}
                    placeholder={'Rp 0'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Diskon%'}
                    placeholder={'Cari'}
                  />
                  <InputText
                    isTitleAction={true}
                    typeTitleAction={'add'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'nilai*'}
                    placeholder={'Rp 0'}
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
              tabsAddPembelianFakturPembelianReducer?.isActivetab == 1 && <>
                <div className='p-16px'>
                  <TitlePageBack
                    icon={''}
                    title={'Detail Informasi Transaksi'} />
                  <div className='mt-16px'></div>
                  <TitlePage title={'Informasi Pembayaran'} />
                  <div className='grid mb-16px grid-cols-1 mt-16px gap-4'>
                    <InputDropdown
                      classTitle={'dropdown-status-data-table-title'}
                      flexParent={1}
                      title={'Metode Pembayaran*'}
                      marginLeftChild={'16px'}
                    />
                    <InputText
                      isTitleAction={true}
                      typeTitleAction={'add'}
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      title={'Nomor PO*'}
                      placeholder={'0'}
                    />
                    <InputRadio
                      multi={true}
                      title={'Penggunaan pajak*'}
                      valueMulti={[
                        { titleCheck: 'Tidak ada' },
                        { titleCheck: 'Kena Pajak' },
                        { titleCheck: 'Total termasuk pajak' },
                      ]}
                    />
                  </div>
                  <TitlePage title={'Informasi Pengiriman'} />
                  <div className='grid grid-cols-1 mt-16px gap-4'>
                    <InputDate
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      title={'Tanggal pengiriman*'}
                    />
                    <InputDate
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      title={'Kurir pengiriman*'}
                    />
                    <InputTextArea
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      title={'Alamat pengiriman'}
                      placeholder={'Masukan alamat pengiriman'}
                    />
                  </div>
                  <TitlePage title={'Informasi Tambahan'} />
                  <div className='grid grid-cols-1 mt-16px gap-4'>
                    <InputDropdown
                      classTitle={'dropdown-status-data-table-title'}
                      flexParent={1}
                      title={'FOCB*'}
                      marginLeftChild={'16px'}
                    />
                  </div>
                </div>
              </>
            }
            {
              tabsAddPembelianFakturPembelianReducer?.isActivetab == 2 && <>
                <div className='p-16px'>
                  <TitlePageBack
                    title={'Detail Biaya Lainnya'}
                    icon={''}
                  />
                </div>
                <hr />
                <div className='grid grid-cols-4 gap-4 p-16px'>
                  <InputDropdown
                    marginLeftChild={'16px'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Akun*'}
                    placeholder={'Cari'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Kode*'}
                    placeholder={'0'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Nilai*'}
                    placeholder={'Rp 0'}
                  />
                  <InputText
                    isTitleAction={true}
                    typeTitleAction={'add'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Keterangan*'}
                    placeholder={'Masukan keterangan'}
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
            <TotalFakturPembelian />
          </>
        }
        {
          tabsAddPembelianReducer?.isActivetab == 4 && <>
            <div className='p-16px'>
              <TitlePageBack
                title={'Detail Pembayaran pembelian'}
                icon={''}
              />
            </div>
            <hr />
            <div className='p-16px grid grid-cols-2 mt-4 gap-4'>
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Pembayaran ke suplier*'}
                placeholder={'Cari'}
              />
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Nomor bukti*'}
                otomatis={true}
                placeholder={'Cari'}
              />
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Pembayaran dari akun*'}
                placeholder={'Cari'}
              />
              <InputDate
                classTitle={'dropdown-status-data-table-title'}
                flexParent={1}
                title={'Tanggal*'}
              />
            </div>
            <div className='grid grid-cols-1 gap-4 p-16px'>
              <InputTextArea
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                rows={5}
                title={"Keterangan"}
                placeholder={'Beri keterangan disini'}
              />
            </div>
            <Tab
              onClick={(payload) => {
                dispatch({
                  type: 'STATUS_TAB_ADD_PENERIMAAN_PENJUALAN',
                  payload: payload
                })
              }}
              Tabs={tabsAddPeberimaanPenjualanReducer?.data}
              IsActiveTab={tabsAddPeberimaanPenjualanReducer?.isActivetab} />
            {
              tabsAddPeberimaanPenjualanReducer?.isActivetab == 0 && <>
                <div className='p-16px'>
                  <TitlePageBack
                    title={'Detail transaksi'}
                    icon={''}
                  />
                </div>
                <hr />
                <div className='p-16px grid grid-cols-8 mt-4 gap-4'>
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Nilai pembayaran*'}
                    placeholder={'Rp 0'}
                  />
                </div>
                <div className='grid grid-cols-8 gap-4 p-16px'>
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Nama Faktur*'}
                    placeholder={'Cari'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Nomor Faktur*'}
                    placeholder={'0'}
                  />
                  <InputDate
                    classTitle={'dropdown-status-data-table-title'}
                    flexParent={1}
                    title={'Tanggal faktur*'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Total faktur*'}
                    placeholder={'0'}
                  />
                  <InputDropdown
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Terutang*'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Bayar*'}
                    placeholder={'Rp 0'}
                  />
                  <InputText
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Diskon%'}
                    placeholder={'Cari'}
                  />
                  <InputText
                    isTitleAction={true}
                    typeTitleAction={'add'}
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'nilai*'}
                    placeholder={'Rp 0'}
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
              tabsAddPeberimaanPenjualanReducer?.isActivetab == 1 && <>
                <div className='p-16px'>
                  <TitlePage title={'Informasi Pembayaran'} />
                  <div className='grid mb-16px grid-cols-1 mt-16px gap-4'>
                    <InputDropdown
                      classTitle={'dropdown-status-data-table-title'}
                      flexParent={1}
                      title={'Metode Pembayaran*'}
                      marginLeftChild={'16px'}
                    />
                  </div>
                </div>
              </>
            }
            <TotalPenerimaanPembayaran />
          </>
        }
        {tabsAddPembelianReducer?.isActivetab == 5 && <>
          <div className='p-16px'>
            <TitlePageBack
              title={'Detail Retur Pembelian'}
              icon={''}
            />
          </div>
          <hr />
          <div className='grid grid-cols-2 gap-4 p-16px'>
            <InputDropdown
              marginLeftChild={'16px'}
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Suplier*'}
            />
            <InputDropdown
              marginLeftChild={'16px'}
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Nomor retur*'}
              otomatis={true}
            />
            <InputDate
              classTitle={'dropdown-status-data-table-title'}
              flexParent={1}
              title={'Tanggal*'}
            />
            <div className='d-flex align-end gap-10px'>
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Retur dari*'}
              />
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
              />
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 p-16px'>
            <InputTextArea
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              rows={5}
              title={'Keterangan'}
              placeholder={'Beri keterangan disini'}
            />
          </div>
          <Tab
            onClick={(payload) => {
              dispatch({
                type: 'STATUS_TAB_ADD_PEMBELIAN_PESANAN',
                payload: payload
              })
            }}
            Tabs={tabsAddPembelianPesananReducer?.data}
            IsActiveTab={tabsAddPembelianPesananReducer?.isActivetab} />
          {
            tabsAddPembelianPesananReducer?.isActivetab == 0 && <>
              <div className='p-16px'>
                <TitlePageBack
                  title={'Detail transaksi'}
                  icon={''}
                />
              </div>
              <hr />
              <div className='grid grid-cols-7 gap-4 p-16px'>
                <InputText
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Nilai pembayaran*'}
                  placeholder={'Cari'}
                />
              </div>
              <div className='grid grid-cols-7 gap-4 p-16px'>
                <InputText
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Nama Barang*'}
                  placeholder={'Cari'}
                />
                <InputText
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Kode*'}
                  placeholder={'0'}
                />
                <InputText
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Kuantitas*'}
                  placeholder={'0'}
                />
                <InputDropdown
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Satuan*'}
                />
                <InputText
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Harga*'}
                  placeholder={'Rp 0'}
                />
                <InputText
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Diskon%'}
                  placeholder={'Cari'}
                />
                <InputText
                  isTitleAction={true}
                  typeTitleAction={'add'}
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'nilai*'}
                  placeholder={'Rp 0'}
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
            tabsAddPembelianPesananReducer?.isActivetab == 1 && <>
              <div className='p-16px'>
                <TitlePageBack
                  icon={''}
                  title={'Detail Informasi Transaksi'} />
                <div className='mt-16px'></div>

                <div className='grid grid-cols-1 mt-16px mb-16px gap-4'>

                  <InputTextArea
                    flexParent={1}
                    classTitle={'dropdown-status-data-table-title'}
                    title={'Alamat pengiriman'}
                    placeholder={'Masukan alamat pengiriman'}
                  />
                  <InputRadio
                    multi={true}
                    title={'Penggunaan pajak*'}
                    valueMulti={[
                      { titleCheck: 'Tidak ada' },
                      { titleCheck: 'Kena Pajak' },
                      { titleCheck: 'Total termasuk pajak' },
                    ]}
                  />
                  <InputDropdown
                    classTitle={'dropdown-status-data-table-title'}
                    flexParent={1}
                    title={'Dicetak ke email*'}
                    marginLeftChild={'16px'}
                  />
                </div>

              </div>
            </>
          }
          {
            tabsAddPembelianPesananReducer?.isActivetab == 2 && <>
              <div className='p-16px'>
                <TitlePageBack
                  title={'Detail Biaya Lainnya'}
                  icon={''}
                />
              </div>
              <hr />
              <div className='grid grid-cols-4 gap-4 p-16px'>
                <InputDropdown
                  marginLeftChild={'16px'}
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Akun*'}
                  placeholder={'Cari'}
                />
                <InputText
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Kode*'}
                  placeholder={'0'}
                />
                <InputText
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Nilai*'}
                  placeholder={'Rp 0'}
                />
                <InputText
                  isTitleAction={true}
                  typeTitleAction={'add'}
                  flexParent={1}
                  classTitle={'dropdown-status-data-table-title'}
                  title={'Keterangan*'}
                  placeholder={'Masukan keterangan'}
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
          <TotalComp />
        </>
        }
        <ActionPesananPenjualan
          tabsAddPembelianReducer={tabsAddPembelianReducer}
          setisModalProces={setisModalProces}
          setisModalConfirmationAdd={setisModalConfirmationAdd}
        />
      </div>
      <ModalChoosePengiriman
        setisModalDetailPembelian={setisModalDetailPembelian}
        isModalUp={isModalProces}
        setisModalUp={setisModalProces}
        dispatch={dispatch}
      />
      <ModalDetailPembelian
        isModalUp={isModalDetailPembelian}
        setisModalUp={setisModalDetailPembelian}
        setisModalConfirmationAdd={setisModalConfirmationAdd}
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
    </Admin>
  )
}

const TotalPenerimaanPembayaran = () => {
  return (
    <div className='p-16px mt-16px d-flex align-center'>
      <div className='mr-16px'>
        <TotalAll
          title={'Nilai pembayaran'}
          value={'0'}
        />
      </div>
      <div className='mr-16px'>
        <TotalAll
          title={'Faktur dibayar'}
          value={'0'}
        />
      </div>
    </div>
  )
}

const TotalFakturPembelian = () => {
  return (
    <div className='p-16px mt-16px d-flex align-center'>
      <div className='mr-16px'>
        <TotalAll
          title={'Potongan'}
          value={'0'}
        />
      </div>
      <div className='mr-16px'>
        <TotalAll
          title={'Biaya lainnya'}
          value={'0'}
        />
      </div>
      <div className='mr-16px'>
        <TotalAll
          title={'Uang muka'}
          value={'0'}
        />
      </div>
      <div className='mr-16px'>
        <TotalAll
          title={'Sisa'}
          value={'0'}
        />
      </div>
      <div className='mr-16px'>
        <TotalAll
          title={'Total'}
          value={'0'}
        />
      </div>
    </div>
  )
}

const TotalComp = () => {
  return (
    <div className='d-flex p-16px align-center justify-end'>
      <div className='mr-16px'>
        <InputText
          classTitle={'dropdown-status-data-table-title'}
          title={'Jumlah pemotongan%'}
          placeholder={'0'}
        />
      </div>
      <div className='mr-16px'>
        <TotalAll
          title={'Biaya lainnya'}
          value={'0'}
        />
      </div>
      <TotalAll
        title={'Total'}
        value={'0'}
      />
    </div>
  )
}

const ActionPesananPenjualan = ({
  setisModalProces,
  setisModalConfirmationAdd,
  tabsAddPembelianReducer,
}) => {
  return (
    <div className='p-16px d-flex justify-end align-center'>
      <div className='mr-16px'>
        <ButtonCancel
          action={() => {
            setisModalConfirmationAdd(true)
          }}
          paddingBottom={'6px'}
          paddingTop={'6px'}
          borderBtn3={true}
          title={'Simpan'}
        />
      </div>
      <div className='mr-16px'>
        <ButtonCancel
          action={() => { }}
          paddingBottom={'6px'}
          paddingTop={'6px'}
          title={'Print'}
        />
      </div>
      <ButtonSave
        action={() => {
          if (tabsAddPembelianReducer?.isActivetab == 0) {
            setisModalProces(true)
          } else {
            setisModalConfirmationAdd(true)
          }
        }}
        title={'Process'}
      />
    </div>
  )
}

export default WithAuth(CreatePembelian)