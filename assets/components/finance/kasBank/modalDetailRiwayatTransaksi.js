import IClose from 'components/icons/Close';
import Link from 'next/link';
import React from 'react'
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '15%',
    left: '15%',
    right: '15%',
    bottom: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

const ModalDetailDataTableRiwayatTransaksi = ({
  isModalUp,
  setisModalUp
}) => {

  const columns = [
    {
      name: 'Sumber',
      selector: row => row.sumber,
    },
    {
      name: 'Saldo AKun',
      selector: row => row.noAkun,
    },
    {
      name: 'Debit',
      selector: row => row.akun,
    },
    {
      name: 'Kredit',
      selector: row => row.nilai,
    },
    {
      name: 'Saldo terakhir',
      selector: row => row.nilai,
    },
  ];
  const data = [
    {
      id: 1,
      sumber: '1222222222222',
      noAkun: '1101',
      akun: 'akun@gmail.com',
      nilai: '70.000',
    },
  ]

  return (
    <Modal
      isOpen={isModalUp}
      onRequestClose={() => setisModalUp(false)}
      style={customStyles}
    >
      <div>
        <div className='finance-penerimaan-modal-detail-kontainer'>
          <div className='finance-penerimaan-modal-detail-top-wrapp'>
            <div className='finance-penerimaan-modal-detail-title'>Details</div>
            <div onClick={() => setisModalUp(false)} className='cursor-pointer'>
              <IClose />
            </div>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Kode Akun Bukti</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>1111111111</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Nama Akun</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>Kas Bank Utama</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Tanggal</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>20 Juli 2020</div>
          </div>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Type</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>Penerimaan penjualan</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Keterangan</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>Hasil Penjualan</div>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <DataTable
          columns={columns}
          data={data}
        />
        <div>
          <div className='finance-penerimaan-modal-detail-title-total mt-2'>Total</div>
          <div className='finance-penerimaan-modal-detail-title-total-value mt-1'>Rp 70.000</div>
        </div>
      </div>
      <div className='flex justify-end'>
        <div
          onClick={() => setisModalUp(false)} className='cursor-pointer finance-penerimaan-modal-detail-button-simpan'>Menuju Sumber</div>
      </div>
    </Modal>
  )
}

export default ModalDetailDataTableRiwayatTransaksi