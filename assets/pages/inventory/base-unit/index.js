import IAdd from "components/icons/IAdd";
import IEdit from "components/icons/IEdit";
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
import ModalDetailVariasi from "components/inventory/variasi-produk/modalDetailVariasi";
import ModalEditVariasi from "components/inventory/variasi-produk/modalEditVariasi";
import ModalAddUnit from "components/inventory/unit/modalAddUnit";
import ModalEditUnit from "components/inventory/unit/modalEditUnit";
import ModalAddBaseUnit from "components/inventory/base-unit/modalAddBaseUnit";
import ModalEditBaseUnit from "components/inventory/base-unit/modalEditBaseUnit";
import axiosInstance from "global-states/api";
import { useDispatch, useSelector } from "react-redux";
import { createBaseUnit, deleteBaseUnit, fetchBaseUnits, updateBaseUnit } from "global-states/actions/baseUnitActions";

const BaseUnit = () => {
  const [modalDetail, setmodalDetail] = useState(false);
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false);
  const [modalConfirmationEdit, setmodalConfirmationEdit] = useState(false);
  const [modalConfirmationDelete, setmodalConfirmationDelete] = useState(false);
  // const [baseUnits, setBaseUnits] = useState([])
  // const [meta, setMeta] = useState({});
  const [links, setLinks] = useState({});
  const [newBaseUnit, setNewBaseUnit] = useState({})
  // const [baseUnitToView, setBaseUnitToView] = useState(null)
  const [baseUnitToEdit, setBaseUnitToEdit] = useState(null)
  const [baseUnitId, setBaseUnitId] = useState(null)

  const dispatch = useDispatch();
  const { baseUnits, meta, loading } = useSelector(
    (state) => state.baseUnit
  );
  
  // const fetchDataBaseUnits = async (page) => {
  //   try {
  //     const response = await axiosInstance.get(`/base-units?page=${page}`);
  //     const data = response.data?.data.map((item,id) => ({
  //       no: id+1,
  //       id: item.id,
  //       name: item.attributes?.name,
  //       link: item.links?.self,
  //     }));

  //     const meta = response.data?.meta;
  //     const links = response.data?.links;

  //     setBaseUnits(data || []);
  //     setMeta(meta || {});
  //     setLinks(links || {});
  //   } catch (error) {
  //     console.error("Error saat mengambil data kategori units:", error);
  //   }
  // };

  const handleEdit = (base_unit, id) => {
    setBaseUnitId(id)
    setBaseUnitToEdit(base_unit)
    setmodalEdit(true)
  }

  // const updateBaseUnit = async () => {
  //   if (baseUnitToEdit) {
  //     try {
  //       // const dataToUpdate = {}
  //       // const originalBrand = brands.find(item => item.id === brandToEdit.id)

  //       // if (brandToEdit.name !== originalBrand.name) {
  //       //   dataToUpdate.name = brandToEdit.name
  //       // }
  //       // if (brandToEdit.description !== originalBrand.description) {
  //       //   dataToUpdate.description = brandToEdit.description
  //       // }
  //       await axiosInstance.put(`/base-units/${baseUnitToEdit.id}`, {
  //         name: baseUnitToEdit.name
  //       })
  //       setmodalEdit(false)
  //       alert("Update berhasil")
  //       fetchDataBaseUnits(meta.current_page)
  //     } catch (error) {
  //       console.error(error)
  //       alert("Update gagal, silahkan coba lagi")
  //     }
  //   }
  // }

  // const createBaseUnit = async () => {
  //   const data = {
  //     name: newBaseUnit?.name
  //   }

  //   try {
  //     const response = await axiosInstance.post("/base-units", data)
      
  //     if (response.status === 201) {
  //       alert("data berhasil ditambahkan!")
  //       fetchDataBaseUnits()
  //     }
  //   } catch (error) {
  //     console.error("Error:", error)
  //     alert("Gagal menambahkan data!")
  //   }
  // }

  // const deleteBaseUnit = async () => {
  //   try {
  //     await axiosInstance.delete(`/base-units/${baseUnitId}`)
  //     alert("data berhasil dihapus")
  //     fetchDataBaseUnits(meta.current_page)
  //   } catch (error) {
  //     console.error('Error deleting product:', error);
  //     alert("data gagal dihapus")
  //   }
  // };

  // const handleViewDetail = (id) => {
  //   fetchBrandDetail(id)
  //   setmodalDetail(true)
  // }

  const handleDelete = (id) => {
    setBaseUnitId(id)
    setmodalConfirmationDelete(true);
  }

  // eslint-disable-next-line no-unused-vars
  const [pageFisik, setPageFisik] = useState(1);

  const handlePagination = ({selected}) => {
    const selectedPage = selected + 1
    dispatch(fetchBaseUnits(selectedPage))
  };

  const ButtonAct = () => {
    setmodalConfirmationEdit(false);
    setmodalConfirmationDelete(false);
    setmodalAdd(false);
    setmodalEdit(false);
  };

  const handleActSubmitAddConfirm = () => {
    setmodalConfirmationAdd(false);
    dispatch(createBaseUnit({
      name: newBaseUnit.name
    }, meta.current_page))
  }

  const handleActSubmitEditConfirm = () => {
    setmodalConfirmationEdit(false);
    dispatch(updateBaseUnit(baseUnitId, {
      name: baseUnitToEdit.name
    }, meta.current_page))
  }

  const handleActSubmitDeleteConfirm = () => {
    setmodalConfirmationDelete(false);
    dispatch(deleteBaseUnit(baseUnitId, meta.current_page))
  }

  const columns = [
    {
      name: "No",
      width: "70px",
      selector: (row) => row.id,
    },
    {
      name: "Nama Base Unit",
      selector: (row) => row.attributes.name,
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

  useEffect(() => {
    dispatch(fetchBaseUnits(1))
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
        <TitlePageReload title={"Base Unit Produk"} />

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
                    Tambah Unit
                  </div>
                </div>
              </div>
            </div>
          </div>

          {loading ? (<p>Loading..</p>) : (
            <div className="p-16px">
              <DataTable columns={columns} data={baseUnits} />

              <CustomPagination />
            </div>
          )}
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
        namaVariant={"Susu Kotak"}
        dataTag={["Jeruk", "Mangga"]}
      />
      <ModalAddBaseUnit
        isModalUp={modalAdd}
        setisModal={setmodalAdd}
        newBaseUnit={newBaseUnit}
        setNewBaseUnit={setNewBaseUnit}
        handleActCancel={() => {
          setmodalAdd(false);
        }}
        handleActSubmit={() => {
          setmodalAdd(false);
          setmodalConfirmationAdd(true);
        }}
      />
      <ModalEditBaseUnit
        isModalUp={modalEdit}
        setisModal={setmodalEdit}
        baseUnitToEdit={baseUnitToEdit}
        setBaseUnitToEdit={setBaseUnitToEdit}
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

export default WithAuth(BaseUnit);
