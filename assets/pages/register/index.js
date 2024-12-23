import ButtonSubmitForm from "components/Button/buttonSubmitForm";
import ILoading from "components/ILoading";
import InputText from "components/Input/InputText";
import TitlePageBack from "components/TitlePage/TitlePageBack";
import IBack from "components/icons/IBack";
import ModalError from "components/modalError";
import { Formik } from "formik";
import { phoneNumber } from "global-states/constanta";
import Auth from "layouts/Auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import PatternImage from "../../public/img/pattern.png";
import Image from "next/image";
import ModalSukses from "components/modalSukses";
import PasswordModalValidate from "./section/passwordModalValidate";
import axiosInstance from "global-states/api";
import { setAuthCode } from "global-states/actions/global";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const [isModalUp, setisModalUp] = useState(false);
  const [checkedRememberMe, setcheckedRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState({
    passwordActive1: false,
    passwordActive2: false,
  });

  const [modalLoading, setmodalLoading] = useState(false);
  const [titleRespon, settitleRespon] = useState("");

  const router = useRouter();

  const validateRequiredFields = (values) => {
    const errors = {};

    if (!values?.namaDepan) {
      errors.namaDepan = "Nama tidak boleh kosong";
    }
    if (!values?.namaBelakang) {
      errors.namaBelakang = "Nama belakang tidak boleh kosong";
    }
    if (!values?.phone_number) {
      errors.phone_number = "Nomer handphone tidak boleh kosong";
    } else if (!/^[0-9]+$/.test(values.phone_number)) {
      errors.phone_number = "Hanya number";
    }

    return errors;
  };

  const validateEmail = (email) => {
    if (!email) {
      return "Email tidak boleh kosong";
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      return "Invalid email address";
    }
    return null;
  };

  const validatePassword = (password) => {
    const errors = {};
    if (password.length < 8) errors.minLength = "Minimum 8 characters";
    if (!/[A-Z]/.test(password))
      errors.hasUppercase = "At least 1 uppercase letter (A-Z)";
    if (!/[a-z]/.test(password))
      errors.hasLowercase = "At least 1 lowercase letter (a-z)";
    if (!/\d/.test(password)) errors.hasDigit = "At least 1 digit (0-9)";
    if (!/[@$!%*?&]/.test(password))
      errors.hasSpecialChar = "At least 1 special character (@$!%*?&)";

    return Object.keys(errors).length > 0 ? errors : null;
  };

  const validateForm = (values) => {
    const errors = {
      ...validateRequiredFields(values),
    };

    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const passwordErrors = validatePassword(values.password);
    if (passwordErrors) errors.password = passwordErrors;
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password dan konfirmasi password tidak cocok";
    }

    return errors;
  };

  return (
    <Auth>
      <div className="auth-kontainer mt-2">
        <Image
          src={PatternImage}
          className="w-full h-3/6 absolute bottom-0"
          alt="Picture of the author"
          style={{ zIndex: 0 }}
        />
        <div className="auth-kontainer-wrapp">
          <TitlePageBack
            action={() => router?.push("/login")}
            icon={<IBack />}
            title={"Daftarkan Akun"}
          />

          <Formik
            initialValues={{
              namaDepan: "",
              namaBelakang: "",
              phone_number: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validate={validateForm}
            onSubmit={(values, { setSubmitting }) => {
              axiosInstance
                .post("/signup", {
                  first_name: values.namaDepan,
                  email: values.email,
                  phone: values.phone_number,
                  password: values.password,
                  confirm_password: values.confirmPassword,
                })
                .then((res) => {
                  alert("Berhasil Terdaftar");
                  router.push("/login");
                })
                .catch((e) => console.log(e));
            }}
          >
            {({
              values,
              errors,
              isValid,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <hr />
                <div
                  style={{ paddingBottom: "0px" }}
                  className="w-100 p-16px pb-0px d-flex flex-column gap-10px auth-kontainer-wrapp-input"
                >
                  <InputText
                    flexParent={1}
                    title={"Nama Depan*"}
                    placeholder={"Masukan Nama Depan"}
                    handleChange={handleChange}
                    name={"namaDepan"}
                    value={values?.namaDepan}
                  />
                  {errors?.namaDepan && (
                    <div className="error-phone-number">
                      {errors?.namaDepan}
                    </div>
                  )}
                </div>
                <div
                  style={{ paddingBottom: "0px" }}
                  className="w-100 p-16px pb-0px d-flex flex-column gap-10px auth-kontainer-wrapp-input"
                >
                  <InputText
                    flexParent={1}
                    title={"Nama Belakang*"}
                    placeholder={"Masukan Nama Belakang"}
                    handleChange={handleChange}
                    name={"namaBelakang"}
                    value={values?.namaBelakang}
                  />
                  {errors?.namaBelakang && (
                    <div className="error-phone-number">
                      {errors?.namaBelakang}
                    </div>
                  )}
                </div>

                <div className="w-100 p-16px pb-0px d-flex flex-column gap-10px auth-kontainer-wrapp-input">
                  <div>
                    <h1 className="p-0 m-0 input-text-label">No Handphone*</h1>
                    <div className="flex space-x-2">
                      <select
                        className="dropdown-status-data-table-select select-no-w-min-w"
                        name="phone-number"
                        id="phone"
                      >
                        {phoneNumber.map((item) => (
                          <option
                            className="finance-penerimaan-create-dropdown-option"
                            value={item}
                            key={item.id}
                          >
                            {item.phone_format}
                          </option>
                        ))}
                      </select>
                      <div className="flex-1">
                        <InputText
                          handleChange={handleChange}
                          name={"phone_number"}
                          value={values?.phone_number}
                          placeholder={"08XXXXX"}
                          flexParent={1}
                        />
                      </div>
                    </div>
                  </div>
                  {errors?.phone_number && (
                    <div className="error-phone-number">
                      {errors?.phone_number}
                    </div>
                  )}
                </div>

                <div
                  style={{ paddingBottom: "0px" }}
                  className="w-100 p-16px pb-0px d-flex flex-column gap-10px auth-kontainer-wrapp-input"
                >
                  <InputText
                    flexParent={1}
                    title={"Email*"}
                    placeholder={"Masukan Email"}
                    handleChange={handleChange}
                    value={values?.email}
                    name={"email"}
                  />
                  {errors?.email && (
                    <div className="error-phone-number">{errors?.email}</div>
                  )}
                </div>

                <div
                  style={{ paddingBottom: "0px" }}
                  className="w-100 p-16px pb-0px d-flex flex-column gap-10px auth-kontainer-wrapp-input relative"
                >
                  <div className="relative">
                    <InputText
                      flexParent={1}
                      title={"Password*"}
                      placeholder={"Masukan Password"}
                      handleChange={handleChange}
                      value={values?.password}
                      name={"password"}
                      type={showPassword.passwordActive1 ? "text" : "password"}
                    />
                    <div
                      onClick={() =>
                        setShowPassword((prevState) => ({
                          ...prevState,
                          passwordActive1: !prevState.passwordActive1,
                        }))
                      }
                    >
                      {showPassword.passwordActive1 ? (
                        <EyeSlashIcon className="w-6 absolute top-6 right-2 mt-1 cursor-pointer" />
                      ) : (
                        <EyeIcon className="w-6 absolute top-6 right-2 mt-1 cursor-pointer" />
                      )}
                    </div>
                  </div>

                  <PasswordModalValidate errors={errors} />
                </div>

                <div
                  style={{ paddingBottom: "0px" }}
                  className="w-100 p-16px pb-0px d-flex flex-column gap-10px auth-kontainer-wrapp-input"
                >
                  <div className="relative">
                    <InputText
                      flexParent={1}
                      title={"Ulangi Password*"}
                      placeholder={"Ulangin Masukan Password"}
                      handleChange={handleChange}
                      value={values?.confirmPassword}
                      name={"confirmPassword"}
                      type={showPassword.passwordActive2 ? "text" : "password"}
                    />
                    <div
                      onClick={() =>
                        setShowPassword((prevState) => ({
                          ...prevState,
                          passwordActive2: !prevState.passwordActive2,
                        }))
                      }
                    >
                      {showPassword.passwordActive2 ? (
                        <EyeSlashIcon className="w-6 absolute top-6 right-2 mt-1 cursor-pointer" />
                      ) : (
                        <EyeIcon className="w-6 absolute top-6 right-2 mt-1 cursor-pointer" />
                      )}
                    </div>
                  </div>
                  {errors?.confirmPassword && (
                    <div className="error-phone-number">
                      {errors?.confirmPassword}
                    </div>
                  )}
                </div>

                <div
                  style={{ paddingTop: "0px" }}
                  className="mt-16px p-16px d-flex align-center gap-10px justify-between"
                >
                  <div
                    style={{ paddingTop: "0px" }}
                    className="d-flex align-center gap-10px"
                  >
                    <input
                      onClick={() => setcheckedRememberMe(!checkedRememberMe)}
                      checked={checkedRememberMe}
                      type="checkbox"
                    />
                    <div className="wrapper-login-warning-cekbox">
                      Ingat Saya
                    </div>
                  </div>
                  {/* <div className="btn-lupa-password">Lupa password</div> */}
                </div>

                <div
                  style={{ paddingTop: "0px" }}
                  className="w-100 d-flex align-center gap-10px p-16px"
                >
                  <ButtonSubmitForm
                    checkedRememberMe={checkedRememberMe}
                    isValid={isValid}
                    title="Daftar"
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <ModalError
        isModalUp={isModalUp}
        setisModalUp={setisModalUp}
        title={titleRespon}
      />
      <ModalSukses
        isModalUp={isModalUp}
        setisModalUp={setisModalUp}
        title={"Anda Berhasil Mendaftar"}
      />
      <ILoading isModalUp={modalLoading} setisModalUp={setmodalLoading} />
    </Auth>
  );
};

export default Register;
