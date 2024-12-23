import { combineReducers } from "redux";

import {
  MenuMasterReducer,
  StatusPageReducer,
  SelectMenuMasterReducer,
  BreadcrumsReducer,
  TabsFinanceSimpananReducer,
  TabsDetailBukuimpananReducer,
  TabsKasBankReducer,
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
  TabsAddPembelianPesananReducer,
  TabsDetailPembelianReducer,
  TabsAddPembelianPenerimaanBarangReducer,
  TabsAddPembelianFakturPembelianReducer,
  IsDropdownAkunReducer,
  ErrorPageReducer,
  TabsFinancePinjamanReducer,
  TabsDefaultAkunReducer
} from './_global.reducer';
import {
  PayloadLoginReducer,
  ResponLoginReducer,
  PayloadVerifyOtpLoginReducer,
  ResponVerifyOtpLoginReducer,
  PayloadRegistrasiReducer,
  ResponRegistrasiReducer,
  PayloadVerifyOtpRegistrasiReducer,
  ResponVerifyOtpRegistrasiReducer,
} from "./_auth.reducer";
import { PenerimaanReducer } from "./finance/penerimaan.reducer";
import { CouriersReducer } from "./inventori/kurir/kurir.reducer";
import { SupliersReducer } from "./inventori/suplier/suplier.reducer";
import {
  AccountTypeReducer,
  KasBankReducer,
} from "./finance/kas&bank/kasbank.reducer";
import {
  ActiveSectionReducer
} from './finance/kasbank.reducer'
// import {
//   PenerimaanReducer,
// } from './finance/penerimaan.reducer'
import journalReducer from './journalReducer';
import brandReducer from './brandReducer';
import baseUnitReducer from './baseUnitReducer';
import defaultAkunReducer from './defaultAkunReducer';


export const rootReducer = combineReducers({
  globalReducer: StatusPageReducer,
  breadcrumsReducer: BreadcrumsReducer,
  menuMasterReducer: MenuMasterReducer,
  tabsFinanceSimpananReducer: TabsFinanceSimpananReducer,
  tabsFinancePinjamanReducer: TabsFinancePinjamanReducer,
  tabsDetailBukuimpananReducer: TabsDetailBukuimpananReducer,
  tabsKasBankReducer: TabsKasBankReducer,
  tabsDefaultAkunReducer: TabsDefaultAkunReducer,
  tabsKontakReducer: TabsKontakReducer,
  tabsAssetTetapReducer: TabsAssetTetapReducer,
  tabsProdukSayaReducer: TabsProdukSayaReducer,
  tabsAkunPageReducer: TabsAkunPageReducer,
  tabsAddAssetBaruReducer: TabsAddAssetBaruReducer,
  tabsAddKontakReducer: TabsAddKontakReducer,
  tabsAddStokOpnameReducer: TabsAddStokOpnameReducer,
  tabsAddProdukReducer: TabsAddProdukReducer,
  tabsDetailPenjualanReducer: TabsDetailPenjualanReducer,
  tabsAddPenjualanReducer: TabsAddPenjualanReducer,
  tabsAddPenjualanPesananReducer: TabsAddPenjualanPesananReducer,
  tabsAddPenjualanPengirimanReducer: TabsAddPenjualanPengirimanReducer,
  tabsAddFakturPembelianReducer: TabsAddFakturPembelianReducer,
  tabsAddPeberimaanPenjualanReducer: TabsAddPeberimaanPenjualanReducer,
  tabsDetailPembelianReducer: TabsDetailPembelianReducer,
  tabsAddPembelianReducer: TabsAddPembelianReducer,
  tabsAddPembelianPesananReducer: TabsAddPembelianPesananReducer,
  tabsAddPembelianPenerimaanBarangReducer:
    TabsAddPembelianPenerimaanBarangReducer,
  tabsAddPembelianFakturPembelianReducer:
    TabsAddPembelianFakturPembelianReducer,
  isDropdownAkunReducer: IsDropdownAkunReducer,
  selectMenuMasterReducer: SelectMenuMasterReducer,
  PayloadLoginReducer,
  ResponLoginReducer,
  PayloadVerifyOtpLoginReducer,
  ResponVerifyOtpLoginReducer,
  PayloadRegistrasiReducer,
  ResponRegistrasiReducer,
  PayloadVerifyOtpRegistrasiReducer,
  ResponVerifyOtpRegistrasiReducer,
  // KasbankReducer,
  AccountTypeReducer,
  ActiveSectionReducer,
  PenerimaanReducer,
  ErrorPageReducer,
  journal: journalReducer,
  brand: brandReducer,
  baseUnit: baseUnitReducer,
  defaultAkun: defaultAkunReducer,
  kasBankReducer: KasBankReducer,
  accountTypeReducer: AccountTypeReducer,
  couriersState: CouriersReducer,
  suppliersState: SupliersReducer,
});

export default rootReducer;
