import IClose from 'components/icons/Close';
import IConfirmation from 'components/icons/IConfirmation';
import Link from 'next/link';
import React from 'react'
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalConfirmationDelete = ({
  isModalUp,
  setisModalUp,
  actionCallback
}) => {


  return (
    <Modal
      isOpen={isModalUp}
      onRequestClose={() => setisModalUp(false)}
      style={customStyles}
    >
      <div className='modal-confirmation-add-kontainer'>
        <div className='flex justify-between w-100p mb-5'>
          <div className='modal-confirmation-add'>Konfirmasi</div>
          <div className='cursor-pointer' onClick={() => setisModalUp(false)}><IClose/></div>
        </div>
        <IConfirmation/>
        <div className='mt-5 modal-confirmation-add-title'>Apakah Anda Yakin ?</div>
        <div className='mt-5 modal-confirmation-add-title-sub'>Apakah anda yakin akan menghapus data ini?</div>
        <div className='mt-5 flex justify-end'>
          <div onClick={() => setisModalUp(false)} className='cursor-pointer modal-confirmation-add-cancel mr-2'>Batal</div>
          <div
            onClick={() => actionCallback()} className='cursor-pointer finance-penerimaan-modal-detail-button-simpan'>Ya, Yakin</div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalConfirmationDelete