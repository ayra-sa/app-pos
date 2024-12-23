import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import InputText from 'components/Input/InputText'
import ModalWrapper from 'components/Modal/ModalWrapper'
import TitleModal from 'components/TitlePage/TitleModal'
import React from 'react'

function ModalTambahKategoriAsset({
  setisModal,
  isModalUp,
  setisModalConfirmation
}) {
  return (
    <ModalWrapper
      bottom={'34%'}
      left={'25%'}
      right={'25%'}
      top={'34%'}
      setisModalUp={setisModal}
      isModalUp={isModalUp}>
      <div className='h-100 p-16px d-flex flex-column justify-between'>
        <div>
          <TitleModal title={'Tambah Kategori'} setisModalClose={setisModal} />
          <hr className='mb-16px mt-16px' />
          <InputText placeholder={'Masukan Nama Kategori'} title={'Nama Kategori*'} />
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

export default ModalTambahKategoriAsset