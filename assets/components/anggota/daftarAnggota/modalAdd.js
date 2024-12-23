import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import DetailModalData from 'components/DetailModalData'
import IEdit from 'components/icons/IEdit'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputTextArea from 'components/Input/InputTexArea'
import InputText from 'components/Input/InputText'
import ModalWrapper from 'components/Modal/ModalWrapper'
import StatusModalData from 'components/StatusModal'
import StatusModalDataTranferBarang from 'components/StatusModal/statusModalTranferBarang'
import TitleModal from 'components/TitlePage/TitleModal'
import TitlePage from 'components/TitlePage/TitlePage'
import { round } from 'lodash'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

function ModalAddDaftarAnggota
  ({
    setisModal,
    isModalUp,
    handleActCancel,
    handleActSubmit,
  }) {

  const [step, setstep] = useState(1)

  const columns = [
    {
      name: <input type='checkbox' />,
      selector: row => row.No,
      cell: (row) => {
        return (
          <input type='checkbox' />
        )
      }
    },
    {
      name: 'Reff',
      selector: row => row.Reff,
    },
    {
      name: 'Dead Stok',
      selector: row => row.DeadStok,
    },
    {
      name: 'Asal Cabang',
      selector: row => row.AsalCabang,
      width: '250px',
      cell: (row) => {
        return (
          <div className='w-100 d-flex align-center justify-center gap-10px'>
            <div>
              <img style={{ width: '24px', height: '24px' }} src='' />
            </div>
            <div className='suplier-add-title-barang'>
              KOPERASI SIANTAR</div>
          </div>
        )
      }
    },
    {
      name: 'Jenis Penyesuaian',
      selector: row => row.JenisPenyesuaian,
      width: '200px',
    },
    {
      name: 'Attachment',
      selector: row => row.Attachment,
      width: '250px',
    },
    {
      name: 'Tanggal Expired',
      width: '200px',
      selector: row => row.TanggalExpired,
    },
    {
      name: 'Aksi',
      width: '120px',
      cell: (row, index, column, id) => {
        return (
          <div className='display-flex-align-center'>

            <div
              onClick={() => {
                if (step == 1) {
                  setstep(2)
                }
                if (step == 2) {
                  setstep(3)
                }
              }}
              className='ml-8px cursor-pointer'>
              <IEdit />
            </div>

          </div>
        )
      }
    },
  ];
  const columnsDeadStok = [
    {
      name: 'no',
      selector: row => row.No,
    },
    {
      name: 'Reff',
      selector: row => row.Reff,
    },
    {
      name: 'Dead Stok',
      selector: row => row.DeadStok,
    },
    {
      name: 'Asal Cabang',
      selector: row => row.AsalCabang,
      width: '250px',
      cell: (row) => {
        return (
          <div className='w-100 d-flex align-center justify-center gap-10px'>
            <div>
              <img style={{ width: '24px', height: '24px' }} src='' />
            </div>
            <div className='suplier-add-title-barang'>
              KOPERASI SIANTAR</div>
          </div>
        )
      }
    },
    {
      name: 'Jenis Penyesuaian',
      selector: row => row.JenisPenyesuaian,
      width: '200px',
    },
    {
      name: 'Attachment',
      selector: row => row.Attachment,
      width: '250px',
    },
    {
      name: 'Tanggal Expired',
      width: '200px',
      selector: row => row.TanggalExpired,
    },
    {
      name: 'Aksi',
      width: '120px',
      cell: (row, index, column, id) => {
        return (
          <div className='display-flex-align-center'>

            <div
              onClick={() => {
                if (step == 1) {
                  setstep(2)
                }
                if (step == 2) {
                  setstep(3)
                }
              }}
              className='ml-8px cursor-pointer'>
              <IEdit />
            </div>

          </div>
        )
      }
    },
  ];

  const data = [
    {
      No: '1',
      SKU: 'SKU',
      Reff: 'Reff',
      JenisPenyesuaian: 'JenisPenyesuaian',
      DeadStok: 'DeadStok',
      StokDikirim: 'StokDikirim',
      TanggalExpired: 'TanggalExpired',
      Attachment: 'Attachment',
      StokTersediaDiGudangPusat: 20,
      RefNo: 'RefNo',
      KategoriBarang: 'KategoriBarang',
      StatusPPN: 'StatusPPN',
      SatuanBarang: 'SatuanBarang',
      TanggalRilis: 'TanggalRilis',
      Stok: 'Stok',
      Suplier: 'Suplier',
      HargaBeliSatuan: 'HargaBeliSatuan',
      HargaBeliRataRata: 'HargaBeliRataRata',
      HargaJuallSatuan: 'HargaJuallSatuan',
      HargaJualSatuan: 'HargaJualSatuan',
      MinPembelianPelanggan: 'MinPembelianPelanggan',
      MaxPembelianPelanggan: 'MaxPembelianPelanggan',
      Kode: 'Kode',
      Barang: 'Barang',
      JumlahBarangTerdaftar: 'JumlahBarangTerdaftar',
      DibuatPada: 'DibuatPada',
      NamaPerusahaanCabang: 'NamaPerusahaanCabang',
      SuplierAkttif: 'SuplierAkttif',
      Alamat: 'Alamat',
      NoTelepon: 'NoTelepon',
      NoInvoice: 'NoInvoice',
      NamaPelanggan: 'NamaPelanggan',
      DeskripsiProduk: 'DeskripsiProduk',
      JenisProduk: 'JenisProduk',
      NoReff: 'NoReff',
      BiayaLayanan: 'BiayaLayanan',
      Diskon: 'Diskon',
      KodePembayaran: 'KodePembayaran',
      NoPelanggan: 'NoPelanggan',
      NamaProduk: 'NamaProduk',
      CabangKoperasiTujuan: 'CabangKoperasiTujuan',
      DibuatOleh: 'DibuatOleh',
      DisetujuiOleh: 'DisetujuiOleh',
      Status: 'Status',

    },
  ]

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
    <ModalWrapper
      bottom={'6%'}
      top={'6%'}
      left={'15%'}
      right={'15%'}
      setisModalUp={setisModal}
      isModalUp={isModalUp}>
      <div className='h-100 d-flex flex-column justify-between'>

        <div>
          <div className='p-16px'>
            <TitleModal
              title={`Modal Add Daftar Anggota`}
              setisModalClose={setisModal} />
          </div>
          <hr />

          <div style={{
            overflow: 'auto',
            maxHeight: 'calc(100vh - 220px)',
          }}>

            tes

          </div>
        </div>

        <div className='d-flex align-center jusitfy-end mb-16px pr-16px'>
          <div className='d-flex gap-10px'>
            <ButtonCancel
              title={'Batal'}
              action={() => handleActCancel()}
            />
            <ButtonSave
              title={'Submit'}
              action={() => handleActSubmit()}
            />
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default ModalAddDaftarAnggota
