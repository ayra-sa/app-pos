import IPusatBantuan from 'components/icons/IPusatBantuan'
import React from 'react'

const PusatBantuan = () => {
  return (
    <div className='finance-dashboar-pusat-bantuan-wrapp'>
      <div className='finance-dashboar-pusat-bantuan-wrapp-sub-first'>
        <IPusatBantuan/>
      </div>
      <div className='finance-dashboar-pusat-bantuan-wrapp-sub-second'>
        <div className='finance-dashboar-pusat-bantuan-title'>Pusat bantuan</div>
        <div className='finance-dashboar-pusat-bantuan-title-sub'>Butuh Bantuan?, Segera hubungi CS kami untuk mendapatkan jawaban dari apa yang anda butuhkan</div>
      </div>
      <div className='finance-dashboar-pusat-bantuan-wrapp-sub-third'>
        <div className='finance-dashboar-pusat-bantuan-button'>Hubungi Customer Service</div>
      </div>
    </div>
  )
}


export default PusatBantuan