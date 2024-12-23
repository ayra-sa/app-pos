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
import React, { useCallback } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'

function ModalDetailPembelian({
  setisModalUp,
  isModalUp,
  setisModalConfirmationAdd,
  setisModalConfirmationEdit,
  isObjectPembelianDetail,
}) {
  const tabsDetailPembelianReducer = useSelector((state) => state?.tabsDetailPembelianReducer)
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
      name: 'Keterangan',
      selector: row => row.Keterangan,
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
      Keterangan: 'Keterangan',
    },
  ]

  const columnsDetailRekturPembelian = [
    {
      name: 'Kode Akun',
      selector: row => row.KodeAkun,
    },
    {
      name: 'Akun',
      selector: row => row.NamaBarang,
    },
    {
      name: 'Nilai',
      selector: row => row.Kuantitas,
    },
    {
      name: 'Keterangan',
      selector: row => row.Keterangan,
    },
  ];
  const dataDetailRekturPembelian = [
    {
      id: 1,
      kategoriBarang: 'kategoriBarang',
      pemasokBarang: 'pemasokBarang',
      KodeBarang: 'KodeBarang',
      NamaBarang: 'NamaBarang',
      Kuantitas: 'Kuantitas',
      Nilai: 'Nilai',
      Pemasok: 'Pemasok',
      Keterangan: 'Keterangan',
      KodeAkun: 'KodeAkun',
      Akun: 'Akun',
    },
  ]

  const columnsDetailTransaksiReturPembelian = [
    {
      name: 'Nomor Barang',
      selector: row => row.NomerBarang,
    },
    {
      name: 'Barang',
      selector: row => row.Barang,
    },
    {
      name: 'Satuan',
      selector: row => row.Satuan,
    },
    {
      name: 'Harga',
      selector: row => row.Harga,
    },
    {
      name: 'Diskon',
      selector: row => row.Diskon,
    },
    {
      name: 'Total',
      selector: row => row.Total,
    },
  ];
  const dataDetailTransaksiReturPembelian = [
    {
      id: 1,
      NomerBarang: 'NomorBarang',
      Barang: 'Barang',
      Satuan: 'Satuan',
      Harga: 'Harga',
      Diskon: 'Diskon',
      Total: 'Total',
      kategoriBarang: 'kategoriBarang',
      pemasokBarang: 'pemasokBarang',
      KodeBarang: 'KodeBarang',
      NamaBarang: 'NamaBarang',
      Kuantitas: 'Kuantitas',
      Nilai: 'Nilai',
      Pemasok: 'Pemasok',
      Keterangan: 'Keterangan',
    },
  ]

  const columnsDetailTransaksiPembayaranPembelian = [
    {
      name: 'No Faktur',
      selector: row => row.NoFaktur,
    },
    {
      name: 'Tanggal Faktur',
      selector: row => row.TglFaktur,
    },
    {
      name: 'Total Faktur',
      selector: row => row.totFaktur,
    },
    {
      name: 'Terutang',
      selector: row => row.terutang,
    },
    {
      name: 'Bayar',
      selector: row => row.bayar,
    },
    {
      name: 'diskon',
      selector: row => row.Diskon,
    },
  ];
  const dataDetailTransaksiPembayaranPembelian = [
    {
      id: 1,
      NoFaktur: 'NoFaktur',
      TglFaktur: 'TglFaktur',
      totFaktur: 'totFaktur',
      terutang: 'terutang',
      bayar: 'bayar',
      NomerBarang: 'NomorBarang',
      Barang: 'Barang',
      Satuan: 'Satuan',
      Harga: 'Harga',
      Diskon: 'Diskon',
      Total: 'Total',
      kategoriBarang: 'kategoriBarang',
      pemasokBarang: 'pemasokBarang',
      KodeBarang: 'KodeBarang',
      NamaBarang: 'NamaBarang',
      Kuantitas: 'Kuantitas',
      Nilai: 'Nilai',
      Pemasok: 'Pemasok',
      Keterangan: 'Keterangan',
    },
  ]

  const columnsDetailUangMukaPembelian = [
    {
      name: 'Akun',
      selector: row => row.Akun,
    },
    {
      name: 'Jumlah Uang Muka',
      selector: row => row.UangMuka,
    },
  ];
  const dataDetailUangMukaPembelian = [
    {
      id: 1,
      Akun: 'Akun',
      UangMuka: 'UangMuka',
      NoFaktur: 'NoFaktur',
      TglFaktur: 'TglFaktur',
      totFaktur: 'totFaktur',
      terutang: 'terutang',
      bayar: 'bayar',
      NomerBarang: 'NomorBarang',
      Barang: 'Barang',
      Satuan: 'Satuan',
      Harga: 'Harga',
      Diskon: 'Diskon',
      Total: 'Total',
      kategoriBarang: 'kategoriBarang',
      pemasokBarang: 'pemasokBarang',
      KodeBarang: 'KodeBarang',
      NamaBarang: 'NamaBarang',
      Kuantitas: 'Kuantitas',
      Nilai: 'Nilai',
      Pemasok: 'Pemasok',
      Keterangan: 'Keterangan',
    },
  ]

  const columnsDetailTransaksiPenerimaanBarang = [
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
      name: 'Gudang',
      selector: row => row.Gudang,
    },
    {
      name: 'Keterangan',
      selector: row => row.Keterangan,
    },
  ];
  const dataDetailTransaksiPenerimaanBarang = [
    {
      id: 1,
      Akun: 'Akun',
      Gudang: 'Gudang',
      UangMuka: 'UangMuka',
      NoFaktur: 'NoFaktur',
      TglFaktur: 'TglFaktur',
      totFaktur: 'totFaktur',
      terutang: 'terutang',
      bayar: 'bayar',
      NomerBarang: 'NomorBarang',
      Barang: 'Barang',
      Satuan: 'Satuan',
      Harga: 'Harga',
      Diskon: 'Diskon',
      Total: 'Total',
      kategoriBarang: 'kategoriBarang',
      pemasokBarang: 'pemasokBarang',
      KodeBarang: 'KodeBarang',
      NamaBarang: 'NamaBarang',
      Kuantitas: 'Kuantitas',
      Nilai: 'Nilai',
      Pemasok: 'Pemasok',
      Keterangan: 'Keterangan',
    },
  ]

  const RerenderTab = useCallback(() => {

    if (isObjectPembelianDetail?.TypeValue == 'pembayaran-pembelian'
      || isObjectPembelianDetail?.TypeValue == 'penerimaan-barang') {
      return (
        <Tab
          typeAction={'STATUS_TAB_DETAIL_PEMBELIAN'}
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_DETAIL_PEMBELIAN',
              payload: payload
            })
          }}
          Tabs={tabsDetailPembelianReducer?.data}
          IsActiveTab={tabsDetailPembelianReducer?.isActivetab}
          hideTab={isObjectPembelianDetail?.TypeValue == 'pembayaran-pembelian'
            || isObjectPembelianDetail?.TypeValue == 'penerimaan-barang'
            ? [
              '',
              '',
              'Biaya Lainnya'
            ] : ''}
        />
      )
    } else if (isObjectPembelianDetail?.TypeValue == 'uang-muka-pembelian') {
      return (
        <Tab
          typeAction={'STATUS_TAB_DETAIL_PEMBELIAN'}
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_DETAIL_PEMBELIAN',
              payload: payload
            })
          }}
          Tabs={tabsDetailPembelianReducer?.data}
          IsActiveTab={tabsDetailPembelianReducer?.isActivetab}
          hideTab={isObjectPembelianDetail?.TypeValue == 'uang-muka-pembelian'
            ? [
              '',
              'Informasi Transaksi',
              'Biaya Lainnya'
            ] : ''}
        />
      )
    } else {
      return (
        <Tab
          typeAction={'STATUS_TAB_DETAIL_PEMBELIAN'}
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_DETAIL_PEMBELIAN',
              payload: payload
            })
          }}
          Tabs={tabsDetailPembelianReducer?.data}
          IsActiveTab={tabsDetailPembelianReducer?.isActivetab}
        />
      )
    }
  }, [
    dispatch,
    tabsDetailPembelianReducer?.data,
    tabsDetailPembelianReducer?.isActivetab,
    isObjectPembelianDetail?.TypeValue
  ])

  return (
    <ModalWrapper
      bottom={'10%'}
      top={'10%'}
      left={'15%'}
      right={'15%'}
      overflow={'auto'}
      isModalUp={isModalUp}
      setisModalUp={setisModalUp}
    >
      <div className='p-16px'>
        <TitleModal title={'Detail'} setisModalClose={setisModalUp} />
      </div>
      {
        RerenderTab()
      }

      {
        tabsDetailPembelianReducer?.isActivetab == 0 && isObjectPembelianDetail?.TypeValue == 'faktur-pembelian'
          ? <>
            <div className='p-16px d-flex flex-column justify-between h-80'>
              <div>
                <StatusModalData />
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Suplier', value: 'Suplier 01' },
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
                <TotalComp
                  isObjectPembelianDetail={isObjectPembelianDetail}
                />
              </div>
              <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
            </div>
          </> : null
      }
      {
        tabsDetailPembelianReducer?.isActivetab == 0 && isObjectPembelianDetail?.TypeValue == 'retur-pembelian'
          ?
          <>
            <div className='p-16px d-flex flex-column justify-between h-80'>
              <div>
                <StatusModalData status='Selesai' />
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Suplier', value: 'Suplier 01' },
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
                  columns={columnsDetailTransaksiReturPembelian}
                  data={dataDetailTransaksiReturPembelian}
                />
                <TotalComp
                  isObjectPembelianDetail={isObjectPembelianDetail}
                />
              </div>
              <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
            </div>
          </> : null
      }
      {
        tabsDetailPembelianReducer?.isActivetab == 0 && isObjectPembelianDetail?.TypeValue == 'pembayaran-pembelian'
          ?
          <>
            <div className='p-16px d-flex flex-column justify-between h-80'>
              <div>
                <StatusModalData status='Selesai' />
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Pembayaran Ke Suplier', value: 'Suplier 01' },
                        { label: 'Pembayaran Dari Akun', value: 'Pembayaran Dari Akun' },
                        { label: 'Tanggal', value: '20 juli 2023' },
                        { label: 'Nilai Pembayaran', value: 'Rp. 10.000' },
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
                  columns={columnsDetailTransaksiPembayaranPembelian}
                  data={dataDetailTransaksiPembayaranPembelian}
                />
                <TotalCompPembayaranPembelian
                  isObjectPembelianDetail={isObjectPembelianDetail}
                />
              </div>
              <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
            </div>
          </> : null
      }
      {
        tabsDetailPembelianReducer?.isActivetab == 0 && isObjectPembelianDetail?.TypeValue == 'uang-muka-pembelian'
          ?
          <>
            <div className='p-16px d-flex flex-column justify-between h-80'>
              <div>
                <StatusModalData status='Belum selesai' />
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Pemasok', value: 'Pemasok1' },
                        { label: 'Tanggal', value: '20 juli 2023' },
                        { label: 'Alamat', value: 'Alamat' },
                      ]}
                    />
                  </div>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Penggunaan Pajak', value: 'Penggunaan Pajak' },
                        { label: 'Metode Pembayaran', value: 'Metode Pembayaran' },
                      ]}
                    />
                    <div style={{ marginTop: '4px'}}>
                      <InputTextArea
                        title={'Keterangan'}
                        placeholder={'Masukan keterangan'}
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
                <div className='garis-tipis'></div>
                <DataTable
                  columns={columnsDetailUangMukaPembelian}
                  data={dataDetailUangMukaPembelian}
                />
                <TotalCompUangMuka
                  isObjectPembelianDetail={isObjectPembelianDetail}
                />
              </div>
              <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
            </div>
          </> : null
      }
      {
        tabsDetailPembelianReducer?.isActivetab == 0 && isObjectPembelianDetail?.TypeValue == 'penerimaan-barang'
          ?
          <>
            <div className='p-16px d-flex flex-column justify-between h-80'>
              <div>
                <StatusModalData status='Diterima' />
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Nomor penerima', value: 'Nomor penerima' },
                        { label: 'Pemasok', value: 'pemasok' },
                        { label: 'Tanggal', value: '20 juli 2023' },
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
                  columns={columnsDetailTransaksiPenerimaanBarang}
                  data={dataDetailTransaksiPenerimaanBarang}
                />
              </div>
              <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
            </div>
          </> : null
      }

      {
        tabsDetailPembelianReducer?.isActivetab == 1 && isObjectPembelianDetail?.TypeValue == 'faktur-pembelian'
          ?
          <>
            <div className='d-flex flex-column justify-between h-80'>
              <div className='mt-16px'>
                <TitlePage title={'Informasi Pembayaran'} />
                <div className='grid grid-cols-2 gap-4 p-16px'>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Metode pembayaran', value: 'Metode pembayaran' },
                      ]}
                    />
                  </div>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Penggunaan pajak', value: 'Tidak ada' },
                      ]}
                    />
                  </div>
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
                <TotalComp
                  isObjectPembelianDetail={isObjectPembelianDetail}
                />
              </div>
              <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
            </div>
          </>
          : null
      }
      {
        tabsDetailPembelianReducer?.isActivetab == 1 && isObjectPembelianDetail?.TypeValue == 'retur-pembelian'
          ?
          <>
            <div className='d-flex flex-column justify-between h-80'>
              <div className='mt-16px'>
                <TitlePage title={'Informasi Pembayaran'} />
                <div className='grid grid-cols-2 gap-4 p-16px'>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Metode pembayaran', value: 'Metode pembayaran' },
                        { label: 'Alamat pengiriman', value: 'Jawa barat' },
                      ]}
                    />
                  </div>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Penggunaan pajak', value: 'Tidak ada' },
                        { label: 'Dicetak ke email', value: 'email@gmail,com' },
                      ]}
                    />
                  </div>
                </div>
                <hr />
                <TotalComp
                  isObjectPembelianDetail={isObjectPembelianDetail}
                />
              </div>
              <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
            </div>
          </>
          : null
      }
      {
        tabsDetailPembelianReducer?.isActivetab == 1 && isObjectPembelianDetail?.TypeValue == 'pembayaran-pembelian'
          ?
          <>
            <div className='d-flex flex-column justify-between h-80'>
              <div className='mt-16px'>
                <TitlePage title={'Informasi Pembayaran'} />
                <div className='grid grid-cols-2 gap-4 p-16px'>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Metode pembayaran', value: 'COD' },
                      ]}
                    />
                  </div>
                </div>
                <hr />
                <TotalCompPembayaranPembelian
                  isObjectPembelianDetail={isObjectPembelianDetail}
                />
              </div>
              <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
            </div>
          </>
          : null
      }
      {
        tabsDetailPembelianReducer?.isActivetab == 1 && isObjectPembelianDetail?.TypeValue == 'penerimaan-barang'
          ?
          <>
            <div className='d-flex flex-column justify-between h-80'>
              <div className='mt-16px'>
                <TitlePage title={'Informasi Pembayaran'} />
                <div className='grid grid-cols-2 gap-4 p-16px'>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Tanggal Pengiriman', value: 'Tanggal Pengiriman' },
                        { label: 'Alamat Pengiriman', value: 'Alamat Pengiriman' },
                        { label: 'FOB', value: 'tidak ada' },
                      ]}
                    />
                  </div>
                  <div>
                    <DetailModalData
                      data={[
                        { label: 'Kurir Pengiriman', value: 'Kurir Pengiriman' },
                        { label: 'Keterangan', value: 'Keterangan' },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
            </div>
          </>
          : null
      }

      {
        tabsDetailPembelianReducer?.isActivetab == 2 && isObjectPembelianDetail?.TypeValue == 'faktur-pembelian'
          ? <>
            <div className='d-flex flex-column justify-between h-80'>
              <div className='p-16px'>
                <div style={{ marginBottom: '16px' }}>
                  <TitlePage title={'Detail Transaksi'} />
                </div>
                <div className='p-16px'>
                  <DataTable
                    columns={columnsDetailRekturPembelian}
                    data={dataDetailRekturPembelian}
                  />
                </div>
                <TotalComp
                  isObjectPembelianDetail={isObjectPembelianDetail}
                />
              </div>
              <div>
                <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
              </div>
            </div>
          </> : null
      }
      {
        tabsDetailPembelianReducer?.isActivetab == 2 && isObjectPembelianDetail?.TypeValue == 'retur-pembelian'
          ? <>
            <div className='d-flex flex-column justify-between h-80'>
              <div className='p-16px'>
                <div style={{ marginBottom: '16px' }}>
                  <TitlePage title={'Detail Transaksi'} />
                </div>
                <div className='p-16px'>
                  <DataTable
                    columns={columnsDetailRekturPembelian}
                    data={dataDetailRekturPembelian}
                  />
                </div>
                <TotalComp
                  isObjectPembelianDetail={isObjectPembelianDetail}
                />
              </div>
              <div>
                <BtnAction setisModalConfirmationEdit={setisModalConfirmationEdit} setisModalConfirmationAdd={setisModalConfirmationAdd} />
              </div>
            </div>
          </> : null
      }

    </ModalWrapper >
  )
}

