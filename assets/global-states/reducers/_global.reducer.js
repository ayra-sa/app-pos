const StatusPageState = {
  isAuthenticated: false,
  token: null,
  email: null,
  role: null,
};

const MenuMaster = {
  is_loading: false,
  is_error: false,
  message: "",
  data: [
    {
      id: 1,
      title: "Finance & Accounting",
      icon: "IFinance",
      link: "/finance/dashboard",
      subMenu: [
        {
          id: 1,
          title: "Dashboard",
          icon: "IDashboard",
          titleMenu: "Dashboard Menu",
          // link: '/finance/dashboard',
          subSubMenu: [
            {
              id: 1,
              title: "Dashboard",
              icon: "IPenerimaan",
              link: "/finance/dashboard",
            },
          ],
        },
        {
          id: 2,
          title: "Financial",
          icon: "IFinancial",
          titleMenu: "Finance Menu",
          // link: '/finance/financial',
          subSubMenu: [
            {
              id: 1,
              title: "Penerimaan",
              icon: "IPenerimaan",
              link: "/finance/penerimaan",
            },
            {
              id: 2,
              title: "Pembayaran",
              icon: "IPembayaranfinancial",
              link: "/finance/pembayaran",
            },
            {
              id: 3,
              title: "Simpanan",
              icon: "ISimpanan",
              link: "/finance/simpanan",
            },
            {
              id: 4,
              title: "Pinjaman",
              icon: "IPinjaman",
              link: "/finance/pinjaman",
            },
          ],
        },
        {
          id: 3,
          title: "Accounting",
          icon: "IAccounting",
          link: "/finance/accounting",
          titleMenu: "Accounting Menu",
          subSubMenu: [
            {
              id: 1,
              title: "Laporan",
              icon: "ILaporanSubSUbMenu",
              link: "/finance/laporan",
            },
            {
              id: 2,
              title: "Kas & Bank",
              icon: "IKasBank",
              link: "/finance/kas",
            },
            {
              id: 3,
              title: "Pembelian",
              icon: "IPembelian",
              link: "/finance/pembelian",
            },
            {
              id: 4,
              title: "Penjualan",
              icon: "IPenjualan",
              link: "/finance/penjualan",
            },
            {
              id: 5,
              title: "Kurir",
              icon: "IKurir",
              link: "/finance/kurir",
            },
            {
              id: 6,
              title: "Suplier",
              icon: "ISuplier",
              link: "/finance/suplier",
            },
            {
              id: 7,
              title: "Kontak",
              icon: "IKontak",
              link: "/finance/kontak",
            },
            {
              id: 8,
              title: "Stok Opname",
              icon: "IStokOpname",
              link: "/finance/stok-opname",
            },
            {
              id: 9,
              title: "Produk",
              icon: "IProduk",
              link: "/finance/produk",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Anggota",
      icon: "IAnggota",
      link: "/anggota/daftar-anggota",
      subMenu: [
        {
          id: 1,
          title: "Daftar Anggota",
          icon: "IDaftarAnggota",
          titleMenu: "Daftar Anggota Menu",
          link: "/anggota/daftar-anggota",
          subSubMenu: [
            {
              id: 1,
              title: "Daftar Anggota",
              icon: "IDaftarAnggota",
              link: "/anggota/daftar-anggota",
            },
            {
              id: 2,
              title: "Tag Anggota",
              icon: "ITagAnggota",
              link: "/anggota/tag-anggota",
            },
          ],
        },
        {
          id: 2,
          title: "Pengaturan Akses",
          icon: "IPengaturanAkses",
          titleMenu: "Pengaturan akses Menu",
          link: "/anggota/pengaturan-akses",
          subSubMenu: [
            {
              id: 1,
              title: "Daftar Akses",
              icon: "IDaftarAkses",
              link: "/anggota/daftar-akses",
            },
            {
              id: 2,
              title: "Otorisasi Pengguna",
              icon: "IOtorisasiPengguna",
              link: "/anggota/otorisasi-pengguna",
            },
          ],
        },
        {
          id: 3,
          title: "Pengaturan",
          icon: "IPengaturan",
          titleMenu: "Pengaturan Menu",
          link: "/anggota/pengaturan",
          subSubMenu: [
            {
              id: 1,
              title: "Pengaturan",
              icon: "IPengaturan",
              link: "/anggota/pengaturan",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Inventory",
      icon: "Iinventory",
      link: "/inventory/dashboard",
      subMenu: [
        {
          id: 1,
          title: "Produk Menu",
          icon: "IProdukMenu",
          titleMenu: "Produk Menu",
          // link: '/anggota/daftar-anggota',
          subSubMenu: [
            {
              id: 1,
              title: "Produk",

              icon: "IBarangSubSubMenu",
              link: "/inventory/produk",
            },
            {
              id: 2,
              title: "Kategori Barang",
              icon: "IKategoriBarang",
              link: "/inventory/kategori-barang",
            },
            {
              id: 3,
              title: "Brand Produk",
              icon: "IBrandProduk",
              link: "/inventory/brand-produk",
            },

            {
              id: 4,
              title: "Variasi Produk",
              icon: "IVariasiProduk",
              link: "/inventory/variasi-produk",
            },

            {
              id: 5,
              title: "Unit",
              icon: "IPenerimaan",
              link: "/inventory/unit",
            },
            {
              id: 6,
              title: "Base Unit",
              icon: "IPenerimaan",
              link: "/inventory/base-unit",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Kasir",
      icon: "IKasir",
      link: "/kasir/transaksi",
      subMenu: [
        {
          id: 1,
          title: "Overview",
          icon: "IDashboard",
          titleMenu: "Overview Menu",
          // link: '/anggota/daftar-anggota',
          subSubMenu: [
            {
              id: 1,
              title: "Barang",
              icon: "IBarangSubSubMenu",
              link: "/kasir/barang",
            },
            {
              id: 2,
              title: "Transaksi",
              icon: "ITransaksiMenuSUb",
              link: "/kasir/transaksi",
            },
          ],
        },
        {
          id: 2,
          title: "Gudang",
          icon: "IGudang",
          titleMenu: "Gudang Menu",
          // link: '/anggota/daftar-anggota',
          subSubMenu: [
            {
              id: 1,
              title: "Barang Diterima",
              icon: "IBarangSubSubMenu",
              link: "/kasir/barang-diterima",
            },
            {
              id: 2,
              title: "Penyesuaian Barang",
              icon: "IPenyesuaianBarang",
              link: "/kasir/penyesuaian-barang",
            },
          ],
        },
        {
          id: 5,
          title: "Pengaturan",
          icon: "IPengaturan",
          titleMenu: "Pengaturan Menu",
          // link: '/anggota/daftar-anggota',
          subSubMenu: [
            {
              id: 1,
              title: "Pembayaran",
              icon: "IPembayaran",
              link: "/kasir/pembayaran",
            },
          ],
        },
      ],
    },
    // {
    //   id: 5,
    //   title: 'Produk Digital',
    //   icon: 'IprodukDigital',
    //   link: '/produk-digital/transaksimu',
    //   subMenu: [
    //     {
    //       id: 1,
    //       title: 'Transaksi',
    //       icon: 'ITransaksiMu',
    //       titleMenu: 'Transaksi Menu',
    //       // link: '/anggota/daftar-anggota',
    //       subSubMenu: [
    //         {
    //           id: 1,
    //           title: 'Transaksimu',
    //           icon: 'ITransaksiMuSubSubMenu',
    //           link: '/produk-digital/transaksimu',
    //         },
    //       ]
    //     },
    //     {
    //       id: 2,
    //       title: 'Kategori',
    //       icon: 'IKategori',
    //       titleMenu: 'Kategori Menu',
    //       // link: '/anggota/daftar-anggota',
    //       subSubMenu: [
    //         {
    //           id: 1,
    //           title: 'Kategori',
    //           icon: 'IKategoriBarang',
    //           link: '/produk-digital/kategori',
    //         },
    //       ]
    //     },
    //     {
    //       id: 3,
    //       title: 'Produk Saya',
    //       icon: 'IProdukSaya',
    //       titleMenu: 'Produk Saya Menu',
    //       // link: '/anggota/daftar-anggota',
    //       subSubMenu: [
    //         {
    //           id: 1,
    //           title: 'Produk Saya',
    //           icon: 'IprodukSayaSubMenu',
    //           link: '/produk-digital/produk-saya',
    //         },
    //       ]
    //     },
    //     {
    //       id: 4,
    //       title: 'Pengaturan',
    //       icon: 'IPengaturan',
    //       titleMenu: 'Pengaturan Menu',
    //       // link: '/anggota/daftar-anggota',
    //       subSubMenu: [
    //         {
    //           id: 1,
    //           title: 'Pengaturan',
    //           icon: 'IPengaturan',
    //           link: '/produk-digital/pengaturan',
    //         },
    //       ]
    //     }
    //   ]
    // },
    {
      id: 6,
      title: "Bantuan",
      icon: "IBantuanMenu",
      link: "onClick",
    },
  ],
};

const SelectMenuMaster = {
  id: "1",
  menu: "Dashboard",
  subMenu: "Dashboard",
  subSubMenu: "",
};

const breadcrums = {
  data: [],
};

const TabsFinanceSimpanan = {
  data: ["Mutasi Simpanan", "Buku Simpanan", "Pengaturan"],
  isActivetab: 0,
};

const TabsDetailBukuimpanan = {
  data: [
    "Simpanan Pokok",
    "Simpanan Wajib",
    "Simpanan Sukarela",
    "Simpanan Berjangka",
  ],
  isActivetab: 0,
};

const TabsKasBank = {
  data: ["Akun Kas & Bank", "Riwayat Transaksi"],
  isActivetab: 0,
};

const DefaultAkun = {
  data: ["Barang & Jasa", "Penjualan/Pembelian", "Persediaan", "Simpan/Pinjam"],
  isActivetab: 0,
};

const TabsKontak = {
  data: ["Semua", "Pelanggan", "Suplier", "Karyawan", "Lainnya"],
  isActivetab: 0,
};

const TabsAssetTeap = {
  data: ["Daftar Asset Tetap", "Kategori Asset Tetap"],
  isActivetab: 0,
};

const TabsProdukSaya = {
  data: ["PRABAYAR", "PASCA BAYAR"],
  isActivetab: 0,
};

const isDropdownAkun = {
  isActive: false,
  isPageAkun: false,
};

const TabsAkunPage = {
  data: ["Profile Akun", "Profile Usaha"],
  isActivetab: 0,
};

const TabsAddAssetBaru = {
  data: ["Informasi Umum", "Informasi Lainya", "Akun Pengeluaran"],
  isActivetab: 0,
};

const TabsAddKontak = {
  data: [
    "Info Umum",
    "Alamat",
    "Akun Bank",
    "Pembelian",
    "Pajak",
    "Saldo Utang",
    "lain-lain",
  ],
  isActivetab: 0,
};

const TabsAddStokOpname = {
  data: ["Perintah stok opname", "Hasil stok opname"],
  isActivetab: 0,
};

const TabsAddProduk = {
  data: [
    "Info umum",
    "Penjualan/Pembelian",
    "Stok",
    "Akun",
    "Gambar",
    "Lain-lain",
  ],
  isActivetab: 0,
};

const TabsDetailPenjualan = {
  data: ["Detail Transaksi", "Informasi Transaksi", "Biaya Lainnya"],
  isActivetab: 0,
};

const TabsAddPenjualan = {
  data: [
    "Pesanan Penjualan",
    "Pengiriman Penjualan",
    "Uang Muka Penjualan",
    "Faktur Pembelian",
    "Penerimaan Penjualan",
  ],
  isActivetab: 0,
};

const TabsAddPenjualanPesanan = {
  data: ["Detail Transaksi", "Informasi Transaksi", "Biaya Lainnya"],
  isActivetab: 0,
};

const TabsAddPenjualanPengiriman = {
  data: ["Detail Transaksi", "Informasi Transaksi"],
  isActivetab: 0,
};

const TabsAddFakturPembelian = {
  data: ["Detail Transaksi", "Informasi Transaksi", "Biaya lainnya"],
  isActivetab: 0,
};

const TabsAddPeberimaanPenjualan = {
  data: ["Detail Transaksi", "Informasi Transaksi"],
  isActivetab: 0,
};

const TabsDetailPembelian = {
  data: ["Detail Transaksi", "Informasi Transaksi", "Biaya Lainnya"],
  isActivetab: 0,
};

const TabsAddPembelian = {
  data: [
    "Pesanan Pembelian",
    "Penerimaan Barang",
    "Uang Muka Pembelian",
    "Faktur Pembelian",
    "Pembayaran Pembelian",
    "Retur Pembelian",
  ],
  isActivetab: 0,
};

const TabsAddPembelianPesanan = {
  data: ["Detail Transaksi", "Informasi Transaksi", "Biaya Lainnya"],
  isActivetab: 0,
};

const TabsAddPembelianPenerimaanBarang = {
  data: ["Detail Transaksi", "Informasi Transaksi"],
  isActivetab: 0,
};

const TabsAddPembelianFakturPembelian = {
  data: ["Detail Transaksi", "Informasi Transaksi", "Biaya lainnya"],
  isActivetab: 0,
};

const errorPage = {
  error: false,
  msg: "",
};

const TabsFinancePinjaman = {
  data: ['Mutasi Pinjaman', 'Pengajuan', 'Buku Pinjaman', 'Pengaturan'],
  isActivetab: 0,
}

export function TabsFinancePinjamanReducer(state = TabsFinancePinjaman, action) {
  switch (action.type) {
    case "STATUS_TAB_PINJAMAN_SET":
      return {
        ...state,
        isActivetab: action.payload
      };
    default:
      return state;
  }
}

export function ErrorPageReducer(state = errorPage, action) {
  switch (action.type) {
    case "ERROR_PAGE":
      return {
        ...state,
        error: action.error,
        msg: action.msg,
      };
    default:
      return state;
  }
}

export function TabsAddPembelianFakturPembelianReducer(
  state = TabsAddPembelianFakturPembelian,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_ADD_PEMBELIAN_FAKTUR_PEMBELIAN":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddPembelianPenerimaanBarangReducer(
  state = TabsAddPembelianPenerimaanBarang,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_ADD_PEMBELIAN_PENERIMAAN_BARANG":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddPembelianPesananReducer(
  state = TabsAddPembelianPesanan,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_ADD_PEMBELIAN_PESANAN":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddPembelianReducer(state = TabsAddPembelian, action) {
  switch (action.type) {
    case "STATUS_TAB_ADD_PEMBELIAN":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsDetailPembelianReducer(
  state = TabsDetailPembelian,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_DETAIL_PEMBELIAN":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddPeberimaanPenjualanReducer(
  state = TabsAddPeberimaanPenjualan,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_ADD_PENERIMAAN_PENJUALAN":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddFakturPembelianReducer(
  state = TabsAddFakturPembelian,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_ADD_FAKTUR_PEMBELIAN":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddPenjualanPengirimanReducer(
  state = TabsAddPenjualanPengiriman,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_ADD_PENJUALAN_PENGIRIMAN":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddPenjualanPesananReducer(
  state = TabsAddPenjualanPesanan,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_ADD_PENJUALAN_PESANAN":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddPenjualanReducer(state = TabsAddPenjualan, action) {
  switch (action.type) {
    case "STATUS_TAB_ADD_PENJUALAN":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsDetailPenjualanReducer(
  state = TabsDetailPenjualan,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_DETAIL_PENJUALAN":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddProdukReducer(state = TabsAddProduk, action) {
  switch (action.type) {
    case "STATUS_TAB_ADD_PRODUK":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddStokOpnameReducer(state = TabsAddStokOpname, action) {
  switch (action.type) {
    case "STATUS_TAB_ADD_STOK_OPNAME":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddKontakReducer(state = TabsAddKontak, action) {
  switch (action.type) {
    case "STATUS_TAB_ADD_KONTAK":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAddAssetBaruReducer(state = TabsAddAssetBaru, action) {
  switch (action.type) {
    case "STATUS_TAB_ADD_ASSET_BARU":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAkunPageReducer(state = TabsAkunPage, action) {
  switch (action.type) {
    case "STATUS_TAB_AKUN_PAGE_SET":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function IsDropdownAkunReducer(state = isDropdownAkun, action) {
  switch (action.type) {
    case "IS_DROPDOWN_AKUN":
      return {
        ...state,
        isActive: !state.isActive,
      };
    case "IS_DROPDOWN_AKUN_FALSE":
      return {
        ...state,
        isActive: false,
      };
    case "IS_PAGE_AKUN_TRUE":
      return {
        ...state,
        isPageAkun: true,
      };
    case "IS_PAGE_AKUN_FALSE":
      return {
        ...state,
        isPageAkun: false,
      };
    default:
      return state;
  }
}

export function TabsProdukSayaReducer(state = TabsProdukSaya, action) {
  switch (action.type) {
    case "STATUS_TAB_PRODUK_SAYA_SET":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsAssetTetapReducer(state = TabsAssetTeap, action) {
  switch (action.type) {
    case "STATUS_TAB_ASSET_TETAP_SET":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsKontakReducer(state = TabsKontak, action) {
  switch (action.type) {
    case "STATUS_TAB_KONTAK_SET":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsKasBankReducer(state = TabsKasBank, action) {
  switch (action.type) {
    case "STATUS_TAB_KAS_BANK_SET":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsDefaultAkunReducer(state = DefaultAkun, action) {
  switch (action.type) {
    case "STATUS_TAB_DEFAULT_AKUN_SET":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsDetailBukuimpananReducer(
  state = TabsDetailBukuimpanan,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_DETAIL_BUKU_SIMPANAN_SET":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function TabsFinanceSimpananReducer(
  state = TabsFinanceSimpanan,
  action
) {
  switch (action.type) {
    case "STATUS_TAB_SET":
      return {
        ...state,
        isActivetab: action.payload,
      };
    default:
      return state;
  }
}

export function BreadcrumsReducer(state = breadcrums, action) {
  switch (action.type) {
    case "STATUS_BREADCRUM_SET":
      const isTitleInArray = state?.data.some(
        (item) => item.link === action?.payload?.link
      );

      let addData;
      if (isTitleInArray) {
        // Jika objek sudah ada di dalam array, addData akan sama dengan data
        addData = state.data;
      } else {
        // Jika objek belum ada di dalam array, tambahkan objek baru ke dalam array
        addData = [...state.data, action.payload];
      }

      return {
        ...state,
        data: addData,
      };

    case "STATUS_BREADCRUM_INDEX_RESET":
      let newData;

      if (state.data.length == 1) {
        newData = state.data;
      } else {
        newData = state?.data.filter((item) => {
          // Menghapus objek dengan ID yang sesuai
          return item.title !== action?.payload?.title;
        });
      }

      return {
        ...state,
        data: newData,
      };
    case "STATUS_BREADCRUM_ALL_RESET":
      return breadcrums;
    default:
      return state;
  }
}

export function SelectMenuMasterReducer(state = SelectMenuMaster, action) {
  switch (action.type) {
    case "STATUS_SELECT_MENU_SET":
      return {
        ...state,
        menu: action?.payload,
      };
    case "STATUS_SELECT_MENU_RESET":
      return {
        ...state,
        [action.payload.indexKey]: "",
      };
    case "STATUS_SELECT_SUBSUBMENU_SET":
      return {
        ...state,
        subSubMenu: action?.payload,
      };
    case "STATUS_SELECT_SUBSUBMENU_RESET":
      return {
        ...state,
        [action.payload.indexKey]: "",
      };
    case "STATUS_SELECT_MENU_RESET_ALL":
      return SelectMenuMaster;
    default:
      return state;
  }
}

export function MenuMasterReducer(state = MenuMaster, action) {
  switch (action.type) {
    case "STATUS_MENU_MASTER_PENDING":
      return {
        ...state,
        isLoading: true,
        is_error: false,
        data: [],
      };
    case "STATUS_MENU_MASTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        is_error: false,
        data: action?.payload,
      };
    case "STATUS_MENU_MASTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        is_error: true,
        data: [],
      };
    default:
      return state;
  }
}

export function StatusPageReducer(state = StatusPageState, action) {
  switch (action.type) {
    case "STATUS_PAGE_REDUCER_SET":
      return {
        ...state,
        isAuthenticated: action?.payload?.isAuthenticated,
        token: action?.payload?.token,
        email: action?.payload?.email,
        role: action?.payload?.role,
      };
    case "STATUS_PAGE_REDUCER_RESET":
      return { ...state, [action.payload.indexKey]: action.payloadd.valueKey };
    case "STATUS_PAGE_REDUCER_RESET_ALL":
      return StatusPageState;
    default:
      return state;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  MenuMasterReducer,
  StatusPageReducer,
  SelectMenuMasterReducer,
  BreadcrumsReducer,
  TabsFinanceSimpananReducer,
  TabsFinancePinjamanReducer,
  TabsDetailBukuimpananReducer,
  TabsKasBankReducer,
  TabsDefaultAkunReducer,
  TabsKontakReducer,
  TabsAssetTetapReducer,
  TabsProdukSayaReducer,
  TabsAkunPageReducer,
  TabsAddAssetBaruReducer,
  TabsAddKontakReducer,
  TabsAddStokOpnameReducer,
  TabsAddProdukReducer,
  TabsDetailPenjualanReducer,
  TabsAddPenjualanReducer,
  TabsAddPenjualanPesananReducer,
  TabsAddPenjualanPengirimanReducer,
  TabsAddFakturPembelianReducer,
  TabsAddPeberimaanPenjualanReducer,
  TabsAddPembelianReducer,
  TabsDetailPembelianReducer,
  TabsAddPembelianPesananReducer,
  TabsAddPembelianPenerimaanBarangReducer,
  TabsAddPembelianFakturPembelianReducer,
  IsDropdownAkunReducer,
  ErrorPageReducer,
};
