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
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};

const ModalDetailDataTable = ({
  isModalUp,
  setisModalUp
}) => {

  const columns = [
    {
      name: 'Sumber',
      selector: row => row.sumber,
    },
    {
      name: 'Nomor Akun',
      selector: row => row.noAkun,
    },
    {
      name: 'Akun',
      selector: row => row.akun,
    },
    {
      name: 'Nilai',
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
            <div className='finance-penerimaan-modal-detail-title'>Details pembayaran</div>
            <div onClick={() => setisModalUp(false)} className='cursor-pointer'>
              <IClose />
            </div>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Nomor Bukti</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>1111111111</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Penerimaan ke Akun</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>Kas Bank Utama</div>
          </div>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Tanggal</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>20 juli 2023</div>
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
        <Link href='/finance/pembayaran/edit'>
          <div className='cursor-pointer finance-penerimaan-modal-detail-button-edit mr-2'>Edit</div>
        </Link>
        <div
          onClick={() => setisModalUp(false)} className='cursor-pointer finance-penerimaan-modal-detail-button-simpan'>Simpan</div>
      </div>
    </Modal>
  )
}

export default ModalDetailDataTable