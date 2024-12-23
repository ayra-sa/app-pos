import IAdd from 'components/icons/IAdd'
import IBank from 'components/icons/IBank'
import IDompet from 'components/icons/IDompet'
import IEdit from 'components/icons/IEdit'
import IKirimUang from 'components/icons/IKirimUang'
import IReload from 'components/icons/IReload'
import ISearchInput from 'components/icons/IsearchInput'
import ITransferUang from 'components/icons/ItransferUang'
import Link from 'next/link'
import React from 'react'
import DataTableRiwayatTransaksi from './dataTableRiwayatTransaksi'

const TabPageAkunKasBankRiwayatTransaksi = ({
  setmodalDetailDataTableRiwayatTransaksi,
}) => {
  return (
    <div className='tab-page-akun-kas-bank'>

      <div className='garis-tipis'></div>

      <div className='display-flex-align-center p-3 pt-0'>
        <div className='tab-page-akun-kas-bank-sub-right-sub-kategori'>Pilih Kategori Akun</div>
        <div style={{ width: '100%' }} className='dropdown-status-data-table-wrapp'>
          <select className='dropdown-status-data-table-select' name="cars" id="cars">
            <option className='finance-penerimaan-create-dropdown-option' value="">Semua</option>
            <option className='finance-penerimaan-create-dropdown-option' value="saab">Saab</option>
            <option className='finance-penerimaan-create-dropdown-option' value="opel">Opel</option>
            <option className='finance-penerimaan-create-dropdown-option' value="audi">Audi</option>
          </select>
        </div>
      </div>

      <div className='garis-tipis'></div>

      <DataTableRiwayatTransaksi setmodalDetailDataTableRiwayatTransaksi={setmodalDetailDataTableRiwayatTransaksi}/>

    </div>
  )
}

export default TabPageAkunKasBankRiwayatTransaksi