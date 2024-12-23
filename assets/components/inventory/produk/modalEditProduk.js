import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import IndexDropdown from "components/Dropdowns/IndexDropdown";
import InputDate from "components/Input/InputDate";
import InputDropdown from "components/Input/InputDropdown";
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

function ModalEditProduk({
  isModalUp,
  setisModalUp,
  setisModalConfirmationAdd,
  setisModalConfirmationEdit,
  mainProductToEdit,
  setMainProductToEdit,
  handleUpload,
  imageFile,
  handleActSave
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
        <TitleModal setisModalClose={setisModalUp} title={"Edit Produk"} />
      </div>
      <hr />
      <div className="p-16px grid grid-cols-2 gap-4">
        <InputText
          flexParent={1}
          placeholder={"Masukan nama barang"}
          title={"Nama barang*"}
          value={mainProductToEdit?.name}
          handleChange={(e) => setMainProductToEdit({
            ...mainProductToEdit,
            name: e.target.value
          })}
        />
        <InputDropdownvalue
          marginLeftChild={"16px"}
          flexParent={1}
          title={"Kategori Produk"}
          value={mainProductToEdit?.product_category_id}
          data={[
            {value: "1", label: "Option 1"},
            {value: "2", label: "Option 2"},
            {value: "3", label: "Option 3"},
          ]}
          handleSelectChange={(e) => setMainProductToEdit({
            ...mainProductToEdit,
            product_category_id: e.target.value
          })}
        />
        <div>
          <h2 className="font-medium">Type Produk</h2>
          <InputRadio
            multi={true}
            valueMulti={[{ titleCheck: "Satuan", value: "1" }, { titleCheck: "Varian", value: "2" }]}
            name="productType"
            checked={mainProductToEdit?.product_type}
            handleChange={(e) => setMainProductToEdit({
              ...mainProductToEdit,
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
              value={mainProductToEdit?.brand_id}
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.barcode_symbol}
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
                barcode_symbol: e.target.value
              })}
            />
            <InputText 
              title={"Kode Sku*"} 
              placeholder={"0"} 
              value={mainProductToEdit?.code} 
              handleChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.product_code} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.product_price}
              handleChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
                product_price: e.target.value
              })}
              />
            <InputText
              flexParent={1}
              title={"Harga Jual"}
              placeholder={"Rp 0"}
              value={mainProductToEdit?.product_cost}
              handleChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.purchase_unit} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.sale_unit} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
                sale_unit: e.target.value
              })}  
              />
            <InputText
              flexParent={1}
              title={"Pajak Pesanan (%)"}
              placeholder={"Rp 0"}
              value={mainProductToEdit?.order_tax}
              handleChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.tax_type} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.warehouse} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
                warehouse: e.target.value
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
              value={mainProductToEdit?.supplier} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
                supplier: e.target.value
              })}  
              />
            <InputText
              classTitle={"dropdown-status-data-table-title"}
              flexParent={1}
              title={"Kuantitas*"}
              placeholder={"0"}
              value={mainProductToEdit?.quantity} 
              handleChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
                quantity: e.target.value
              })}  
              />
            <InputText
              classTitle={"dropdown-status-data-table-title"}
              flexParent={1}
              title={"Limit Kuantitas*"}
              placeholder={"0"}
              value={mainProductToEdit?.quantity_limit} 
              handleChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.product_unit} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.stock_alert} 
              handleChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.status} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.account_inventory} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.account_sales} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.account_sales_return} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.account_sales_discount} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.account_good_transit} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.account_hpp} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.account_purchase_return} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
              value={mainProductToEdit?.account_unbilled_purchases} 
              handleSelectChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
            {imageFile ? <p>File terpilih : {imageFile.name}</p> : <p>{mainProductToEdit.images}</p>}
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
              value={mainProductToEdit?.notes}
              handleChange={(e) => setMainProductToEdit({
                ...mainProductToEdit,
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
          action={handleActSave}
          title={"Simpan"}
        />
      </div>
    </ModalWrapper>
  );
}

export default ModalEditProduk;