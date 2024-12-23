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
import WithAuth from "components/config/protect";
import ModalEditBrand from "components/inventory/brand-produk/modalEditBrand";
import ModalDetailVariasi from "components/inventory/variasi-produk/modalDetailVariasi";
import ModalAddVariasi from "components/inventory/variasi-produk/modalAddVariasi";
import ModalEditVariasi from "components/inventory/variasi-produk/modalEditVariasi";
import axiosInstance from "global-states/api";

const VariasiProduk = () => {
  const [modalDetail, setmodalDetail] = useState(false);
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false);
  const [modalConfirmationEdit, setmodalConfirmationEdit] = useState(false);
  const [modalConfirmationDelete, setmodalConfirmationDelete] = useState(false);
  const [variations, setVariations] = useState([])
  const [meta, setMeta] = useState({});
  const [links, setLinks] = useState({});
  const [newVariant, setNewVariant] = useState({})
  const [variantToView, setVariantToView] = useState(null)
  const [variantToEdit, setVariantToEdit] = useState(null)
  const [variantId, setVariantId] = useState(null)
  
  const fetchDataVariations = async () => {
    try {
      const response = await axiosInstance.get('/variations');
      const data = response.data?.data.map((item,id) => ({
        no: id+1,
        id: item.id,
        name: item.attributes?.name,
        variationTypes: item.attributes?.variation_types || [],
        link: item.links?.self,
      }));

      const meta = response.data?.meta;
      const links = response.data?.links;

      setVariations(data || []);
      setMeta(meta || {});
      setLinks(links || {});
    } catch (error) {
      console.error("Error saat mengambil data kategori variasi:", error);
    }
  };

  const fetchVariantDetail = async (id) => {
    try {
      const res = await axiosInstance.get(`/variations/${id}`)
      setVariantToView(res.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleEdit = (variant) => {
    setVariantToEdit(variant)
    setmodalEdit(true)
  }

  const updateVariant = async () => {
    if (variantToEdit) {
      try {
        // const dataToUpdate = {}
        // const originalBrand = brands.find(item => item.id === brandToEdit.id)

        // if (brandToEdit.name !== originalBrand.name) {
        //   dataToUpdate.name = brandToEdit.name
        // }
        // if (brandToEdit.description !== originalBrand.description) {
        //   dataToUpdate.description = brandToEdit.description
        // }
        const data = {
          name: variantToEdit.name,
          variation_types: variantToEdit.variationTypes.filter((v) => v.name.trim() !== "")
        }
        await axiosInstance.put(`/variations/${variantToEdit.id}`, data)
        setmodalEdit(false)
        alert("Update berhasil")
        fetchDataVariations()
      } catch (error) {
        console.error(error)
        alert("Update gagal, silahkan coba lagi")
      }
    }
  }

  const createVariant = async (data) => {
    try {
      const response = await axiosInstance.post("/variations", data)
      
      if (response.status === 201) {
        alert("data berhasil ditambahkan!")
        setmodalConfirmationAdd(false)
        setmodalAdd(false);
        fetchDataVariations()
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Gagal menambahkan data")
    }
  }

  const deleteVariant = async () => {
    try {
      await axiosInstance.delete(`/variations/${variantId}`)
      alert("Berhasil menghapus data")
      fetchDataVariations()
    } catch (error) {
      console.error('Error deleting product:', error);
      alert("Gagal menghapus data")
    }
  };

  const handleSubmitOnModalAdd = (data) => {
    setNewVariant(data)
    setmodalAdd(false)
    setmodalConfirmationAdd(true)
  }

  const handleViewDetail = (id) => {
    fetchVariantDetail(id)
    setmodalDetail(true)
  }

  const handleDelete = (id) => {
    setVariantId(id)
    setmodalConfirmationDelete(true);
  }

  // eslint-disable-next-line no-unused-vars
  const [pageFisik, setPageFisik] = useState(1);

  const handlePagination = (page) => {
    setPageFisik(page.selected + 1);
  };

  const ButtonAct = () => {
    setmodalConfirmationAdd(false);
    setmodalConfirmationEdit(false);
    setmodalConfirmationDelete(false);
    setmodalAdd(false);
    setmodalEdit(false);
  };

  const handleActSubmitAddConfirm = () => {
    createVariant(newVariant)
    setmodalConfirmationAdd(false)
  }

  const handleActSubmitEditConfirm = () => {
    updateVariant()
    setmodalConfirmationEdit(false);
  }

  const handleActSubmitDeleteConfirm = () => {
    deleteVariant()
    setmodalConfirmationDelete(false);
  }

  const columns = [
    {
      name: "No",
      width: "70px",
      selector: (row) => row.id,
    },
    {
      name: "Nama Variant",
      selector: (row) => row.name,
    },
    {
      name: "Type Variant",
      selector: (row) => row.variationTypes.map((variation) => variation.name).join(', '),
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
              onClick={() => handleEdit(row)}
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
  //     namaVariant: "Skin Care",
  //     typeVariant: "Pria, Wanita",
  //     DibuatPada: "20 Juli 2023, 19:12",
  //   },
  // ];

  useEffect(() => {
    fetchDataVariations();
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
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => handlePagination(page)}
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
        <TitlePageReload title={"Variant Produk"} />

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
                    Tambah Variant
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-16px">
            <DataTable columns={columns} data={variations} />

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
      <ModalDetailVariasi
        isModalUp={modalDetail}
        setisModal={setmodalDetail}
        // namaVariant={"Susu Kotak"}
        // dataTag={["Jeruk", "Mangga"]}
        item={variantToView}
      />
      <ModalAddVariasi
        isModalUp={modalAdd}
        setisModal={setmodalAdd}
        onSubmit={handleSubmitOnModalAdd}
        handleActCancel={() => {
          setmodalAdd(false);
        }}
        handleActSubmit={() => {
          setmodalAdd(false);
          setmodalConfirmationAdd(true);
        }}
      />
      <ModalEditVariasi
        isModalUp={modalEdit}
        setisModal={setmodalEdit}
        variantToEdit={variantToEdit}
        setVariantToEdit={setVariantToEdit}
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

export default WithAuth(VariasiProduk);
