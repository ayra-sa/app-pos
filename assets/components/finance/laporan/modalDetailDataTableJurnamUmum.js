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

const ModalDetailDataTableJurnalUmum = ({
  isModalUp,
  setisModalUp,
  setisModalConfirmationAdd,
}) => {

  const dispatch = useDispatch();

  const columns = [
    {
      name: 'Kode Barang',
      selector: row => row.kodeBarang,
    },
    {
      name: 'Nama Barang',
      selector: row => row.namaBarang,
    },
    {
      name: 'Saldo Awal',
      selector: row => row.saldoAwal,
    },
    {
      name: 'Debit',
      selector: row => row.debit,
    },
    {
      name: 'Kredit',
      selector: row => row.kredit,
    },
    {
      name: 'Saldo',
      selector: row => row.saldo,
    },
  ];
  const data = [
    {
      id: 1,
      kodeBarang: '1222222222222',
      namaBarang: 'namaBarang 1',
      saldoAwal: 'Rp. 10.000',
      debit: 'Rp. 5000',
      kredit: 'Rp. 4000',
      saldo: '70.000',
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
            <div className='finance-penerimaan-modal-detail-title'>Detail Akun</div>
            <div onClick={() => setisModalUp(false)} className='cursor-pointer'>
              <IClose />
            </div>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Nama Anggota</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>Samsudin</div>
          </div>
        </div>
        <div className='grid grid-cols-1 mt-4 gap-4'>
          <div>
            <div className='finance-penerimaan-create-top'>
              <div className='finance-penerimaan-create-title-penerima-input'>Jumlah</div>
              <input className='finance-penerimaan-create-input-number' type="text" />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-4'>
          <div>
            <div className='finance-penerimaan-create-title-penerima-input'>Catatan*</div>
            <textarea placeholder='Beri catatan disini' className='finance-penerimaan-create-title-penerima-textarea' name="" id=""></textarea>
          </div>
        </div>
        <div className='garis-tipis'></div>
      </div>
      <div className='flex justify-end mt-5'>
        <div onClick={() => {
          setisModalUp(false)
        }} className='cursor-pointer finance-penerimaan-modal-detail-button-edit mr-2'>Batal</div>
        <div onClick={() => {
          setisModalConfirmationAdd(true)
          setisModalUp(false)
        }} className='cursor-pointer finance-penerimaan-modal-detail-button-simpan'>Simpan</div>
      </div>
    </Modal>
  )
}

export default ModalDetailDataTableJurnalUmum