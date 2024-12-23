import IAdd from 'components/icons/IAdd'
import IAddAnggota from 'components/icons/IAddAnggota'
import IEdit from 'components/icons/IEdit'
import IExportEcxel from 'components/icons/IExportExcel'
import IEyes from 'components/icons/IEyes'
import IHapus from 'components/icons/IHapus'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import { round } from 'lodash'
import Link from 'next/link'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

const DataTableTagAnggota = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
  setisModalConfirmationDelete,
  setisModalAddTagAnggota,
  setisModalAddTagAnggotaSub,
  setisModaEditTagAnggota,
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const columns = [
    {
      name: 'Nama Anggota',
      selector: row => row.namaAnggota,
    },
    {
      name: 'Kode Tag',
      selector: row => row.kodeTag,
    },
    {
      name: 'Deskripsi',
      selector: row => row.deskripsi,
    },
    {
      name: 'Tampilkan Pada Mobile',
      selector: row => row.tampilkanPadaMobile,
    },
    {
      name: 'Aksi',
      width: '150px',
      cell: (row, index, column, id) => {
        return (
          <div className='display-flex-align-center'>
            <div
              className='cursor-pointer mr-2'
              onClick={() => setisModalAddTagAnggotaSub(true)}>
              <IAddAnggota />
            </div>
            <div
              className='cursor-pointer mr-2'
              onClick={() => setisModaEditTagAnggota(true)}>
              <IEdit />
            </div>
            <div
              className='cursor-pointer'
              onClick={() => setisModalConfirmationDelete(true)}>
              <IHapus />
            </div>
          </div>
        )
      }
    },
  ];

  const data = [
    {
      id: 1,
      nomor: '1',
      namaAnggota: 'namaAnggota',
      kodeTag: 'kodeTag',
      deskripsi: "deskripsi",
      tampilkanPadaMobile: 'tampilkanPadaMobile',
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
    <>
      <div className='finance-penerimaan-wrapp-second w-100 d-flex justify-between'>

        <div style={{ display: 'flex' }}>
          <div className='finance-penerimaan-wrapp-search'>
            <ISearchInput />
            <input placeholder='cari' className='finance-penerimaan-wrapp-search-input' type="text" />
          </div>

        </div>

        <div>

          <div onClick={() =>
            setisModalAddTagAnggota(true)}
            style={{ width: '200px' }}
            className='finance-penerimaan-buttont-buat-wrapp'>
            <IAdd />
            <div className='finance-penerimaan-buttont-buat'>Tambah Tag Anggota</div>
          </div>

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

export default DataTableTagAnggota