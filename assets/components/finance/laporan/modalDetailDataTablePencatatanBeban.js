import IClose from 'components/icons/Close';
import Link from 'next/link';
import React from 'react'
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

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

const ModalDetailDataTablePencatatanBeban = ({
  isModalUp,
  setisModalUp
}) => {

  const dispatch = useDispatch();

  const columns = [
    {
      name: 'Sumber',
      selector: row => row.sumber,
    },
    {
      name: 'Nomor Akun',
      selector: row => row.nomorAkun,
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
      nomorAkun: 'nomorAkun 1',
      akun: 'akun',
      nilai: 'nilai',
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
            <div className='finance-penerimaan-modal-detail-field-title'>Nomor Bukti</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>1111</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Tanggal</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>20 juli 2023</div>
          </div>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Hutang/ Beban Dari</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>Kas Bank Utama</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Keterangan</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>Pembelian Stok</div>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <DataTable
          columns={columns}
          data={data}
        />
      </div>
      <div className='flex justify-end mt-5'>
        <div onClick={() => {
          setisModalUp(false)
          dispatch({
            type: 'STATUS_TAB_SET',
            payload: 1
          })
        }} className='cursor-pointer finance-penerimaan-modal-detail-button-edit mr-2'>Edit</div>
        <div onClick={() => setisModalUp(false)} className='cursor-pointer finance-penerimaan-modal-detail-button-simpan'>Simpanan</div>
      </div>
    </Modal>
  )
}

export default ModalDetailDataTablePencatatanBeban