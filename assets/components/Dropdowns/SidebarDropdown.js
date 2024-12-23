import Link from "next/link";
import { createPopper } from "@popperjs/core";
import IBarangSubSubMenu from "components/icons/Barang";
import IBanner from "components/icons/IBanner";
import IBerita from "components/icons/IBerita";
import IBroadcast from "components/icons/IBroadcast";
import IDaftarAnggota from "components/icons/IDaftarAknggota";
import IDaftarAkses from "components/icons/IDaftarAksess";
import IDaftarCabang from "components/icons/IDaftarCabang";
import IDaftarKartu from "components/icons/IDaftarKartu";
import IPengaturan from "components/icons/IDaftarPengaturan";
import IDashboardKasir from "components/icons/IDashboardKasir";
import IEtalaseBarang from "components/icons/IEtalaseBarang";
import IImportKartu from "components/icons/IImportKartu";
import IKategoriBarang from "components/icons/IKategoriBarang";
import ILaporanSubSUbMenu from "components/icons/ILaporanSubSubMenu";
import IOtorisasiPengguna from "components/icons/IOtorisasiPengguna";
import IPembayaranfinancial from "components/icons/IPembayaranfinancial";
import IPembelian from "components/icons/IPembelian";
import IPenerimaan from "components/icons/IPenerimaan";
import IPengadaanBarang from "components/icons/IPengadaanBarang";
import IPenjualan from "components/icons/IPenjualan";
import IPenyesuaianBarang from "components/icons/IPenyesuaianBarang";
import IPenyesuaianStok from "components/icons/IPenyesuaianStok";
import IPinjaman from "components/icons/IPinjaman";
import IPostingLaporan from "components/icons/IPostingLaporan";
import IProduk from "components/icons/IProduk";
import IRiwayatTransaksi from "components/icons/IRiwayatTransaksi";
import ISimpanan from "components/icons/ISimpanan";
import IStokOpname from "components/icons/IStockOpname";
import ISuplierSubSubMenu from "components/icons/ISuplierSubSubMenu";
import ITagAnggota from "components/icons/ITagAnggota";
import ITransaksiMenuSUb from "components/icons/ITransaksiMenuSUb";
import ITransaksiMuSubSubMenu from "components/icons/ITransaksiMuSubSubMenu";
import IVoucher from "components/icons/IVoucher";
import IKasBank from "components/icons/IkasBank";
import IprodukSayaSubMenu from "components/icons/IprodukSayaSubMenu";
import ItransferBarang from "components/icons/ItransferBarang";
import { useState } from "react";
import { useDispatch } from "react-redux";
import IKontak from "components/icons/IKontak";
import IAsetTeap from "components/icons/IAsetTetap";
import IClose from "components/icons/Close";
import IBrandProduk from "components/icons/BrandProduk";
import IVariasiProduk from "components/icons/VariasiProduk";
import IKurir from "components/icons/IKurir";
import ISuplier from "components/icons/ISuplier";

const icons = {
  IPenerimaan: <IPenerimaan />,
  IPembayaranfinancial: <IPembayaranfinancial />,
  ISimpanan: <ISimpanan />,
  IPinjaman: <IPinjaman />,
  ILaporanSubSUbMenu: <ILaporanSubSUbMenu />,
  IKasBank: <IKasBank />,
  IPembelian: <IPembelian />,
  IPenjualan: <IPenjualan />,
  IStokOpname: <IStokOpname />,
  IProduk: <IProduk />,
  IDaftarKartu: <IDaftarKartu />,
  IImportKartu: <IImportKartu />,
  IDaftarAnggota: <IDaftarAnggota />,
  ITagAnggota: <ITagAnggota />,
  IDaftarAkses: <IDaftarAkses />,
  IOtorisasiPengguna: <IOtorisasiPengguna />,
  IKategoriBarang: <IKategoriBarang />,
  IBarangSubSubMenu: <IBarangSubSubMenu />,
  IEtalaseBarang: <IEtalaseBarang />,
  IPengadaanBarang: <IPengadaanBarang />,
  ItransferBarang: <ItransferBarang />,
  ISuplierSubSubMenu: <ISuplierSubSubMenu />,
  IPenyesuaianStok: <IPenyesuaianStok />,
  IDaftarCabang: <IDaftarCabang />,
  IRiwayatTransaksi: <IRiwayatTransaksi />,
  IPostingLaporan: <IPostingLaporan />,
  IBerita: <IBerita />,
  IBroadcast: <IBroadcast />,
  ITransaksiMenuSUb: <ITransaksiMenuSUb />,
  IPenyesuaianBarang: <IPenyesuaianBarang />,
  IBanner: <IBanner />,
  IVoucher: <IVoucher />,
  IDashboardKasir: <IDashboardKasir />,
  ITransaksiMuSubSubMenu: <ITransaksiMuSubSubMenu />,
  IprodukSayaSubMenu: <IprodukSayaSubMenu />,
  IPengaturan: <IPengaturan />,
  IKontak: <IKontak />,
  IAsetTeap: <IAsetTeap />,
  IBrandProduk: <IBrandProduk />,
  IVariasiProduk: <IVariasiProduk />,
  IKurir: <IKurir />,
  ISuplier: <ISuplier />,
};

