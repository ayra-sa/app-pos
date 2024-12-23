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

const LabadanRugi = () => {
  return (
    <div style={{
      background: 'var(--_Global-Common-White, #FFF)',
      height: '100%',
      // padding: '16px 16px'
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column'
    }}>
      <div className=''>
        <div className='finance-dashboar-wrapper-laba'>
          <div className='finance-dashboar-wrapper-laba-sub'>
            <IMore />
            <div className='finance-dashboar-laba-title'>Laba/Rugi Tahun ini</div>
          </div>
          <IReload />
        </div>
        <div className='finance-dashboar-laba-bottom'>
          <div>
            <div className='finance-dashboar-wrapper-tgl'>
              <IBefore />
              <div className='finance-dashboar-laba-tgl'>1 Jan - 31 Des 2023</div>
              <INext />
            </div>
            <div className='finance-dashboar-wrapp-chart'>
              <div style={{ width: '50%' }}>

                <div className='finance-dashboar-des-chart-wrapp-sub'>
                  <IDot color={'#F2994A'} />
                  <div className='finance-dashboar-des-chart'>Pendapatan</div>
                  <div className='finance-dashboar-des-chart-percent'>5%</div>
                </div>
                <div style={{ minHeight: '8px' }}></div>

                <div className='finance-dashboar-des-chart-wrapp-sub'>
                  <IDot color={'#27AE60'} />
                  <div className='finance-dashboar-des-chart'>Nilai Hpp</div>
                  <div className='finance-dashboar-des-chart-percent'>5%</div>
                </div>
                <div style={{ minHeight: '8px' }}></div>

                <div className='finance-dashboar-des-chart-wrapp-sub'>
                  <IDot color={'#EB5757'} />
                  <div className='finance-dashboar-des-chart'>Pengeluaran</div>
                  <div className='finance-dashboar-des-chart-percent'>5%</div>
                </div>
              </div>
              <div style={{ width: '50%' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ReactApexChart
                  options={options}
                  type='donut'
                  series={[44, 55, 41]}
                  width={'100%'}
                  height={'100%'}
                />
              </div>
            </div>
          </div>
          <div style={{
            border: '1px solid #F2F2F2',
          }}></div>
        </div>
      </div>
      <div style={{
              padding: '16px 16px 24px 16px'
      }} className='finance-dashboar-value-wrapp'>
        <div className='finance-dashboar-value-wrapp-sub'>
          <div className='finance-dashboar-value-rp'>Rp.</div>
          <div className='finance-dashboar-value-jumlah'>20.000.000</div>
        </div>
        <div className='finance-dashboar-value-wrapp-sub'>
          <div className='finance-dashboar-tanggal'>Dibanding 1 Jan - 17 Apr 2022</div>
        </div>
      </div>
    </div>
  )
}

export default LabadanRugi