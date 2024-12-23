import { FormatRupiah } from 'components/helper/formatRupiah';
import IClose from 'components/icons/Close';
import moment from 'moment';
import Link from 'next/link';
import React from 'react'
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';

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

const ModalDetailDataTable = ({
  isModalUp,
  setisModalUp
}) => {

  const { data } = useSelector((state) => state?.PenerimaanReducer?.details)

  const columns = [
    {
      name: 'Sumber',
      selector: row => row?.account?.category,
    },
    {
      name: 'Nomor Akun',
      selector: row => row?.account?.id,
    },
    {
      name: 'Akun',
      selector: row => row?.account?.name,
    },
    {
      name: 'Nilai',
      selector: row => `Rp. ${FormatRupiah(row?.amount)}`,
    },
  ];

  return (
    <Modal
      isOpen={isModalUp}
      onRequestClose={() => setisModalUp(false)}
      style={customStyles}
    >
      <div>
        <div className='finance-penerimaan-modal-detail-kontainer'>
          <div className='finance-penerimaan-modal-detail-top-wrapp'>
            <div className='finance-penerimaan-modal-detail-title'>Details penerimaan</div>
            <div onClick={() => setisModalUp(false)} className='cursor-pointer'>
              <IClose />
            </div>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Nomor Bukti</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>{data?.receipt_number}</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Penerimaan ke Akun</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>{data?.account?.name}</div>
          </div>
          <div>
            <div className='finance-penerimaan-modal-detail-field-title'>Tanggal</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>{moment(data?.transaction_date).format('YYYY/MM/DD')}</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-title'>Keterangan</div>
            <div className='mt-2 finance-penerimaan-modal-detail-field-value'>{data?.remark}</div>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <DataTable
          columns={columns}
          data={data?.details}
        />
        <div>
          <div className='finance-penerimaan-modal-detail-title-total mt-2'>Total</div>
          <div className='finance-penerimaan-modal-detail-title-total-value mt-1'>Rp {FormatRupiah(data?.total_amount)}</div>
        </div>
      </div>
      <div className='flex justify-end'>
        <Link href='/finance/penerimaan/edit'>
          <div className='cursor-pointer finance-penerimaan-modal-detail-button-edit mr-2'>Edit</div>
        </Link>
        <div
          onClick={() => setisModalUp(false)} className='cursor-pointer finance-penerimaan-modal-detail-button-simpan'>Simpan</div>
      </div>
    </Modal>
  )
}

export default ModalDetailDataTable