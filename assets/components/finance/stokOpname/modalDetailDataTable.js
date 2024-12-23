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

const ModalDetailDataTableStokOpname = ({
  isModalUp,
  setisModalUp,
  setisModalUpConfirmation,
  create
}) => {

  const columns = [
    {
      name: 'Kategori Barang',
      selector: row => row.kategoriBarang,
    },
    {
      name: 'Pemasok Barang',
      selector: row => row.pemasokBarang,
    },
  ];
  const data = [
    {
      id: 1,
      kategoriBarang: 'kategoriBarang',
      pemasokBarang: 'pemasokBarang',
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
            <div className='finance-penerimaan-modal-detail-title'>Details Stok opname</div>
            <div onClick={() => setisModalUp(false)} className='cursor-pointer'>
              <IClose />
            </div>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <div className='mb-16px mt-16px w-100 d-flex align-center justify-between'>
          <div className='id-detail'>
            #23456789
          </div>
          <div className='id-detail-status'>
            Belum selesai
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Tanggal spk</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>20 juli 2023</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Tanggal Mulai</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>21 juli 2023</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Didelegasikan/dikerjakan oleh</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>Tim gudang</div>
          </div>
          <div>
            <div>
              <div className='finance-penerimaan-create-title-penerima-input'>Keterangan*</div>
              <textarea rows={5} placeholder='Beri keterangan disini' className='finance-penerimaan-create-title-penerima-textarea' name="" id=""></textarea>
            </div>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <DataTable
          columns={columns}
          data={data}
        />
      </div>
      <div className='flex justify-end mt-5'>
        <div onClick={() => setisModalUp(false)} className='cursor-pointer finance-penerimaan-modal-detail-button-edit mr-2'>Batal</div>
        <div
          onClick={() => {
            setisModalUp(false)
            if (create) {
              setisModalUpConfirmation(true)
            }
          }} className='cursor-pointer finance-penerimaan-modal-detail-button-simpan'>Simpan</div>
      </div>
    </Modal>
  )
}

export default ModalDetailDataTableStokOpname