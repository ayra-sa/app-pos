import IExportEcxel from 'components/icons/IExportExcel'
import IEyes from 'components/icons/IEyes'
import IJurnal from 'components/icons/IJurnal'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import { round } from 'lodash'
import Link from 'next/link'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

const DataTableLaporanBukuBesar = ({
  setisModalUp
}) => {

  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const columns = [
    {
      name: 'Kode Akun',
      selector: row => row.kodeAkun,
    },
    {
      name: 'Nama Akun',
      selector: row => row.namaAkun,
    },
    {
      name: 'Terakhir Transaksi',
      selector: row => row.terakhirTransaksi,
    },
    {
      name: 'Total Saldo',
      selector: row => row.saldo,
    },
    {
      name: 'Aksi',
      width: '70px',
      cell: (row, index, column, id) => {
        return (
          <Link href={'/finance/laporan/buku-besar/detail'}>
            <div
              className='cursor-pointer'>
              <IEyes />
            </div>
          </Link>
        )
      }
    },
  ]

  const data = [
    {
      kodeAkun: '\kodeAkun',
      namaAkun: 'namaAkun',
      terakhirTransaksi: '2o Juli 2023',
      saldo: 'Rp. 11.000'
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
    <>
      <div className='finance-simpanan-mutasi-table-wrapp'>
        <div className='finance-simpanan-mutasi-table-wrapp-sub'>

          <div className='finance-penerimaan-filter-tgl'>
            <div className='finance-penerimaan-filter-tgl-style'>Filter tgl</div>
            <div>
              <DatePicker onChange={setValueStart} value={valueStart} />
            </div>
          </div>

          <div className='dropdown-status-data-table-wrapp'>
            <div style={{ width: '100%' }} className='dropdown-status-data-table-title'>Filter Akun</div>
            <select className='dropdown-status-data-table-select' name="cars" id="cars">
              <option className='finance-penerimaan-create-dropdown-option' value="">Semua</option>
              <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
              <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
              <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
            </select>
          </div>

        </div>
        <div className='flex '>
          <div className='Export-button-excel-wrapp'>
            <IExportEcxel />
            <div className='Export-button-excel'>Export Excel</div>
          </div>
        </div>
      </div>
      <div className='garis-tipis'></div>
      <div className='padding-wrapp'>
        <DataTable
          columns={columns}
          data={data}
        />
        <CustomPagination />
      </div>
    </>
  )
}

export default DataTableLaporanBukuBesar