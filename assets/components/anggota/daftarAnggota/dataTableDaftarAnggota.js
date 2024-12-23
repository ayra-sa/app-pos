import IAdd from 'components/icons/IAdd'
import IEdit from 'components/icons/IEdit'
import IExportEcxel from 'components/icons/IExportExcel'
import IHapus from 'components/icons/IHapus'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import ModalConfirmationDelete from 'components/modalConfirmationDelete'
import { round } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

const DataTableDaftarAnggota = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
  setmodalAdd,
  modalAdd,
  setmodalEdit,
  modalEdit,
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const [modalDetail, setmodalDetail] = useState(false);
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false);
  const [modalConfirmationEdit, setmodalConfirmationEdit] = useState(false);
  const [modalConfirmationHapus, setmodalConfirmationHapus] = useState(false);
  const router = useRouter()
  const columns = [
    {
      name: 'Nomor',
      selector: row => row.nomor,
      width: '80px',
    },
    {
      name: 'ID Anggota',
      selector: row => row.idAnggota,
    },
    {
      name: 'Nama Anggota',
      selector: row => row.namaAnggota,
    },
    {
      name: 'No Handphone',
      selector: row => row.noHp,
    },
    {
      name: 'Alamat',
      selector: row => row.Alamat,
    },
    {
      name: 'Tanggal Bergabung',
      selector: row => row.tglBergabung,
    },
    {
      name: 'Status',
      selector: row => row.status,
      cell: (row) => {
        return (
          <>
            <div style={{ width: '100%' }} className='flex items-center w-100 justify-center'>
              <div className='status-selesai-data-datable-column'>{row?.status}</div>
            </div>
          </>
        )
      }
    },
    {
      name: 'Aksi',
      width: '150px',
      cell: (row, index, column, id) => {
        return (
          <div className='display-flex-align-center'>
            {/* <div className='cursor-pointer mr-2' onClick={() => setisModalUp(true)}>
              <IEyes />
            </div> */}
            <div className='cursor-pointer mr-2' onClick={() => {
              router.push('/anggota/daftar-anggota/edit')
            }}>
              <IEdit />
            </div>
            <div className='cursor-pointer' onClick={() => setmodalConfirmationHapus(true)}>
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
      idAnggota: 'idAnggota',
      namaAnggota: 'namaAnggota',
      noHp: 'noHp',
      Alamat: "Alamat",
      tglBergabung: 'tglBergabung',
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
        forcePage={currentPage != 0 ? currentPage - 1 : 0}
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
            <div style={{ width: '100%' }} className='dropdown-status-data-table-title'>Tag</div>
            <select style={{ marginTop: '0px' }} className='dropdown-status-data-table-select' name="cars" id="cars">
              <option className='finance-penerimaan-create-dropdown-option' value="">Semua</option>
              <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
              <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
              <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
            </select>
          </div>

        </div>

        <div className='d-flex align-center'>

          <div className='flex mr-2'>
            <div style={{ padding: '7px 16px' }} className='Export-button-excel-wrapp'>
              <IExportEcxel />
              <div style={{ fontSize: '12px' }} className='Export-button-excel'>Export Excel</div>
            </div>
          </div>

          <Link href='/anggota/daftar-anggota/create'>
            <div className='finance-penerimaan-buttont-buat-wrapp'>
              <IAdd />
              <div style={{ fontSize: '12px', width: '' }} className='finance-penerimaan-buttont-buat'>Tambah anggota</div>
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

      <ModalConfirmationDelete
        isModalUp={modalConfirmationHapus}
        setisModalUp={setmodalConfirmationHapus}
        actionCallback={() => {
          setmodalConfirmationHapus(false)
        }}
      />
    </>
  )
}

export default DataTableDaftarAnggota