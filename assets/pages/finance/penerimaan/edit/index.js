import IAdd from 'components/icons/IAdd';
import IBack from 'components/icons/IBack'
import Admin from 'layouts/Admin'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import ICeklis from 'components/icons/ICeklis';
import WithAuth from 'components/config/protect';

const EditPenerimaan = () => {
  const [Tgl, setTgl] = useState(new Date());

  return (
    <Admin>
      <div className='finance-penerimaan-create-kontainer'>
        <div className='finance-penerimaan-create-title-wrapp'>
          <Link href='/finance/penerimaan'>
            <div className='cursor-pointer'><IBack /></div>
          </Link>
          <div className='finance-penerimaan-create-title'>Edit Penerimaan</div>
        </div>
        <div className='garis-tipis'></div>
        <div>
          <div className='finance-penerimaan-create-title-sub'>Detail Penerimaan</div>
        </div>
        <div className='garis-tebal'></div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div className='finance-penerimaan-create-title-penerima-input'>Penerimaan ke Akun*</div>
            <select className='finance-penerimaan-create-dropdown' name="cars" id="cars">
              <option className='finance-penerimaan-create-dropdown-option' value="">Pilih Akun</option>
              <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
              <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
              <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
            </select>
          </div>
          <div>
            <div className='finance-penerimaan-create-top'>
              <div className='d-flex align-center justify-between'>
                <div className='finance-penerimaan-create-title-penerima-input'>Nomor Bukti</div>
                <div style={{ gap: '10px', marginRight: '8px' }} className='d-flex align-center'>
                  <div style={{ fontWeight: 400 }} className='finance-penerimaan-create-title-penerima-input'>Otomatis</div>
                  <ICeklis />
                </div>
              </div>
              <input className='finance-penerimaan-create-input-number' type="text" />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-2'>
          <div>
            <div className='finance-penerimaan-create-title-penerima-input'>Tanggal*</div>
            <DatePicker className={'finance-penerimaan-create-title-penerima-tgl'} onChange={setTgl} value={Tgl} />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-2'>
          <div>
            <div className='finance-penerimaan-create-title-penerima-input'>Keterangan*</div>
            <textarea placeholder='Beri keterangan disini' className='finance-penerimaan-create-title-penerima-textarea' name="" id=""></textarea>
          </div>
        </div>
        <div className='garis-tipis'></div>
        <div>
          <div className='finance-penerimaan-create-title-sub'>Detail Transaksi</div>
        </div>
        <div className='garis-tebal'></div>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <div className='finance-penerimaan-create-title-penerima-input'>Penerimaan ke Akun*</div>
            <select className='finance-penerimaan-create-dropdown' name="cars" id="cars">
              <option className='finance-penerimaan-create-dropdown-option' value="">Pilih Akun</option>
              <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
              <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
              <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
            </select>
          </div>
          <div>
            <div className='finance-penerimaan-create-top'>
              <div className='finance-penerimaan-create-title-penerima-input'>Nomor Akun</div>
              <input className='finance-penerimaan-create-input-number' type="text" />
            </div>
          </div>
          <div>
            <div className='finance-penerimaan-create-top'>
              <div className='finance-penerimaan-create-title-penerima-input'>Nilai</div>
              <input className='finance-penerimaan-create-input-number' type="text" />
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
        <div className='grid grid-cols-1 mt-4 gap-4'>
          <div>
            <div className='finance-penerimaan-create-total-title'>Total</div>
            <div className='finance-penerimaan-create-total-value'>RP 0</div>
          </div>
        </div>
        <div className='grid grid-cols-1 mt-4 gap-4'>
          <div className='flex justify-end'>
            <div className='finance-penerimaan-create-btn-print mr-2'>Print</div>
            <div className='finance-penerimaan-create-btn-simpan'>Simpan</div>
          </div>
        </div>
      </div>
    </Admin>
  )
}

export default WithAuth(EditPenerimaan)