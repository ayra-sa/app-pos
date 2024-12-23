import IAdd from "components/icons/IAdd";
import IEdit from "components/icons/IEdit";
import IHapus from "components/icons/IHapus";
import ISearchInput from "components/icons/IsearchInput";
import TitlePageReload from "components/TitlePage/TitlePageReload";
import Admin from "layouts/Admin";
import { round } from "lodash";
import React, { useState } from "react";
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

const Unit = () => {
  const [modalDetail, setmodalDetail] = useState(false);
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false);
  const [modalConfirmationEdit, setmodalConfirmationEdit] = useState(false);
  const [modalConfirmationDelete, setmodalConfirmationDelete] = useState(false);

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

  const columns = [
    {
      name: "No",
      width: "70px",
      selector: (row) => row.No,
    },
    {
      name: "Nama Unit",
      selector: (row) => row.namaUnit,
    },
    {
      name: "Type Unit",
      selector: (row) => row.typeUnit,
    },
    {
      name: "Dibuat Pada",
      selector: (row) => row.DibuatPada,
    },
    {
      name: "Aksi",
      width: "180px",
      cell: (row, index, column, id) => {
        return (
          <div className="display-flex-align-center">
            <div
              onClick={() => {
                setmodalEdit(true);
              }}
              className="cursor-pointer mr-16px"
            >
              <IEdit />
            </div>
            <div
              onClick={() => {
                setmodalConfirmationDelete(true);
              }}
              className="cursor-pointer"
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
      No: "1",
      namaUnit: "Package",
      typeUnit: "PKG",
      DibuatPada: "20 Juli 2023, 19:12",
    },
  ];

  const CustomPagination = () => {
    const count = round(10);
    const currentPage = 1;

    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel="..."
        pageCount={Math.ceil(count) || 1}
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
        <TitlePageReload title={"Unit Produk"} />

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

          <div className="p-16px">
            <DataTable columns={columns} data={data} />

            <CustomPagination />
          </div>
        </div>
      </div>
      <ModalConfirmationDelete
        isModalUp={modalConfirmationDelete}
        setisModalUp={setmodalConfirmationDelete}
        actionCallback={ButtonAct}
      />
      <ModalConfirmationAdd
        isModalUp={modalConfirmationAdd}
        setisModalUp={setmodalConfirmationAdd}
        actionCallback={ButtonAct}
      />
      <ModalConfirmationEdit
        isModalUp={modalConfirmationEdit}
        setisModalUp={setmodalConfirmationEdit}
        actionCallback={ButtonAct}
      />
      <ModalDetailVariasi
        isModalUp={modalDetail}
        setisModal={setmodalDetail}
        namaVariant={"Susu Kotak"}
        dataTag={["Jeruk", "Mangga"]}
      />
      <ModalAddUnit
        isModalUp={modalAdd}
        setisModal={setmodalAdd}
        handleActCancel={() => {
          setmodalAdd(false);
        }}
        handleActSubmit={() => {
          setmodalAdd(false);
          setmodalConfirmationAdd(true);
        }}
      />
      <ModalEditUnit
        isModalUp={modalEdit}
        setisModal={setmodalEdit}
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

export default WithAuth(Unit);
