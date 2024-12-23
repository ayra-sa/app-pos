import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import IndexDropdown from "components/Dropdowns/IndexDropdown";
import InputDate from "components/Input/InputDate";
// import InputDropdown from "components/Input/InputDropdown";
import InputDropdownvalue from "components/Input/InputDropdownValue";
import InputRadio from "components/Input/InputRadio";
import InputTextArea from "components/Input/InputTexArea";
import InputText from "components/Input/InputText";
import ModalWrapper from "components/Modal/ModalWrapper";
import Tab from "components/Tab/inddex";
import TitleModal from "components/TitlePage/TitleModal";
import UploadImage from "components/UploadImage";
import IAdd from "components/icons/IAdd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ModalAddProduk({
  isModalUp,
  setisModalUp,
  setisModalConfirmationAdd,
  setisModalConfirmationEdit,
  handleActSubmit,
  newMainProduct,
  setNewMainProduct,
  handleUpload
}) {
  const [TabsAddProdukReducer, setTabsAddProdukReducer] = useState({
    data: [
      "Info umum",
      "Penjualan/Pembelian",
      "Stok",
      "Akun",
      "Gambar",
      "Lain-lain",
    ],
    isActivetab: 0,
  });
  const dispatch = useDispatch();

  return (
    <ModalWrapper
      isModalUp={isModalUp}
      bottom={"10%"}
      top={"10%"}
      left={"10%"}
      right={"10%"}
      overflow={"auto"}
      setisModalUp={setisModalUp}
    >
      <div className="p-16px">
        <TitleModal
          setisModalClose={setisModalUp}
          title={"Tambah Produk Baru"}
        />
      </div>
      <hr />
      <div className="p-16px grid grid-cols-2 gap-4">
        <InputText
          flexParent={1}
          placeholder={"Masukan nama barang"}
          title={"Nama barang*"}
          value={newMainProduct?.name}
          handleChange={(e) => setNewMainProduct({
            ...newMainProduct,
            name: e.target.value
          })}
        />
        <InputDropdownvalue
          marginLeftChild={"16px"}
          flexParent={1}
          title={"Kategori Produk"}
          value={newMainProduct?.product_category_id}
          data={[
            {value: "1", label: "Option 1"},
            {value: "2", label: "Option 2"},
            {value: "3", label: "Option 3"},
          ]}
          handleSelectChange={(e) => setNewMainProduct({
            ...newMainProduct,
            product_category_id: e.target.value
          })}
        />
        <div>
          <h2 className="font-medium">Type Produk</h2>
          <InputRadio
            multi={true}
            valueMulti={[{ titleCheck: "Satuan", value: "1" }, { titleCheck: "Varian", value: "2" }]}
            name="productType"
            checked={newMainProduct?.product_type}
            handleChange={(e) => setNewMainProduct({
              ...newMainProduct,
              product_type: e.target.value
            })}
          />
        </div>
      </div>
      <Tab
        onClick={(payload) => {
          setTabsAddProdukReducer((prevstate) => {
            return {
              ...prevstate,
              isActivetab: payload,
            };
          });
        }}
        Tabs={TabsAddProdukReducer?.data}
        IsActiveTab={TabsAddProdukReducer?.isActivetab}
      />
      <hr className="mt-16px" />
      {TabsAddProdukReducer?.isActivetab === 0 && (
        <>
          <div className="p-16px grid grid-cols-2 mt-4 gap-4">
            <InputDropdownvalue
              title={"Brand"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.brand_id}
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                brand_id: e.target.value
              })}
              />
            <InputDropdownvalue
              otomatis={true}
              title={"Simbol Barcode*"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.barcode_symbol}
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                barcode_symbol: e.target.value
              })}
            />
            <InputText 
              title={"Kode Sku*"} 
              placeholder={"0"} 
              value={newMainProduct?.code} 
              handleChange={(e) => setNewMainProduct({
                ...newMainProduct,
                code: e.target.value
              })}  
              />
            <InputDropdownvalue
              title={"Satuan*"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.product_code} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                product_code: e.target.value
              })}  
            />
          </div>
        </>
      )}
      {TabsAddProdukReducer?.isActivetab === 1 && (
        <>
          <div className="p-16px grid grid-cols-2 mt-4 gap-4">
            <InputText
              flexParent={1}
              title={"Harga Beli"}
              placeholder={"Rp 0"}
              value={newMainProduct?.product_price}
              handleChange={(e) => setNewMainProduct({
                ...newMainProduct,
                product_price: e.target.value
              })}
              />
            <InputText
              flexParent={1}
              title={"Harga Jual"}
              placeholder={"Rp 0"}
              value={newMainProduct?.product_cost}
              handleChange={(e) => setNewMainProduct({
                ...newMainProduct,
                product_cost: e.target.value
              })}
              />
            <InputDropdownvalue
              flexParent={1}
              title={"Satuan Pembelian"}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.purchase_unit} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                purchase_unit: e.target.value
              })}  
            />
            <InputDropdownvalue
              flexParent={1}
              title={"Satuan Penjualan"}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.sale_unit} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                sale_unit: e.target.value
              })}  
              />
            <InputText
              flexParent={1}
              title={"Pajak Pesanan (%)"}
              placeholder={"Rp 0"}
              value={newMainProduct?.order_tax}
              handleChange={(e) => setNewMainProduct({
                ...newMainProduct,
                order_tax: e.target.value
              })}
            />
            <InputDropdownvalue
              flexParent={1}
              title={"Jenis Pajak"}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.tax_type} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                tax_type: e.target.value
              })}  
            />
          </div>
        </>
      )}
      {TabsAddProdukReducer?.isActivetab === 2 && (
        <>
          <div className="p-16px grid grid-cols-6 mt-4 gap-4">
            <InputDropdownvalue
              title={"Gudang"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.warehouse_id} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                warehouse_id: e.target.value
              })}  
            />
            <InputDropdownvalue
              title={"Pemasok"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.supplier} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                supplier: e.target.value
              })}  
              />
            <InputText
              classTitle={"dropdown-status-data-table-title"}
              flexParent={1}
              title={"Kuantitas*"}
              placeholder={"0"}
              value={newMainProduct?.quantity} 
              handleChange={(e) => setNewMainProduct({
                ...newMainProduct,
                quantity: e.target.value
              })}  
              />
            <InputText
              classTitle={"dropdown-status-data-table-title"}
              flexParent={1}
              title={"Limit Kuantitas*"}
              placeholder={"0"}
              value={newMainProduct?.quantity_limit} 
              handleChange={(e) => setNewMainProduct({
                ...newMainProduct,
                quantity_limit: e.target.value
              })}  
              />
            <InputDropdownvalue
              title={"Satuan Produk*"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.product_unit} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                product_unit: e.target.value
              })}  
              />
          </div>
          <hr className="mt-16px" />
          <div className="p-16px flex items-center justify-center">
            <InputText
              classTitle={"dropdown-status-data-table-title"}
              flexParent={1}
              title={"Stok Alert"}
              placeholder={"0"}
              value={newMainProduct?.stock_alert} 
              handleChange={(e) => setNewMainProduct({
                ...newMainProduct,
                stock_alert: e.target.value
              })}  
              />
            <InputDropdownvalue
              title={"Status*"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.status} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                status: e.target.value
              })}  
            />
          </div>
        </>
      )}
      {TabsAddProdukReducer?.isActivetab === 3 && (
        <>
          <div className="p-16px grid grid-cols-2 gap-4">
            <InputDropdownvalue
              title={"Persediaan"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.account_inventory} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                account_inventory: e.target.value
              })}  
            />
            <InputDropdownvalue
              title={"Penjualan"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.account_sales} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                account_sales: e.target.value
              })}  
            />
            <InputDropdownvalue
              title={"Retur Penjualan"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.account_sales_return} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                account_sales_return: e.target.value
              })}  
            />
            <InputDropdownvalue
              title={"Diskon Penjualan"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.account_sales_discount} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                account_sales_discount: e.target.value
              })}  
            />
            <InputDropdownvalue
              title={"Barang Terkirim"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.account_good_transit} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                account_good_transit: e.target.value
              })}  
            />
            <InputDropdownvalue
              title={"Beban Pokok Penjualan"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.account_hpp} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                account_hpp: e.target.value
              })}  
            />
            <InputDropdownvalue
              title={"Retur Pembelian"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.account_purchase_return} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                account_purchase_return: e.target.value
              })}  
            />
            <InputDropdownvalue
              title={"Pembelian Belum Tertagih"}
              flexParent={1}
              marginLeftChild={"16px"}
              data={[
                {value: "1", label: "Option 1"},
                {value: "2", label: "Option 2"},
                {value: "3", label: "Option 3"},
              ]}
              value={newMainProduct?.account_unbilled_purchases} 
              handleSelectChange={(e) => setNewMainProduct({
                ...newMainProduct,
                account_unbilled_purchases: e.target.value
              })}  
            />
          </div>
        </>
      )}
      {TabsAddProdukReducer?.isActivetab === 4 && (
        <>
          <div className="p-16px grid grid-cols-1 gap-4">
            <UploadImage onImageUpload={handleUpload} />
          </div>
        </>
      )}
      {TabsAddProdukReducer?.isActivetab === 5 && (
        <>
          <div className="p-16px grid grid-cols-1 gap-4">
            <InputTextArea
              flexParent={1}
              title={"Catatan"}
              placeholder={"Isi catatan disini"}
              value={newMainProduct?.notes}
              handleChange={(e) => setNewMainProduct({
                ...newMainProduct,
                notes: e.target.value
              })}
            />
          </div>
        </>
      )}
      <div className="p-16px d-flex align-center justify-end">
        <div className="mr-16px">
          <ButtonCancel
            title={"Batal"}
            paddingBottom={"6px"}
            paddingTop={"6px"}
          />
        </div>
        <ButtonSave
          action={handleActSubmit}
          title={"Simpan"}
        />
      </div>
    </ModalWrapper>
  );
}

export default ModalAddProduk;
