import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import IAdd from "components/icons/IAdd";
import IEyes from "components/icons/IEyes";
import IEdit from "components/icons/IEdit";
import IHapus from "components/icons/IHapus";
import ISearchInput from "components/icons/IsearchInput";
import TitlePageReload from "components/TitlePage/TitlePageReload";
import Admin from "layouts/Admin";
import ModalConfirmationDelete from "components/modalConfirmationDelete";
import ModalConfirmationAdd from "components/modalConfirmationAdd";
import ModalConfirmationEdit from "components/modalConfirmationEdit";
import ModalAddKurir from "components/finance/kurir/modalAddKurir";
import ModalEditKurir from "components/finance/kurir/modalEditKurir";
import ModalDetailKurir from "components/finance/kurir/modalDetailKurir";
import SkeletonCustom from "components/skeleton/skeleton";
import WithAuth from "components/config/protect";
import {
  createCourier,
  deleteCourier,
  editCourier,
  getCouriers,
} from "global-states/reducers/inventori/kurir/kurir.action";
import { useDispatch, useSelector } from "react-redux";
import ModalSukses from "components/modalSukses";
import ModalError from "components/modalErrorGlobal";

const Kurir = () => {
  const [modalDetail, setmodalDetail] = useState(false);
  const [modalAdd, setmodalAdd] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false);
  const [modalConfirmationEdit, setmodalConfirmationEdit] = useState(false);
  const [modalConfirmationDelete, setmodalConfirmationDelete] = useState(false);
  const [detailCourier, setDetailCourier] = useState({});
  const [nameInputCourier, setNameInputCourier] = useState("");
  const [emailInputCourier, setEmailInputCourier] = useState("");
  const [phoneInputCourier, setPhoneInputCourier] = useState("");
  const [pageFisik, setPageFisik] = useState(1);
  const [query, setQuery] = useState("");
  const { couriersState } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (couriersState.couriers?.length === 0) {
      getCouriers(dispatch);
      dispatch({ type: "IS_LOADING_ACTION", data: false });
    }
  }, [couriersState.couriers?.length, dispatch]);

  useEffect(() => {
    if (query === "") {
      dispatch({ type: "GET_COURIERS", data: couriersState?.allCouriers });
    } else {
      dispatch({
        type: "GET_COURIERS",
        data: couriersState?.allCouriers.filter((item) =>
          item.attributes.name.toLowerCase().includes(query.toLowerCase())
        ),
      });
    }
  }, [query, couriersState.allCouriers, dispatch]);

  const handlePagination = (page) => {
    setPageFisik(page.selected + 1);
  };

  const ButtonAct = (type) => {
    setmodalConfirmationAdd(false);
    setmodalConfirmationEdit(false);
    setmodalConfirmationDelete(false);
    setmodalAdd(false);
    setmodalEdit(false);
    setNameInputCourier("");
    setEmailInputCourier("");
    setPhoneInputCourier("");

    if (type === "add")
      createCourier(
        dispatch,
        nameInputCourier,
        emailInputCourier,
        phoneInputCourier
      );
    else if (type === "delete") deleteCourier(dispatch, detailCourier?.id);
    else
      editCourier(
        dispatch,
        nameInputCourier,
        emailInputCourier,
        phoneInputCourier,
        detailCourier?.id
      );
  };

  const columns = [
    { name: "Nama", selector: ({ attributes }) => attributes.name },
    { name: "Email", selector: ({ attributes }) => attributes.email },
    { name: "No Tlp", selector: ({ attributes }) => attributes.phone },
    {
      name: "Aksi",
      width: "180px",
      cell: (data) => (
        <div className="display-flex-align-center">
          <div
            onClick={() => {
              setmodalDetail(true);
              setDetailCourier(data);
            }}
            className="cursor-pointer mr-16px"
          >
            <IEyes />
          </div>
          <div
            onClick={() => {
              setmodalEdit(true);
              setDetailCourier(data);
              setNameInputCourier(data.attributes.name);
              setEmailInputCourier(data.attributes.email);
              setPhoneInputCourier(data.attributes.phone);
            }}
            className="cursor-pointer mr-16px"
          >
            <IEdit />
          </div>
          <div
            onClick={() => {
              setmodalConfirmationDelete(true);
              setDetailCourier(data);
            }}
            className="cursor-pointer"
          >
            <IHapus />
          </div>
        </div>
      ),
    },
  ];

  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={""}
      nextLabel={""}
      breakLabel="..."
      pageCount={Math.ceil(couriersState?.couriers) || 1}
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
          position: "relative",
        }}
      >
        <TitlePageReload title={"Kurir"} />
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
          <div
            onClick={() => {
              setmodalAdd(true);
              setNameInputCourier("");
              setEmailInputCourier("");
              setPhoneInputCourier("");
            }}
            className="finance-penerimaan-buttont-buat-wrapp"
          >
            <IAdd />
            <div className="finance-penerimaan-buttont-buat">Tambah Kurir</div>
          </div>
        </div>
        {couriersState?.isLoadingAction && (
          <div
            className="loader absolute z-10"
            style={{ left: "45%", top: "40%" }}
          ></div>
        )}

        <div className="p-16px">
          {couriersState.isLoading ? (
            <SkeletonCustom width="100%" height="300px" />
          ) : (
            <>
              <DataTable
                columns={columns}
                data={couriersState.couriers}
                noDataComponent={<h1>No courier data available</h1>}
              />
              <CustomPagination />
            </>
          )}
        </div>
      </div>

      {/* Modal Components */}
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
      <ModalDetailKurir
        isModalUp={modalDetail}
        setisModal={setmodalDetail}
        data={detailCourier.attributes}
      />
      <ModalAddKurir
        isModalUp={modalAdd}
        setisModal={setmodalAdd}
        handleActCancel={() => setmodalAdd(false)}
        handleActSubmit={() => {
          setmodalAdd(false);
          setmodalConfirmationAdd(true);
        }}
        input={{
          nameInputCourier,
          emailInputCourier,
          phoneInputCourier,
          setNameInputCourier,
          setEmailInputCourier,
          setPhoneInputCourier,
        }}
      />
      <ModalEditKurir
        isModalUp={modalEdit}
        setisModal={setmodalEdit}
        handleActCancel={() => setmodalEdit(false)}
        handleActSubmit={() => {
          setmodalEdit(false);
          setmodalConfirmationEdit(true);
        }}
        input={{
          nameInputCourier,
          emailInputCourier,
          phoneInputCourier,
          setNameInputCourier,
          setEmailInputCourier,
          setPhoneInputCourier,
        }}
      />
      <ModalSukses
        isModalUp={couriersState.isModalUpSuccessConfirmation.isUp}
        setisModalUp={() =>
          dispatch({
            type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
            data: {
              isUp: false,
              title: "",
            },
          })
        }
        title={couriersState.isModalUpSuccessConfirmation.title}
      />
      <ModalError
        isModalUp={couriersState.isModalUpFailedConfirmation.isUp}
        setisModalUp={() =>
          dispatch({
            type: "IS_MODAL_UP_FAILED_CONFIRMATION",
            data: {
              isUp: false,
              title: "",
            },
          })
        }
        title={couriersState.isModalUpFailedConfirmation.title}
      />
    </Admin>
  );
};

export default WithAuth(Kurir);
