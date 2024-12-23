import IAdd from 'components/icons/IAdd'
import IEdit from 'components/icons/IEdit'
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

const DataTableKontak = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
  setIsModal,
  setisModalConfirmationDelete,
  setIsModalEdit,
  setIsModalDetail,
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const columns = [
    {
      name: 'Nama Pelanggan',
      selector: row => row.namaPelanggan,
    },
    {
      name: 'Type Kontak',
      selector: row => row.typeKontak,
    },
    {
      name: 'Nama Perusahaan',
      selector: row => row.namaPerusahaan,
    },
    {
      name: 'Alamat',
      selector: row => row.alamat,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'No Tlp',
      selector: row => row.noTLP,
    },
    {
      name: 'NPWP',
      selector: row => row.NPWP,
    },
    {
      name: 'Aksi',
      width: '150px',
      cell: (row, index, column, id) => {
        return (
          <div className='display-flex-align-center'>
            <div onClick={() => setIsModalDetail(true)} className='cursor-pointer'>
              <IEyes />
            </div>
            <div onClick={() => setIsModalEdit(true)} className='cursor-pointer ml-2'>
              <IEdit />
            </div>
            <div onClick={() => setisModalConfirmationDelete(true)} className='cursor-pointer ml-2'>
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
      namaPelanggan: 'namaPelanggan',
      typeKontak: 'typeKontak',
      namaPerusahaan: 'namaPerusahaan',
      email: 'email',
      noTLP: "noTLP",
      NPWP: 'NPWP',
      alamat: 'alamat',
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

        </div>
        <div>
          <div onClick={() => {
            setIsModal(true)
          }} className='finance-penerimaan-buttont-buat-wrapp'>
            <IAdd />
            <div className='finance-penerimaan-buttont-buat'>Tambah Kontak</div>
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

export default DataTableKontak