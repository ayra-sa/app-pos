import IImigrasiAnggota from 'components/icons/IImigrasiAnggota'
import IInstalasiProgramSimpanPinjam from 'components/icons/IInstalasiProgramSimpanPinjam'
import IReload from 'components/icons/IReload'
import ISimpananPokok from 'components/icons/ISimpananPokok'
import ISinkron from 'components/icons/ISinkron'
import Admin from 'layouts/Admin'
import React from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const icons = {
  IImigrasiAnggota: <IImigrasiAnggota />,
  ISimpananPokok: <ISimpananPokok />,
  IInstalasiProgramSimpanPinjam: <IInstalasiProgramSimpanPinjam />
}

const Pengaturan = () => {

  const Pengaturan = [
    {
      title: 'Migrasi Anggota',
      deskripsi: 'Menyinkronkan data anggota ke dalam daftar anggota koperasi yang telah tervalidasi',
      icon: 'IImigrasiAnggota',
    },
    {
      title: 'Simpanan Pokok',
      deskripsi: 'Menyinkronkan data anggota ke dalam simpanan pokok. (lakukan jika data anggota masih belum terdaftar pada simpanan pokok)',
      icon: 'ISimpananPokok',
    },
    {
      title: 'Instalasi Program Simpan Pinjam',
      deskripsi: 'Menyinkronkan data anggota ke dalam daftar anggota koperasi yang telah tervalidasi',
      icon: 'IInstalasiProgramSimpanPinjam',
    },
  ]
  return (
    <Admin>
      <div className='finance-penerimaan-kontainer'>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Pengaturan Anggota</div>
          <IReload />
        </div>

        <div className='grid grid-cols-3 gap-4 anggota-pengaturan-migrasi-sub-sinkron-wrapp mt-2'>

          {
            Pengaturan?.map((res) => {
              return (
                <div className='anggota-pengaturan-migrasi-sub-sinkron-wrapp-satuan'>

                  <div className='display-flex-align-center'>
                    {
                      icons[res?.icon]
                    }
                    <div className='ml-3'>
                      <div className='mt-2 anggota-pengaturan-migrasi'>{res?.title}</div>
                      <div className='mt-2 anggota-pengaturan-migrasi-sub'>{res?.deskripsi}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: '30px' }} className='display-flex-align-center justify-end mt-3'>
                    <div className='anggota-pengaturan-migrasi-sub-sinkron-wrapp-satuan-bottom'>
                      <ISinkron />
                      <div className='ml-1 anggota-pengaturan-migrasi-sub-sinkron'>Singkronisasi</div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </Admin>
  )
}

export default WithAuth(Pengaturan)