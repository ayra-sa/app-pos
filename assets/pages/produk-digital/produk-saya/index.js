import Admin from 'layouts/Admin'
import React from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import IReload from 'components/icons/IReload';
import { useDispatch, useSelector } from 'react-redux';
import Tab from 'components/Tab/inddex';
import DataTablePrabayarProduk from 'components/produk-digital/dataTablePrabayarProduk';
import DataTablePascabayarProduk from 'components/produk-digital/dataTablePascabayarProduk';
import WithAuth from 'components/config/protect';

const ProdukDSaya = () => {
  const dispatch = useDispatch();
  const tabsProdukSayaReducer = useSelector((state) => state.tabsProdukSayaReducer);

  return (
    <Admin>
      <div style={{
        background: 'white'
      }}>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Produk Saya</div>
          <IReload />
        </div>

        <div className='mt-3'></div>

        <Tab
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_PRODUK_SAYA_SET',
              payload: payload
            })
          }}
          Tabs={tabsProdukSayaReducer?.data}
          IsActiveTab={tabsProdukSayaReducer?.isActivetab} />

        {
          tabsProdukSayaReducer?.isActivetab == 0 && <DataTablePrabayarProduk />
        }
        {
          tabsProdukSayaReducer?.isActivetab == 1 && <DataTablePascabayarProduk />
        }
      </div>
    </Admin>
  )
}

export default WithAuth(ProdukDSaya)