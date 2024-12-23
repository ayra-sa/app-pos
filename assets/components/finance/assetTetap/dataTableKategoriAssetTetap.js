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
import ModalTambahKategoriAsset from './modalTambahKategoriAsset'
import ModalConfirmationAdd from 'components/modalConfirmationAdd'
import { useRouter } from 'next/router'

const DataTableKategoriAssetTetap = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
}) => {

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());
  const [modalKategori, setmodalKategori] = useState(false)
  const router = useRouter()

  const SimpanAct = () => {
    setmodalKategori(false)
    setisModalConfirmationAdd(false)
  }

  const columns = [
    {
      name: 'Nomor',
      selector: row => row.nomor,
    },
    {
      name: 'Nama Kategori',
      selector: row => row.namakategori,
    },
    {
      name: 'Aksi',
      width: '520px',
      cell: (row, index, column, id) => {
        return (
          <div className='display-flex-align-center justify-center'>
            <div className='d-flex'>
              <div className='cursor-pointer' onClick={() => setisModalUp(true)}>
                <IEdit />
              </div>
              <div className='cursor-pointer' onClick={() => setisModalUp(true)}>
                <IHapus />
              </div>
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
      namaAsset: 'namaAsset',
      namakategori: 'namakategori',
      tanggalBeli: 'tanggalBeli',
      kategoriAsset: 'kategoriAsset',
      kuantitas: "kuantitas",
      totalAsset: 'totalAsset'
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
          <div onClick={() => setmodalKategori(true)} className='finance-penerimaan-buttont-buat-wrapp'>
            <IAdd />
            <div className='finance-penerimaan-buttont-buat'>Buat Kategori</div>
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

      <ModalConfirmationAdd
        actionCallback={() => SimpanAct()}
        isModalUp={isModalConfirmationAdd}
        setisModalUp={setisModalConfirmationAdd}
      />
      <ModalTambahKategoriAsset
        setisModalConfirmation={setisModalConfirmationAdd}
        isModalUp={modalKategori}
        setisModal={setmodalKategori} />
    </>
  )
}

export default DataTableKategoriAssetTetap