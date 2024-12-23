import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import InputRadio from 'components/Input/InputRadio'
import InputTextArea from 'components/Input/InputTexArea'
import InputText from 'components/Input/InputText'
import ModalWrapper from 'components/Modal/ModalWrapper'
import TitleModal from 'components/TitlePage/TitleModal'
import React from 'react'

function ModalTambahTagAnggotaSub({
  setisModal,
  isModalUp,
  setisModalConfirmation
}) {
  return (
    <ModalWrapper
      bottom={'18%'}
      left={'25%'}
      right={'25%'}
      top={'18%'}
      setisModalUp={setisModal}
      isModalUp={isModalUp}>
      <div className='h-100 p-16px d-flex flex-column justify-between'>
        <div>
          <TitleModal title={'Tambah Sub Tag'} setisModalClose={setisModal} />
          <hr className='mb-16px mt-16px' />

          <div className='grid grid-cols-2 gap-4'>
            <InputText
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Nama Tag*'}
              placeholder={'Masukan Nama Tag'}
            />
            <InputText
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Kode Tag*'}
              placeholder={'Masukan Kode'}
            />
            <InputRadio
              multi={true}
              title={'Tampilkan Pada Aplikasi Mobile*'}
              valueMulti={[
                { titleCheck: 'Aktif' },
                { titleCheck: 'Tidak Aktif' },
              ]}
            />
          </div>
          <div className='grid grid-cols-1 gap-4 mt-16px'>
            <InputTextArea
              flexParent={1}
              classTitle={'dropdown-status-data-table-title'}
              title={'Deskripsi Tag'}
              rows={4}
              placeholder={'Masukan Deskripsi Tag'}
            />
          </div>

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
                setisModalConfirmation(true)
              }} />
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default ModalTambahTagAnggotaSub