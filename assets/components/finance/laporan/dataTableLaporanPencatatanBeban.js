import IAdd from 'components/icons/IAdd'
import IEyes from 'components/icons/IEyes'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import { round } from 'lodash'
import Link from 'next/link'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

const DataTablePencatatanBeban = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const columns = [
    {
      name: 'Nomor',
      width: '90px',
      selector: row => row.nomor,
    },
    {
      name: 'Tanggal',
      selector: row => row.tanggal,
    },
    {
      name: 'Jatuh Tempo',
      selector: row => row.jatuhTempo,
    },
    {
      name: 'Total',
      selector: row => row.total,
    },
    {
      name: 'Dibayar',
      selector: row => row.dibayar,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    {
      name: 'Keterangan',
      selector: row => row.keterangan,
    },
    {
      name: 'Aksi',
      width: '70px',
      cell: (row, index, column, id) => {
        return (
          <div className='cursor-pointer' onClick={() => setisModalUp(true)}>
            <IEyes />
          </div>
        )
      }
    },
  ];

  const data = [
    {
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      jatuhTempo: 'jatuhTempo',
      total: 'total',
      dibayar: 'dibayar',
      status: 'selesai',
      keterangan: "Menerima dari pihak PT",
    },
    {
      id: 2,
      nomor: '2',
      tanggal: '20 Juli 2023',
      jatuhTempo: 'jatuhTempo',
      total: 'total',
      dibayar: 'dibayar',
      status: 'belum selesai',
      keterangan: "Menerima dari pihak PT",
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
      <div className='finance-penerimaan-wrapp-second'>

        <div style={{ display: 'flex' }}>
          <div className='finance-penerimaan-wrapp-search'>
            <ISearchInput />
            <input placeholder='cari' className='finance-penerimaan-wrapp-search-input' type="text" />
          </div>

          <div className='finance-penerimaan-filter-tgl'>
            <div className='finance-penerimaan-filter-tgl-style'>Filter tgl</div>
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
        <div>
          <Link href={'/finance/laporan/pencatatan-beban/create'}>
            <div className='finance-penerimaan-buttont-buat-wrapp'>
              <IAdd />
              <div className='finance-penerimaan-buttont-buat'>Buat Beban</div>
            </div>
          </Link>
        </div>

      </div>

      <div
        style={{
          height: '2px',
          background: '#091E4224',
          marginBottom: '16px',
        }}
      ></div>

      <div>
        <DataTable
          columns={columns}
          data={data}
        />
        <CustomPagination />
      </div>
    </>
  )
}

export default DataTablePencatatanBeban