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
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const DataTableRiwayatTransaksi = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
  setmodalDetailDataTableRiwayatTransaksi,
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const columns = [
    {
      name: 'Nomor',
      selector: row => row.nomor,
    },
    {
      name: 'Tanggal',
      selector: row => row.tanggal,
    },
    {
      name: 'Akun',
      selector: row => row.akun,
    },
    {
      name: 'No Cek',
      selector: row => row.noCek,
    },
    {
      name: 'Keterangan',
      selector: row => row.keterangan,
    },
    {
      name: 'Kredit',
      selector: row => row.kredit,
    },
    {
      name: 'Aksi',
      width: '70px',
      cell: (row, index, column, id) => {
        return (
          <div className='cursor-pointer' onClick={() => setmodalDetailDataTableRiwayatTransaksi(true)}>
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
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000'
    },
    {
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000'
    },
    {
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000'
    },
    {
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000'
    },
    {
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000'
    },
    {
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000'
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
            <div className='finance-penerimaan-filter-tgl-style mr-16px'>Filter tgl</div>
            <div>
              <DatePicker onChange={setValueStart} value={valueStart} />
            </div>
            <div style={{ minWidth: '8px' }}></div>
            <ISampaiTgl />
            <div className='ml-16px'>
              <DatePicker onChange={setValueEnd} value={valueEnd} />
            </div>
          </div>

        </div>
        {/* <div>
          <Link href={'/finance/kas'}>
            <div className='finance-penerimaan-buttont-buat-wrapp'>
              <IAdd />
              <div className='finance-penerimaan-buttont-buat'>Buat Penerimaan</div>
            </div>
          </Link>
        </div> */}

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

export default DataTableRiwayatTransaksi