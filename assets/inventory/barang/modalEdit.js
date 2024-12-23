import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import DetailModalData from 'components/DetailModalData'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import InputBarang from 'components/Input/InputBarang'
import InputBarcode from 'components/Input/InputBarcode'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputImage from 'components/Input/InputImage'
import InputTextArea from 'components/Input/InputTexArea'
import InputText from 'components/Input/InputText'
import ModalWrapper from 'components/Modal/ModalWrapper'
import StatusModalData from 'components/StatusModal'
import StatusModalDataTranferBarang from 'components/StatusModal/statusModalTranferBarang'
import StepTitle from 'components/Step/StepTitle'
import Tab from 'components/Tab/inddex'
import TitleModal from 'components/TitlePage/TitleModal'
import TitlePage from 'components/TitlePage/TitlePage'
import UploadImage from 'components/UploadImage'
import { round } from 'lodash'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

function ModalEditBarang
  ({
    setisModal,
    isModalUp,
    type,
    handleActCancel,
    handleActSubmit,
  }) {

  const [TabAdd, setTabAdd] = useState({
    data: [
      'Buat Barang Baru',
      'Tambah/ Update Barang',
    ],
    isActivetab: 0,
  })

  const [TabUpFile, setTabUpFile] = useState({
    data: [
      'Tambah Data',
      'Update Data',
    ],
    isActivetab: 0,
  })

  return (
    <ModalWrapper
      bottom={'6%'}
      left={'15%'}
      right={'15%'}
      top={'6%'}
      setisModalUp={setisModal}
      isModalUp={isModalUp}>
      <div className='h-100 d-flex flex-column justify-between'>
        <div>
          <div className='p-16px'>
            <TitleModal title={`Edit Barang`} setisModalClose={setisModal} />
          </div>

          <hr />

          <div style={{
            overflow: 'auto',
            maxHeight: 'calc(100vh - 220px)',
          }}>

            <Tab
              onClick={(payload) => {
                setTabAdd((prevstate) => {
                  return {
                    ...prevstate,
                    isActivetab: payload,
                  }
                })
              }}
              Tabs={TabAdd?.data}
              IsActiveTab={TabAdd?.isActivetab}
            />

            {
              TabAdd?.isActivetab == 0
                ? <>
                  <TitlePage
                    title={'Informasi Barang'}
                  />

                  <div className='p-16px'>
                    <div className='grid grid-cols-2 gap-4'>
                      <InputText
                        title={'Nama Barang*'}
                        placeholder={'Masukan nama barang'}
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        isTitleAction={true}
                        typeTitleAction={'ask'}
                      />
                      <InputBarcode
                        title={'Barcode ID*'}
                        placeholder={'Masukan Barcode ID'}
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        data={[
                          { title: 'generate', icon: '' },
                          { title: 'scan', icon: '' },
                        ]}
                      />
                    </div>
                    <div className='grid grid-cols-3 gap-4 mt-16px'>
                      <InputText
                        title={'kode Barang/ SKU*'}
                        placeholder={'Masukan kode Barang/ SKU'}
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        isTitleAction={true}
                        typeTitleAction={'ask'}
                      />
                      <InputDropdown
                        title={'kategori Barang*'}
                        placeholder={'Masukan kategori Barang'}
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        typeAction={'ask'}
                        marginLeftChild={'16px'}
                      />
                      <InputDropdown
                        title={'Satuan Barang*'}
                        placeholder={'Masukan Satuan Barang'}
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        typeAction={'ask'}
                        marginLeftChild={'16px'}
                      />
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-16px'>
                      <InputBarang
                        title={'Ukuran Per Barang*'}
                        placeholder={'Masukan Ukuran Per Barang'}
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        isTitleAction={true}
                        typeTitleAction={'ask'}
                      />
                      <InputBarang
                        title={'Berat Barang*'}
                        placeholder={'Masukan Berat Barang'}
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        isTitleAction={true}
                        typeTitleAction={'ask'}
                      />
                    </div>
                    <div className='grid grid-cols-1 gap-4 mt-16px'>
                      <InputTextArea
                        title={'Deskripsi Barang*'}
                        placeholder={'Masukan Deskripsi Barang'}
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                      />
                    </div>
                    <div className='grid grid-cols-1 gap-4 mt-16px'>
                      <InputTextArea
                        title={'Catatan Barang*'}
                        placeholder={'Masukan Catatan Barang'}
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                      />
                    </div>
                    <div className='grid grid-cols-5 gap-4 mt-16px'>
                      <InputImage />
                      <InputImage />
                      <InputImage />
                      <InputImage />
                      <InputImage />
                    </div>
                  </div>

                  <TitlePage title={'Informasi Pengingat Barang'} />

                  <div className='p-16px grid grid-cols-2 gap-4'>
                    <InputText
                      title={'Jumlah Stok Tersedia Saat Ini*'}
                      placeholder={'Masukan Jumlah Stok Tersedia Saat Ini'}
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      isTitleAction={true}
                      typeTitleAction={'ask'}
                    />
                    <InputText
                      title={'Ingatkan Saya Saat Barang Mencapai Batas Minimal*'}
                      placeholder={'Masukan Ingatkan Saya Saat Barang Mencapai Batas Minimal'}
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      isTitleAction={true}
                      typeTitleAction={'ask'}
                    />
                  </div>

                  <TitlePage title={'Informasi Persediaan dan Transaksi Barang'} />

                  <div className='p-16px grid grid-cols-2 gap-4'>
                    <InputText
                      title={'Minimum pelanggan melakukan pembelian per sekali transaksi?*'}
                      placeholder={'Masukan Minimum pelanggan melakukan pembelian per sekali transaksi?'}
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      isTitleAction={true}
                      typeTitleAction={'ask'}
                    />
                    <InputText
                      title={'Maksimum pelanggan melakukan pembelian per sekali transaksi?*'}
                      placeholder={'Masukan Maksimum pelanggan melakukan pembelian per sekali transaksi?'}
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      isTitleAction={true}
                      typeTitleAction={'ask'}
                    />
                  </div>
                  <div style={{ paddingTop: '0px' }} className='p-16px grid grid-cols-1 gap-4'>
                    <InputDate
                      classTitle={'dropdown-status-data-table-title'}
                      title={'Tanggal Expired Barang'}
                      flexParent={1}

                    />
                  </div>

                  <TitlePage title={'Informasi Harga dan Penjualan'} />

                  <div className='p-16px grid grid-cols-2 gap-4'>
                    <InputText
                      title={'Harga beli satuan Barang ke supplier?*'}
                      placeholder={'Rp 0'}
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      isTitleAction={true}
                      typeTitleAction={'ask'}
                    />
                    <InputDropdown
                      title={'Akun Pembelian*'}
                      placeholder={'Masukan Akun Pembelian'}
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      typeAction={'ask'}
                      marginLeftChild={'16px'}
                    />
                  </div>

                  <div style={{ paddingTop: '0px' }} className='p-16px grid grid-cols-2 gap-4'>
                    <InputText
                      title={'Harga jual satuan barang ke cabang atau pembeli??*'}
                      placeholder={'Rp 0'}
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      isTitleAction={true}
                      typeTitleAction={'ask'}
                    />
                    <InputDropdown
                      title={'Akun Penjualan*'}
                      placeholder={'Masukan Akun Penjualan'}
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      typeAction={'ask'}
                      marginLeftChild={'16px'}
                    />
                  </div>

                  <div style={{ paddingTop: '0px' }} className='p-16px grid grid-cols-1 gap-4'>
                    <InputDropdown
                      title={'Akun Persediaan*'}
                      placeholder={'Masukan Akun Penjualan'}
                      flexParent={1}
                      classTitle={'dropdown-status-data-table-title'}
                      marginLeftChild={'16px'}
                    />
                  </div>

                </> : null
            }

            {
              TabAdd?.isActivetab == 1
                ? <>
                  <div className='p-16px'>
                    <Tab
                      onClick={(payload) => {
                        setTabUpFile((prevstate) => {
                          return {
                            ...prevstate,
                            isActivetab: payload,
                          }
                        })
                      }}
                      Tabs={TabUpFile?.data}
                      IsActiveTab={TabUpFile?.isActivetab}
                    />
                    {
                      TabUpFile?.isActivetab == 0
                        ? <>
                          <div className='mt-16px'>

                            <hr />
                            <div className='p-16px'>
                              <StepTitle
                                title={'Download & Isi File Excel'}
                                number={'1'}
                              />
                            </div>
                            <hr />

                            <div style={{ paddingLeft: '64px' }} className='p-16px'>
                              <div className='step-title-langkah'>
                                Cara Tambah Sekaligus Pengadaan barang</div>
                              <ul className='mt-8px'>
                                <li className='step-title-langkah-sub'>
                                  Klik tombol "Download Template" dibawah.</li>
                                <li className='step-title-langkah-sub'>
                                  Setelah template di download, buka dokumen excel tersebut.</li>
                                <li className='step-title-langkah-sub'>
                                  Isi informasi sesuai dengan data detail yang telah di persiapkan sebelumnya.</li>
                                <li className='step-title-langkah-sub'>
                                  Cek kembali informasi Barang lalu simpan dengan tekan 'ctrl + S' pada keyboard</li>
                              </ul>

                              <div style={{ width: '250px' }} className='step-title-download mt-16px'>
                                <IDownload />
                                <div>Download Template Tambah Data</div>
                              </div>
                            </div>

                            <hr />
                            <div className='p-16px'>
                              <StepTitle
                                title={'Upload File Excel'}
                                number={'2'}
                              />
                            </div>
                            <hr />

                            <div style={{ paddingLeft: '64px' }} className='p-16px'>
                              <UploadImage
                                flex={1}
                              />

                              <div className='step-title-langkah mt-16px'>
                                Cara Tambah Sekaligus Pengadaan barang</div>
                              <ul className='mt-8px'>
                                <li className='step-title-langkah-sub'>
                                  Klik tombol "Download Template" dibawah.</li>
                                <li className='step-title-langkah-sub'>
                                  Setelah template di download, buka dokumen excel tersebut.</li>
                                <li className='step-title-langkah-sub'>
                                  Isi informasi sesuai dengan data detail yang telah di persiapkan sebelumnya.</li>
                                <li className='step-title-langkah-sub'>
                                  Cek kembali informasi Barang lalu simpan dengan tekan 'ctrl + S' pada keyboard</li>
                              </ul>
                            </div>

                          </div>
                        </> : null
                    }

                    {
                      TabUpFile?.isActivetab == 1
                        ? <>
                          <div className='mt-16px'>

                            <hr />
                            <div className='p-16px'>
                              <StepTitle
                                title={'Download & Isi File Excel'}
                                number={'1'}
                              />
                            </div>
                            <hr />

                            <div style={{ paddingLeft: '64px' }} className='p-16px'>
                              <div className='step-title-langkah'>
                                Cara Tambah Sekaligus Pengadaan barang</div>
                              <ul className='mt-8px'>
                                <li className='step-title-langkah-sub'>
                                  Klik tombol "Download Template" dibawah.</li>
                                <li className='step-title-langkah-sub'>
                                  Setelah template di download, buka dokumen excel tersebut.</li>
                                <li className='step-title-langkah-sub'>
                                  Isi informasi sesuai dengan data detail yang telah di persiapkan sebelumnya.</li>
                                <li className='step-title-langkah-sub'>
                                  Cek kembali informasi Barang lalu simpan dengan tekan 'ctrl + S' pada keyboard</li>
                              </ul>

                              <div style={{ width: '250px' }} className='step-title-download mt-16px'>
                                <IDownload />
                                <div>Download Template Update Data</div>
                              </div>
                            </div>

                            <hr />
                            <div className='p-16px'>
                              <StepTitle
                                title={'Upload File Excel'}
                                number={'2'}
                              />
                            </div>
                            <hr />

                            <div style={{ paddingLeft: '64px' }} className='p-16px'>
                              <UploadImage
                                flex={1}
                              />

                              <div className='step-title-langkah mt-16px'>
                                Cara Tambah Sekaligus Pengadaan barang</div>
                              <ul className='mt-8px'>
                                <li className='step-title-langkah-sub'>
                                  Klik tombol "Download Template" dibawah.</li>
                                <li className='step-title-langkah-sub'>
                                  Setelah template di download, buka dokumen excel tersebut.</li>
                                <li className='step-title-langkah-sub'>
                                  Isi informasi sesuai dengan data detail yang telah di persiapkan sebelumnya.</li>
                                <li className='step-title-langkah-sub'>
                                  Cek kembali informasi Barang lalu simpan dengan tekan 'ctrl + S' pada keyboard</li>
                              </ul>
                            </div>

                          </div>
                        </> : null
                    }
                  </div>
                </> : null
            }

          </div>
        </div>

        <div className='d-flex align-center jusitfy-end pt-16px mb-16px pr-16px'>
          <div className='d-flex gap-10px'>
            <ButtonCancel
              title={'Batal'}
              action={() => handleActCancel()}
            />
            <ButtonSave
              title={'Edit Barang'}
              action={() => handleActSubmit()}
            />
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}

const IDownload = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.687 17.292C10.5956 17.1997 10.4868 17.1264 10.3669 17.0764C10.247 17.0264 10.1184 17.0007 9.9885 17.0007C9.8586 17.0007 9.72998 17.0264 9.61009 17.0764C9.49019 17.1264 9.3814 17.1997 9.29 17.292C9.10466 17.4792 9.0007 17.732 9.0007 17.9955C9.0007 18.259 9.10466 18.5118 9.29 18.699L11.254 20.679C11.3546 20.7807 11.4744 20.8613 11.6064 20.9164C11.7384 20.9715 11.88 20.9998 12.023 20.9998C12.166 20.9998 12.3076 20.9715 12.4396 20.9164C12.5716 20.8613 12.6914 20.7807 12.792 20.679L14.711 18.746C14.8966 18.5587 15.0008 18.3057 15.0008 18.042C15.0008 17.7783 14.8966 17.5253 14.711 17.338C14.6196 17.2455 14.5107 17.1721 14.3907 17.122C14.2708 17.0719 14.142 17.0462 14.012 17.0462C13.882 17.0462 13.7532 17.0719 13.6333 17.122C13.5133 17.1721 13.4044 17.2455 13.313 17.338L12.023 18.638L10.687 17.292Z" fill="white" />
      <path d="M13.001 19.993L13 10.006C13 9.451 12.552 9 12 9C11.448 9 11 9.45 11 10.007L11.001 19.994C11.001 20.549 11.449 21 12.001 21C12.553 21 13.001 20.55 13.001 19.993Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.938 5.48C7.68111 5.4383 7.42125 5.41757 7.161 5.418C4.356 5.418 2 7.62 2 10.498C2 13.409 4.385 16 7.1 16H9.981V14.007H7.1C5.443 14.007 3.985 12.344 3.985 10.499C3.985 8.721 5.454 7.412 7.089 7.412H7.101C7.49 7.412 7.787 7.462 8.071 7.562L8.241 7.625C8.846 7.873 9.116 7.379 9.116 7.379L9.266 7.112C9.996 5.765 11.467 5.016 12.982 4.992C13.9871 5.00203 14.9543 5.37742 15.703 6.04812C16.4517 6.71882 16.9309 7.63901 17.051 8.637L17.097 8.977C17.097 8.977 17.168 9.502 17.762 9.502C17.775 9.502 17.774 9.507 17.785 9.507H18.039C19.175 9.507 20.015 10.466 20.015 11.665C20.015 12.872 19.028 14.007 17.945 14.007H13.981V16H17.945C20.105 16 22 13.955 22 11.665C22 9.665 20.688 8.002 18.862 7.591C18.155 4.884 15.809 3.039 12.976 3C11.001 3.02 9.075 3.9 7.938 5.48Z" fill="white" />
    </svg>

  )
}

export default ModalEditBarang
