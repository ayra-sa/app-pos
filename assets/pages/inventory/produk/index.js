import WithAuth from "components/config/protect";
import IAdd from "components/icons/IAdd";
import IEdit from "components/icons/IEdit";
import IHapus from "components/icons/IHapus";
import ISearchInput from "components/icons/IsearchInput";
import ModalDetailBarang from "components/inventory/barang/modalDetail";
import ModalAddProduk from "components/inventory/produk/modalAddProduk";
import ModalEditProduk from "components/inventory/produk/modalEditProduk";
import ModalConfirmationAdd from "components/modalConfirmationAdd";
import ModalConfirmationDelete from "components/modalConfirmationDelete";
import ModalConfirmationEdit from "components/modalConfirmationEdit";
import TitlePageReload from "components/TitlePage/TitlePageReload";
import axiosInstance from "global-states/api";
import Admin from "layouts/Admin";
import { round } from "lodash";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";

const Barang = () => {
  const [modalDetail, setmodalDetail] = useState(false);
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false);
  const [modalConfirmationEdit, setmodalConfirmationEdit] = useState(false);
  const [modalConfirmationHapus, setmodalConfirmationHapus] = useState(false);
  const [mainProducts, setMainProducts] = useState([])
  const [products, setProducts] = useState([])
  const [productId, setProductId] = useState(null)
  const [meta, setMeta] = useState({});
  const [links, setLinks] = useState({});
  const [newImageFile, setNewImageFile] = useState(null)
  const [imageFileChange, setImageFileChange] = useState(null)
  const [mainProductToEdit, setMainProductToEdit] = useState(null)
  const [newMainProduct, setNewMainProduct] = useState({
    product_type: "",
    name: "",
    code: "",
    barcode_symbol: "",
    product_code: "",
    product_category_id: "",
    brand_id: "",
    product_cost: "",
    product_price: "",
    product_unit: "",
    sale_unit: "",
    purchase_unit: "",
    stock_alert: "",
    quantity_limit: "",
    order_tax: "",
    tax_type: "",
    notes: "",
    images: null,
    status: "",
    warehouse_id: "",
    quantity: "",
    supplier: "",
    account_inventory: "",
    account_sales: "",
    account_sales_return: "",
    account_sales_discount: "",
    account_good_transit: "",
    account_hpp: "",
    account_purchase_return: "",
    account_unbilled_purchases: "",
    variation_data: []
  });
  
  const fetchDataMainProducts = async () => {
    try {
      const response = await axiosInstance.get('/main-products');
      const data = response.data?.data.map((item,id) => ({
        no: id+1,
        id: item.id,
        name: item.attributes?.name,
        images: item.attributes?.images,
        code: item.attributes?.code,
        maxPrice: item.attributes?.max_price,
        minPrice: item.attributes?.min_price,
        products: item.attributes?.products,
        link: item.links?.self,
      }));

      // const allProducts = response.data.data.flatMap(item => 
      //   item.attributes.products.map(product => ({
      //     ...product,
      //     productId: item.id
      //   }))
      // );

      const meta = response.data?.meta;
      const links = response.data?.links;

      setMainProducts(data || []);
      // setProducts(allProducts || [])
      setMeta(meta || {});
      setLinks(links || {});
    } catch (error) {
      console.error("Error saat mengambil data kategori main product:", error);
    }
  };

  const fetchDataProducts = async () => {
    try {
      const response = await axiosInstance.get('/products');
      const meta = response.data?.meta;
      const links = response.data?.links;

      setProducts(response.data.data || [])
      setMeta(meta || {});
      setLinks(links || {});
    } catch (error) {
      console.error("Error saat mengambil data kategori product:", error);
    }
  };

  const fetchInitProductAccounts = async () => {
    try {
      const response = await axiosInstance.get("/init-product-accounts")
      console.log(response, 'init')
    } catch (error) {
      console.error(error)
    }
  }
  
  const createMainProduct = async () => {
    const formData = new FormData()
    formData.append("product_type", newMainProduct.product_type);
    formData.append("name", newMainProduct.name);
    formData.append("barcode_symbol", newMainProduct.barcode_symbol);
    formData.append("product_code", newMainProduct.product_code);
    formData.append("product_category_id", newMainProduct.product_category_id);
    formData.append("brand_id", newMainProduct.brand_id);
    formData.append("product_cost", newMainProduct.product_cost);
    formData.append("product_price", newMainProduct.product_price);
    formData.append("product_unit", newMainProduct.product_unit);
    formData.append("sale_unit", newMainProduct.sale_unit);
    formData.append("purchase_unit", newMainProduct.purchase_unit);
    formData.append("stock_alert", newMainProduct.stock_alert);
    formData.append("quantity_limit", newMainProduct.quantity_limit);
    formData.append("order_tax", newMainProduct.order_tax);
    formData.append("tax_type", newMainProduct.tax_type);
    formData.append("notes", newMainProduct.notes);
    formData.append("warehouse_id", newMainProduct.warehouse_id);
    formData.append("images", newImageFile);
    if (newMainProduct.product_type === '1') {
      formData.append("code", newMainProduct.code);
    } else if (newMainProduct.product_type === '2') {
        const variationData = JSON.stringify([{
            "variation_id": 1,
            "variation_type_id": 1,
            "product_cost": 15500,
            "product_price": 17000,
            "product_code": "JJDF-887",
            "code": 8998989110130
        }]);
        formData.append("variation_data", variationData);
    }
    // formData.append("account_inventory", newMainProduct.account_inventory);
    // formData.append("account_sales", newMainProduct.account_sales);
    // formData.append("account_sales_return", newMainProduct.account_sales_return);
    // formData.append("account_sales_discount", newMainProduct.account_sales_discount);
    // formData.append("account_good_transit", newMainProduct.account_good_transit);
    // formData.append("account_hpp", newMainProduct.account_hpp);
    // formData.append("account_purchase_return", newMainProduct.account_purchase_return);
    // formData.append("account_unbilled_purchases", newMainProduct.account_unbilled_purchases);
    
    try {
      const res = await axiosInstance.post("/main-products", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (res.status === 201) {
        alert("Data berhasil ditambahkan!")
        setNewImageFile(null)
        fetchDataMainProducts()
      }
    } catch (error) {
      console.error(error)
      alert("Gagal menambahkan data!")
    }
  }

  const handleToEdit = (mainProduct) => {
    setMainProductToEdit(mainProduct)
    setmodalEdit(true)
  }

  const updateMainProduct = async () => {
    if (mainProductToEdit) {
      const formData = new FormData()
      formData.append("main_product_id", mainProductToEdit.id);
      formData.append("product_type", mainProductToEdit.product_type);
      formData.append("name", mainProductToEdit.name);
      formData.append("code", mainProductToEdit.code);
      formData.append("barcode_symbol", mainProductToEdit.barcode_symbol);
      formData.append("product_code", mainProductToEdit.product_code);
      formData.append("product_category_id", mainProductToEdit.product_category_id);
      formData.append("brand_id", mainProductToEdit.brand_id);
      formData.append("product_cost", mainProductToEdit.product_cost);
      formData.append("product_price", mainProductToEdit.product_price);
      formData.append("product_unit", mainProductToEdit.product_unit);
      formData.append("sale_unit", mainProductToEdit.sale_unit);
      formData.append("purchase_unit", mainProductToEdit.purchase_unit);
      formData.append("stock_alert", mainProductToEdit.stock_alert);
      formData.append("quantity_limit", mainProductToEdit.quantity_limit);
      formData.append("order_tax", mainProductToEdit.order_tax);
      formData.append("tax_type", mainProductToEdit.tax_type);
      formData.append("notes", mainProductToEdit.notes);
      if (imageFileChange) {
        formData.append("images", imageFileChange, `/D:/Downloads/${imageFileChange.name}`);
      }
      try {
        await axiosInstance.post(`/main-products/${mainProductToEdit.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        setmodalEdit(false)
        alert("Update berhasil")
        fetchDataMainProducts()
      } catch (error) {
        console.error(error)
        alert("Update gagal")
      }
    }
  }

  const deleteMainProduct = async () => {
    try {
      await axiosInstance.delete(`/main-products/${productId}`)
      alert("Berhasil menghapus data")
      fetchDataMainProducts()
    } catch (error) {
      console.error('Error deleting product:', error);
      alert("Gagal menghapus data")
    }
  };

  const handleDelete = (id) => {
    setProductId(id)
    setmodalConfirmationHapus(true);
  }

  const columns = [
    {
      name: "Nama Produk",
      selector: (row) => row.name,
    },
    {
      name: "SKU Produk",
      selector: (row) => row.product_code,
    },
    {
      name: "Deskripsi",
      selector: (row) => row.notes,
    },
    {
      name: "Kategori",
      selector: (row) => row.product_category_name,
    },
    {
      name: "Satuan",
      selector: (row) => row.product_unit !== null ? row.product_unit : '-',
    },
    {
      name: "Stok Dapat Dijual",
      selector: (row) => row.stock_alert,
    },
    {
      name: "Aksi",
      width: "120px",
      cell: (row, index, column, id) => {
        return (
          <div className="display-flex-align-center">
            <div
              onClick={() => handleToEdit(row)}
              className="ml-8px cursor-pointer"
            >
              <IEdit />
            </div>
            <div
              onClick={() => handleDelete(row.mainId)}
              className="ml-8px cursor-pointer"
            >
              <IHapus />
            </div>
          </div>
        );
      },
    },
  ];
  const data = [
    {
      namaProduk: "NamaProduk",
      skuProduk: "SKUProduk",
      deskripsi: "Deskripsi",
      kategori: "Kategori",
      satuan: "Satuan",
      stockDapatDijual: "Stok Dapat Dijual",
    },
  ];

  const handleUpload = (file) => {
    setNewImageFile(file)
  }

  const handleUploadImageChange = (file) => {
    setImageFileChange(file)
  }

  const handleActSubmitAddConfirm = () => {
    createMainProduct()
    setNewMainProduct({
      product_type: "",
      name: "",
      code: "",
      barcode_symbol: "",
      product_code: "",
      product_category_id: "",
      brand_id: "",
      product_cost: "",
      product_price: "",
      product_unit: "",
      sale_unit: "",
      purchase_unit: "",
      stock_alert: "",
      quantity_limit: "",
      order_tax: "",
      tax_type: "",
      notes: "",
      images: null,
      status: "",
      warehouse_id: "",
      quantity: "",
      supplier: "",
      account_inventory: "",
      account_sales: "",
      account_sales_return: "",
      account_sales_discount: "",
      account_good_transit: "",
      account_hpp: "",
      account_purchase_return: "",
      account_unbilled_purchases: "",
    })
    setmodalConfirmationAdd(false);
  }

  const handleActSubmitDeleteConfirm = () => {
    deleteMainProduct()
    setmodalConfirmationHapus(false)
  }

  const handleActSubmitEditConfirm = () => {
    updateMainProduct()
    setmodalConfirmationEdit(false)
  }

  useEffect(() => {
    fetchDataMainProducts();
    fetchDataProducts()
    fetchInitProductAccounts();
  }, []);

  const CustomPagination = () => {
    const count = round(10);
    const currentPage = 1;

    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel="..."
        pageCount={Math.ceil(meta?.last_page) || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName="active-page"
        forcePage={meta?.current_page !== 0 ? meta?.current_page - 1 : 0}
        // onPageChange={(page) => handlePagination(page)}
        onPageChange={(page) => null}
        pageClassName="page-item"
        breakClassName="page-item"
        nextLinkClassName="page-link te-card-shadow b1-bold"
        pageLinkClassName="page-link te-card-shadow b1-bold"
        breakLinkClassName="page-link te-card-shadow b1-bold"
        previousLinkClassName="page-link te-card-shadow b1-bold"
        nextClassName="page-item next"
        previousClassName="page-item prev"
        containerClassName={
          "custom-pagination react-paginate justify-content-end m-0"
        }
      />
    );
  };

  return (
    <Admin>
      <div
        style={{
          backgroundColor: "white",
          minHeight: "calc(100vh - 191px)",
        }}
      >
        <TitlePageReload title={"Barang"} />

        <div className="mt-16px pl-16px pr-16px d-flex justify-between">
          <div className="d-flex align-center">
            <div className="finance-penerimaan-wrapp-search">
              <ISearchInput />
              <input
                placeholder="cari"
                className="finance-penerimaan-wrapp-search-input"
                type="text"
              />
            </div>
            <div className="dropdown-status-data-table-wrapp">
              <div className="dropdown-status-data-table-title">Kategori</div>
              <select
                className="dropdown-status-data-table-select"
                name="cars"
                id="cars"
              >
                <option
                  className="finance-penerimaan-create-dropdown-option"
                  value=""
                >
                  Semua
                </option>
                <option
                  className="finance-penerimaan-create-dropdown-option"
                  value="saab"
                >
                  Saab
                </option>
                <option
                  className="finance-penerimaan-create-dropdown-option"
                  value="opel"
                >
                  Opel
                </option>
                <option
                  className="finance-penerimaan-create-dropdown-option"
                  value="audi"
                >
                  Audi
                </option>
              </select>
            </div>
            <div className="dropdown-status-data-table-wrapp">
              <div className="dropdown-status-data-table-title">Satuan</div>
              <select
                className="dropdown-status-data-table-select"
                name="cars"
                id="cars"
              >
                <option
                  className="finance-penerimaan-create-dropdown-option"
                  value=""
                >
                  Semua
                </option>
                <option
                  className="finance-penerimaan-create-dropdown-option"
                  value="saab"
                >
                  Saab
                </option>
                <option
                  className="finance-penerimaan-create-dropdown-option"
                  value="opel"
                >
                  Opel
                </option>
                <option
                  className="finance-penerimaan-create-dropdown-option"
                  value="audi"
                >
                  Audi
                </option>
              </select>
            </div>
          </div>
          <div className="d-flex align-center">
            <div className="flex mr-2">
              <div
                onClick={() => setmodalAdd(true)}
                className="bg-btn-ok Export-button-excel-wrapp cursor-pointer"
              >
                <IAdd />
                <div
                  style={{ fontSize: "12px", color: "white" }}
                  className="Export-button-excel ml-8px"
                >
                  Tambah Produk
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-16px" />

        <div className="p-16px">
          <DataTable columns={columns} data={products} />
          <CustomPagination />
        </div>
      </div>

      <ModalDetailBarang isModalUp={modalDetail} setisModal={setmodalDetail} />
      <ModalAddProduk 
        isModalUp={modalAdd} 
        setisModalUp={setmodalAdd} 
        newMainProduct={newMainProduct} 
        setNewMainProduct={setNewMainProduct} 
        handleActSubmit={() => {
          setmodalAdd(false);
          setmodalConfirmationAdd(true);
        }}
        handleUpload={handleUpload}
      />
      <ModalEditProduk 
        isModalUp={modalEdit} 
        setisModalUp={setmodalEdit} 
        handleUpload={handleUploadImageChange} 
        imageFile={imageFileChange} 
        mainProductToEdit={mainProductToEdit} 
        setMainProductToEdit={setMainProductToEdit}
        handleActSave={() => {
          setmodalEdit(false)
          setmodalConfirmationEdit(true)
        }}
      />

      <ModalConfirmationAdd
        isModalUp={modalConfirmationAdd}
        setisModalUp={setmodalConfirmationAdd}
        actionCallback={handleActSubmitAddConfirm}
      />
      <ModalConfirmationEdit
        isModalUp={modalConfirmationEdit}
        setisModalUp={setmodalConfirmationEdit}
        actionCallback={handleActSubmitEditConfirm}
      />
      <ModalConfirmationDelete
        isModalUp={modalConfirmationHapus}
        setisModalUp={setmodalConfirmationHapus}
        actionCallback={handleActSubmitDeleteConfirm}
      />
    </Admin>
  );
};

export default WithAuth(Barang);
