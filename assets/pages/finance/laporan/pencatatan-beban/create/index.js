import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputTextArea from 'components/Input/InputTexArea'
import TitlePage from 'components/TitlePage/TitlePage'
import TitlePageBack from 'components/TitlePage/TitlePageBack'
import WithAuth from 'components/config/protect'
import IClose from 'components/icons/Close'
import IAdd from 'components/icons/IAdd'
import ICeklis from 'components/icons/ICeklis'
import IReload from 'components/icons/IReload'
import ModalConfirmationAdd from 'components/modalConfirmationAdd'
import Admin from 'layouts/Admin'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function PencatatanBebanCreate() {

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const router = useRouter()

  const SimpanAct = () => {
    setisModalConfirmationAdd(false)
    router.push('/finance/laporan/pencatatan-beban')
  }

  return (
    <Admin>
      <div style={{
        background: 'white',
      }}>
        <TitlePageBack title={'Pencatatan Beban'} />
        <hr />
        <TitlePageBack marginBottomWrapp='8px' marginTopWrapp='8px' title={'Detail Jurnal'} icon={''} />
        <hr />
        <div className='grid grid-cols-2 gap-4 p-16px'>
          <div>
            <InputDate marginLeftTitle={"10px"} classTitle={'dropdown-status-data-table-title'} title={'Tanggal*'} />
          </div>
          <div>
            <InputDropdown otomatis={true} marginLeftChild={'16px'} title={'Nomor*'} />
          </div>
        </div>
        <div style={{ paddingTop: '0px' }} className='grid grid-cols-2 gap-4 p-16px'>
          <div>
            <InputDate marginLeftTitle={"10px"} classTitle={'dropdown-status-data-table-title'} title={'Jatuh tempo*'} />
          </div>
          <div>
            <InputDropdown marginLeftChild={'16px'} title={'Akun*'} />
          </div>
        </div>
        <div style={{ paddingTop: '0px' }} className='grid grid-cols-1 gap-4 p-16px'>
          <div>
            <InputTextArea placeholder={'Beri Keterangan disini'} title={'Keterangan'} />
          </div>
        </div>
        <hr />
        <TitlePageBack marginBottomWrapp='8px' marginTopWrapp='8px' title={'Detail Transaksi'} icon={''} />
        <hr />
        <div className='p-16px'>
          <div className='grid grid-cols-3 gap-4'>
            <div>
              <div className='finance-penerimaan-create-title-penerima-input'>Akun</div>
              <select className='finance-penerimaan-create-dropdown' name="cars" id="cars">
                <option className='finance-penerimaan-create-dropdown-option' value="">Pilih</option>
                <option className='finance-penerimaan-create-dropdown-option' value="saab">value 1</option>
                <option className='finance-penerimaan-create-dropdown-option' value="opel">value 2</option>
                <option className='finance-penerimaan-create-dropdown-option' value="audi">value 3</option>
              </select>
            </div>
            <div>
              <div className='finance-penerimaan-create-top'>
                <div className='finance-penerimaan-create-title-penerima-input'>Deskripsi</div>
                <input className='finance-penerimaan-create-input-number' placeholder='Nomor transaksi' type="text" />
              </div>
            </div>
            <div>
              <div className='finance-penerimaan-create-top'>
                <div className='finance-penerimaan-create-title-penerima-input'>Nilai</div>
                <div className='d-flex justify-center gap-10px'>
                  <input className='finance-penerimaan-create-input-number' placeholder='Rp 0' type="text" />
                  <IClose />
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 mt-4 gap-4'>
            <div className='finance-penerimaan-create-tambah-data'>
              <div className='flex finance-penerimaan-create-tambah-data-wrapp'>
                <IAdd color='#44546F' />
                <div className='finance-penerimaan-create-tambah-data-wrapp-title ml-2'>Tambah Data</div>
              </div>
            </div>
          </div>
        </div>

        <div className='pencatatan-beban-add-total p-16px'>
          <div className='pencatatan-beban-add-total-sub' style={{ minWidth: '100px' }}>
            <div className='pencatatan-beban-add-total-sub-title'>total</div>
            <div className='pencatatan-beban-add-total-sub-title-value'>Rp 0</div>
          </div>
        </div>

        <div className='pencatatan-beban-add-total p-16px'>
          <div className='d-flex align-center gap-10px'>
            <ButtonCancel paddingBottom={'6px'} paddingTop={'6px'} title={'Print'} />
            <ButtonSave action={() => setisModalConfirmationAdd(true)} title={'Simpan'} />
          </div>
        </div>

        <ModalConfirmationAdd
          actionCallback={() => SimpanAct()}
          isModalUp={isModalConfirmationAdd}
          setisModalUp={setisModalConfirmationAdd}
        />
      </div>
    </Admin>
  )
}

export default WithAuth(PencatatanBebanCreate)