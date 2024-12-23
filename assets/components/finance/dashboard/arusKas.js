import IBefore from 'components/icons/IBefore'
import IDot from 'components/icons/IDot'
import IMore from 'components/icons/IMore'
import INext from 'components/icons/INext'
import IReload from 'components/icons/IReload'
import React from 'react'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const completeness_data = {
  options: {
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false,
      dropShadow: {
        enabled: true,
        left: 2,
        top: 2,
        opacity: 0.5
      }
    },
  }
};
const ArusKas = () => {
  return (
    <div style={{
      background: 'var(--_Global-Common-White, #FFF)',
      height: '100%',
    }}>
      <div className='finance-dashboar-wrapper-laba'>
        <div className='finance-dashboar-wrapper-laba-sub'>
          <IMore />
          <div className='finance-dashboar-laba-title'>Arus Kas</div>
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
            <ReactApexChart options={completeness_data.options} series={[
              {
                name: 'Retired Projection',
                data: [
                  {
                    label: 'apel',
                    value: 10
                  }
                ],
              }
            ]} type="bar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArusKas