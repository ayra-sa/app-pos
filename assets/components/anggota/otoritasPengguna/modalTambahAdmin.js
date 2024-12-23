import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import InputRadio from 'components/Input/InputRadio'
import InputText from 'components/Input/InputText'
import ModalWrapper from 'components/Modal/ModalWrapper'
import TitleModal from 'components/TitlePage/TitleModal'
import TitlePageBack from 'components/TitlePage/TitlePageBack'
import React from 'react'

function ModalTambahHakAdmin({
  setisModal,
  isModalUp,
  setisModalConfirmation,
}) {
  return (
    <ModalWrapper
      overflow={'hidden'}
      bottom={'10%'}
      left={'10%'}
      right={'10%'}
      top={'10%'}
      setisModalUp={setisModal}
      isModalUp={isModalUp}>
      <div className='p-16px d-flex flex-column justify-between'>
        <TitleModal title={'Tambah Admin'} setisModalClose={setisModal} />
        <hr className='mt-16px' />
      </div>
      <div 
        style={{
          paddingBottom: '0px',
          overflow: 'auto',
          maxHeight: 'calc(85%)'
        }}
        className='h-100 p-16px d-flex flex-column justify-between'>
        <div>
          <div className='grid grid-cols-2 gap-4'>
            <InputText
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Nama Depan*'}
              placeholder={'Masukan Nama Depan'}
            />
            <InputText
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Nama Belakang*'}
              placeholder={'Masukan Nama Belakang'}
            />
            <InputText
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Email*'}
              placeholder={'Masukan Email'}
            />
            <InputText
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Identitas*'}
              placeholder={'Masukan Identitas'}
            />
            <InputRadio
              multi={true}
              title={'Status*'}
              valueMulti={[
                { titleCheck: 'Tidak aktif' },
                { titleCheck: 'aktif' },
              ]}
            />
          </div>

          <hr className='mt-16px mb-8px' />
          <TitleModal icon={'.'} title={'Pilih Hak Akses'} setisModalClose={() => { }} />
          <hr style={{ marginTop: '8px' }} />

          <div className='grid grid-cols-1 gap-4 mt-16px'>
            <InputRadio
              multi={true}
              title={'Status*'}
              valueMulti={[
                { titleCheck: 'Super Admin' },
                { titleCheck: 'Admin' },
                { titleCheck: 'Training' },
                { titleCheck: 'Kasir' },
                { titleCheck: 'Admin 2' },
              ]}
            />
          </div>

          <hr className='mt-16px mb-8px' />
          <TitleModal icon={'.'} title={'Pilih Gudang'} setisModalClose={() => { }} />
          <hr style={{ marginTop: '8px' }} />

          <div className='grid grid-cols-3 gap-4 mt-16px'>

            {
              [1, 2, 3, 4, 5, 6]?.map((res) => {
                return (
                  <div className='gudang-wrap-satuan'>
                    <IGudang />
                    <div className='gudang-wrap-satuan-sub'>
                      <div className='gudang-wrap-satuan-title'>Gudang 1</div>
                      <div className='gudang-wrap-satuan-title-sub'>Cabang</div>
                      <div style={{
                        color: '#828282',
                      }} className='gudang-wrap-satuan-title-sub'>Gudang cabang</div>
                    </div>
                    <input type="checkbox" />
                  </div>
                )
              })
            }

          </div>

        </div>
        <div style={{
          marginBottom: '20px',
        }} className='mt-16px mb-16px'>
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

const IGudang = () => {
  return (
    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34 18.3523C34.0024 18.0106 33.9337 17.6721 33.7981 17.3585C33.6624 17.0449 33.4629 16.763 33.2123 16.5307L18 2.5L2.78775 16.5307C2.53722 16.7631 2.33781 17.045 2.2022 17.3586C2.06659 17.6722 1.99774 18.0106 2.00006 18.3523V32.0384C2.00006 32.6912 2.2594 33.3173 2.72102 33.779C3.18265 34.2406 3.80875 34.4999 4.46159 34.4999H31.5385C32.1913 34.4999 32.8174 34.2406 33.279 33.779C33.7406 33.3173 34 32.6912 34 32.0384V18.3523Z" stroke="#44546F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.0001 33.8863C18.0001 34.5017 18.6155 34.5017 18.6155 34.5017H25.9976C26.613 34.5017 26.613 33.8863 26.613 33.8863V26.5042C26.613 25.8888 25.9976 25.8888 25.9976 25.8888H18.6155C18.0001 25.8888 18.0001 26.5042 18.0001 26.5042M18.0001 33.8863V26.5042M18.0001 33.8863C18.0001 33.8863 18.0001 34.5017 17.3847 34.5017H10.0026C10.0026 34.5017 9.38721 34.5017 9.38721 33.8863V26.5042C9.38721 26.5042 9.38721 25.8888 10.0026 25.8888H17.3847C17.3847 25.8888 18.0001 25.8888 18.0001 26.5042M14.3078 17.2734H21.69C21.69 17.2734 22.3053 17.2734 22.3053 17.8888V25.271C22.3053 25.271 22.3053 25.8863 21.69 25.8863H14.3078C14.3078 25.8863 13.6924 25.8863 13.6924 25.271V17.8888C13.6924 17.8888 13.6924 17.2734 14.3078 17.2734Z" stroke="#44546F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  )
}
export default ModalTambahHakAdmin