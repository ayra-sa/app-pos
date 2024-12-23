import IBack from 'components/icons/IBack'
import ModalConfirmationAdd from 'components/modalConfirmationAdd';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import DatePicker from 'react-date-picker'

const AddPengaturan = ({
  setisStatusPageSimpanan,
}) => {

  const [Tgl, setTgl] = useState(new Date());

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const [isNumberColorChoose, setisNumberColorChoose] = useState(1);

  const reactangles = [
    {
      id: 1,
      color: '#219653',
    },
    {
      id: 2,
      color: '#143059',
    },
    {
      id: 3,
      color: '#E845C4',
    },
    {
      id: 4,
      color: '#B4964B',
    },
    {
      id: 5,
      color: '#218196',
    },
    {
      id: 6,
      color: '#712196',
    },
    {
      id: 7,
      color: '#D886E5',
    },
  ]

  const router = useRouter()

  const SimpanAct = () => {
    setisModalConfirmationAdd(false)
    setisStatusPageSimpanan('')
  }

  return (
    <div className='finance-simpanan-add-pengaturan-kontainer'>
      <div className='finance-simpanan-add-pengaturan-top-wrapp'>
        <div className='mr-2 cursor-pointer' onClick={() => setisStatusPageSimpanan('')} >
          <IBack />
        </div>
        <div className='finance-simpanan-add-pengaturan-top-title'>Tambah Jenis Simpanan</div>
      </div>
      <div className='garis-tipis'></div>
      <div className='finance-simpanan-add-pengaturan-top-title-sub'>Jenis Simpanan</div>
      <div className='garis-tebal'></div>

      <div>
        <div className='finance-simpanan-add-pengaturan-top-title-sub'>Type Simpanan</div>

        <div className='flex mt-2'>
          <div className='mr-3'>
            <input type="radio" name="vehicle" value="Bike" />
            <label for="vehicle1"> Wajib</label>
          </div>
          <div className='mr-3'>
            <input type="radio" name="vehicle" value="Car" />
            <label for="vehicle2"> Pokok</label>
          </div>
          <div className='mr-3'>
            <input type="radio" name="vehicle" value="Boat" />
            <label for="vehicle3"> Suka Rela</label>
          </div>
          <div>
            <input type="radio" name="vehicle" value="Boat" />
            <label for="vehicle3"> Berjangka</label>
          </div>
        </div>
      </div>

      <div className='garis-tipis'></div>
      <div className='finance-simpanan-add-pengaturan-top-title-sub'>Detail Simpanan</div>
      <div className='garis-tebal'></div>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <div className='finance-penerimaan-create-top'>
            <div className='finance-penerimaan-create-title-penerima-input'>Nama Jenis Simpanan</div>
            <input placeholder='Nama Jenis Simpanan' className='finance-penerimaan-create-input-number' type="text" />
          </div>
        </div>
        <div>
          <div className='finance-penerimaan-create-top'>
            <div className='finance-penerimaan-create-title-penerima-input'>Besaran Simpanan</div>
            <input placeholder='Rp 0' className='finance-penerimaan-create-input-number' type="text" />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mt-5'>
        <div>
          <div className='finance-penerimaan-create-title-penerima-input'>Jangka Waktu*</div>
          <select className='finance-penerimaan-create-dropdown' name="cars" id="cars">
            <option className='finance-penerimaan-create-dropdown-option' value="">Bulanan</option>
            <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
            <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
            <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
          </select>
        </div>
        <div>
          <div className='finance-penerimaan-create-title-penerima-input'>Tanggal Jatuh Tempo*</div>
          <DatePicker className={'finance-penerimaan-create-title-penerima-tgl'} onChange={setTgl} value={Tgl} />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <div className='finance-penerimaan-create-top'>
            <div className='finance-penerimaan-create-title-penerima-input'>Bunga/ Premi*</div>
            <input placeholder='0' className='finance-penerimaan-create-input-number' type="text" />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 mt-2'>
        <div>
          <div className='finance-penerimaan-create-title-penerima-input'>Deskripsi</div>
          <textarea placeholder='Isi deskripsi disini' className='finance-penerimaan-create-title-penerima-textarea' name="" id=""></textarea>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 mt-2'>
        <div>
          <div className='finance-penerimaan-create-title-penerima-input'>Petunjuk Simpanan</div>
          <textarea placeholder='Isi petunjuk simpanan disini' className='finance-penerimaan-create-title-penerima-textarea' name="" id=""></textarea>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 mt-2'>
        <div>
          <div className='d-flex align-center finance-penerimaan-create-title-penerima-input mb-8px'>Tampilan Kartu</div>

          <div className='d-flex align-center'>
            {
              reactangles?.map((res) => {
                return (
                  <div
                    onClick={() => setisNumberColorChoose(res?.id)}
                    style={{
                      background: res?.color
                    }} 
                    className='cursor-pointer finance-simpanan-pengaturan-rectangle-input '>
                    {
                      res?.id == isNumberColorChoose && <ICeklis />
                    }
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>

      <div className='grid grid-cols-1 mt-4 gap-4'>
        <div className='flex justify-end'>
          <div
            onClick={() => setisModalConfirmationAdd(true)}
            className='finance-penerimaan-create-btn-print mr-2 cursor-pointer'>Buat Tanpa Aktifkan</div>
          <div
            onClick={() => setisModalConfirmationAdd(true)}
            className='cursor-pointer finance-penerimaan-create-btn-simpan'>buat dan Aktifkan</div>
        </div>
      </div>

      <ModalConfirmationAdd
        actionCallback={() => SimpanAct()}
        isModalUp={isModalConfirmationAdd}
        setisModalUp={setisModalConfirmationAdd}
      />
    </div >
  )
}

const ICeklis = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9987 16.6693C8.23059 16.6693 6.5349 15.9669 5.28465 14.7166C4.03441 13.4664 3.33203 11.7707 3.33203 10.0026C3.33203 8.23449 4.03441 6.5388 5.28465 5.28856C6.5349 4.03832 8.23059 3.33594 9.9987 3.33594C11.7668 3.33594 13.4625 4.03832 14.7127 5.28856C15.963 6.5388 16.6654 8.23449 16.6654 10.0026C16.6654 11.7707 15.963 13.4664 14.7127 14.7166C13.4625 15.9669 11.7668 16.6693 9.9987 16.6693ZM11.1354 7.5326L9.34203 10.9576L8.0562 9.79927C7.97483 9.72606 7.87984 9.66959 7.77666 9.63309C7.67347 9.59659 7.5641 9.58077 7.4548 9.58653C7.3455 9.5923 7.2384 9.61953 7.13962 9.66669C7.04085 9.71384 6.95233 9.77999 6.87911 9.86135C6.8059 9.94272 6.74943 10.0377 6.71293 10.1409C6.67643 10.2441 6.66061 10.3535 6.66637 10.4628C6.67214 10.5721 6.69938 10.6792 6.74653 10.7779C6.79369 10.8767 6.85983 10.9652 6.9412 11.0384L9.02453 12.9134C9.11893 12.9984 9.2315 13.0608 9.35367 13.0956C9.47583 13.1304 9.60434 13.1369 9.72937 13.1144C9.8544 13.092 9.97266 13.0413 10.0751 12.9662C10.1775 12.891 10.2614 12.7935 10.3204 12.6809L12.612 8.30594C12.7146 8.11012 12.7351 7.88158 12.6692 7.6706C12.6032 7.45963 12.4562 7.28349 12.2604 7.18094C12.0645 7.07839 11.836 7.05782 11.625 7.12378C11.4141 7.18973 11.2379 7.33679 11.1354 7.5326Z" fill="white" />
    </svg>
  )
}

export default AddPengaturan