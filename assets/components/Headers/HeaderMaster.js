import React from "react";
// components

import CardStats from "components/Cards/CardStats.js";
import HomeNavbar from "../icons/Navbar.home";
import IBantuan from "components/icons/Bantuan";
import Isetting from "components/icons/Setting";
import ImoreBottom from "components/icons/MoreBottom";
import Avatar from "components/icons/Avatar";
import { useDispatch, useSelector } from 'react-redux'
import IFinance from "components/icons/Finance";
import IAnggota from "components/icons/Anggota";
import Iinventory from "components/icons/Inventory";
import IKasir from "components/icons/Kasir";
import IprodukDigital from "components/icons/ProdukDigital";
import IBantuanMenu from "components/icons/BantuanMenu";
import Link from "next/link";
import DropdownAkun from "components/Dropdowns/DropdownAkun";

const icons = {
  IFinance: <IFinance height={24} width={24} />,
  IAnggota: <IAnggota height={24} width={24} />,
  Iinventory: <Iinventory height={24} width={24} />,
  IKasir: <IKasir width={24} height={24} />,
  IprodukDigital: <IprodukDigital width={24} height={24} />,
  IBantuanMenu: <IBantuanMenu width={24} height={24} />,
}

export default function HeaderStats() {

  const dispatch = useDispatch();
  const StatusPageReducer = useSelector((state) => state.StatusPageReducer);
  const menuMasterReducer = useSelector((state) => state.menuMasterReducer);
  const selectMenuMasterReducer = useSelector((state) => state.selectMenuMasterReducer);
  return (
    <>
      <NavbarMaster/>
    </>
  );
}

const NavbarMaster = ({
}) => {
  const isDropdownAkunReducer = useSelector((state) => state.isDropdownAkunReducer);
  const dispatch = useDispatch()

  return (
    <div className="Menu-Navbar-wrapper">
      <div className="Menu-Navbar-wrapper-left">
        <Link href={'/'}>
          <div onClick={() => dispatch({ type: 'STATUS_SELECT_MENU_RESET_ALL' })} className="sidebar-menu-icon-wrapper-home"><HomeNavbar /></div>
        </Link>
        <div className="Menu-Navbar-title">Hi, <span className="Menu-Navbar-title-name-koprasi">Koperasi Jasa Marga</span></div>
      </div>
      <div className="Menu-Navbar-wrapper-right">
        <div className="Menu-Navbar-wrapper-right">
          <div className="Menu-Navbar-wrapper-right-sub">
            <div style={{ cursor: 'pointer' }}><IBantuan /></div>
            <div className="Menu-Navbar-title-bantuan">Bantuan</div>
          </div>
          <div onClick={() => dispatch({ type: 'IS_DROPDOWN_AKUN'})} className="cursor-pointer Menu-Navbar-wrapper-right-sub">
            <div style={{ cursor: 'pointer' }}><Isetting /></div>
            <div className="Menu-Navbar-title-pengaturan">Pengaturan Akun</div>
            <div style={{ cursor: 'pointer' }}><ImoreBottom /></div>
          </div>
          <img className="Menu-Navbar-img" src="/img/nukar/avatar.png" alt="" />
        </div>
      </div>
      {
        isDropdownAkunReducer?.isActive && <DropdownAkun />
      }
    </div>
  )
}