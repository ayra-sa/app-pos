import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import DetailModalData from 'components/DetailModalData'
import InputTextArea from 'components/Input/InputTexArea'
import ModalWrapper from 'components/Modal/ModalWrapper'
import StatusModalData from 'components/StatusModal'
import Tab from 'components/Tab/inddex'
import TitleModal from 'components/TitlePage/TitleModal'
import TitlePage from 'components/TitlePage/TitlePage'
import Total from 'components/Total'
import TotalAll from 'components/TotalAll'
import React from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'

function ModalDetailPenjualan({
  setisModalUp,
  isModalUp,
  setisModalConfirmationAdd,
}) {
  const TabsDetailPenjualanReducer = useSelector((state) => state?.tabsDetailPenjualanReducer)
  const dispatch = useDispatch();

  const columns = [
    {
      name: 'Kode Barang',
      selector: row => row.KodeBarang,
    },
    {
      name: 'Nama Barang',
      selector: row => row.NamaBarang,
    },
    {
      name: 'Kuantitas',
      selector: row => row.Kuantitas,
    },
    {
      name: 'Nilai',
      selector: row => row.Nilai,
    },
    {
      name: 'Pemasok',
      selector: row => row.Pemasok,
    },
  ];
  const data = [
    {
      id: 1,
      kategoriBarang: 'kategoriBarang',
      pemasokBarang: 'pemasokBarang',
      KodeBarang: 'KodeBarang',
      NamaBarang: 'NamaBarang',
      Kuantitas: 'Kuantitas',
      Nilai: 'Nilai',
      Pemasok: 'Pemasok',

    },
  ]

  const columnsBiaya = [
    {
      name: 'Kode Akun',
      selector: row => row.KodeAkun,
    },
    {
      name: 'Akun',
      selector: row => row.Akun,
    },
    {
      name: 'Nilai',
      selector: row => row.Nilai,
    },
    {
      name: 'Keterangan',
      selector: row => row.Keterangan,
    },
  ];
  const dataBiaya = [
    {
      id: 1,
      kategoriBarang: 'kategoriBarang',
      pemasokBarang: 'pemasokBarang',
      KodeBarang: 'KodeBarang',
      NamaBarang: 'NamaBarang',
      Kuantitas: 'Kuantitas',
      Nilai: 'Nilai',
      Pemasok: 'Pemasok',
      KodeAkun: 'KodeAkun',
      Akun: 'Akun',
      Keterangan: 'Keterangan',
    },
  ]

  return (
    <ModalWrapper
      bottom={'10%'}
      top={'10%'}
      left={'25%'}
      right={'25%'}
      overflow={'auto'}
      isModalUp={isModalUp}
      setisModalUp={setisModalUp}
    >
      <div className='p-16px'>
        <TitleModal title={'Detail'} setisModalClose={setisModalUp}/>
      </div>

      <Tab
        onClick={(payload) => {
          dispatch({
            type: 'STATUS_TAB_DETAIL_PENJUALAN',
            payload: payload
          })
        }}
        Tabs={TabsDetailPenjualanReducer?.data}
        IsActiveTab={TabsDetailPenjualanReducer?.isActivetab} />
      {
        TabsDetailPenjualanReducer?.isActivetab == 0 && <>
          <div className='p-16px d-flex flex-column justify-between h-80'>
            <div>
              <StatusModalData />
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <DetailModalData
                    data={[
                      { label: 'pelanggan', value: 'pelanggan 01' },
                      { label: 'tanggal', value: '20 juli 2023' },
                    ]}
                  />
                </div>
                <div>
                  <InputTextArea
                    title={'Keterangan'}
                    placeholder={'Masukan keterangan'}
                    rows={4}
                  />
                </div>
              </div>
              <div className='garis-tipis'></div>
              <DataTable
                columns={columns}
                data={data}
              />
              <TotalComp />
            </div>
            <BtnAction setisModalConfirmationAdd={setisModalConfirmationAdd} />
          </div>
        </>
      }
      {
        TabsDetailPenjualanReducer?.isActivetab == 1 && <>
          <div className='d-flex flex-column justify-between h-80'>
            <div className='mt-16px'>
              <TitlePage title={'Informasi Pembayaran'} />
              <div className='p-16px'>
                <div className='message-kontent'>Message content</div>
              </div>
              <TitlePage title={'Informasi Pengiriman'} />
              <div className='grid grid-cols-2 gap-4 p-16px'>
                <div>
                  <DetailModalData
                    data={[
                      { label: 'Tanggal pengiriman', value: '20 juli 2023' },
                      { label: 'Alamat pengiriman', value: 'Jawa barat' },
                    ]}
                  />
                  <div className='message-kontent mt-16px'>Message content</div>
                </div>
                <div>
                  <DetailModalData
                    data={[
                      { label: 'Kurir pengiriman', value: 'JNE' },
                      { label: 'Keterangan', value: 'Sampai rumah' },
                    ]}
                  />
                </div>
              </div>
              <TitlePage title={'Informasi Tambahan'} />
              <div className='grid grid-cols-2 gap-4 p-16px'>
                <div>
                  <DetailModalData
                    data={[
                      { label: 'FOCB', value: 'Tidak ada' },
                    ]}
                  />
                </div>
              </div>
              <hr />
              <TotalComp />
            </div>
            <BtnAction setisModalConfirmationAdd={setisModalConfirmationAdd} />
          </div>
        </>
      }
      {
        TabsDetailPenjualanReducer?.isActivetab == 2 && <>
          <div className='d-flex flex-column justify-between h-80'>
            <div className='p-16px'>
              <DataTable
                columns={columnsBiaya}
                data={dataBiaya}
              />
              <TotalComp />
            </div>
            <div>
              <BtnAction setisModalConfirmationAdd={setisModalConfirmationAdd} />
            </div>
          </div>
        </>
      }

    </ModalWrapper>
  )
}

const BtnAction = ({
  setisModalConfirmationAdd,
}) => {
  return (
    <div className='p-16px'>
      <div className='gap-10px d-flex align-center justify-end mt-16px'>
        <ButtonCancel paddingBottom={'6px'} paddingTop={'6px'} title={'Edit'} />
        <ButtonSave action={() => setisModalConfirmationAdd(true)} title={'Simpan'} />
      </div>
    </div>
  )
}

const TotalComp = () => {
  return (
    <div className='p-16px gap-20px d-flex align-center justify-end mt-16px'>
      <TotalAll title={'Potongan'} value={'0'} />
      <TotalAll title={'Biaya Lainnya'} value={'0'} />
      <TotalAll title={'Total'} value={'0'} />
    </div>
  )
}
export default ModalDetailPenjualan