const SideBarDropdown = ({
  icon,
  obj,
  index,
  activeSUubMenu,
  setActiveSubMenu,
  title,
  activeSUubMenuHover,
  setActiveSubMenuHover,
}) => {
  const dispatch = useDispatch();

  const toggleModal = (index) => {
    let newStatus = [...activeSUubMenu];
    newStatus = Array(obj.length - 1).fill(false);
    newStatus[index] = !activeSUubMenu[index];
    setActiveSubMenu(newStatus);
  };

  const toggleModalHoverActive = (index) => {
    let newStatusHover = [...activeSUubMenuHover];
    newStatusHover = Array(obj.length - 1).fill(false);
    newStatusHover[index] = true;
    setActiveSubMenuHover(newStatusHover);
  };

  const toggleModalHoverClose = (index) => {
    let newStatusHover = [...activeSUubMenuHover];
    newStatusHover = Array(obj.length - 1).fill(false);
    newStatusHover[index] = false;
    setActiveSubMenuHover(newStatusHover);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: activeSUubMenuHover[index] ? "12px" : "5px",
        }}
        className="d-flex align-center juttify-between"
      >
        <div
          onMouseEnter={() => toggleModalHoverActive(index)}
          onMouseLeave={() => toggleModalHoverClose(index)}
          onClick={(e) => {
            toggleModal(index);
          }}
        >
          {icon}
        </div>
        {activeSUubMenuHover[index] ? (
          <div className="sidebar-subsubmenu-wrapp-hover">
            <div>{title}</div>
          </div>
        ) : null}
      </div>
      {activeSUubMenu[index] && (
        <>
          <div
            className={
              "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg sidebar-subsubmenu-wrapp"
            }
          >
            <a
              href="#pablo"
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
              onClick={(e) => e.preventDefault()}
            >
              <div className="d-flex align-center justify-between">
                <div className="sidebar-subsubmenu-wrapp-title-menu">
                  {obj[index]?.titleMenu}
                </div>
                <div onClick={() => toggleModal(index)}>
                  <IClose />
                </div>
              </div>
              <div
                className={
                  obj[index]?.subSubMenu?.length > 6
                    ? "grid grid-cols-3 pr-63px"
                    : obj[index]?.subSubMenu?.length > 1
                    ? "grid grid-cols-3 px-20 gap-10"
                    : "grid grid-cols-1 pr-63px"
                }
              >
                {obj[index]?.subSubMenu?.map((res, i) => {
                  let newStatus = [...activeSUubMenu];
                  newStatus = Array(obj.length - 1).fill(false);

                  return (
                    <>
                      <Link href={res?.link}>
                        <div
                          onClick={() => {
                            setActiveSubMenu(newStatus);
                            dispatch({
                              type: "STATUS_BREADCRUM_SET",
                              payload: res,
                            });
                            dispatch({
                              type: "STATUS_SELECT_SUBSUBMENU_SET",
                              payload: res,
                            });
                          }}
                          key={i}
                          className="sidebar-menu-icon-wrapper-sub-sub-menu-wrapp"
                        >
                          <div className="sidebar-menu-icon-wrapper-sub-sub-menu">
                            {icons[res?.icon]}
                          </div>
                          <div className="sidebar-menu-icon-wrapper-sub-sub-menu-title">
                            {res?.title}
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default SideBarDropdown;
