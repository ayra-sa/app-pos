import Tab from 'components/Tab/inddex'
import AddPengaturan from 'components/finance/simpanan/addPengaturan'
import DataTableBukuSimpanan from 'components/finance/simpanan/dataTableBukuSimpanan'
import DataTableMutasiSimpanan from 'components/finance/simpanan/dataTableMutasiSimpanan'
import DetailBukuSimpanan from 'components/finance/simpanan/detailBukuSimpanan'
import ModalDetailDataTableMutasiSimpanan from 'components/finance/simpanan/modalDetailDataTable'
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

const Simpanan = () => {
  const [isModalUp, setisModalUp] = useState(false)
  const [objModalUp, setobjModalUp] = useState(false)
  const [isStatusPageSimpanan, setisStatusPageSimpanan] = useState('')

  const dispatch = useDispatch();
  const tabsFinanceSimpananReducer = useSelector((state) => state.tabsFinanceSimpananReducer);
  const [typeAnggota, setTypeAnggota] = useState([
    {
      title: 'Anggota Simpanan Pokok',
      count: 667,
      color: '#219653',
    },
    {
      title: 'Anggota Simpanan Wajib',
      count: 321,
      color: '#9B51E0',
    },
    {
      title: 'Anggota Simpanan Sukarela',
      count: 123,
      color: '#56CCF2',
    },
    {
      title: 'Anggota Simpanan Berjangka',
      count: 132,
      color: '#828282',
    },
  ])
  return (
    <Admin>
      <div className='finance-simpanan-kontainer'>

        <div className='finance-simpanan-title-wrapp'>
          <div className='finance-simpanan-title'>Simpanan</div>
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
                  type: 'STATUS_TAB_SET',
                  payload: payload
                })
              }}
              Tabs={tabsFinanceSimpananReducer?.data}
              IsActiveTab={tabsFinanceSimpananReducer?.isActivetab} />

            <div>
              {
                tabsFinanceSimpananReducer?.isActivetab == 0 && <>
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
                  <DataTableMutasiSimpanan
                    setisModalUp={setisModalUp}
                  />
                </>
              }
              {
                tabsFinanceSimpananReducer?.isActivetab == 1 && <>
                  <div className='mt-5'></div>
                  <DataTableBukuSimpanan
                    setisStatusPageSimpanan={setisStatusPageSimpanan} />
                </>
              }
              {
                tabsFinanceSimpananReducer?.isActivetab == 2 && <>
                  <Pengaturan
                    setisStatusPageSimpanan={setisStatusPageSimpanan} />
                </>
              }
            </div>
          </>
        }

      </div>

      <ModalDetailDataTableMutasiSimpanan
        setisModalUp={setisModalUp}
        isModalUp={isModalUp} />
    </Admin>
  )
}

export default WithAuth(Simpanan)

const Pengaturan = ({
  setisStatusPageSimpanan,
}) => {

  const pengaturans = [
    {
      title: 'Simpanan Pokok',
      background: 'var(--_Internal-Light-Atlassian, linear-gradient(204deg, #0052CC 10.89%, #2684FF 79.93%))',
      deskripsi: 'Menampilkan apa yang dimiliki (aset), apa saja utangnya (liabilitas), dan apa yang sudah diinvestasikan ke perusahaan ini (ekuitas) pada tanggal tertentu.'
    },
    {
      title: 'Simpanan Wajib',
      background: 'var(--Red, #EB5757)',
      deskripsi: 'Menampilkan apa yang dimiliki (aset), apa saja utangnya (liabilitas), dan apa yang sudah diinvestasikan ke perusahaan ini (ekuitas) pada tanggal tertentu.'
    },
    {
      title: 'Simpanan Sukarela',
      background: 'var(--Green-1, #219653)',
      deskripsi: 'Menampilkan apa yang dimiliki (aset), apa saja utangnya (liabilitas), dan apa yang sudah diinvestasikan ke perusahaan ini (ekuitas) pada tanggal tertentu.'
    },
    {
      title: 'Simpanan Berjangka Model 01',
      background: 'var(--Blue-3, #56CCF2)',
      deskripsi: 'Menampilkan apa yang dimiliki (aset), apa saja utangnya (liabilitas), dan apa yang sudah diinvestasikan ke perusahaan ini (ekuitas) pada tanggal tertentu.'
    },
  ]

  return (
    <div className='finance-simpanan-pengaturan-kontainer'>

      <div
        onClick={() => setisStatusPageSimpanan('addPengaturan')} className='finance-simpanan-pengaturan-add-wrapp mt-5 mb-5'>
        <IAdd />
        <div className='ml-2 finance-simpanan-pengaturan-add'>Tambah Jenis Simpanan</div>
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
                  <div className='finance-simpanan-pengaturan-icons'>
                    <IEdit />
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