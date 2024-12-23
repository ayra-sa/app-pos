import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputRadio from 'components/Input/InputRadio'
import InputTextArea from 'components/Input/InputTexArea'
import InputText from 'components/Input/InputText'
import Tab from 'components/Tab/inddex'
import TitlePageBack from 'components/TitlePage/TitlePageBack'
import Total from 'components/Total'
import TotalAll from 'components/TotalAll'
import TotalAmount from 'components/TotalAmount'
import WithAuth from 'components/config/protect'
import IClose from 'components/icons/Close'
import IAdd from 'components/icons/IAdd'
import IBack from 'components/icons/IBack'
import ModalConfirmationAdd from 'components/modalConfirmationAdd'
import Admin from 'layouts/Admin'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CreateAssetTetap() {
  const [tglBeli, settglBeli] = useState(new Date());
  const [tglPakai, settglPakai] = useState(new Date());
  const dispatch = useDispatch();
  const tabsAddAssetBaruReducer = useSelector((state) => state.tabsAddAssetBaruReducer);

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const router = useRouter()

  const SimpanAct = () => {
    setisModalConfirmationAdd(false)
    router.push('/finance/aset-tetap/')
  }

  return (
    <Admin>
      <div style={{
        backgroundColor: 'white'
      }}>
        <div className='p-16px'>
          <TitlePageBack icon={<IBack />} title={'Tambah Asset Baru'} />
        </div>
        <hr />
        <div className=''>
          <TitlePageBack icon={''} title={'Detail Asset Baru'} />
        </div>
        <hr />
        <div style={{
          paddingLeft: '25px'
        }} className='grid grid-cols-2 gap-4 p-16px'>
          <div>
            <div>
              <InputText
                classTitle={'dropdown-status-data-table-title'}
                flexParent={1}
                title={'Nama Asset*'}
                placeholder={'Nama Asset Baru'} />
            </div>
            <div className='mt-16px'>
              <InputDate
                classTitle={'dropdown-status-data-table-title'}
                valueStart={tglBeli}
                setValueStart={settglBeli}
                flexParent={1}
                title={'Tanggal beli*'}
                placeholder={'Nama Asset Baru'} />
            </div>
          </div>
          <div>
            <div>
              <InputDropdown
                classTitle={'dropdown-status-data-table-title'}
                marginLeftChild={'16px'}
                otomatis={true}
                flexParent={1}
                title={'Nomor*'}
                placeholder={'Nama Asset Baru'} />
            </div>
            <div className='mt-16px'>
              <InputDate
                classTitle={'dropdown-status-data-table-title'}
                valueStart={tglPakai}
                setValueStart={settglPakai}
                flexParent={1}
                title={'Tanggal pakai*'}
                placeholder={'Nama Asset Baru'} />
            </div>
          </div>
        </div>

        <div className='p-16px' style={{ paddingTop: '0px' }}>
          <Tab
            onClick={(payload) => {
              dispatch({
                type: 'STATUS_TAB_ADD_ASSET_BARU',
                payload: payload
              })
            }}
            IsActiveTab={tabsAddAssetBaruReducer?.isActivetab}
            Tabs={tabsAddAssetBaruReducer?.data} />
        </div>
        {
          tabsAddAssetBaruReducer?.isActivetab == 0 && <>
            <div>
              <TitlePageBack icon={''} title={'Detail Unit'} />
            </div>
            <hr />
            <div style={{
              paddingLeft: '25px'
            }} className='p-16px'>
              <InputRadio
                title={'Wujud Asset*'}
                multi={true}
                valueMulti={[
                  {
                    titleCheck: 'Asset Berwujud'
                  },
                  {
                    titleCheck: 'Asset Tidak Berwujud'
                  },
                ]}
              />
            </div>
            <div style={{
              paddingLeft: '25px',
              paddingTop: '0px',
            }} className='p-16px grid grid-cols-2 gap-4'>

              <div>
                <div>
                  <InputDropdown
                    classTitle={'dropdown-status-data-table-title'}
                    marginLeftChild={'16px'}
                    flexParent={1}
                    title={'Metode Penyusutan*'} />
                </div>
                <div className='mt-16px'>
                  <InputDropdown
                    classTitle={'dropdown-status-data-table-title'}
                    marginLeftChild={'16px'}
                    flexParent={1}
                    title={'Akun Asset*'} />
                </div>
                <div className='mt-16px'>
                  <InputDropdown
                    classTitle={'dropdown-status-data-table-title'}
                    marginLeftChild={'16px'}
                    flexParent={1}
                    title={'Akun Akumulasi Penyusutan*'} />
                </div>
                <div className='mt-16px'>
                  <InputDropdown
                    classTitle={'dropdown-status-data-table-title'}
                    marginLeftChild={'16px'}
                    flexParent={1}
                    title={'Akun Beban Penyusutan*'} />
                </div>
              </div>

              <div style={{ paddingTop: '3px' }}>
                <div>
                  <InputText
                    classTitle={'dropdown-status-data-table-title'}
                    flexParent={1}
                    title={'Kuantitas*'}
                    placeholder={'0'} />
                </div>
                <div style={{ marginTop: '17px' }} className='mt-16px grid grid-cols-2 gap-4'>
                  <InputText
                    classTitle={'dropdown-status-data-table-title'}
                    flexParent={1}
                    title={'Umur Aset (Tahun)*'}
                    placeholder={'0'} />
                  <InputText
                    classTitle={'dropdown-status-data-table-title'}
                    flexParent={1}
                    title={'Umur Aset (Bulan)*'}
                    placeholder={'0'} />
                </div>
                <div style={{ marginTop: '17px' }} className='mt-16px'>
                  <InputText
                    classTitle={'dropdown-status-data-table-title'}
                    flexParent={1}
                    title={'Rasio %'}
                    placeholder={'0'} />
                </div>
                <div style={{ marginTop: '17px' }} className='mt-16px'>
                  <InputText
                    classTitle={'dropdown-status-data-table-title'}
                    flexParent={1}
                    title={'Nilai Sisa'}
                    placeholder={'0'} />
                </div>
              </div>

            </div>

            <div style={{
              paddingLeft: '25px',
              display: 'flex',
            }} className='p-16px gap-10px'>
              <div style={{
                width: '110px'
              }}>
                <TotalAll title={'Total Asset'} value={'0'} />
              </div>
              <div style={{
                width: '110px'
              }}>
                <TotalAll title={'Nilai Buku'} value={'0'} />
              </div>
            </div>

            <div style={{
              paddingLeft: '25px',
            }} className='gap-10px p-16px d-flex align-center justify-end'>
              <ButtonCancel paddingBottom={'6px'} paddingTop={'6px'} title={'Print'} />
              <ButtonSave action={() => setisModalConfirmationAdd(true)} title={'Simpan Asset'} />
            </div>

          </>
        }

        {
          tabsAddAssetBaruReducer?.isActivetab == 1 && <>
            <div>
              <TitlePageBack icon={''} title={'Detail Unit'} />
            </div>
            <hr />
            <div style={{
              paddingLeft: '25px'
            }} className='p-16px'>
              <InputRadio
                title={'Pajak*'}
                multi={true}
                valueMulti={[
                  {
                    titleCheck: 'Ya'
                  },
                  {
                    titleCheck: 'Tidak'
                  },
                ]}
              />
            </div>
            <div style={{
              paddingLeft: '25px',
              paddingTop: '0px',
            }} className='p-16px grid grid-cols-2 gap-4'>

              <div>
                <div>
                  <InputDropdown
                    classTitle={'dropdown-status-data-table-title'}
                    marginLeftChild={'16px'}
                    flexParent={1}
                    title={'Kategori Asset*'} />
                </div>
              </div>

              <div>
                <div>
                  <InputDropdown
                    classTitle={'dropdown-status-data-table-title'}
                    marginLeftChild={'16px'}
                    flexParent={1}
                    title={'Lokasi Awal Asset*'} />
                </div>
              </div>

            </div>

            <div style={{
              paddingLeft: '25px',
              paddingTop: '0px',
            }} className='p-16px'>
              <InputTextArea title='Catatan' placeholder='Masukan Catatan' />
            </div>

            <div style={{
              paddingLeft: '25px',
              display: 'flex',
            }} className='p-16px gap-10px'>
              <div style={{
                width: '110px'
              }}>
                <TotalAll title={'Total Asset'} value={'0'} />
              </div>
              <div style={{
                width: '110px'
              }}>
                <TotalAll title={'Nilai Buku'} value={'0'} />
              </div>
            </div>

            <div style={{
              paddingLeft: '25px',
            }} className='gap-10px p-16px d-flex align-center justify-end'>
              <ButtonCancel paddingBottom={'6px'} paddingTop={'6px'} title={'Print'} />
              <ButtonSave action={() => setisModalConfirmationAdd(true)} title={'Simpan Asset'} />
            </div>

          </>
        }

        {
          tabsAddAssetBaruReducer?.isActivetab == 2 && <>
            <div>
              <TitlePageBack icon={''} title={'Detail Unit'} />
            </div>
            <hr />
            <div style={{
              paddingLeft: '25px',
              paddingTop: '0px',
            }} className='p-16px grid grid-cols-5 gap-4'>

              <div className='mt-16px'>
                <div>
                  <InputDropdown
                    classTitle={'dropdown-status-data-table-title'}
                    marginLeftChild={'16px'}
                    flexParent={1}
                    title={'Akun*'} />
                </div>
              </div>

              <div style={{ marginTop: '17px' }}>
                <InputText
                  classTitle={'dropdown-status-data-table-title'}
                  flexParent={1}
                  title={'Kode*'}
                  placeholder={'Masukan Kode'} />
              </div>
              <div style={{ marginTop: '17px' }}>
                <InputDate
                  classTitle={'dropdown-status-data-table-title'}
                  valueStart={tglBeli}
                  setValueStart={settglBeli}
                  flexParent={1}
                  title={'Tanggal*'}
                  placeholder={'Nama Asset Baru'} />
              </div>
              <div style={{ marginTop: '17px' }}>
                <InputText
                  classTitle={'dropdown-status-data-table-title'}
                  flexParent={1}
                  title={'Kode*'}
                  placeholder={'Masukan Kode'} />
              </div>
              <div>
                <div style={{ marginTop: '17px' }} className='finance-penerimaan-create-top'>
                  <div className='finance-penerimaan-create-title-penerima-input'>Nilai</div>
                  <div className='d-flex justify-center gap-10px'>
                    <input className='finance-penerimaan-create-input-number' placeholder='Rp 0' type="text" />
                    <IClose />
                  </div>
                </div>
              </div>

            </div>
            <div style={{
              paddingLeft: '25px',
              paddingTop: '0px',
            }} className='grid grid-cols-1 mt-4 gap-4'>
              <div className='finance-penerimaan-create-tambah-data'>
                <div className='flex finance-penerimaan-create-tambah-data-wrapp'>
                  <IAdd color='#44546F' />
                  <div className='finance-penerimaan-create-tambah-data-wrapp-title ml-2'>Tambah Data</div>
                </div>
              </div>
            </div>

            <div style={{
              paddingLeft: '25px',
              display: 'flex',
            }} className='p-16px gap-10px'>
              <div style={{
                width: '110px'
              }}>
                <TotalAll title={'Total Asset'} value={'0'} />
              </div>
              <div style={{
                width: '110px'
              }}>
                <TotalAll title={'Nilai Buku'} value={'0'} />
              </div>
            </div>

            <div style={{
              paddingLeft: '25px',
            }} className='gap-10px p-16px d-flex align-center justify-end'>
              <ButtonCancel paddingBottom={'6px'} paddingTop={'6px'} title={'Print'} />
              <ButtonSave action={() => setisModalConfirmationAdd(true)} title={'Simpan Asset'} />
            </div>

          </>
        }

      </div>
      <ModalConfirmationAdd
        actionCallback={() => SimpanAct()}
        isModalUp={isModalConfirmationAdd}
        setisModalUp={setisModalConfirmationAdd}
      />
    </Admin>
  )
}

export default WithAuth(CreateAssetTetap)