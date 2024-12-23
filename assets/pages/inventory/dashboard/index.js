import WithAuth from 'components/config/protect'
import IAdd from 'components/icons/IAdd'
import IBefore from 'components/icons/IBefore'
import IExportEcxel from 'components/icons/IExportExcel'
import IMore from 'components/icons/IMore'
import INext from 'components/icons/INext'
import IReload from 'components/icons/IReload'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import InputDate from 'components/Input/InputDate'
import Tab from 'components/Tab/inddex'
import Admin from 'layouts/Admin'
import { round } from 'lodash'
import Link from 'next/link'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

const Inventory = () => {

  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());


  const [tab, setTab] = useState({
    data: [
      'Sales Performance',
      'Stock Monitoring'
    ],
    isActivetab: 0,
  })

  const columns = [
    {
      name: 'Nama Barang',
      selector: row => row.NamaBarang,
    },
    {
      name: 'Sisa Stok',
      selector: row => row.SisaStok,
    },
    {
      name: 'Status',
      selector: row => row.status,
      cell: (row) => {
        return (
          <>
            <div style={{ width: '100%' }} className='flex items-center w-100 justify-center'>
              <div className='status-selesai-data-datable-column'>{row?.status}</div>
            </div>
          </>
        )
      }
    },
  ];

  const data = [
    {
      id: 1,
      nomor: '1',
      NamaBarang: 'NamaBarang',
      SisaStok: 'SisaStok',
      idAnggota: 'idAnggota',
      namaAnggota: 'namaAnggota',
      noHp: 'noHp',
      Alamat: "Alamat",
      tglBergabung: 'tglBergabung',
      status: 'status',
    },
  ]

  const [page, setPage] = useState(1);
  const handlePagination = (page) => {
    setPage(page.selected + 1);
  };
  const CustomPagination = () => {
    const count = round(10);
    const currentPage = 1;

    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel="..."
        pageCount={Math.ceil(count) || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName="active-page"
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => handlePagination(page)}
        pageClassName="page-item"
        breakClassName="page-item"
        nextLinkClassName="page-link te-card-shadow b1-bold"
        pageLinkClassName="page-link te-card-shadow b1-bold"
        breakLinkClassName="page-link te-card-shadow b1-bold"
        previousLinkClassName="page-link te-card-shadow b1-bold"
        nextClassName="page-item next"
        previousClassName="page-item prev"
        containerClassName={
          "custom-pagination react-paginate justify-content-end m-0"
        }
      />
    );
  };

  return (
    <Admin>
      <div style={{
        backgroundColor: 'white',
        minHeight: 'calc(100vh - 172px)'
      }}>

        <Tab
          onClick={(payload) => {
            setTab((prevstate) => {
              return {
                ...prevstate,
                isActivetab: payload,
              }
            })
          }}
          Tabs={tab?.data}
          IsActiveTab={tab?.isActivetab}
        />

        {
          tab?.isActivetab == 0 ? <>
            <hr className='mt-16px' />
            <div className='p-16px d-flex justify-between align-center'>
              <div className='dashboard-inventory-title'>
                Sales Performance Overview
              </div>
              <div className='finance-penerimaan-filter-tgl'>
                <div className='finance-penerimaan-filter-tgl-style mr-8px'>Filter tgl</div>
                <div>
                  <DatePicker onChange={setValueStart} value={valueStart} />
                </div>
                <div style={{ minWidth: '8px' }}></div>
                <ISampaiTgl />
                <div>
                  <DatePicker onChange={setValueEnd} value={valueEnd} />
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgb(250, 250, 250)',
            }} className='pt-16px pb-16px grid grid-cols-2 gap-4'>
              <div>
                <LaporanChart title={'Laporan Penjualan/Periode'} >
                </LaporanChart>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <Total title={'Total Omset Penjualan'} />
                <Total title={'Total Profit Penjualan'} />
                <Total title={'Jumlah Transaksi/Pemnelian'} />
                <Total title={'Jumlah Barang Terjual'} />
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgb(250, 250, 250)',
            }} className='pt-16px pb-16px grid grid-cols-2 gap-4'>
              <div>
                <LaporanChart title={'Top 5 Sales by Omset'} >
                </LaporanChart>
              </div>
              <div>
                <LaporanChart title={'Top 5 Sales by Profit'} >
                </LaporanChart>
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgb(250, 250, 250)',
            }} className='pt-16px pb-16px grid grid-cols-2 gap-4'>
              <div>
                <LaporanChart title={'Top 5 Sales by Jumlah Transaksie'} >
                </LaporanChart>
              </div>
              <div>
                <LaporanChart title={'Top 5 Sales by Jumlah Barang Terjual'} >
                </LaporanChart>
              </div>
            </div>

          </> : null
        }

        {
          tab?.isActivetab == 1 ? <>
            <hr className='mt-16px' />
            <div className='p-16px d-flex justify-between align-center'>
              <div className='dashboard-inventory-title'>
                Inventory Overview
              </div>
              <InputDate
                marginLeftTitle={'10px'}
                classTitle={'dropdown-status-data-table-title'}
              />
            </div>
            <div style={{
              backgroundColor: 'rgb(250, 250, 250)',
            }} className='pt-16px pb-16px grid grid-cols-4 gap-4'>
              <Total title={'Nilai Estimasi Persediaan'} />
              <Total title={'Total Dead Stock'} />
              <Total title={'Total Stok Habis'} />
              <Total title={'Total Stok Tersedia'} />
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <Barang title={'Stock Alert Barang di Gudang Pusat'} />
            </div>

            <hr />

            <div className='p-16px'>
              <DataTable
                columns={columns}
                data={data}
              />
              <CustomPagination />
            </div>

          </> : null
        }
      </div>
    </Admin>
  )
}

