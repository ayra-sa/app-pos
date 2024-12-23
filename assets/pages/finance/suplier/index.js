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
import ModalAddSuplier from "components/finance/suplier/modalAddSuplier";
import ModalEditSuplier from "components/finance/suplier/modalEditSuplier";
import ModalDetailSuplier from "components/finance/suplier/modalDetailSuplier";
import { useDispatch, useSelector } from "react-redux";
import {
  createSupplier,
  deleteSupplier,
  editSupplier,
  getSuppliers,
} from "global-states/reducers/inventori/suplier/suplier.action";
import SkeletonCustom from "components/skeleton/skeleton";
import ModalSukses from "components/modalSukses";
import ModalError from "components/modalErrorGlobal";

const Suplier = () => {
  const [modalDetail, setmodalDetail] = useState(false);
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false);
  const [modalConfirmationEdit, setmodalConfirmationEdit] = useState(false);
  const [modalConfirmationDelete, setmodalConfirmationDelete] = useState(false);

  const [query, setQuery] = useState("");
  const [detailSupplier, setDetailSupplier] = useState({});
  const [nameInputSupplier, setNameInputSupplier] = useState("");
  const [emailInputSupplier, setEmailInputSupplier] = useState("");
  const [phoneInputSupplier, setPhoneInputSupplier] = useState("");
  const [cityInputSupplier, setCityInputSupplier] = useState("");
  const [countryInputSupplier, setCountryInputSupplier] = useState("");
  const [addressInputSupplier, setAddressInputSupplier] = useState("");
  const { suppliersState } = useSelector((state) => state);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [pageFisik, setPageFisik] = useState(suppliersState?.totalPagination);

  const handlePagination = (page) => {
    setPageFisik(page.selected + 1);
  };

  useEffect(() => {
    if (suppliersState.suppliers?.length === 0) {
      getSuppliers(dispatch);
      dispatch({ type: "IS_LOADING_ACTION", data: false });
    }
  }, [dispatch, suppliersState.suppliers?.length]);

  useEffect(() => {
    if (query === "") {
      dispatch({ type: "GET_SUPPLIERS", data: suppliersState?.allSuppliers });
    } else {
      dispatch({
        type: "GET_SUPPLIERS",
        data: suppliersState?.allSuppliers.filter((item) =>
          item.attributes.name.toLowerCase().includes(query.toLowerCase())
        ),
      });
    }
  }, [
    query,
    suppliersState?.allSuppliers,
    dispatch,
    suppliersState?.allCouriers,
  ]);

  const ButtonAct = (type) => {
    setmodalConfirmationAdd(false);
    setmodalConfirmationEdit(false);
    setmodalConfirmationDelete(false);
    setmodalAdd(false);
    setmodalEdit(false);
    setNameInputSupplier("");
    setEmailInputSupplier("");
    setPhoneInputSupplier("");
    setCityInputSupplier("");
    setCountryInputSupplier("");
    setAddressInputSupplier("");

    if (type === "add")
      createSupplier(
        dispatch,
        nameInputSupplier,
        emailInputSupplier,
        phoneInputSupplier,
        cityInputSupplier,
        countryInputSupplier,
        addressInputSupplier
      );
    else if (type === "delete") deleteSupplier(dispatch, detailSupplier?.id);
    else
      editSupplier(
        dispatch,
        nameInputSupplier,
        emailInputSupplier,
        phoneInputSupplier,
        cityInputSupplier,
        countryInputSupplier,
        addressInputSupplier,
        detailSupplier?.id
      );
  };

  const columns = [
    {
      name: "Nama",
      selector: ({ attributes }) => attributes.name,
    },
    {
      name: "Alamat",
      width: "280px",
      selector: ({ attributes }) => attributes.address,
    },
    {
      name: "Email",
      selector: ({ attributes }) => attributes.email,
    },
    {
      name: "No Tlp",
      selector: ({ attributes }) => attributes.phone,
    },
    {
      name: "Aksi",
      width: "150px",
      cell: (data) => {
        return (
          <div className="display-flex-align-center">
            <div
              onClick={() => {
                setmodalDetail(true);
                setDetailSupplier(data);
              }}
              className="cursor-pointer mr-16px"
            >
              <IEyes />
            </div>
            <div
              onClick={() => {
                setmodalEdit(true);
                setDetailSupplier(data);
                setNameInputSupplier(data.attributes.name);
                setEmailInputSupplier(data.attributes.email);
                setPhoneInputSupplier(data.attributes.phone);
                setCityInputSupplier(data.attributes.city);
                setCountryInputSupplier(data.attributes.country);
                setAddressInputSupplier(data.attributes.address);
              }}
              className="cursor-pointer mr-16px"
            >
              <IEdit />
            </div>
            <div
              onClick={() => {
                setmodalConfirmationDelete(true);
                setDetailSupplier(data);
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

  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={""}
      nextLabel={""}
      breakLabel="..."
      pageCount={Math.ceil(suppliersState?.suppliers) || 1}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      activeClassName="active-page"
      forcePage={pageFisik !== 0 ? pageFisik - 1 : 0}
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

  return (
    <Admin>
      <div
        style={{
          backgroundColor: "white",
          minHeight: "calc(100vh - 191px)",
        }}
      >
        <TitlePageReload title={"Suplier"} />

        <div>
          <div className="finance-penerimaan-wrapp-second">
            <div style={{ display: "flex" }}>
              <div className="finance-penerimaan-wrapp-search">
                <ISearchInput />
                <input
                  placeholder="cari"
                  className="finance-penerimaan-wrapp-search-input"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div>
                <div
                  onClick={() => {
                    setmodalAdd(true);
                    setNameInputSupplier("");
                    setEmailInputSupplier("");
                    setPhoneInputSupplier("");
                    setCityInputSupplier("");
                    setCountryInputSupplier("");
                    setAddressInputSupplier("");
                  }}
                  className="finance-penerimaan-buttont-buat-wrapp"
                >
                  <IAdd />
                  <div className="finance-penerimaan-buttont-buat">
                    Tambah Suplier
                  </div>
                </div>
              </div>
            </div>
          </div>

          {suppliersState?.isLoadingAction && (
            <div
              className="loader absolute z-10"
              style={{ left: "45%", top: "40%" }}
            ></div>
          )}

          <div className="p-16px">
            {suppliersState.isLoading ? (
              <SkeletonCustom width="100%" height="300px" />
            ) : (
              <>
                <DataTable
                  columns={columns}
                  data={suppliersState.suppliers}
                  noDataComponent={<h1>No Supplier data available</h1>}
                />
                <CustomPagination />
              </>
            )}
          </div>
        </div>
      </div>
      <ModalConfirmationDelete
        isModalUp={modalConfirmationDelete}
        setisModalUp={setmodalConfirmationDelete}
        actionCallback={() => ButtonAct("delete")}
      />
      <ModalConfirmationAdd
        isModalUp={modalConfirmationAdd}
        setisModalUp={setmodalConfirmationAdd}
        actionCallback={() => ButtonAct("add")}
      />
      <ModalConfirmationEdit
        isModalUp={modalConfirmationEdit}
        setisModalUp={setmodalConfirmationEdit}
        actionCallback={() => ButtonAct("edit")}
      />
      <ModalDetailSuplier
        isModalUp={modalDetail}
        setisModal={setmodalDetail}
        data={detailSupplier.attributes}
      />
      <ModalAddSuplier
        isModalUp={modalAdd}
        setisModal={setmodalAdd}
        handleActCancel={() => {
          setmodalAdd(false);
        }}
        handleActSubmit={() => {
          setmodalAdd(false);
          setmodalConfirmationAdd(true);
        }}
        input={{
          nameInputSupplier,
          emailInputSupplier,
          phoneInputSupplier,
          cityInputSupplier,
          countryInputSupplier,
          addressInputSupplier,
          setNameInputSupplier,
          setEmailInputSupplier,
          setPhoneInputSupplier,
          setCityInputSupplier,
          setCountryInputSupplier,
          setAddressInputSupplier,
        }}
      />
      <ModalEditSuplier
        isModalUp={modalEdit}
        setisModal={setmodalEdit}
        handleActCancel={() => {
          setmodalEdit(false);
        }}
        handleActSubmit={() => {
          setmodalEdit(false);
          setmodalConfirmationEdit(true);
        }}
        input={{
          nameInputSupplier,
          emailInputSupplier,
          phoneInputSupplier,
          cityInputSupplier,
          countryInputSupplier,
          addressInputSupplier,
          setNameInputSupplier,
          setEmailInputSupplier,
          setPhoneInputSupplier,
          setCityInputSupplier,
          setCountryInputSupplier,
          setAddressInputSupplier,
        }}
      />
      <ModalSukses
        isModalUp={suppliersState.isModalUpSuccessConfirmation.isUp}
        setisModalUp={() =>
          dispatch({
            type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
            data: {
              isUp: false,
              title: "",
            },
          })
        }
        title={suppliersState.isModalUpSuccessConfirmation.title}
      />
      <ModalError
        isModalUp={suppliersState.isModalUpFailedConfirmation.isUp}
        setisModalUp={() =>
          dispatch({
            type: "IS_MODAL_UP_FAILED_CONFIRMATION",
            data: {
              isUp: false,
              title: "",
            },
          })
        }
        title={suppliersState.isModalUpFailedConfirmation.title}
      />
    </Admin>
  );
};

export default WithAuth(Suplier);
