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

const ModalDetailDataTableMutasiSimpanan = ({
  isModalUp,
  setisModalUp
}) => {

  const dispatch = useDispatch();

  const columns = [
    {
      name: 'Kode Barang',
      selector: row => row.kodeBarang,
    },
    {
      name: 'Akun Perkiraan',
      selector: row => row.namaBarang,
    },
    {
      name: 'Total',
      selector: row => row.saldoAwal,
    },
    {
      name: 'Angsuran',
      selector: row => row.debit,
    },
    {
      name: 'Sisa',
      selector: row => row.kredit,
    },
  ];
  const data = [
    {
      id: 1,
      kodeBarang: '1222222222222',
      namaBarang: 'Akun Perkiraan',
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
            <div className='finance-penerimaan-modal-detail-title'>Details</div>
            <div onClick={() => setisModalUp(false)} className='cursor-pointer'>
              <IClose />
            </div>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <div style={{
            marginBottom: '20px',
          }} className='display-flex-align-center justify-between'>
          <div style={{
            marginBottom: '0px',
          }} className='finance-simpanan-modal-idtrx'>IDTRX 876367392</div>
          <div className='finance-simpanan-detail-status'>Selesai</div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Nama Anggota</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>Samsudin</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Tanggal</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>20 juli 2023</div>
          </div>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Sisa Tenor</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>2 bulan</div>
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
        }} className='cursor-pointer finance-penerimaan-modal-detail-button-edit mr-2'>Buku Pinjaman</div>
        <div onClick={() => setisModalUp(false)} className='cursor-pointer finance-penerimaan-modal-detail-button-simpan'>Buat Jurnal</div>
      </div>
    </Modal>
  )
}

export default ModalDetailDataTableMutasiSimpanan