import Tab from 'components/Tab/inddex'
import AddPengaturan from 'components/finance/pinjaman/addPengaturan'
import DetailBukuSimpanan from 'components/finance/simpanan/detailBukuSimpanan'
import ModalDetailDataTableMutasi from 'components/finance/pinjaman/modalDetailDataTable'
import IAdd from 'components/icons/IAdd'
import IEdit from 'components/icons/IEdit'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'
import DataTableMutasiPinjaman from 'components/finance/pinjaman/dataTableMutasiPinjaman'
import DataTableBukuPinjaman from 'components/finance/pinjaman/dataTableBukuPinjaman'
import DataTablePengajuan from 'components/finance/pinjaman/dataTablePengajuan'
import ModalAddPengaturan from 'components/finance/pinjaman/modalAddPengaturan'
import ICeklis from 'components/icons/ICeklis'

const Pinjaman = () => {
  const [isModalUp, setisModalUp] = useState(false)
  const [isModalAddPengaturan, setisModalAddPengaturan] = useState(false)
  const [objModalUp, setobjModalUp] = useState(false)
  const [isStatusPageSimpanan, setisStatusPageSimpanan] = useState('')

  const dispatch = useDispatch();
  const tabsFinancePinjamanReducer = useSelector((state) => state.tabsFinancePinjamanReducer);
  const [typeAnggota, setTypeAnggota] = useState([
    {
      title: 'Pinjaman',
      count: 667,
      color: '#219653',
    },
    {
      title: 'Pinjaman Aktif',
      count: 321,
      color: '#9B51E0',
    },
    {
      title: 'Lunas',
      count: 123,
      color: '#56CCF2',
    },
    {
      title: 'Belum Lunas',
      count: 132,
      color: '#828282',
    },
  ])

  return (
    <Admin>
      <div className='finance-simpanan-kontainer'>

        <div className='finance-simpanan-title-wrapp'>
          <div className='finance-simpanan-title'>Pinjaman</div>
          <div className='cursor-pointer'><IReload /></div>
        </div>

        {
          isStatusPageSimpanan == 'detailBukuSimpanan' ? <>
            <DetailBukuSimpanan setBackSimpanan={setisStatusPageSimpanan} />
          </> : isStatusPageSimpanan == 'addPengaturan' ? <AddPengaturan
            setisStatusPageSimpanan={setisStatusPageSimpanan} /> : <>
            <Tab
              onClick={(payload) => {
                dispatch({
                  type: 'STATUS_TAB_PINJAMAN_SET',
                  payload: payload
                })
              }}
              Tabs={tabsFinancePinjamanReducer?.data}
              IsActiveTab={tabsFinancePinjamanReducer?.isActivetab} />

            <div>
              {
                tabsFinancePinjamanReducer?.isActivetab == 0 && <>
                  <div className='finance-simpanan-type-anggota-kontainer grid grid-cols-4 gap-4'>
                    {
                      typeAnggota?.map((anggota) => {
                        return (
                          <>
                            <div>
                              <div className='finance-simpanan-type-anggota-kontainer-title'>{anggota?.title}</div>
                              <div className='finance-simpanan-type-anggota-kontainer-count'>{anggota?.count}</div>
                              <div style={{
                                height: '6px',
                                minWidth: '100%',
                                background: anggota?.color
                              }}></div>
                            </div>
                          </>
                        )
                      })
                    }
                  </div>
                  <div className='garis-tipis'></div>
                  <DataTableMutasiPinjaman
                    setisModalUp={setisModalUp}
                  />
                </>
              }
              {
                tabsFinancePinjamanReducer?.isActivetab == 1 && <>
                  <div className='mt-5'></div>
                  <DataTablePengajuan
                    setisStatusPageSimpanan={setisStatusPageSimpanan} />
                </>
              }
              {
                tabsFinancePinjamanReducer?.isActivetab == 2 && <>
                  <div className='mt-5'></div>
                  <DataTableBukuPinjaman
                    setisStatusPageSimpanan={setisStatusPageSimpanan} />
                </>
              }
              {
                tabsFinancePinjamanReducer?.isActivetab == 3 && <>
                  <Pengaturan
                    setisModalAddPengaturan={setisModalAddPengaturan}
                    setisStatusPageSimpanan={setisStatusPageSimpanan} />
                </>
              }
            </div>
          </>
        }

      </div>

      <ModalDetailDataTableMutasi
        setisModalUp={setisModalUp}
        isModalUp={isModalUp} />
      <ModalAddPengaturan
        isModalUp={isModalAddPengaturan}
        setisModalUp={setisModalAddPengaturan}
      />
    </Admin>
  )
}

