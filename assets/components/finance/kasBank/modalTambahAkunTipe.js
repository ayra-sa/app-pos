import ButtonCancel from "components/Button/buttonCancel";
import ButtonSubmitForm from "components/Button/buttonSubmitForm";
import ILoading from "components/ILoading";
import Informasi from "components/Informasi";
import InputDropdownvalue from "components/Input/InputDropdownValue";
import InputTextArea from "components/Input/InputTexArea";
import InputText from "components/Input/InputText";
import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import TitlePage from "components/TitlePage/TitlePage";
import ModalConfirmationAdd from "components/modalConfirmationAdd";
import ModalError from "components/modalError";
import ModalSukses from "components/modalSukses";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ModalTambahAkunTipe = ({ isModalUp, setisModalUp }) => {
  const [category, setcategory] = useState("ASSET");

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const [modalSukses, setmodalSukses] = useState(false);
  const [modalLoading, setmodalLoading] = useState(false);
  const [modalError, setmodalError] = useState(false);
  const [titleRespon, settitleRespon] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const SimpanAct = () => {
    setisModalConfirmationAdd(false);
    setisModalUp(false);
  };

  return (
    <ModalWrapper
      isModalUp={isModalUp}
      setisModalUp={setisModalUp}
      overflow={"hidden"}
      top={"14%"}
      bottom={"14%"}
      left={"15%"}
      right={"15%"}
    >
      <div className="h-100 d-flex flex-column justify-between">
        <div>
          <div className="p-16px">
            <TitleModal
              title={"Tambah Type Akun"}
              setisModalClose={setisModalUp}
            />
          </div>

          <div
            style={{
              overflow: "auto",
              maxHeight: "calc(100vh - 285px)",
            }}
          >
            <TitlePage title={"Detail Umum"} />
            <div className="p-16px">
              <Formik
                initialValues={{
                  name: "",
                  description: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values?.name) {
                    errors.name = "Nama tidak boleh kosong";
                  }
                  if (!values?.description) {
                    errors.description = "Deskripsi tidak boleh kosong";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {}}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Informasi
                      titleSub={
                        "Akun akan terdaftar sebagai type akun perkiraan"
                      }
                    />
                    <div className="d-flex mt-16px gap-8px">
                      <InputDropdownvalue
                        flexParent={1}
                        marginRightChild={"0px"}
                        title={"Kategori Akun*"}
                        setValue={setcategory}
                        data={[
                          { label: "ASSET", value: "ASSET" },
                          { label: "EQUITY", value: "EQUITY" },
                          { label: "LIABILITY", value: "LIABILITY" },
                          { label: "INCOME", value: "INCOME" },
                          { label: "EXPENSE", value: "EXPENSE" },
                        ]}
                      />
                      <div style={{ marginTop: "25px" }}>
                        <IPenting />
                      </div>
                    </div>
                    <div className="d-flex mt-16px gap-8px flex-column">
                      <div className="d-flex gap-8px">
                        <InputText
                          flexParent={1}
                          marginRightChild={"0px"}
                          title={"Nama*"}
                          placeholder={"Masukan Nama Akun"}
                          classTitle={"dropdown-status-data-table-title"}
                          handleChange={handleChange}
                          value={values?.name}
                          name={"name"}
                        />
                        <div style={{ marginTop: "25px" }}>
                          <IPenting />
                        </div>
                      </div>
                      {errors?.name && (
                        <div className="error-phone-number">{errors?.name}</div>
                      )}
                    </div>
                    <div className="d-flex mt-16px gap-8px flex-column">
                      <InputTextArea
                        flexParent={1}
                        title={"Description"}
                        rows={6}
                        placeholder={"Masukan deskripsi"}
                        handleChange={handleChange}
                        value={values?.description}
                        name={"description"}
                      />
                      {errors?.description && (
                        <div className="error-phone-number">
                          {errors?.description}
                        </div>
                      )}
                    </div>

                    <div className="d-flex align-center justify-end mt-16px pb-16px">
                      <div className="d-flex gap-16px">
                        <ButtonCancel
                          action={() => setisModalUp(false)}
                          flex={1}
                          paddingBottom={"6px"}
                          paddingTop={"6px"}
                          title={"Batal"}
                        />
                        <ButtonSubmitForm />
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <ModalConfirmationAdd
        actionCallback={() => SimpanAct()}
        isModalUp={isModalConfirmationAdd}
        setisModalUp={setisModalConfirmationAdd}
      />
      <ModalSukses
        isModalUp={modalSukses}
        setisModalUp={setmodalSukses}
        title={titleRespon}
      />
      <ModalError
        isModalUp={modalError}
        setisModalUp={setmodalError}
        title={titleRespon}
      />
      <ILoading isModalUp={modalLoading} setisModalUp={setmodalLoading} />
    </ModalWrapper>
  );
};

const IPenting = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM14.8284 7.15997C15.3505 7.67945 15.7181 8.3338 15.89 9.04999C16.1223 10.008 15.9918 11.0181 15.5235 11.8856C15.0552 12.7531 14.2824 13.4165 13.354 13.748C13.149 13.821 13.004 14.003 13.004 14.22V15.002C13.004 15.2677 12.8984 15.5226 12.7105 15.7105C12.5226 15.8984 12.2677 16.004 12.002 16.004C11.7363 16.004 11.4814 15.8984 11.2935 15.7105C11.1056 15.5226 11 15.2677 11 15.002V12.988C11.0034 12.725 11.1103 12.474 11.2975 12.2893C11.4846 12.1046 11.7369 12.001 11.9998 12.001H11.993C13.098 12.001 13.996 11.103 13.996 10.001C13.984 9.47739 13.7676 8.97927 13.3929 8.61327C13.0183 8.24727 12.5153 8.04248 11.9915 8.04275C11.4678 8.04301 10.9649 8.2483 10.5907 8.61467C10.2164 8.98104 10.0004 9.47937 9.989 10.003C9.987 10.554 9.539 11.001 8.987 11.001C8.74019 10.9995 8.50281 10.906 8.32123 10.7388C8.13964 10.5717 8.02689 10.3428 8.005 10.097L8 9.94999C8.017 7.44599 10.321 5.51399 12.933 6.10799C13.6501 6.27628 14.3063 6.64048 14.8284 7.15997ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z"
        fill="#44546F"
      />
    </svg>
  );
};

const IInformasi = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM12 11.5C11.7348 11.5 11.4804 11.6054 11.2929 11.7929C11.1054 11.9804 11 12.2348 11 12.5V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V12.5C13 12.2348 12.8946 11.9804 12.7071 11.7929C12.5196 11.6054 12.2652 11.5 12 11.5ZM12 10.375C12.3647 10.375 12.7144 10.2301 12.9723 9.97227C13.2301 9.71441 13.375 9.36467 13.375 9C13.375 8.63533 13.2301 8.28559 12.9723 8.02773C12.7144 7.76987 12.3647 7.625 12 7.625C11.6353 7.625 11.2856 7.76987 11.0277 8.02773C10.7699 8.28559 10.625 8.63533 10.625 9C10.625 9.36467 10.7699 9.71441 11.0277 9.97227C11.2856 10.2301 11.6353 10.375 12 10.375Z"
        fill="#8270DB"
      />
    </svg>
  );
};

export default ModalTambahAkunTipe;
