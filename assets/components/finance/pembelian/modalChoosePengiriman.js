import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import DetailModalData from 'components/DetailModalData'
import InputTextArea from 'components/Input/InputTexArea'
import ModalWrapper from 'components/Modal/ModalWrapper'
import StatusModalData from 'components/StatusModal'
import Tab from 'components/Tab/inddex'
import TitleModal from 'components/TitlePage/TitleModal'
import TitlePage from 'components/TitlePage/TitlePage'
import Total from 'components/Total'
import TotalAll from 'components/TotalAll'
import INext from 'components/icons/INext'
import React from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'

function ModalChoosePengiriman({
  setisModalUp,
  isModalUp,
  setisModalConfirmationAdd,
  setisModalDetailPembelian,
}) {
  const tabsDetailPembelianReducer = useSelector((state) => state?.tabsDetailPembelianReducer)
  const dispatch = useDispatch();

  return (
    <ModalWrapper
      bottom={'37%'}
      top={'37%'}
      left={'15%'}
      right={'15%'}
      isModalUp={isModalUp}
      setisModalUp={setisModalUp}
    >
      <div className='p-16px d-flex flex-column'>
        <TitleModal title={'Proces'} setisModalClose={setisModalUp} />
        <hr />
        <div className='grid p-16px grid-cols-3 gap-4'>

          <div onClick={() => {
            setisModalUp(false)
            dispatch({
              type: 'STATUS_TAB_ADD_PEMBELIAN',
              payload: 1
            })
          }}
            className='cursor-pointer choose-pengiriman-modal d-flex align-center justify-between'>
            <IPeneriaman />
            <div>
              <div className='choose-pengiriman-modal-title'>Penerimaan</div>
              <div className='choose-pengiriman-modal-title-sub'>Buat data penerimaan</div>
            </div>
            <INext />
          </div>

          <div onClick={() => {
            setisModalUp(false)
            dispatch({
              type: 'STATUS_TAB_ADD_PEMBELIAN',
              payload: 3
            })
          }}
            className='cursor-pointer choose-pengiriman-modal d-flex align-center justify-between'>
            <img
              src="/img/faktur.png"
              alt="..."
              style={{ width: '48px' }}
            ></img>
            <div>
              <div className='choose-pengiriman-modal-title'>Faktur</div>
              <div className='choose-pengiriman-modal-title-sub'>Buat data faktur</div>
            </div>
            <INext />
          </div>

          <div onClick={() => {
            setisModalUp(false)
            dispatch({
              type: 'STATUS_TAB_ADD_PEMBELIAN',
              payload: 2
            })
          }}
            className='cursor-pointer choose-pengiriman-modal d-flex align-center justify-between'>
            <img
              src="/img/uangMuka.png"
              alt="..."
              style={{ width: '48px' }}
            ></img>
            <div>
              <div className='choose-pengiriman-modal-title'>Uang Muka</div>
              <div className='choose-pengiriman-modal-title-sub'>Buat data uang muka</div>
            </div>
            <INext />
          </div>

        </div>

      </div>

    </ModalWrapper>
  )
}

