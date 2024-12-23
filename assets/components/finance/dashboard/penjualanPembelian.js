import IBefore from 'components/icons/IBefore'
import IDot from 'components/icons/IDot'
import IMore from 'components/icons/IMore'
import INext from 'components/icons/INext'
import IReload from 'components/icons/IReload'
import React from 'react'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {

}

const PenjualanPembelian = ({
title
}) => {
  return (
    <div style={{
      background: 'var(--_Global-Common-White, #FFF)',
    }}>
      <div className='finance-dashboar-wrapper-laba'>
        <div className='finance-dashboar-wrapper-laba-sub'>
          <IMore />
          <div className='finance-dashboar-laba-title'>{title}</div>
        </div>
        <IReload />
      </div>
      <div className='finance-dashboar-laba-bottom'>
        <div className='finance-dashboar-laba-bottom-sub'>

          <div className='width-50 finance-dashboar-wrapper-tgl'>
            <IBefore />
            <div className='finance-dashboar-laba-tgl'>1 Jan - 31 Des 2023</div>
            <INext />
          </div>

          <div className='width-50 finance-dashboar-wrapper-tgl'>
            <IBefore />
            <div className='finance-dashboar-laba-tgl'>1 Jan - 31 Des 2023</div>
            <INext />
          </div>

        </div>

        <div style={{
          borderBottom: '1px solid #F2F2F2',
          paddingBottom: '10px'
        }} className='finance-dashboar-value-wrapp-penjualan'>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>

            <div style={{ padding: '0px 16px 0px 16px', width: '50%', display: 'flex', justifyContent: 'space-between' }}>
              <div className='finance-dashboar-value-wrapp-sub'>
                <div className='finance-dashboar-tanggal'>Pendapatan</div>
              </div>
              <div style={{ justifyContent: 'flex-end' }} className='finance-dashboar-value-wrapp-sub'>
                <div className='finance-dashboar-value-rp'>Rp.</div>
                <div className='finance-dashboar-value-jumlah'>20.000.000</div>
              </div>
            </div>

            <div style={{ padding: '0px 16px 0px 16px', width: '50%', display: 'flex', justifyContent: 'space-between' }}>
              <div className='finance-dashboar-value-wrapp-sub'>
                <div className='finance-dashboar-tanggal'>Belum Lunas</div>
              </div>
              <div style={{ justifyContent: 'flex-end' }} className='finance-dashboar-value-wrapp-sub'>
                <div className='finance-dashboar-value-rp'>Rp.</div>
                <div className='finance-dashboar-value-jumlah'>0</div>
              </div>
            </div>

          </div>
        </div>

        <div className='finance-dashboar-value-wrapp-penjualan'>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>

            <div style={{ padding: '0px 16px 0px 16px', width: '50%', display: 'flex', justifyContent: 'space-between' }}>
              <div className='finance-dashboar-value-wrapp-sub-faktur'>
                <div className='finance-dashboar-faktur'>Faktur Lunas</div>
                <div className='display-flex-align-center'>
                  <div className='finance-dashboar-faktur-title'>Rp.</div>
                  <div className='finance-dashboar-laba-title-value'>20.000.000</div>
                </div>
              </div>
              <div className='finance-dashboar-value-wrapp-sub-faktur'>
                <div style={{ textAlign: 'end' }} className='finance-dashboar-faktur'>Faktur Lunas</div>
                <div style={{ 
                  justifyContent: 'flex-end'
                }} className='display-flex-align-center'>
                  <div className='finance-dashboar-faktur-title'>Rp.</div>
                  <div className='finance-dashboar-laba-title-value'>20.000.000</div>
                </div>
              </div>
            </div>

            <div style={{ padding: '0px 16px 0px 16px', width: '50%', display: 'flex', justifyContent: 'space-between' }}>
              <div className='finance-dashboar-value-wrapp-sub-faktur'>
                <div className='finance-dashboar-faktur'>Belum jatuh tempo</div>
                <div className='display-flex-align-center'>
                  <div className='finance-dashboar-faktur-title'>Rp.</div>
                  <div className='finance-dashboar-laba-title-value'>20.000.000</div>
                </div>
              </div>
              <div className='finance-dashboar-value-wrapp-sub-faktur'>
                <div style={{ textAlign: 'end' }} className='finance-dashboar-faktur'>Lewat jatuh tempo</div>
                <div style={{ 
                  justifyContent: 'flex-end'
                }} className='display-flex-align-center'>
                  <div className='finance-dashboar-faktur-title'>Rp.</div>
                  <div className='finance-dashboar-laba-title-value'>20.000.000</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default PenjualanPembelian