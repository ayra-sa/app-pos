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
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import IAdd from 'components/icons/IAdd'
import ModalDetailPinjaman from 'components/finance/pinjaman/modalDetailPinjaman'
import { useRouter } from 'next/router'

const DataTablePengajuan = ({
  setisModalUp
}) => {

  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const [isModalDetail, setisModalDetail] = useState(false)

  const router = useRouter()

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
      name: 'ID Trx',
      selector: row => row.idTrx,
    },
    {
      name: 'Nama Anggota',
      selector: row => row.namaAnggota,
    },
    {
      name: 'Tenor (Bln)',
      selector: row => row.type,
    },
    {
      name: 'Total Pinjaman',
      selector: row => row.total,
    },
    {
      name: 'Status',
      selector: row => row.status,
      cell: (row, index, column, id) => {
        if (row.status == 'selesai') {
          return (
            <>
              <div style={{ width: '100%' }} className='flex items-center w-100 justify-center'>
                <div className='status-selesai-data-datable-column'>{row?.status}</div>
              </div>
            </>
          )
        }
        if (row.status == 'gagal') {
          return (
            <>
              <div style={{ width: '100%' }} className='flex items-center w-100 justify-center'>
                <div className='status-gagal-data-datable-column'>{row?.status}</div>
              </div>
            </>
          )
        }
        if (row.status == 'pending') {
          return (
            <>
              <div style={{ width: '100%' }} className='flex items-center justify-center'>
                <div className='status-pending-data-datable-column'>{row?.status}</div>
              </div>
            </>
          )
        }
        return (
          <></>
        )
      }
    },
    {
      name: 'Aksi',
      width: '70px',
      cell: (row, index, column, id) => {
        return (
          <div onClick={() => setisModalDetail(true)} className='cursor-pointer'>
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
      Sisa: 2,
      Angsuran: 3,
      "Sisa Tenor (Bln)": 3,
      tanggal: '20 Juli 2023',
      idTrx: 1234,
      namaAnggota: 'nama anggota 1',
      type: 'sukarela',
      nilai: 'Rp. 20.000',
      total: 'Rp. 100.000',
      status: 'selesai'
    },
    {
      id: 2,
      nomor: '2',
      Sisa: 2,
      Angsuran: 3,
      "Sisa Tenor (Bln)": 3,
      tanggal: '20 Juli 2023',
      idTrx: 1234,
      namaAnggota: 'nama anggota 2',
      type: 'sukarela',
      nilai: 'Rp. 20.000',
      total: 'Rp. 100.000',
      status: 'gagal'
    },
    {
      id: 3,
      nomor: '3',
      Sisa: 2,
      Angsuran: 3,
      "Sisa Tenor (Bln)": 3,
      tanggal: '20 Juli 2023',
      idTrx: 3234,
      namaAnggota: 'nama anggota 3',
      type: 'sukarela',
      nilai: 'Rp. 20.000',
      total: 'Rp. 100.000',
      status: 'pending'
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
            <input style={{ width: '50px' }} placeholder='cari' className='finance-penerimaan-wrapp-search-input' type="text" />
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

          <div className='dropdown-status-data-table-wrapp'>
            <div className='dropdown-status-data-table-title'>Status</div>
            <select className='dropdown-status-data-table-select' name="cars" id="cars">
              <option value="">Semua</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className='dropdown-status-data-table-wrapp'>
            <div className='dropdown-status-data-table-title'>Type</div>
            <select className='dropdown-status-data-table-select' name="cars" id="cars">
              <option value="">Semua</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

        </div>
        <div className='flex align-center gap-16px'>
          {/* <div className='Export-button-excel-wrapp'>
            <IExportEcxel />
            <div className='Export-button-excel'>Export Excel</div>
          </div> */}
          {/* <div className='Gap-right'></div> */}
          <Link href={'/finance/laporan/jurnal-umum/create'}>
            <div className='cursor-pointer jurnal-button-excel-wrapp'>
              <IJurnal />
              <div className='jurnal-button-excel-wrapp-title'>Buat Jurnal</div>
            </div>
          </Link>
          <div
            style={{
              width: '170px'
            }}
            onClick={() => router.push('/finance/pinjaman/create')} className='finance-simpanan-pengaturan-add-wrapp mt-5 mb-5'>
            <IAdd />
            <div className='ml-2 finance-simpanan-pengaturan-add'>Buat Pinjaman</div>
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

      <ModalDetailPinjaman
        isModalUp={isModalDetail}
        setisModalUp={setisModalDetail}
      />
    </>
  )
}

export default DataTablePengajuan