const IFaktur = () => {
  return (
    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16591 23.5H8.66701H8.16701V33.988V33.9925C8.16602 34.3209 8.22975 34.6463 8.35455 34.9501C8.47936 35.2538 8.66279 35.5301 8.89437 35.7629C9.12596 35.9958 9.40115 36.1807 9.70423 36.3072C10.0069 36.4335 10.3314 36.499 10.6594 36.5H38.6746C39.0026 36.499 39.3271 36.4335 39.6298 36.3072C39.9329 36.1807 40.2081 35.9958 40.4397 35.7629C40.6712 35.5301 40.8547 35.2538 40.9795 34.9501C41.1043 34.6463 41.168 34.3209 41.167 33.9925L41.167 33.988L41.167 23.5H40.667H40.1679C40.1679 23.6684 40.168 23.8371 40.168 24.0057C40.1685 26.5042 40.1693 29.0024 40.1704 30.876C40.1709 31.8128 40.1716 32.5931 40.1724 33.139C40.1728 33.4121 40.1732 33.6259 40.1736 33.771L40.1743 33.9334L40.1745 33.9645M9.16591 23.5L38.675 32.5C39.6235 32.8379 40.1577 33.7731 40.1672 33.8472C40.1695 33.8724 40.1723 33.9102 40.173 33.9226C40.174 33.9419 40.1743 33.9566 40.1743 33.9583C40.1744 33.9608 40.1744 33.9629 40.1745 33.9645M9.16591 23.5C9.16594 23.6646 9.16598 23.8295 9.16601 23.9943C9.16651 26.4927 9.16676 28.9911 9.16689 30.865L9.16699 33.1292L9.16701 33.7635L9.16701 33.9307L9.16701 33.9735V33.9844V33.9871V33.9878C9.16701 33.9879 9.16701 33.988 10.667 33.988H9.16701C9.49843 34.9285 10.4248 35.4683 10.5041 35.4792C10.5314 35.4819 10.5724 35.4851 10.5865 35.4859C10.6085 35.4871 10.6264 35.4876 10.6313 35.4877H10.6313C10.6454 35.4881 10.6588 35.4883 10.6671 35.4884L10.7374 35.4891C10.7931 35.4894 10.8738 35.4898 10.9767 35.4901C11.1832 35.4908 11.4851 35.4914 11.8682 35.492C12.6347 35.4931 13.7293 35.4941 15.0423 35.4949C17.6684 35.4966 21.1696 35.4977 24.6707 35.4985C28.1718 35.4992 31.6729 35.4996 34.2987 35.4998L37.4715 35.5L38.3604 35.5L38.5947 35.5H38.6547H38.6699H38.6737H38.6747C38.6747 35.5 38.6747 35.5 38.6747 35.4999C38.6748 35.4999 38.6749 35.5 38.675 35.5V34L9.16591 23.5ZM40.1745 33.9645L40.1745 33.9666L40.1745 33.9645ZM10.167 13.5479V13.5H10.2149C10.1988 13.5158 10.1828 13.5318 10.167 13.5479ZM12.1651 20.5C12.165 20.1474 12.1649 19.8015 12.1648 19.4643C12.3288 19.4878 12.4965 19.5 12.667 19.5C14.6113 19.5 16.167 17.9285 16.167 16C16.167 15.8302 16.155 15.6634 16.1319 15.5003C16.4781 15.5003 16.8356 15.5003 17.2027 15.5004C17.1792 15.6635 17.167 15.8304 17.167 16C17.167 17.9375 18.7276 19.5 20.657 19.5H36.677C36.8432 19.5 37.0069 19.4881 37.1673 19.4651C37.1674 19.802 37.1674 20.1477 37.1675 20.5H12.1651Z" fill="#44546F" stroke="#44546F" stroke-width="3" />
    </svg>
  )
}

const IPeneriaman = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 10H14C12.9391 10 11.9217 10.4214 11.1716 11.1716C10.4214 11.9217 10 12.9391 10 14V38C10 39.0609 10.4214 40.0783 11.1716 40.8284C11.9217 41.5786 12.9391 42 14 42H34C35.0609 42 36.0783 41.5786 36.8284 40.8284C37.5786 40.0783 38 39.0609 38 38V14C38 12.9391 37.5786 11.9217 36.8284 11.1716C36.0783 10.4214 35.0609 10 34 10H30" stroke="#44546F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20 28H28M24 24V32M18 10C18 8.93913 18.4214 7.92172 19.1716 7.17157C19.9217 6.42143 20.9391 6 22 6H26C27.0609 6 28.0783 6.42143 28.8284 7.17157C29.5786 7.92172 30 8.93913 30 10C30 11.0609 29.5786 12.0783 28.8284 12.8284C28.0783 13.5786 27.0609 14 26 14H22C20.9391 14 19.9217 13.5786 19.1716 12.8284C18.4214 12.0783 18 11.0609 18 10Z" stroke="#44546F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  )
}
const BtnAction = ({
  setisModalConfirmationAdd,
}) => {
  return (
    <div className='p-16px'>
      <div className='gap-10px d-flex align-center justify-end mt-16px'>
        <ButtonCancel paddingBottom={'6px'} paddingTop={'6px'} title={'Edit'} />
        <ButtonSave action={() => setisModalConfirmationAdd(true)} title={'Simpan'} />
      </div>
    </div>
  )
}

const TotalComp = () => {
  return (
    <div className='p-16px gap-20px d-flex align-center justify-end mt-16px'>
      <TotalAll title={'Potongan'} value={'0'} />
      <TotalAll title={'Biaya Lainnya'} value={'0'} />
      <TotalAll title={'Total'} value={'0'} />
    </div>
  )
}
export default ModalChoosePengiriman