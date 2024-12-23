import IBack from 'components/icons/IBack'
import IExportEcxel from 'components/icons/IExportExcel'
import INext from 'components/icons/INext'
import IReload from 'components/icons/IReload'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import Admin from 'layouts/Admin'
import Link from 'next/link'
import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const Neraca = () => {
  const [valueStart, setValueStart] = useState(new Date());
  const [valueEnd, setValueEnd] = useState(new Date());


  return (
    <Admin>
      <div className='finance-laporan-neraca'>

        <div className='display-flex-align-center justify-between'>
          <div className='display-flex-align-center'>
            <Link href={'/finance/laporan/'}>
              <div className='cursor-pointer'><IBack /></div>
            </Link>
            <div className='ml-3 finance-laporan-neraca-title'>Neraca</div>
          </div>
          <IReload />
        </div>

        <div className='garis-tipis'></div>

        <div className='display-flex-align-center justify-between'>
          <div className='finance-penerimaan-filter-tgl'>
            <div className='finance-penerimaan-filter-tgl-style'>Filter tgl</div>
            <div>
              <DatePicker onChange={setValueStart} value={valueStart} />
            </div>
            <div style={{ minWidth: '8px' }}></div>
            <div className='display-flex-align-center'>
              <div className='mr-2 finance-penerimaan-create-title-penerima-input'>Periode</div>
              <select className='finance-laporan-neraca-dropdown' name="cars" id="cars">
                <option className='finance-penerimaan-create-dropdown-option' value="">Hari ini</option>
                <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
                <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
                <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className='Export-button-excel-wrapp'>
            <IExportEcxel />
            <div className='Export-button-excel'>Export Excel</div>
          </div>
        </div>

        <div className='garis-tipis'></div>

        <div className='display-flex-align-center justify-between'>
          <IBack />
          <div className='finance-laporan-neraca-tanggal'>1 jan - 31 Des 2023</div>
          <INext />
        </div>
      </div>
    </Admin>
  )
}

export default WithAuth(Neraca)