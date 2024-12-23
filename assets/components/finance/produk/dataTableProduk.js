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

const DataTableProduk = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
  setmodalAddProduk,
  setmodalEditProduk,
  setisModalConfirmationAdd,
  setisModalConfirmationDelete,
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const columns = [
    {
      name: 'Nama Produk',
      selector: row => row.namaProduk,
    },
    {
      name: 'SKU Produk',
      selector: row => row.skuProduk,
    },
    {
      name: 'Deskripsi',
      selector: row => row.deskripsi,
    },
    {
      name: 'kategori',
      selector: row => row.kategori,
    },
    {
      name: 'Satuan',
      selector: row => row.satuan,
    },
    {
      name: 'Stok Dapat Dijual',
      selector: row => row.stok,
    },
    {
      name: 'Aksi',
      width: '150px',
      cell: (row, index, column, id) => {
        return (
          <div className='display-flex-align-center'>
            <div onClick={() => setmodalEditProduk(true)} className='cursor-pointer'>
              <IEdit />
            </div>
            <div className='cursor-pointer ml-2' onClick={() => setisModalConfirmationDelete(true)}>
              <IHapus />
            </div>
          </div>
        )
      }
    },
  ];

  const data = [
    {
      namaProduk: 'namaProduk',
      id: 1,
      nomor: '1',
      tanggalMulai: '20 Juli 2023',
      skuProduk: 'skuProduk',
      deskripsi: 'deskripsi',
      kategori: 'kategori',
      satuan: 'satuan',
      stok: 'stok',
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
            <div style={{ width: '100%' }} className='dropdown-status-data-table-title'>Kategori</div>
            <select className='dropdown-status-data-table-select' name="cars" id="cars">
              <option className='finance-penerimaan-create-dropdown-option' value="">Semua</option>
              <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
              <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
              <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
            </select>
          </div>

          <div className='dropdown-status-data-table-wrapp'>
            <div style={{ width: '100%' }} className='dropdown-status-data-table-title'>Satuan</div>
            <select className='dropdown-status-data-table-select' name="cars" id="cars">
              <option className='finance-penerimaan-create-dropdown-option' value="">Semua</option>
              <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
              <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
              <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
            </select>
          </div>

        </div>
        <div>
          <div onClick={() => setmodalAddProduk(true)} className='finance-penerimaan-buttont-buat-wrapp'>
            <IAdd />
            <div style={{ width: '200px' }} className='finance-penerimaan-buttont-buat'>Buat Produk Baru</div>
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

export default DataTableProduk