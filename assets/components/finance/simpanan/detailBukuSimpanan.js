import Tab from 'components/Tab/inddex'
import IBack from 'components/icons/IBack'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DataTableSimpananPokok from './dataTableSimpananPokok';
import DataTableSimpananWajib from './dataTableSimpananWajib';
import DataTableSimpananSukarela from './dataTableSimpananSukarela';
import DataTableSimpananBerjangka from './dataTableSimpananBerjangka';

const DetailBukuSimpanan = ({
  setBackSimpanan
}) => {
  const dispatch = useDispatch();
  const tabsDetailBukuimpananReducer = useSelector((state) => state.tabsDetailBukuimpananReducer);

  return (
    <div>
      <div className='width-100 display-flex-align-center mt-5 pl-4 pr-4'>
        <div className='cursor-pointer' onClick={() => setBackSimpanan('')}><IBack /></div>
        <div className='pl-3'>Detail</div>
      </div>
      <Tab
        onClick={(payload) => {
          dispatch({
            type: 'STATUS_TAB_DETAIL_BUKU_SIMPANAN_SET',
            payload: payload
          })
        }}
        IsActiveTab={tabsDetailBukuimpananReducer?.isActivetab}
        Tabs={tabsDetailBukuimpananReducer?.data} />
        <div className='mt-5'></div>
        {
          tabsDetailBukuimpananReducer?.isActivetab === 0 && <DataTableSimpananPokok/>
        }
        {
          tabsDetailBukuimpananReducer?.isActivetab === 1 && <DataTableSimpananWajib/>
        }
        {
          tabsDetailBukuimpananReducer?.isActivetab === 2 && <DataTableSimpananSukarela/>
        }
        {
          tabsDetailBukuimpananReducer?.isActivetab === 3 && <DataTableSimpananBerjangka/>
        }
    </div>
  )
}

export default DetailBukuSimpanan