export default WithAuth(Pinjaman)

const Pengaturan = ({
  setisStatusPageSimpanan,
  setisModalAddPengaturan
}) => {

  const pengaturans = [
    {
      title: 'Pinjaman 1 Bulan',
      background: 'var(--_Internal-Light-Atlassian, linear-gradient(204deg, #0052CC 10.89%, #2684FF 79.93%))',
      deskripsi: 'Menampilkan apa yang dimiliki (aset), apa saja utangnya (liabilitas), dan apa yang sudah diinvestasikan ke perusahaan ini (ekuitas) pada tanggal tertentu.'
    },
    {
      title: 'Pinjaman 3 Bulan',
      background: 'var(--Red, #EB5757)',
      deskripsi: 'Menampilkan apa yang dimiliki (aset), apa saja utangnya (liabilitas), dan apa yang sudah diinvestasikan ke perusahaan ini (ekuitas) pada tanggal tertentu.'
    },
  ]

  return (
    <div className='finance-simpanan-pengaturan-kontainer'>

      <div
        onClick={() => setisModalAddPengaturan(true)} className='finance-simpanan-pengaturan-add-wrapp mt-5 mb-5'>
        <IAdd />
        <div style={{ width: '250px'}} className='ml-2 finance-simpanan-pengaturan-add'>Tambah Jenis Pinjaman</div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        {
          pengaturans?.map((res) => {
            return (
              <div className='finance-simpanan-pengaturan-add-wrapp-satuan'>
                <div style={{
                  background: res?.background
                }} className='finance-simpanan-pengaturan-color-box'></div>
                <div className='finance-simpanan-pengaturan-right'>
                  <div>
                    <div className='finance-simpanan-pengaturan-title'>{res?.title}</div>
                    <div className='finance-simpanan-pengaturan-deskripsi'>{res?.deskripsi}</div>
                  </div>
                  <div className='finance-simpanan-pengaturan-icons d-flex flex-column gap-16px'>
                    {/* <IEdit /> */}
                    <ICeklis/>
                    <ITrash/>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const ITrash = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.75 3C17.75 3.414 17.414 3.75 17 3.75H1C0.586 3.75 0.25 3.414 0.25 3C0.25 2.586 0.586 2.25 1 2.25H5.214C5.307 2.068 5.37899 1.862 5.45599 1.632L5.658 1.02499C5.862 0.412994 6.43499 0 7.08099 0H10.919C11.565 0 12.138 0.412994 12.342 1.02499L12.544 1.632C12.621 1.862 12.693 2.068 12.786 2.25H17C17.414 2.25 17.75 2.586 17.75 3ZM15.56 4.75C15.733 4.75 15.871 4.89701 15.859 5.07001L15.19 15.2C15.08 16.78 14.25 18 12.19 18H5.81C3.75 18 2.92 16.78 2.81 15.2L2.141 5.07001C2.13 4.89701 2.267 4.75 2.44 4.75H15.56ZM7.75 8C7.75 7.59 7.41 7.25 7 7.25C6.59 7.25 6.25 7.59 6.25 8V13C6.25 13.41 6.59 13.75 7 13.75C7.41 13.75 7.75 13.41 7.75 13V8ZM11.75 8C11.75 7.59 11.41 7.25 11 7.25C10.59 7.25 10.25 7.59 10.25 8V13C10.25 13.41 10.59 13.75 11 13.75C11.41 13.75 11.75 13.41 11.75 13V8Z" fill="#44546F" />
    </svg>

  )
}