import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import TabBarangJasa from "components/finance/defaultAkun/tabBarangJasa";
import TabPenjualanPembelian from "components/finance/defaultAkun/tabPenjualanPembelian";
import TabPersediaan from "components/finance/defaultAkun/tabPersediaan";
import TabSimpanPinjam from "components/finance/defaultAkun/tabSimpanPinjam";
import IBack from "components/icons/IBack";
import Tab from "components/Tab/inddex";
import { fetchPreferenceAccounts } from "global-states/actions/defaultAkunActions";
import axiosInstance from "global-states/api";
import Admin from "layouts/Admin";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DefaultAkunPage = () => {
  const dispatch = useDispatch();
  const tabsDefaultAkunReducer = useSelector(
    (state) => state.tabsDefaultAkunReducer
  );
  const {data} = useSelector(state => state.defaultAkun)

  console.log(data)
  // const [preferenceAccounts, setPreferenceAccounts] = useState({})

  // const fetchPreferencesAccounts = async () => {
  //   try {
  //       const res = await axiosInstance.get("/preference-accounts")
  //       console.log(res)
  //       setPreferenceAccounts(res.data.data)
  //   } catch (error) {
  //       console.error(error)
  //   }
  // }

  useEffect(() => {
    dispatch(fetchPreferenceAccounts())
  }, [dispatch])
  return (
    <Admin>
      <div className="bg-white p-5">
        <div className="flex items-center gap-x-3 mb-3">
          <Link href={"/finance/kas"}>
            <IBack />
          </Link>
          <p>Default Akun</p>
        </div>

        <Tab
          onClick={(payload) => {
            dispatch({
              type: "STATUS_TAB_DEFAULT_AKUN_SET",
              payload: payload,
            });
          }}
          Tabs={tabsDefaultAkunReducer?.data}
          IsActiveTab={tabsDefaultAkunReducer?.isActivetab}
        />

        {tabsDefaultAkunReducer?.isActivetab === 0 && <TabBarangJasa />}
        {tabsDefaultAkunReducer?.isActivetab === 1 && <TabPenjualanPembelian />}
        {tabsDefaultAkunReducer?.isActivetab === 2 && <TabPersediaan />}
        {tabsDefaultAkunReducer?.isActivetab === 3 && <TabSimpanPinjam />}

        <div className="mt-10 flex items-center gap-x-4 justify-end">
          <ButtonCancel title={"Reset"} />
          <ButtonSave title={"Simpan"} />
        </div>
      </div>
    </Admin>
  );
};

export default DefaultAkunPage;