const BtnAction = ({
  setisModalConfirmationAdd,
  setisModalConfirmationEdit,
}) => {
  return (
    <div className='p-16px'>
      <div className='gap-10px d-flex align-center justify-end mt-16px'>
        <ButtonCancel action={() => setisModalConfirmationEdit(true)} paddingBottom={'6px'} paddingTop={'6px'} title={'Edit'} />
        <ButtonSave action={() => setisModalConfirmationAdd(true)} title={'Simpan'} />
      </div>
    </div>
  )
}

const TotalComp = ({
  isObjectPembelianDetail,
}) => {
  return (
    <div className='p-16px gap-20px d-flex align-center justify-end mt-16px'>
      <TotalAll title={'Potongan'} value={'0'} />
      <TotalAll title={'Biaya Lainnya'} value={'0'} />
      {
        isObjectPembelianDetail?.TypeValue == 'faktur-pembelian' ? <TotalAll title={'Uang Muka'} value={'0'} /> : null
      }
      {
        isObjectPembelianDetail?.TypeValue == 'faktur-pembelian' ? <TotalAll color={'#EB5757'} title={'Sisa'} value={'0'} /> : null
      }
      <TotalAll title={'Total'} value={'0'} />
    </div>
  )
}

const TotalCompUangMuka = ({
  isObjectPembelianDetail,
}) => {
  return (
    <div className='p-16px gap-20px d-flex align-center justify-end mt-16px'>
      <TotalAll title={'Total'} value={'0'} />
    </div>
  )
}

const TotalCompPembayaranPembelian = ({
  isObjectPembelianDetail,
}) => {
  return (
    <div className='p-16px gap-20px d-flex align-center justify-end mt-16px'>
      <TotalAll title={'Nilai Pembayaran'} value={'0'} />
      <TotalAll title={'Faktur dibayar'} value={'0'} />
    </div>
  )
}
export default ModalDetailPembelian