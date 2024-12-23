import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import DetailModalData from 'components/DetailModalData'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputText from 'components/Input/InputText'
import ModalWrapper from 'components/Modal/ModalWrapper'
import StatusModalData from 'components/StatusModal'
import StatusModalDataTranferBarang from 'components/StatusModal/statusModalTranferBarang'
import TitleModal from 'components/TitlePage/TitleModal'
import TitlePage from 'components/TitlePage/TitlePage'
import { round } from 'lodash'
import React from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'

function ModalDetailBarang
  ({
    setisModal,
    isModalUp,
  }) {

  const columnsBarang = [
    {
      name: 'Harga Beli Satuan',
      selector: row => row.HargaBeliSatuan,
    },
    {
      name: 'Harga Beli Rata-Rata',
      selector: row => row.HargaBeliRataRata,
    },
    {
      name: 'Harga Juall Satuan',
      selector: row => row.HargaJuallSatuan,
    },
    {
      name: 'Min. Pembelian Pelanggan',
      selector: row => row.MinPembelianPelanggan,
    },
    {
      name: 'Max. Pembelian Pelanggan',
      selector: row => row.MaxPembelianPelanggan,
    },
  ];

  const columnsBarangPengadaan = [
    {
      name: 'No',
      width: '70px',
      selector: row => row.No,
    },
    {
      name: 'Ref No',
      selector: row => row.RefNo,
    },
    {
      name: 'Suplier',
      selector: row => row.Suplier,
    },
    {
      name: 'Barang',
      selector: row => row.Barang,
    },
    {
      name: 'Tanggal Rilis',
      width: '200px',
      selector: row => row.TanggalRilis,
    },
    {
      name: 'Stok',
      selector: row => row.Stok,
    },
    {
      name: 'Harga Beli Satuan',
      width: '200px',
      selector: row => row.HargaBeliSatuan,
    },
    {
      name: 'Harga Jual Satuan',
      width: '200px',
      selector: row => row.HargaJualSatuan,
    },
  ];

  const dataBarang = [
    {
      No: '1',
      RefNo: 'RefNo',
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
      bottom={'8%'}
      top={'8%'}
      left={'15%'}
      right={'15%'}
      setisModalUp={setisModal}
      isModalUp={isModalUp}>
      <div className='h-100d-flex flex-column justify-between'>
        <div>
          <div className='p-16px'>
            <TitleModal title={`Details Barang`} setisModalClose={setisModal} />
          </div>
          <hr />
          <div style={{
            overflow: 'auto',
            maxHeight: 'calc(100vh - 220px)',
          }}>

            <div className='p-16px grid grid-cols-2 gap-4'>
              <div className='d-flex gap-16px'>
                <div>
                  <div>
                    <img src='' style={{
                      width: '152px',
                      height: '152px',
                      // borderRadius: '3px',
                    }} />
                  </div>
                  <div className='d-flex mt-8px gap-8px align-center'>
                    {
                      [1, 2, 3, 4]?.map(() => {
                        return (
                          <img style={{ width: '32px', height: '32px' }} />
                        )
                      })
                    }
                  </div>
                </div>
                <div>
                  <div className='detail-barang mb-24px'>Nivea</div>

                  <div className='detail-barang-name'>Kode Barang</div>
                  <div className='detail-barang-name-sub mt-8px'>25 Mar 2024</div>

                  <div className='detail-barang-name mt-16px'>Barcode ID</div>
                  <div className='detail-barang-name-sub mt-8px'>321</div>

                  <div className='detail-barang-name mt-16px'>Kategori Barang</div>
                  <div className='detail-barang-name-sub mt-8px'>Skin Care</div>
                </div>
              </div>
              <div>
                <div style={{ color: 'white' }} className='detail-barang mb-24px'>Nivea</div>
                <div className='detail-barang-name'>Satuan Barang</div>
                <div className='detail-barang-name-sub mt-8px'>25 Mar 2024</div>

                <div className='detail-barang-name mt-16px'>Berat Barang</div>
                <div className='detail-barang-name-sub mt-8px'>321</div>

                <div className='detail-barang-name mt-16px'>Ukuran Barang</div>
                <div className='detail-barang-name-sub mt-8px'>Skin Care</div>
              </div>
            </div>

            <hr />
            <div className='p-16px'>
              <TitleModal icon={'.'} title={`Detail Barang`} setisModalClose={setisModal} />
            </div>
            <hr />

            <div className='p-16px grid grid-cols-2 gap-4'>
              <div>
                <div className='detail-barang-stok'>
                  Jumlah Stok Tersedia Saat Ini</div>
                <div className='detail-barang-stok-value mt-8px'>
                  2</div>
                <div className='detail-barang-desc mt-8px'>
                  Deskripsi Barang</div>
                <div className='detail-barang-desc-value mt-8px'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
              </div>
              <div>
                <div className='detail-barang-stok'>
                  Batas Minimum Stok Tersedia Saat Ini</div>
                <div className='detail-barang-stok-value mt-8px'>
                  2</div>
                <div className='detail-barang-desc mt-8px'>
                  Catatan Barang</div>
                <div className='detail-barang-desc-value mt-8px'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
              </div>
            </div>

            <div className='p-16px'>
              <DataTable
                columns={columnsBarang}
                data={dataBarang}
              />
              <CustomPagination />
            </div>

            <hr />
            <div className='p-16px'>
              <TitleModal icon={'.'} title={`Tabel Berdasarkan Pengadaan Barang`} setisModalClose={setisModal} />
            </div>
            <hr />

            <div className='finance-penerimaan-wrapp-second'>
              <div style={{ display: 'flex' }}>
                <div className='finance-penerimaan-wrapp-search'>
                  <ISearchInput />
                  <input placeholder='cari' className='finance-penerimaan-wrapp-search-input' type="text" />
                </div>
              </div>
            </div>

            <div className='p-16px'>
              <DataTable
                columns={columnsBarangPengadaan}
                data={dataBarang}
              />
              <CustomPagination />
            </div>

          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default ModalDetailBarang
