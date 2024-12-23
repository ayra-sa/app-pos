import ButtonTambah from 'components/Button/buttonTambah'
import IAdd from 'components/icons/IAdd'
import IEyes from 'components/icons/IEyes'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import { round } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

const DataTablePembelian = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
  setisModalPembelianDetail,
  setisObjectPembelianDetail,
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const router = useRouter()

  const columns = [
    {
      name: 'Tanggal',
      selector: row => row.tanggal,
    },
    {
      name: 'Nomor',
      selector: row => row.Nomor,
    },
    {
      name: 'Type',
      selector: row => row.Type,
    },
    {
      name: 'Keterangan',
      selector: row => row.keterangan,
    },
    {
      name: 'Status',
      selector: row => row.Status,
    },
    {
      name: 'Total',
      selector: row => row.Total,
    },
    {
      name: 'Aksi',
      width: '70px',
      cell: (row, index, column, id) => {
        return (
          <div className='cursor-pointer' onClick={() => {
            setisObjectPembelianDetail(row)
            setisModalPembelianDetail(true)
          }}>
            <IEyes />
          </div>
        )
      }
    },
  ];

  const data = [
    {
      Type: 'Retur pembelian',
      TypeValue: 'retur-pembelian',
      Nomor: 'Nomor',
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000',
      Status: 'Status',
      Total: 'Total',
    },
    {
      Type: 'Faktur pembelian',
      TypeValue: 'faktur-pembelian',
      Nomor: 'Nomor',
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000',
      Status: 'Status',
      Total: 'Total',
    },
    {
      Type: 'Pembayaran pembelian',
      TypeValue: 'pembayaran-pembelian',
      Nomor: 'Nomor',
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000',
      Status: 'Status',
      Total: 'Total',
    },
    {
      Type: 'Uang Muka pembelian',
      TypeValue: 'uang-muka-pembelian',
      Nomor: 'Nomor',
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000',
      Status: 'Status',
      Total: 'Total',
    },
    {
      Type: 'Penerimaan barang',
      TypeValue: 'penerimaan-barang',
      Nomor: 'Nomor',
      id: 1,
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000',
      Status: 'Status',
      Total: 'Total',
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

        <div>
          <ButtonTambah action={() => {
            router.push('/finance/pembelian/create')
          }} title={'Buat Pembelian'} />
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

export default DataTablePembelian