import IAdd from "components/icons/IAdd";
import IKirimUang from "components/icons/IKirimUang";
import IReload from "components/icons/IReload";
import ISearchInput from "components/icons/IsearchInput";
import ITransferUang from "components/icons/ItransferUang";
import React, { useEffect, useState } from "react";
import ModalTambahAkun from "./modalTambahAkun";
import ModalTranferUang from "./modalTranferUang";
import ModalTerimaUang from "./modalTerimaUang";
import ModalTambahAkunTipe from "./modalTambahAkunTipe";
import { useDispatch, useSelector } from "react-redux";
import ModalEditAkun from "./modalEditAkun";
import INoData from "components/INoData";
import DefaultAkunIcon from "components/icons/assets/foto/adjustments-horizontal.svg";
import IBack from "components/icons/IBack";
import { useRouter } from "next/navigation";
// import Image from "next/image";
import ReactPaginate from "react-paginate";
import DataTable from "react-data-table-component";
import IEdit from "components/icons/IEdit";
import IHapus from "components/icons/IHapus";
import Image from "next/image";
import QuestionImage from "../../../public/img/not-found.png";
import {
  createEstimatedDatas,
  getEstimatedDatas,
  getTypeAkun,
} from "global-states/reducers/finance/kas&bank/kasbank.action";
import ModalConfirmationDelete from "components/modalConfirmationDelete";
import ModalConfirmationAdd from "components/modalConfirmationAdd";
import ModalConfirmationEdit from "components/modalConfirmationEdit";
import SkeletonCustom from "components/skeleton/skeleton";

