import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import DetailModalData from 'components/DetailModalData'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputEmail from 'components/Input/InputEmail'
import InputRadio from 'components/Input/InputRadio'
import InputTextArea from 'components/Input/InputTexArea'
import InputText from 'components/Input/InputText'
import ModalWrapper from 'components/Modal/ModalWrapper'
import Tab from 'components/Tab/inddex'
import TitleModal from 'components/TitlePage/TitleModal'
import TitlePageBack from 'components/TitlePage/TitlePageBack'
import IAdd from 'components/icons/IAdd'
import ModalConfirmationAdd from 'components/modalConfirmationAdd'
import ModalConfirmationEdit from 'components/modalConfirmationEdit'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ModalDetailKontak({
  isModal,
  setIsModal,
}) {
  const dispatch = useDispatch()

  const [TabsAddKontakReducer, setTabsAddKontakReducer] = useState({
    data: [
      'Info Umum',
      'Alamat',
      'Akun Bank',
      'Pembelian',
      'Pajak',
      'Saldo Utang',
      'lain-lain'
    ],
    isActivetab: 0,
  })

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const router = useRouter()

  const SimpanAct = () => {
    setIsModal(false)
    setisModalConfirmationAdd(false)
  }

  return (
    <>
      <ModalWrapper
        overflow={'auto'}
        isModalUp={isModal}
        setisModalUp={setIsModal}
        bottom={'10%'}
        top={'10%'}
        right={'20%'}
        left={'20%'}
      >

        <div className='p-16px'>
          <TitleModal setisModalClose={() => setIsModal(false)} title={'Details Kontak'} />
        </div>
        <hr />

        <div className='p-16px'>
          <div style={{ justifyContent: 'flex-start' }} className='tab-page-akun-kas-bank-sub-top p-16px'>
            <div className='kontak-detail'>Samsudin</div>
            <div className='ml-16px kontak-detail-name'>Suplier</div>
          </div>
        </div>
        <hr />

        <div>
          <TitlePageBack icon={''} title={'Details Kontak'} />
        </div>
        <hr />
        <div style={{ paddingTop: '0px' }} className='grid grid-cols-3 gap-4 p-16px'>
          <div>
            <DetailModalData
              data={[
                { label: 'Nama Kontak', value: 'Nama Kontak' },
                { label: 'Email', value: 'Email' },
                { label: 'Alamat', value: 'Alamat' },
                { label: 'NPWP', value: 'NPWP' },
                { label: 'Website', value: 'Website' },
              ]}
            />
          </div>
          <div>
            <DetailModalData
              data={[
                { label: 'Nomor Handphone', value: 'Nomor Handphone' },
                { label: 'Nomor Telepon Perusahaan', value: 'Nomor Telepon Perusahaan' },
                { label: 'Tipe Pemasok', value: 'Tipe Pemasok' },
                { label: 'Nomor Identitas', value: 'Nomor Identitas' },
              ]}
            />
          </div>
          <div>
            <DetailModalData
              data={[
                { label: 'Alamat Penagihan', value: 'Alamat Penagihan' },
                { label: 'Alamat Pengiriman', value: 'Alamat Pengiriman' },
                { label: 'FAX', value: 'FAX' },
                { label: 'Mata Uang', value: 'Mata Uang' },
              ]}
            />
          </div>
        </div>

        <hr />
        <div>
          <TitlePageBack icon={''} title={'Informasi Bank'} />
        </div>
        <hr />
        <div style={{ paddingTop: '0px' }} className='grid grid-cols-2 gap-4 p-16px'>
          <div>
            <DetailModalData
              data={[
                { label: 'Nama Bank', value: 'Nama Bank' },
                { label: 'Kantor Cabang Bank', value: 'Kantor Cabang Bank' },
              ]}
            />
          </div>
          <div>
            <DetailModalData
              data={[
                { label: 'Nomor Rekening', value: 'Nomor Rekening' },
                { label: 'Pemegang Akun Bank', value: 'Pemegang Akun Bank' },
              ]}
            />
          </div>
        </div>

        <hr />
        <div>
          <TitlePageBack icon={''} title={'Pemetaan Akun'} />
        </div>
        <hr />
        <div style={{ paddingTop: '0px' }} className='grid grid-cols-2 gap-4 p-16px'>
          <div>
            <DetailModalData
              data={[
                { label: 'Metode Pembayaran', value: 'Metode Pembayaran' },
                { label: 'Akun Piutang', value: 'Akun Piutang' },
                { label: 'Jumlah Hutang', value: 'Jumlah Hutang' },
              ]}
            />
          </div>
          <div>
            <DetailModalData
              data={[
                { label: 'Default Diskon', value: 'Default Diskon' },
                { label: 'Akun Pembelian', value: 'Akun Pembelian' },
              ]}
            />
          </div>
        </div>

        <hr />
        <div>
          <TitlePageBack icon={''} title={'Pajak'} />
        </div>
        <hr />
        <div style={{ paddingTop: '0px' }} className='grid grid-cols-2 gap-4 p-16px'>
          <div>
            <DetailModalData
              data={[
                { label: 'NPWP', value: 'NPWP' },
                { label: 'Nomor NIk/Passpr', value: 'Nomor NIk/Passpr' },
                { label: 'Jenis Transaksi', value: 'Jenis Transaksi' },
              ]}
            />
          </div>
          <div>
            <DetailModalData
              data={[
                { label: 'Wajib Pajak', value: 'Wajib Pajak' },
                { label: 'Dokumen', value: 'Dokumen' },
              ]}
            />
          </div>
        </div>

      </ModalWrapper>
      <ModalConfirmationEdit
        actionCallback={() => SimpanAct()}
        isModalUp={isModalConfirmationAdd}
        setisModalUp={setisModalConfirmationAdd}
      />
    </>
  )
}

export default ModalDetailKontak