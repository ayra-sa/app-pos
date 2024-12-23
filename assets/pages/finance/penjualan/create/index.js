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
import IAdd from 'components/icons/IAdd'
import Admin from 'layouts/Admin'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CreatePenjualan() {

  const tabsAddPenjualanReducer = useSelector((state) => state?.tabsAddPenjualanReducer)
  const tabsAddPenjualanPesananReducer = useSelector((state) => state?.tabsAddPenjualanPesananReducer)
  const tabsAddPenjualanPengirimanReducer = useSelector((state) => state?.tabsAddPenjualanPengirimanReducer)
  const tabsAddFakturPembelianReducer = useSelector((state) => state?.tabsAddFakturPembelianReducer)
  const tabsAddPeberimaanPenjualanReducer = useSelector((state) => state?.tabsAddPeberimaanPenjualanReducer)

  const dispatch = useDispatch();

  const router = useRouter()

  return (
    <Admin>
      <div style={{
        background: 'white'
      }}>
        <div className='p-16px'>
          <TitlePageBack
            action={() => router.push('/finance/penjualan')}
            title={'Tambah Penjualan'}
          />
        </div>

        <Tab
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_ADD_PENJUALAN',
              payload: payload
            })
          }}
          Tabs={tabsAddPenjualanReducer?.data}
          IsActiveTab={tabsAddPenjualanReducer?.isActivetab} />
        {
          tabsAddPenjualanReducer?.isActivetab == 0 && <>
            <div className='p-16px'>
              <TitlePageBack
                title={'Detail Pesanan Penjualan'}
                icon={''}
              />
            </div>
            <hr />
            <div className='grid grid-cols-2 gap-4 p-16px'>
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Pelanggan*'}
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
                  type: 'STATUS_TAB_ADD_PENJUALAN_PESANAN',
                  payload: payload
                })
              }}
              Tabs={tabsAddPenjualanPesananReducer?.data}
              IsActiveTab={tabsAddPenjualanPesananReducer?.isActivetab} />
            {
              tabsAddPenjualanPesananReducer?.isActivetab == 0 && <>
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
              tabsAddPenjualanPesananReducer?.isActivetab == 1 && <>
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
                </div>
              </>
            }
            {
              tabsAddPenjualanPesananReducer?.isActivetab == 2 && <>
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
        {tabsAddPenjualanReducer?.isActivetab == 1 && <>
          <div className='p-16px'>
            <TitlePageBack
              title={'Detail pengiriman Penjualan'}
              icon={''}
            />
          </div>
          <hr />
          <div className='p-16px grid grid-cols-2 mt-4 gap-4'>
            <InputDropdown
              marginLeftChild={'16px'}
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Kirim kepada*'}
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
                type: 'STATUS_TAB_ADD_PENJUALAN_PENGIRIMAN',
                payload: payload
              })
            }}
            Tabs={tabsAddPenjualanPengirimanReducer?.data}
            IsActiveTab={tabsAddPenjualanPengirimanReducer?.isActivetab} />
          {
            tabsAddPenjualanPengirimanReducer?.isActivetab == 0 && <>
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
            tabsAddPenjualanPengirimanReducer?.isActivetab == 1 && <>

              <div className='p-16px grid grid-cols-1 mt-4 gap-4'>
                <TitlePage
                  title={'Informasi Pengiriman'}
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
          tabsAddPenjualanReducer?.isActivetab == 2 && <>
            <div className='p-16px'>
              <TitlePageBack
                title={'Detail uang muka penjualan'}
                icon={''}
              />
            </div>
            <hr />
            <div className='p-16px grid grid-cols-1 mt-4 gap-4'>
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Pelanggan'}
                placeholder={'Cari'}
              />
              <InputDropdown
                otomatis={true}
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Nomor FORM*'}
                placeholder={'Cari'}
              />
              <InputDate
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Tanggal pengiriman*'}
              />
              <InputText
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Nomor PO*'}
                placeholder={'0'}
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
          tabsAddPenjualanReducer?.isActivetab == 3 && <>
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
                title={'Pelanggan*'}
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
                  type: 'STATUS_TAB_ADD_FAKTUR_PEMBELIAN',
                  payload: payload
                })
              }}
              Tabs={tabsAddFakturPembelianReducer?.data}
              IsActiveTab={tabsAddFakturPembelianReducer?.isActivetab} />
            {
              tabsAddFakturPembelianReducer?.isActivetab == 0 && <>
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
              tabsAddFakturPembelianReducer?.isActivetab == 1 && <>
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
              tabsAddFakturPembelianReducer?.isActivetab == 2 && <>
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
          tabsAddPenjualanReducer?.isActivetab == 4 && <>
            <div className='p-16px'>
              <TitlePageBack
                title={'Detail pengiriman Penjualan'}
                icon={''}
              />
            </div>
            <hr />
            <div className='p-16px grid grid-cols-2 mt-4 gap-4'>
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Kirim kepada*'}
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
              <InputDropdown
                marginLeftChild={'16px'}
                flexParent={1}
                classTitle={'dropdown-status-data-table-title'}
                title={'Masukan ke akun*'}
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
                    <InputTextArea
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      rows={5}
                      title={"Keterangan"}
                      placeholder={'Beri keterangan disini'}
                    />
                  </div>
                </div>
              </>
            }
            <TotalPenerimaanPembayaran />
          </>
        }
        <ActionPesananPenjualan />
      </div>
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
          title={'Total dibayar'}
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

const ActionPesananPenjualan = () => {
  return (
    <div className='p-16px d-flex justify-end align-center'>
      <div className='mr-16px'>
        <ButtonCancel
          action={() => { }}
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
        action={() => { }}
        title={'Process'}
      />
    </div>
  )
}

export default WithAuth(CreatePenjualan)