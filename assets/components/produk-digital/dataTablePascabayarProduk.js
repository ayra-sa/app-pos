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

const DataTablePascabayarProduk = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
}) => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());

  const columns = [
    {
      name: 'Barang',
      selector: row => row.barang,
    },
    {
      name: 'Kode Produk',
      selector: row => row.kodeProduk,
    },
    {
      name: 'Kode Suplier',
      selector: row => row.KodeSuplier,
    },
    {
      name: 'Suplier',
      selector: row => row.Suplier,
    },
    {
      name: 'Komisi',
      selector: row => row.Komisi,
    },
  ];

  const data = [
    {
      Komisi: 'Komisi',
      barang: 'Barang',
      kodeProduk: 'kodeProduk',
      Denom: 'Denom',
      KodeSuplier: 'KodeSuplier',
      Suplier: 'Suplier',
      id: 1,
      margin: 'margin',
      HargaBeli: 'HargaBeli',
      nomor: '1',
      tanggal: '20 Juli 2023',
      akun: 'akun@gmail.com',
      noCek: '12345678',
      keterangan: "Menerima dari pihak PT",
      kredit: '80.000.000'
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

      <div className='display-flex-align-center justify-between mt-3'>
        <div className='display-flex-align-center'>

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
            <div style={{ width: '100%' }} className='dropdown-status-data-table-title'>Brand/Operator</div>
            <select className='dropdown-status-data-table-select' name="cars" id="cars">
              <option className='finance-penerimaan-create-dropdown-option' value="">Semua</option>
              <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
              <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
              <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
            </select>
          </div>

        </div>

        <div className='display-flex-align-center'>

          <div className='btn-produk-digital-produk-wrapp'>
            <div className='btn-produk-digital-produk-title'>Atur Margin Berdasarkan Kategori</div>
          </div>

          <div className='btn-produk-digital-produk-wrapp ml-3'>
            <div className='btn-produk-digital-produk-title'>Atur Margin Berdasarkan Brand</div>
          </div>

        </div>

      </div>

      <div className='garis-tipis'></div>

      <div style={{ marginTop: '-15px' }} className='finance-penerimaan-wrapp-second'>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          
          <div className='display-flex-align-center'>

            <div className='btn-produk-digital-sinkronisasi'>
              <div className='btn-produk-digital-bottom'>Singkronisasi Produk</div>
            </div>

            <div className='btn-produk-digital-sinkronisasi-nonAct ml-3'>
              <div className='btn-produk-digital-bottom-nonAct'>Aktifkan</div>
            </div>

            <div className='btn-produk-digital-sinkronisasi-nonAct ml-3'>
              <div className='btn-produk-digital-bottom-nonAct'>Non Aktifkan</div>
            </div>

            <div className='btn-produk-digital-sinkronisasi-nonAct ml-3'>
              <div className='btn-produk-digital-bottom-nonAct'>Set margin</div>
            </div>

          </div>

          <div>

            <div style={{ padding: '4px 16px'}} className='finance-penerimaan-wrapp-search'>
              <ISearchInput />
              <input placeholder='cari' className='finance-penerimaan-wrapp-search-input' type="text" />
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
    </>
  )
}

export default DataTablePascabayarProduk