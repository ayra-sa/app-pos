import IAdd from 'components/icons/IAdd'
import IEdit from 'components/icons/IEdit'
import IEyes from 'components/icons/IEyes'
import IFinanceJurnal from 'components/icons/IFinanceJurnal'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import { round } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

const DataTableLaporanJurnalUmumDetail = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
  data
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const router = useRouter();

  const columns = [
    {
      name: 'Nomor',
      width: '100px',
      selector: row => row.no,
    },
    {
      name: 'Nomor Transaksi',
      selector: row => row.transaction_no,
    },
    {
      name: 'Kode Akun',
      selector: row => row.account_number,
    },
    {
      name: 'Akun',
      selector: row => row.account_name,
    },
    {
      name: 'Debit',
      selector: row => row.debit,
    },
    {
      name: 'Kredit',
      selector: row => row.credit,
    },
    {
      name: 'Aksi',
      width: '170px',
      cell: (row, index, column, id) => {
        return (
          <div className='cursor-pointer' onClick={() => setisModalUp(true)}>
            <IEdit/>
          </div>
        )
      }
    },
  ];

  // const data = [
  //   {
  //     id: 1,
  //     nomor: '1',
  //     noTransaksi: '123123123',
  //     kodeAkun: 'kodeAkun',
  //     akun: 'akun',
  //     debit: 'debit',
  //     kredit: 'kredit',
  //   },
  // ]

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

export default DataTableLaporanJurnalUmumDetail