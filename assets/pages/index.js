/* eslint-disable react/jsx-no-target-blank */
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
// layout for page

import Admin from "../layouts/Admin";
import IFinance from "components/icons/Finance";
import IAnggota from "components/icons/Anggota";
import IKasir from "components/icons/Kasir";
import IprodukDigital from "components/icons/ProdukDigital";
import IBantuanMenu from "components/icons/BantuanMenu";
import Iinventory from "components/icons/Inventory";
import IBgMenuMaster from "components/icons/BgMenuMaster";
import Master from "layouts/Master";
import Bantuan from "components/Bantuan";
// import BgImage from '../components/icons/assets/foto/Frame 53.jpg'
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import WithAuth from "components/config/protect";

const icons = {
  IFinance: <IFinance />,
  IAnggota: <IAnggota />,
  Iinventory: <Iinventory />,
  IKasir: <IKasir />,
  IprodukDigital: <IprodukDigital />,
  IBantuanMenu: <IBantuanMenu />,
};

const Index = () => {
  const dispatch = useDispatch();
  const globalReducer = useSelector((state) => state.globalReducer)
  const menuMasterReducer = useSelector((state) => state.menuMasterReducer);
  const [isBantuanShow, setisBantuanShow] = useState(false);

  const login = (res, i) => {
    dispatch({
      type: "STATUS_BREADCRUM_SET",
      payload: res,
    });
    dispatch({
      type: "STATUS_SELECT_MENU_SET",
      payload: {
        id: res.id,
        title: res?.title,
        icon: res?.icon,
        link: res?.link,
      },
    });
  };

  return (
    <>
      <Master>
        <div className="h-full Menu-Master-title-wrapp">
          <div className="grid grid-cols-3 gap-4 Menu-Master-title-wrapp-sub">
            {menuMasterReducer?.data?.map((res, i) => {
              if (res?.link === "onClick") {
                return (
                  <div
                    onClick={() => {
                      setisBantuanShow(true);
                    }}
                    className="Menu-Master-title-wrapp-grid"
                  >
                    {icons[res?.icon]}
                    <div className="Menu-Master-title">{res?.title}</div>
                  </div>
                );
              }
              return (
                <Link key={i} href={res?.link}>
                  <div
                    onClick={() => {
                      dispatch({ type: "IS_PAGE_AKUN_FALSE" });
                      dispatch({ type: "IS_DROPDOWN_AKUN_FALSE" });
                      dispatch({
                        type: "STATUS_SELECT_SUBSUBMENU_SET",
                        payload: res,
                      });
                      login(res, i);
                    }}
                    className="Menu-Master-title-wrapp-grid"
                  >
                    {icons[res?.icon]}
                    <div className="Menu-Master-title">{res?.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <Bantuan isModalUp={isBantuanShow} setisModalUp={setisBantuanShow} />
      </Master>
    </>
  );
};

export default WithAuth(Index);
