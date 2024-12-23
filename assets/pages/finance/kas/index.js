import Tab from "components/Tab/inddex";
import TabPageAkunKasBank from "components/finance/kasBank/tabPageAkunKasBank";
import TabPageAkunKasBankRiwayatTransaksi from "components/finance/kasBank/tabPageAkunKasBankRiwayatTransaksi";
import IReload from "components/icons/IReload";
import Admin from "layouts/Admin";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import ModalDetailDataTableRiwayatTransaksi from "components/finance/kasBank/modalDetailRiwayatTransaksi";
import WithAuth from "components/config/protect";

const Kas = () => {
  const dispatch = useDispatch();
  const tabsKasBankReducer = useSelector((state) => state.tabsKasBankReducer);
  const [
    modalDetailDataTableRiwayatTransaksi,
    setmodalDetailDataTableRiwayatTransaksi,
  ] = useState(false);

  return (
    <Admin>
      <div className="finance-penerimaan-kontainer">
        <div className="finance-penerimaan-wrapp-top">
          <div className="finance-penerimaan-title">Kas & Bank</div>
          <IReload />
        </div>

        <Tab
          onClick={(payload) => {
            dispatch({
              type: "STATUS_TAB_KAS_BANK_SET",
              payload: payload,
            });
          }}
          Tabs={tabsKasBankReducer?.data}
          IsActiveTab={tabsKasBankReducer?.isActivetab}
        />
        {tabsKasBankReducer?.isActivetab === 0 && <TabPageAkunKasBank />}
        {tabsKasBankReducer?.isActivetab === 1 && (
          <TabPageAkunKasBankRiwayatTransaksi
            setmodalDetailDataTableRiwayatTransaksi={
              setmodalDetailDataTableRiwayatTransaksi
            }
          />
        )}
      </div>
      <ModalDetailDataTableRiwayatTransaksi
        isModalUp={modalDetailDataTableRiwayatTransaksi}
        setisModalUp={setmodalDetailDataTableRiwayatTransaksi}
      />
    </Admin>
  );
};

export default WithAuth(Kas);
