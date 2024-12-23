import React, { useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import IDasbhboard from "components/icons/Idashboard";
import IFinancial from "components/icons/IFinancial";
import IAccounting from "components/icons/IAccounting";
import IPembayaran from "components/icons/IPembayaran";
import IAllowance from "components/icons/IAllowance";
import IDaftarAkses from "components/icons/IDaftarAksess";
import IPengaturan from "components/icons/IDaftarPengaturan";
import IDaftarAnggota from "components/icons/IDaftarAknggota";
import IBarang from "components/icons/IBarang";
import ISuplier from "components/icons/ISuplier";
import ICabang from "components/icons/ICabang";
import ITransaksi from "components/icons/ITransaksi";
import ILaporan from "components/icons/ILaporan";
import IKonten from "components/icons/IKonten";
import IGudang from "components/icons/IGudang";
import IMarketing from "components/icons/IMarketing";
import IOfflineChannel from "components/icons/IOfflineChannel";
import ITransaksimu from "components/icons/ITransaksimu";
import IKategori from "components/icons/IKategori";
import IProdukSaya from "components/icons/IProdukSaya";
import SideBarDropdown from "components/Dropdowns/SidebarDropdown";
import IProdukMenu from "components/icons/IProdukMenu";

const icons = {
  IDashboard: <IDasbhboard />,
  IFinancial: <IFinancial />,
  IAccounting: <IAccounting />,
  IPembayaran: <IPembayaran />,
  IAllowance: <IAllowance />,
  IDaftarAnggota: <IDaftarAnggota />,
  IPengaturanAkses: <IDaftarAkses />,
  IPengaturan: <IPengaturan />,
  IBarang: <IBarang />,
  ISuplier: <ISuplier />,
  ICabang: <ICabang />,
  ITransaksi: <ITransaksi />,
  ILaporan: <ILaporan />,
  IKonten: <IKonten />,
  IGudang: <IGudang />,
  IMarketing: <IMarketing />,
  IOfflineChannel: <IOfflineChannel />,
  ITransaksiMu: <ITransaksimu />,
  IKategori: <IKategori />,
  IProdukSaya: <IProdukSaya />,
  IProdukMenu: <IProdukMenu />,
};

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const dispatch = useDispatch();
  const menuMasterReducer = useSelector((state) => state.menuMasterReducer);
  const selectMenuMasterReducer = useSelector(
    (state) => state.selectMenuMasterReducer
  );
  const [activeSUubMenu, setActiveSubMenu] = useState(
    Array(
      menuMasterReducer?.data[selectMenuMasterReducer?.menu?.id - 1]?.subMenu
        ?.length
    ).fill(false)
  );

  const [activeSUubMenuHover, setActiveSubMenuHover] = useState(
    Array(
      menuMasterReducer?.data[selectMenuMasterReducer?.menu?.id - 1]?.subMenu
        ?.length
    ).fill(false)
  );

  const router = useRouter();
  return (
    <>
      <nav className="wrapp-sidebar wrapper-top md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:flex-row md:flex-nowrap shadow-xl bg-white flex flex-wrap items-center justify-between relative z-10 py-4 px-6 ">
        {
          // aarray 0 jadi - 1
          menuMasterReducer?.data[
            selectMenuMasterReducer?.menu?.id - 1
          ]?.subMenu.map((resSub, i) => {
            return (
              <>
                <div
                  key={i}
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="sidebar-menu-icon-wrapper"
                >
                  <SideBarDropdown
                    activeSUubMenuHover={activeSUubMenuHover}
                    setActiveSubMenuHover={setActiveSubMenuHover}
                    activeSUubMenu={activeSUubMenu}
                    setActiveSubMenu={setActiveSubMenu}
                    obj={
                      menuMasterReducer?.data[
                        selectMenuMasterReducer?.menu.id - 1
                      ]?.subMenu
                    }
                    index={i}
                    title={resSub?.title}
                    icon={icons[resSub?.icon]}
                  />
                </div>
                <div style={{ minHeight: "20px" }}></div>
              </>
            );
          })
        }
      </nav>
    </>
  );
}
