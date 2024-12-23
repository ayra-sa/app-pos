import DataTableLaporanJurnalUmumDetail from 'components/finance/laporan/DataTableLaporajJurnalUmumDetail'
import ModalDetailDataTableJurnalUmum from 'components/finance/laporan/modalDetailDataTableJurnamUmum'
import IBack from 'components/icons/IBack'
import IReload from 'components/icons/IReload'
import ModalConfirmationAdd from 'components/modalConfirmationAdd'
import Admin from 'layouts/Admin'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'
import axiosInstance from 'global-states/api'
import { useParams } from 'next/navigation'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJournalDetail } from 'global-states/actions/journalActions'

const JurnalUmumDetail = () => {

  const [isModalUp, setisModalUp] = useState(false)

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const router = useRouter()
  const params = useParams()
  const dispatch = useDispatch();
  const { loading,detail, detailJournal } = useSelector((state) => state.journal);
 
  const SimpanAct = () => {
    setisModalConfirmationAdd(false)
    setisModalUp(false);
  }

  // const fetchDetail = async () => {
  //   setLoading(true)
  //   try {
  //     const res = await axiosInstance.get(`/journal/${params?.id}`)
  //     const dataDetailJournal = res.data.data.journal_details.map((item,id) => ({
  //       ...item,
  //       no: id+1,
  //     }))
  //     setDetailJournal(dataDetailJournal)
  //     setJournal(res.data.data)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }


  useEffect(() => {
    if (params?.id) {
      dispatch(fetchJournalDetail(params.id))
    }
  }, [params?.id, dispatch])

  return (
    <Admin>
      <div className='finance-laporan-jurnal-umum-jurnal-create-kontainer'>

        <div className='display-flex-align-center justify-between'>
          <div className='display-flex-align-center'>
            <Link href={'/finance/laporan/jurnal-umum'}>
              <div className='cursor-pointer'><IBack /></div>
            </Link>
            <div className='ml-3 finance-laporan-neraca-title'>Detail Jurnal</div>
          </div>
          <IReload />
        </div>

        <div className='garis-tipis'></div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div className='finance-laporan-jurnal-umum-jurnal-detail-title'>Nama Jurnal</div>
            <div className='mt-2 finance-laporan-jurnal-umum-jurnal-detail-value'>{detail?.transaction_type}</div>
            <div className='mt-2 finance-laporan-jurnal-umum-jurnal-detail-title'>Tanggal</div>
            <div className='mt-2 finance-laporan-jurnal-umum-jurnal-detail-value'>{moment(detail?.created_at).format('D MMMM YYYY')}</div>
          </div>

          <div>
            <div>
              <div className='finance-penerimaan-create-title-penerima-input'>Keterangan*</div>
              <textarea placeholder='Beri keterangan disini' className='finance-penerimaan-create-title-penerima-textarea' name="" id="" value={detail?.description}></textarea>
            </div>
          </div>

        </div>

        <div className='garis-tipis'></div>

        {loading ? <p>Loading..</p> : (
          <DataTableLaporanJurnalUmumDetail
            setisModalUp={setisModalUp} data={detailJournal} />
        )}

        <div className='finance-laporan-jurnal-umum-jurnal-wrapp-total mt-5'>
          <div className='finance-laporan-jurnal-umum-jurnal-wrap-sub'>
            <div className='finance-laporan-jurnal-umum-jurnal-total'>Total Debit</div>
            <div className='finance-laporan-jurnal-umum-jurnal-total-value'>{detail?.total_debit}</div>
          </div>
          <div className='mt-3 finance-laporan-jurnal-umum-jurnal-wrap-sub '>
            <div className='finance-laporan-jurnal-umum-jurnal-total'>Total Kredit</div>
            <div className='finance-laporan-jurnal-umum-jurnal-total-value'>{detail?.total_credit}</div>
          </div>
        </div>
      </div>
      <ModalDetailDataTableJurnalUmum
        setisModalConfirmationAdd={setisModalConfirmationAdd}
        setisModalUp={setisModalUp}
        isModalUp={isModalUp} />
      <ModalConfirmationAdd
        actionCallback={() => SimpanAct()}
        isModalUp={isModalConfirmationAdd}
        setisModalUp={setisModalConfirmationAdd}
      />
    </Admin>
  )
}

export default WithAuth(JurnalUmumDetail)