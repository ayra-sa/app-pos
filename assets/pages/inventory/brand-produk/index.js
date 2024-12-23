import IAdd from "components/icons/IAdd";
import IEdit from "components/icons/IEdit";
import IEyes from "components/icons/IEyes";
import IHapus from "components/icons/IHapus";
import ISearchInput from "components/icons/IsearchInput";
import TitlePageReload from "components/TitlePage/TitlePageReload";
import Admin from "layouts/Admin";
import { round } from "lodash";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import ModalConfirmationDelete from "components/modalConfirmationDelete";
import ModalConfirmationAdd from "components/modalConfirmationAdd";
import ModalConfirmationEdit from "components/modalConfirmationEdit";
import ModalAddKategoriBarang from "components/inventory/kategoriBarang/modalAdd";
import ModalEditKategoriBarang from "components/inventory/kategoriBarang/modalEdit";
import ModalDetailKategoriBarang from "components/inventory/kategoriBarang/modalDetail";
import WithAuth from "components/config/protect";
import ModalDetailBrand from "components/inventory/brand-produk/modalDetailBrand";
import ModalAddBrand from "components/inventory/brand-produk/modalAddBrand";
import ModalEditBrand from "components/inventory/brand-produk/modalEditBrand";
import axiosInstance from "global-states/api";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrand,
  deleteBrand,
  editBrand,
  fetchBrandDetail,
  fetchBrands,
} from "global-states/actions/brandActions";

const BrandProduk = () => {
  const [modalDetail, setmodalDetail] = useState(false);
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false);
  const [modalConfirmationEdit, setmodalConfirmationEdit] = useState(false);
  const [modalConfirmationDelete, setmodalConfirmationDelete] = useState(false);
  // const [brands, setBrands] = useState([]);
  // const [meta, setMeta] = useState({});
  // const [links, setLinks] = useState({});
  const [newBrand, setNewBrand] = useState({});
  // const [brandToView, setBrandToView] = useState(null);
  const [brandToEdit, setBrandToEdit] = useState(null);
  const [brandId, setBrandId] = useState(null);

  const dispatch = useDispatch();
  const { data: brandsData, dataDetail, meta } = useSelector((state) => state.brand);

  const handleEdit = (brand, id) => {
    setBrandId(id)
    setBrandToEdit(brand);
    setmodalEdit(true);
  };

  const handleViewDetail = (id) => {
    dispatch(fetchBrandDetail(id));
    setmodalDetail(true);
  };

  const handleDelete = (id) => {
    setBrandId(id);
    setmodalConfirmationDelete(true);
  };

  // eslint-disable-next-line no-unused-vars
  const [pageFisik, setPageFisik] = useState(1);

  const handlePagination = (page) => {
    dispatch(fetchBrands(page.selected + 1))
  };

  const ButtonAct = () => {
    setmodalConfirmationAdd(false);
    setmodalConfirmationEdit(false);
    setmodalConfirmationDelete(false);
    setmodalAdd(false);
    setmodalEdit(false);
  };

  const handleActSubmitAddConfirm = () => {
    const data = {
      name: newBrand?.name,
      description: newBrand?.description,
    };
    dispatch(createBrand(data, meta?.current_page));
    setmodalConfirmationAdd(false);
  };

  const handleActSubmitEditConfirm = () => {
    dispatch(editBrand(brandId, {
      name: brandToEdit.name,
      description: brandToEdit.description,
    }, meta?.current_page))
    setmodalConfirmationEdit(false);
  };

  const handleActSubmitDeleteConfirm = () => {
    dispatch(deleteBrand(brandId, meta?.current_page));
    setmodalConfirmationDelete(false);
  };

  const columns = [
    {
      name: "No",
      width: "70px",
      selector: (row) => row.id,
    },
    {
      name: "Nama Brand",
      selector: (row) => row.name,
    },
    {
      name: "Deskripsi",
      selector: (row) => (row.description !== null ? row.description : "-"),
    },
    {
      name: "Dibuat Pada",
      selector: (row) => <p>20 Juli 2023, 19:12</p>,
    },
    {
      name: "Aksi",
      width: "180px",
      cell: (row, index, column, id) => {
        return (
          <div className="display-flex-align-center">
            <div
              onClick={() => handleViewDetail(row.id)}
              className="cursor-pointer mr-16px"
            >
              <IEyes />
            </div>
            <div
              onClick={() => handleEdit(row, row.id)}
              className="cursor-pointer mr-16px"
            >
              <IEdit />
            </div>
            <div
              onClick={() => handleDelete(row.id)}
              className="cursor-pointer"
            >
              <IHapus />
            </div>
          </div>
        );
      },
    },
  ];

  // const data = [
  //   {
  //     No: "1",
  //     namaBrand: "Canon",
  //     deskripsi: "Lorem Ipsum",
  //     DibuatPada: "20 Juli 2023, 19:12",
  //   },
  // ];

  useEffect(() => {
    dispatch(fetchBrands(1))
  }, [dispatch]);

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
        forcePage={meta?.current_page - 1}
        onPageChange={handlePagination}
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
        <TitlePageReload title={"Brand Produk"} />

        <div>
          <div className="finance-penerimaan-wrapp-second">
            <div style={{ display: "flex" }}>
              <div className="finance-penerimaan-wrapp-search">
                <ISearchInput />
                <input
                  placeholder="cari"
                  className="finance-penerimaan-wrapp-search-input"
                  type="text"
                />
              </div>
            </div>

            <div>
              <div>
                <div
                  onClick={() => setmodalAdd(true)}
                  className="finance-penerimaan-buttont-buat-wrapp"
                >
                  <IAdd />
                  <div className="finance-penerimaan-buttont-buat">
                    Tambah Brand
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-16px">
            <DataTable columns={columns} data={brandsData} />

            <CustomPagination />
          </div>
        </div>
      </div>
      <ModalConfirmationDelete
        isModalUp={modalConfirmationDelete}
        setisModalUp={setmodalConfirmationDelete}
        actionCallback={handleActSubmitDeleteConfirm}
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
      <ModalDetailBrand
        isModalUp={modalDetail}
        setisModal={setmodalDetail}
        // namaBrand={"Sampoerna Mil"}
        // deskripsi={"kesehatan adalah hal utama dalam kehidupan ini"}
      />
      <ModalAddBrand
        isModalUp={modalAdd}
        setisModal={setmodalAdd}
        newBrand={newBrand}
        setNewBrand={setNewBrand}
        handleActCancel={() => {
          setmodalAdd(false);
        }}
        handleActSubmit={() => {
          setmodalAdd(false);
          setmodalConfirmationAdd(true);
        }}
      />
      <ModalEditBrand
        isModalUp={modalEdit}
        setisModal={setmodalEdit}
        brand={brandToEdit}
        setBrandToEdit={setBrandToEdit}
        handleActCancel={() => {
          setmodalEdit(false);
        }}
        handleActSubmit={() => {
          setmodalEdit(false);
          setmodalConfirmationEdit(true);
        }}
      />
    </Admin>
  );
};

export default WithAuth(BrandProduk);
