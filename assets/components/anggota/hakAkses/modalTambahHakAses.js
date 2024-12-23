import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import InputCheckbox from 'components/Input/InputCheckbox'
import InputRadio from 'components/Input/InputRadio'
import InputTextArea from 'components/Input/InputTexArea'
import InputText from 'components/Input/InputText'
import ModalWrapper from 'components/Modal/ModalWrapper'
import Tab from 'components/Tab/inddex'
import TitleModal from 'components/TitlePage/TitleModal'
import TitlePageBack from 'components/TitlePage/TitlePageBack'
import React, { useState } from 'react'

function ModalTambahHakAkses({
  setisModal,
  isModalUp,
  setisModalConfirmation,
}) {

  const [TabAddHakAkses, setTabAddHakAkses] = useState({
    data: [
      'IRS Allowance',
      'IRS Cms',
      'IRS Finance',
      'IRS Inventory',
      'IRS Simpin',
      'IRS Transaction',
      'IRS Kasir',
      'IRS Member',
    ],
    isActivetab: 0,
  })

  return (
    <ModalWrapper
      overflow={'hidden'}
      bottom={'10%'}
      left={'10%'}
      right={'10%'}
      top={'10%'}
      setisModalUp={setisModal}
      isModalUp={isModalUp}>
      <div style={{
        paddingBottom: '0px',
      }} className='p-16px d-flex flex-column justify-between'>
        <TitleModal title={'Tambah hak akses'} setisModalClose={setisModal} />
      </div>
      <div style={{
        paddingTop: '0px',
        overflow: 'auto',
        maxHeight: 'calc(90%)'
      }} className='h-100 p-16px d-flex flex-column justify-between'>
        <div>
          <hr className='mb-16px mt-16px' />

          <div className='grid grid-cols-1 gap-4'>
            <InputText
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Nama Hak Akses*'}
              placeholder={'Masukan Hak Akses'}
            />
            <InputTextArea
              flexParent={1}
              rows={4}
              classTitle={'dropdown-status-data-table-title'}
              title={'Deskripsi Akses*'}
              placeholder={'Masukan Deskripsi'}
            />
            <InputRadio
              multi={true}
              title={'Status*'}
              valueMulti={[
                { titleCheck: 'Aktif' },
                { titleCheck: 'Tidak Aktif' },
              ]}
            />
          </div>

          <hr className='mt-16px mb-8px' />
          <TitleModal icon={'.'} title={'Akses Yang dibuka'} setisModalClose={() => { }} />
          <hr style={{ marginTop: '8px' }} />

          <Tab
            onClick={(payload) => {
              setTabAddHakAkses((prevstate) => {
                return {
                  ...prevstate,
                  isActivetab: payload,
                }
              })
            }}
            Tabs={TabAddHakAkses?.data}
            IsActiveTab={TabAddHakAkses?.isActivetab} />

          {
            TabAddHakAkses?.isActivetab == 0 && <>
              <div className='grid grid-cols-2 gap-4 mt-16px'>
                <InputCheckbox
                  data={[
                    {
                      namme: 'irs_allowance',
                      label: 'Pilih Semua',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Melihat jadwal cutoff',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Menyetujui akun allowance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Mengubah limit allowance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Menolak akun allowance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'membuat jadwal cutoff',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Mengubah jadwal cutoff',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Melihat history pengguna allowance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Melihat history allowance',
                    },
                  ]}
                />
              </div>
            </>
          }

          {
            TabAddHakAkses?.isActivetab == 1 && <>
              <div className='grid grid-cols-2 gap-4 mt-16px'>
                <InputCheckbox
                  data={[
                    {
                      namme: 'irs_allowance',
                      label: 'Pilih Semua',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Menghapus Berita',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Melihat daftar Berita',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Menambahkan Berita',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Mengubah Berita',
                    },
                  ]}
                />
              </div>
            </>
          }

          {
            TabAddHakAkses?.isActivetab == 2 && <>
              <div className='grid grid-cols-3 gap-4 mt-16px'>
                <InputCheckbox
                  data={[
                    {
                      namme: 'irs_allowance',
                      label: 'Pilih Semua',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat daftar payment card',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat history penggunaan allowance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat history allowance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menambah bank',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat daftar cashin',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menghapus bank',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'mengubah jadwall cutoff',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat daftar cashout',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat daftar payment card',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'mengubah limit allowance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menolak akun allowance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'paymentcard.update',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'membuat payment card',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat detail cashin',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melakukan request cashin',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'membuat jadwal cutoff',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menyetujui akun allowance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat detail cashout',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'membaca dashboard finance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat detail jadwal cutoff',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Membaca dashboard Allowance',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melakukan request cashout',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat daftar bank',
                    },

                  ]}
                />
              </div>
            </>
          }

          {
            TabAddHakAkses?.isActivetab == 3 && <>
              <div className='grid grid-cols-2 gap-4 mt-16px'>
                <InputCheckbox
                  data={[
                    {
                      namme: 'irs_allowance',
                      label: 'Pilih Semua',
                    },

                  ]}
                />
              </div>
            </>
          }

          {
            TabAddHakAkses?.isActivetab == 4 && <>
              <div className='grid grid-cols-2 gap-4 mt-16px'>
                <InputCheckbox
                  data={[
                    {
                      namme: 'irs_allowance',
                      label: 'Pilih Semua',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Melihat daftar rekening yang ada',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Membuat rekening pengguna',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Mengedit atau memperbarui formula yang telah ada',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Melihat daftar formula yang ada',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Membuat simpanan baru',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Mengedit atau memperbarui simpanan yang telah ada',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Membuat formula atau rumus baru',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Melihat daftar simpanan yang ada',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Mengakses fitur beta',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Menghapus formula yang sudah ada',
                    },
                  ]}
                />
              </div>
            </>
          }

          {
            TabAddHakAkses?.isActivetab == 5 && <>
              <div className='grid grid-cols-2 gap-4 mt-16px'>
                <InputCheckbox
                  data={[
                    {
                      namme: 'irs_allowance',
                      label: 'Pilih Semua',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'membuat transaksi',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat laporan transaksi',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'membatalkan transaksi',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat laporan mutasi',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Membuat simpanan baru',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'Melihat daftar mutasi',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'mengubah transaksi',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat daftar transaksi',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat detail transaksi',
                    },
                  ]}
                />
              </div>
            </>
          }

          {
            TabAddHakAkses?.isActivetab == 6 && <>
              <div className='grid grid-cols-2 gap-4 mt-16px'>
                <InputCheckbox
                  data={[
                    {
                      namme: 'irs_allowance',
                      label: 'Pilih Semua',
                    },

                  ]}
                />
              </div>
            </>
          }

{
            TabAddHakAkses?.isActivetab == 7 && <>
              <div className='grid grid-cols-2 gap-4 mt-16px'>
                <InputCheckbox
                  data={[
                    {
                      namme: 'irs_allowance',
                      label: 'Pilih Semua',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat member',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menghapus hak akses',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menambah tags',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat tags',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menetapkan hak akses',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat hak akses',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menghapus tags',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat daftar tags',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'mengubah tags',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'mengubah member',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menambah hak akses',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'mengubah hak akses',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat daftar hak akses',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menghapus member',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'menambah member',
                    },
                    {
                      namme: 'irs_allowance',
                      label: 'melihat daftar member',
                    },
                    
                  ]}
                />
              </div>
            </>
          }

        </div>
        <div className='mt-16px'>
          <div className='d-flex align-center gap-10px justify-end'>
            <ButtonCancel
              action={() => setisModal(false)}
              title={'Batal'}
              paddingBottom={'6px'}
              paddingTop={'6px'}
            />
            <ButtonSave
              title={'Simpan'}
              action={() => {
                setisModal(false)
                setisModalConfirmation(true)
              }} />
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default ModalTambahHakAkses