import IAdd from 'components/icons/IAdd'
import IEyes from 'components/icons/IEyes'
import IFinanceJurnal from 'components/icons/IFinanceJurnal'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import { fetchJournals } from 'global-states/actions/journalActions'
// import axiosInstance from 'global-states/api'
import { round } from 'lodash'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

const DataTableLaporanJurnalUmum = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());
  // const [listJournal, setListJournal] = useState([])
  // const [meta, setMeta] = useState({});
  // const [links, setLinks] = useState({});

  const dispatch = useDispatch();
  const { journals,meta,loading } = useSelector((state) => state.journal);

  useEffect(() => {
    dispatch(fetchJournals(1));
  }, [dispatch]);

  const router = useRouter();

  const columns = [
    {
      name: 'Nomor',
      width: '100px',
      selector: row => row.id,
    },
    {
      name: 'Nomor Transaksi',
      selector: row => row.transaction_no,
    },
    {
      name: 'Tanggal',
      selector: row => <p>{moment(row.created_at).format("D MMMM YYYY")}</p>,
    },
    {
      name: 'Type',
      selector: row => row.transaction_type,
    },
    {
      name: 'Keterangan',
      selector: row => row.description,
    },
    {
      name: 'Total',
      selector: row => row.balance,
    },
    {
      name: 'Aksi',
      width: '170px',
      cell: (row, index, column, id) => {
        return (
          <Link href={`/finance/laporan/jurnal-umum/detail/${row?.id}`}>
            <div className='cursor-pointer'>
              <div className='finance-laporan-jurnal-umum-icon-wrap'>
                <IFinanceJurnal />
                <div className='finance-laporan-jurnal-umum-jurnal'>Jurnal</div>
              </div>
            </div>
          </Link>
        )
      }
    },
  ];

  const data = [
    {
      id: 1,
      nomor: '1',
      noTransaksi: '123123123',
      tanggal: '20 Juli 2023',
      type: 'type',
      keterangan: "Menerima dari pihak PT",
      total: 'Rp. 10000'
    },
  ]

  // useEffect(() => {
  //   fetchDataListJournal();
  // }, []);

  const [page, setPage] = useState(1);
  const handlePagination = ({selected}) => {
    const selectedPage = selected + 1
    dispatch(fetchJournals(selectedPage))
  };
  // const handlePagination = (page) => {
  //   setPage(page.selected + 1);
  // };
  const CustomPagination = () => {
    const count = round(10);
    const currentPage = 1;

    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel="..."
        pageCount={Math.ceil(meta?.last_page) || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName="active-page"
        forcePage={meta?.current_page - 1}
        onPageChange={handlePagination}
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
          <Link href={'/finance/laporan/jurnal-umum/create'}>
            <div className='finance-penerimaan-buttont-buat-wrapp'>
              <IAdd />
              <div className='finance-penerimaan-buttont-buat'>Buat Jurnal</div>
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

        {loading ? <p>Loading..</p> : (
          <div>
              <DataTable
                columns={columns}
                data={journals}
              />
            <CustomPagination />
          </div>
        )}
    </>
  )
}

export default DataTableLaporanJurnalUmum