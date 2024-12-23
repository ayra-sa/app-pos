import IBukuBesarLaporan from 'components/icons/IBukuBesarLaporan'
import IJurnalUmumLaporan from 'components/icons/IJurnalUmumLaporan'
import ILabaRugiLaporan from 'components/icons/ILabaRugiLaporan'
import INeracaLaporan from 'components/icons/INeracaLaporan'
import INext from 'components/icons/INext'
import IPencatatanbebanLaporan from 'components/icons/IPencatatanbebanLaporan'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import Link from 'next/link'
import React from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const iconsLaporan = {
  INeracaLaporan: <INeracaLaporan />,
  IBukuBesarLaporan: <IBukuBesarLaporan />,
  IJurnalUmumLaporan: <IJurnalUmumLaporan />,
  IPencatatanbebanLaporan: <IPencatatanbebanLaporan />,
  ILabaRugiLaporan: <ILabaRugiLaporan />
}

const Laporan = () => {

  const laporans = [
    {
      title: 'Neraca',
      deskripsi: 'Menampilkan apa yang dimiliki (aset), apa saja utangnya (liabilitas), dan apa yang sudah diinvestasikan ke perusahaan ini (ekuitas) pada tanggal tertentu.',
      icon: 'INeracaLaporan',
      link: '/finance/laporan/neraca',
    },
    {
      title: 'Buku Besar',
      deskripsi: 'Menampilkan semua transaksi berdasarkan akun dalam periode tertentu, termasuk kronologi pergerakan transaksinya selama periode berlangsung.',
      icon: 'IBukuBesarLaporan',
      link: '/finance/laporan/buku-besar',
    },
    {
      title: 'Jurnal Umum',
      deskripsi: 'Menampilkan semua journal entry per transaksi dalam periode tertentu. Anda dapat melacak transaksi yang masuk ke masing-masing akun.',
      icon: 'IJurnalUmumLaporan',
      link: '/finance/laporan/jurnal-umum',
    },
    {
      title: 'Pencatatan beban',
      deskripsi: 'Menampilkan semua pendapatan yang diperoleh dan biaya yang dikeluarkan dalam periode tertentu. Template laporan versi terkini bisa Anda custom sesuai kebutuhan.',
      icon: 'IPencatatanbebanLaporan',
      link: '/finance/laporan/pencatatan-beban',
    },
    {
      title: 'Laba Rugi',
      deskripsi: 'Menampilkan semua pendapatan yang diperoleh dan biaya yang dikeluarkan dalam periode tertentu. Template laporan versi terkini bisa Anda custom sesuai kebutuhan.',
      icon: 'ILabaRugiLaporan',
      link: '/finance/laporan/laba-rugi',
    },
  ]

  return (
    <Admin>
      <div className='finance-laporan-kontainer'>

        <div className='finance-simpanan-title-wrapp'>
          <div className='finance-simpanan-title'>Laporan</div>
          <div className='cursor-pointer'><IReload /></div>
        </div>

        <div className='grid grid-cols-2 gap-4 mt-5 pl-5 pr-5'>
          {
            laporans?.map((res) => {
              return (
                <div className='finance-laporan-wrapp p-3'>
                  <div>
                    {
                      iconsLaporan[res?.icon]
                    }
                  </div>
                  <div className='w-100 pl-3 d-flex align-center justify-between'>
                    <div>
                      <div className='finance-laporan-title'>{res?.title}</div>
                      <div className='finance-laporan-deskripsi'>{res?.deskripsi}</div>
                    </div>
                    <Link href={res?.link}>
                      <div className='pl-3 cursor-pointer'>
                        <INext />
                      </div>
                    </Link>
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

export default WithAuth(Laporan)