const LaporanChart = ({
  title,
  children,
}) => {
  return (
    <div style={{
      background: 'var(--_Global-Common-White, #FFF)',
      height: '100%',
    }}>
      <div className='finance-dashboar-wrapper-laba'>
        <div className='finance-dashboar-wrapper-laba-sub'>
          <IMore />
          <div className='finance-dashboar-laba-title'>
            {title}
          </div>
        </div>
        <IReload />
      </div>
      <div className='finance-dashboar-laba-bottom'>
        <div>
          <div className='finance-dashboar-wrapper-tgl'>
            <IBefore />
            <div className='finance-dashboar-laba-tgl'>1 Jan - 31 Des 2023</div>
            <INext />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

const Barang = ({
  title,
}) => {
  return (
    <div style={{
      background: 'var(--_Global-Common-White, #FFF)',
      height: '100%',
    }}>
      <div className='finance-dashboar-wrapper-laba'>
        <div className='finance-dashboar-wrapper-laba-sub'>
          <IMore />
          <div className='finance-dashboar-laba-title'>
            {title}
          </div>
        </div>
        <IReload />
      </div>
      <div>
        <div className='finance-penerimaan-wrapp-second'>

          <div style={{ display: 'flex' }}></div>

          <div className='d-flex align-center gap-4'>
            <div className='dropdown-status-data-table-wrapp'>
              <div style={{ width: '100%' }} className='dropdown-status-data-table-title'>Status</div>
              <select style={{ marginTop: '0px' }} className='dropdown-status-data-table-select' name="cars" id="cars">
                <option className='finance-penerimaan-create-dropdown-option' value="">Semua</option>
                <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
                <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
                <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
              </select>
            </div>
            <div className='finance-penerimaan-wrapp-search'>
              <ISearchInput />
              <input placeholder='cari' className='finance-penerimaan-wrapp-search-input' type="text" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

const Total = ({
  title,
}) => {
  return (
    <div style={{
      background: 'var(--_Global-Common-White, #FFF)',
      height: '100%',
    }}>
      <div className='finance-dashboar-wrapper-laba'>
        <div className='finance-dashboar-wrapper-laba-sub'>
          <IMore />
          <div className='finance-dashboar-laba-title'>
            {title}
          </div>
        </div>
        <IReload />
      </div>
      <div className='finance-dashboar-laba-bottom'>
        <div>
          <div className='finance-dashboar-wrapper-tgl'>
            <IBefore />
            <div className='finance-dashboar-laba-tgl'>1 Jan - 31 Des 2023</div>
            <INext />
          </div>
          <div className='d-flex flex-column gap-16px mt-16px'>
            <div className='dashboard-inventory-title-total'>
              Total
            </div>
            <div className='dashboard-inventory-title-total-value'>
              10
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithAuth(Inventory)