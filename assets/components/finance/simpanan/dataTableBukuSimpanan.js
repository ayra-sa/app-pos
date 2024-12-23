import IExportEcxel from 'components/icons/IExportExcel'
import IEyes from 'components/icons/IEyes'
import IJurnal from 'components/icons/IJurnal'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import { round } from 'lodash'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

const DataTableBukuSimpanan = ({
  setisStatusPageSimpanan,
  
}) => {

  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const columns = [
    {
      name: 'No',
      selector: row => row.nomor,
      width: '60px',
    },
    {
      name: 'ID Anggota',
      selector: row => row.IDAnggota,
      width: '200px',
    },
    {
      name: 'Nama Anggota',
      selector: row => row.namaAnggota,
    },
    {
      name: 'Total Saldo',
      selector: row => row.totalSaldo,
    },
    {
      name: 'Aksi',
      width: '70px',
      cell: (row, index, column, id) => {
        return (
          <div 
            className='cursor-pointer' 
            onClick={() => setisStatusPageSimpanan('detailBukuSimpanan')}>
            <IEyes />
          </div>
        )
      }
    },
  ]

  const data = [
    {
      id: 1,
      nomor: '1',
      IDAnggota: 123,
      namaAnggota: 'nama anggota 1',
      totalSaldo: 'Rp. 100.000',
    },
    {
      id: 2,
      nomor: '2',
      IDAnggota: 223,
      namaAnggota: 'nama anggota 2',
      totalSaldo: 'Rp. 200.000',
    },
    {
      id: 3,
      nomor: '3',
      IDAnggota: 333,
      namaAnggota: 'nama anggota 3',
      totalSaldo: 'Rp. 300.000',
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

          <div className='finance-penerimaan-wrapp-search'>
            <ISearchInput />
            <input placeholder='cari' className='finance-penerimaan-wrapp-search-input' type="text" />
          </div>

        </div>
        <div className='flex '>
          
          <div className='Export-button-excel-wrapp'>
            <IExportEcxel/>
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

export default DataTableBukuSimpanan