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

const DataTableLaporanCretaeJurnalUmum = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
  setisModalConfirmationAdd,
  actionBatal,
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const columns = [
    {
      name: 'Kode Akun',
      selector: row => row.kodeAkun,
    },
    {
      name: 'Tanggal',
      selector: row => row.tanggal,
    },
    {
      name: 'Type',
      selector: row => row.type,
    },
    {
      name: 'Keterangan',
      selector: row => row.keterangan,
    },
    {
      name: 'Mutasi',
      selector: row => row.mutasi,
    },
    {
      name: 'Total Saldo',
      selector: row => row.totalSaldo,
    },
  ];

  const data = [
    {
      id: 1,
      kodeAkun: 'kodeAkun',
      tanggal: '20 Juli 2023',
      type: 'type',
      keterangan: "Menerima dari pihak PT",
      mutasi: 'mutasi',
      totalSaldo: 'totalSaldo'
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

          <div className='display-flex-align-center ml-3'>
            <div className='finance-penerimaan-create-title-penerima-input mr-2'>Akun</div>
            <select style={{
              padding: '13px',
              width: '120px',
              marginTop: '-1px'
            }} className='finance-penerimaan-create-dropdown' name="cars" id="cars">
              <option className='finance-penerimaan-create-dropdown-option' value="">Pilih Akun</option>
              <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
              <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
              <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
            </select>
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
      <div className='grid grid-cols-1 mt-4 gap-4'>
          <div className='flex justify-end'>
            <div onClick={() => actionBatal()} className='cursor-pointer finance-penerimaan-create-btn-print mr-2'>Batal</div>
            <div 
              onClick={() => setisModalConfirmationAdd(true)} 
              className='cursor-pointer finance-penerimaan-create-btn-simpan'>Buat Jurnal</div>
          </div>
        </div>
    </>
  )
}

export default DataTableLaporanCretaeJurnalUmum