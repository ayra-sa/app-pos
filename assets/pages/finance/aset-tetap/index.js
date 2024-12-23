import Tab from 'components/Tab/inddex';
import DataTableAssetTetap from 'components/finance/assetTetap/dataTableAssetTetap';
import DataTableKategoriAssetTetap from 'components/finance/assetTetap/dataTableKategoriAssetTetap';
import Admin from 'layouts/Admin'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect';

const AsetTetap = () => {

  const dispatch = useDispatch();
  const tabsAssetTetapReducer = useSelector((state) => state.tabsAssetTetapReducer);

  return (
    <Admin>
      <div className='finance-asset-tetap-kontainer'>

        <Tab
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_ASSET_TETAP_SET',
              payload: payload
            })
          }}
          Tabs={tabsAssetTetapReducer?.data}
          IsActiveTab={tabsAssetTetapReducer?.isActivetab} />

        <div className='p-3'>

          {
            tabsAssetTetapReducer?.isActivetab == 0 && <DataTableAssetTetap />
          }
          {
            tabsAssetTetapReducer?.isActivetab == 1 && <DataTableKategoriAssetTetap />
          }

        </div>

      </div>
    </Admin>
  )
}

export default WithAuth(AsetTetap)