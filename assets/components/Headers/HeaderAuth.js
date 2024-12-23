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

export default function HeaderAuht() {

  const dispatch = useDispatch();
  return (
    <>
      <NavbarAuht />
    </>
  );
}

const NavbarAuht = ({
  dispatch
}) => {
  return (
    <div className="Menu-Navbar-wrapper">
      <div className="Menu-Navbar-wrapper-left">
        <div className="sidebar-menu-icon-wrapper-home-auth"><IDev /></div>
        <div className="Menu-Navbar-title-auth">Logo</div>
      </div>
      <div className="Menu-Navbar-wrapper-right">

        <div className="Menu-Navbar-wrapper-right">
          <div className="Menu-Navbar-wrapper-right-sub">
            <div style={{ cursor: 'pointer' }}><IBantuan /></div>
            <div className="Menu-Navbar-title-bantuan">Bantuan</div>
          </div>
        </div>

      </div>
    </div>
  )
}

const IDev = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 15H8.4C8.71667 15 8.98767 14.8877 9.213 14.663C9.43833 14.4383 9.55067 14.1673 9.55 13.85V10.15C9.55 9.83333 9.43767 9.56267 9.213 9.338C8.98833 9.11333 8.71733 9.00067 8.4 9H6V15ZM7.15 13.85V10.15H8.4V13.85H7.15ZM10.875 15H13.325V13.85H11.275V12.55H12.575V11.4H11.275V10.15H13.325V9H10.875C10.6583 9 10.4793 9.07067 10.338 9.212C10.1967 9.35333 10.1257 9.53267 10.125 9.75V14.25C10.125 14.4667 10.196 14.646 10.338 14.788C10.48 14.93 10.659 15.0007 10.875 15ZM16.025 14.975C16.2417 14.975 16.4293 14.904 16.588 14.762C16.7467 14.62 16.8507 14.441 16.9 14.225L18.3 9H17.1L16.025 13.1L14.95 9H13.75L15.15 14.225C15.2 14.4417 15.3043 14.621 15.463 14.763C15.6217 14.905 15.809 14.9757 16.025 14.975ZM5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5Z" fill="url(#paint0_linear_19081_103764)" />
      <defs>
        <linearGradient id="paint0_linear_19081_103764" x1="20.9656" y1="5.83453" x2="13.5881" y2="22.0695" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0052CC" />
          <stop offset="0.9228" stop-color="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}