const TabPageAkunKasBank = () => {
  const dispatch = useDispatch();
  const { search, limit, page, categories } = useSelector(
    (state) => state?.kasBankReducer?.params
  );
  const router = useRouter();
  const { estimatedDatas, isLoadingAction, isLoading, totalPagination } =
    useSelector((state) => state.kasBankReducer);

  const [showModalTambahAkun, setshowModalTambahAkun] = useState(false);
  const [showModalEditAkun, setshowModalEditAkun] = useState(false);
  const [showModalTambahAkunType, setshowModalTambahAkunType] = useState(false);
  const [showModalTranferUang, setshowModalTranferUang] = useState(false);
  const [showModalTerimaUang, setshowModalTerimaUang] = useState(false);
  const [pageFisik, setPageFisik] = useState(1);
  const [modalConfirmationDelete, setmodalConfirmationDelete] = useState(false);
  const [modalConfirmationAdd, setmodalConfirmationAdd] = useState(false);
  const [modalConfirmationEdit, setmodalConfirmationEdit] = useState(false);

  const handlePagination = (page) => {
    setPageFisik(page.selected + 1);
  };

  useEffect(() => {
    if (estimatedDatas?.length === 0) {
      getTypeAkun(dispatch);
      getEstimatedDatas(dispatch);
      dispatch({ type: "IS_LOADING_ACTION", data: false });
    }
  }, [dispatch, estimatedDatas?.length]);

  const createAkunPerkiraan = () => {
    createEstimatedDatas(dispatch);
  };

  const columns = [
    {
      name: "Kode Akun",
      selector: (row) => row?.number,
    },
    {
      name: "Nama Akun",
      selector: (row) => row.name,
    },
    {
      name: "Tanggal Dibuat",
      selector: (row) => row?.period_date,
    },
    {
      name: "Type",
      selector: (row) =>
        row?.children_recursive === undefined
          ? ""
          : row?.children_recursive[0]?.account_type.name,
    },
    {
      name: "Total Saldo",
      selector: (row) =>
        row.start_balance === 0
          ? "Rp 0"
          : new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(row.start_balance),
    },
    {
      name: "Aksi",
      width: "180px",
      cell: (row, index, column, id) => {
        return (
          <div className="display-flex-align-center">
            <div
              onClick={() => {
                setshowModalEditAkun(true);
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

  const CustomPagination = () => {
    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel="..."
        pageCount={Math.ceil(totalPagination) || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName="active-page"
        forcePage={totalPagination !== 0 ? totalPagination - 1 : 0}
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
    <div className="tab-page-akun-kas-bank">
      <div className="tab-page-akun-kas-bank-sub">
        <div className="tab-page-akun-kas-bank-sub-top">
          <div className="tab-page-akun-kas-bank-sub-top-wrapp">
            <img src="/img/bank.png" alt="..."></img>{" "}
            <div className="tab-page-akun-kas-bank-sub-top-wrapp-total ml-3">
              <div className="tab-page-akun-kas-bank-sub-top-wrapp-total-title">
                Total Saldo Kas
              </div>
              <div className="tab-page-akun-kas-bank-sub-top-wrapp-total-value">
                <span style={{ fontSize: "12px" }}>Rp.</span> 3.000.000.000
              </div>
            </div>
          </div>
          <div className="tab-page-akun-kas-bank-sub-right">
            <div
              onClick={() => setshowModalTranferUang(true)}
              className="cursor-pointer tab-page-akun-kas-bank-sub-right-sub mr-3"
            >
              <ITransferUang />
              <div>Transfer uang</div>
            </div>
            <div
              onClick={() => setshowModalTerimaUang(true)}
              className="cursor-pointer tab-page-akun-kas-bank-sub-right-sub mr-3"
            >
              <ITransferUang />
              <div>Terima uang</div>
            </div>
            <div className="tab-page-akun-kas-bank-sub-right-sub">
              <IKirimUang />
              <div>Kirim uang</div>
            </div>
          </div>
        </div>
      </div>

      <div className="finance-penerimaan-wrapp-top">
        <div className="finance-penerimaan-title">Akun Perkiraan</div>
        <IReload />
      </div>

      <div className="display-flex-align-center mt-3 justify-between">
        <div className="finance-penerimaan-wrapp-search">
          <ISearchInput />
          <input
            onChange={(e) =>
              dispatch({
                type: "SET_SEARCH_KAS_BANK",
                search: e.target.value,
              })
            }
            value={search}
            placeholder="Cari"
            className="finance-penerimaan-wrapp-search-input"
            type="text"
          />
        </div>

        <div className="flex items-center gap-3">
          <div
            onClick={() => router.push("/finance/kas/default-akun")}
            className="finance-penerimaan-buttont-buat-wrapp"
          >
            <Image src={DefaultAkunIcon} alt="icon" width={23} height={23} />
            <div className="finance-penerimaan-buttont-buat">Default Akun</div>
          </div>
          <div
            onClick={() => setshowModalTambahAkun(true)}
            className="finance-penerimaan-buttont-buat-wrapp"
          >
            <IAdd />
            <div className="finance-penerimaan-buttont-buat">Tambah Akun</div>
          </div>
        </div>        
      </div>

      <div className="garis-tipis"></div>

      <div className="display-flex-align-center p-3 pt-0">
        <div className="tab-page-akun-kas-bank-sub-right-sub-kategori">
          Pilih Type Akun
        </div>
        <div
          style={{ width: "100%" }}
          className="dropdown-status-data-table-wrapp"
        >
          <select
            value={categories}
            onChange={(e) =>
              dispatch({
                type: "SET_CATEGORIES_KAS_BANK",
                categories: e?.target?.value,
              })
            }
            className="dropdown-status-data-table-select"
            name="categories"
            id="categories"
          >
            {[
              { title: "Semua" },
              { title: "EQUITY" },
              { title: "LIABILITY" },
              { title: "INCOME" },
              { title: "EXPENSE" },
            ]?.map((res, i) => {
              return (
                <option
                  className="finance-penerimaan-create-dropdown-option"
                  value={res?.title}
                  key={res.title}
                >
                  {res?.title}
                </option>
              );
            })}
            ]
          </select>
        </div>
      </div>

      {estimatedDatas?.length !== 0 && (
        <div className="p-16px mb-10">
          <DataTable columns={columns} data={estimatedDatas} />
          <CustomPagination />
        </div>
      )}

      {isLoading && (
        <div className="mt-5" style={{ padding: "20px", paddingTop: "0px" }}>
          <SkeletonCustom width="100%" height="300px" />
        </div>
      )}

      {isLoadingAction && (
        <div className="w-full h-48 flex justify-center items-center">
          <div
            className="loader z-10"
            style={{ left: "45%", top: "40%" }}
          ></div>
        </div>
      )}

      {estimatedDatas?.length === 0 &&
        isLoading === false &&
        isLoadingAction === false && (
          <SectionNoAkunPerkiraan createAkunPerkiraan={createAkunPerkiraan} />
        )}

      <ModalTerimaUang
        setisModalUp={setshowModalTerimaUang}
        isModalUp={showModalTerimaUang}
      />
      <ModalTranferUang
        isModalUp={showModalTranferUang}
        setisModalUp={setshowModalTranferUang}
      />
      <ModalTambahAkun
        isModalUp={showModalTambahAkun}
        setisModalUp={setshowModalTambahAkun}
        setmodalConfirmationAdd={setmodalConfirmationAdd}
      />
      <ModalEditAkun
        isModalUp={showModalEditAkun}
        setisModalUp={setshowModalEditAkun}
        setmodalConfirmationAdd={setmodalConfirmationAdd}
      />
      <ModalTambahAkunTipe
        isModalUp={showModalTambahAkunType}
        setisModalUp={setshowModalTambahAkunType}
      />
      <ModalConfirmationDelete
        isModalUp={modalConfirmationDelete}
        setisModalUp={setmodalConfirmationDelete}
        actionCallback={() => null}
      />
      <ModalConfirmationAdd
        isModalUp={modalConfirmationAdd}
        setisModalUp={setmodalConfirmationAdd}
        actionCallback={() => null}
      />
      <ModalConfirmationEdit
        isModalUp={modalConfirmationEdit}
        setisModalUp={setmodalConfirmationEdit}
        actionCallback={() => null}
      />
    </div>
  );
};

const SectionNoAkunPerkiraan = ({ createAkunPerkiraan }) => {
  return (
    <div className="my-10 py-10 flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <Image src={QuestionImage} width={100} height={100} />
        <h2 className="font-bold mt-8 text-md">Belum ada akun perkiraan?</h2>
        <p className="font-light text-sm mt-2">Buat otomatis akun perkiraan</p>
        <button
          className="mt-4 text-white text-sm p-2 rounded-md"
          style={{ backgroundColor: "#0C66E4" }}
          onClick={() => createAkunPerkiraan()}
        >
          Ya, Buat akun perkiraan
        </button>
      </div>
    </div>
  );
};

export default TabPageAkunKasBank;
