
import React from 'react'
import SideBarDropdown from 'components/Dropdowns/SidebarDropdown'
import Admin from 'layouts/Admin'
import LabadanRugi from 'components/finance/dashboard/labaRugi'
import BebanPerusahaan from 'components/finance/dashboard/bebanPerushaan'
import ArusKas from 'components/finance/dashboard/arusKas'
import PenjualanPembelian from 'components/finance/dashboard/penjualanPembelian'
import PusatBantuan from 'components/finance/dashboard/pusatbantuan'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const Finance = () => {
  return (
    <Admin>
      <div className='grid grid-cols-3 gap-4'>
        <LabadanRugi />
        <ArusKas />
        <BebanPerusahaan />
      </div>
      <div style={{ marginTop: '16px' }} className='grid grid-cols-2 gap-4'>
        <PenjualanPembelian title={'Laba/Rugi Tahun ini'} />
        <PenjualanPembelian title={'Beban perusahaan'} />
      </div>
      <div style={{ marginTop: '16px' }} className='grid grid-cols-1 gap-4'>
        <PusatBantuan />
      </div>
    </Admin>
  )
}

export default WithAuth(Finance)