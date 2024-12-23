import ButtonCancel from "components/Button/buttonCancel";
import InputText from "components/Input/InputText";
import Auth from "layouts/Auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { Formik } from "formik";
import ModalError from "components/modalError";
import ILoading from "components/ILoading";
import ButtonSubmitForm from "components/Button/buttonSubmitForm";
import { phoneNumber } from "global-states/constanta";
import Image from "next/image";
import PatternImage from "../../public/img/pattern.png";
import axiosInstance from "global-states/api";
import { useDispatch } from "react-redux";
import { setAuthCode } from "global-states/actions/global";

const Login = () => {
  const router = useRouter();

  const actionRegister = () => {
    router?.push("/register");
  };

  const [checkedRememberMe, setcheckedRememberMe] = useState(true);

  const [modalLoading, setmodalLoading] = useState(false);
  const [modalError, setmodalError] = useState(false);
  const [titleRespon, settitleRespon] = useState("");
  const phoneLocalStorage = localStorage.getItem("phone");
  const dispatch = useDispatch();

  const onLogin = async (values) => {
    const secretKey = localStorage.getItem("secretKey");
    const clientId = localStorage.getItem("clientId");

    if (
      secretKey === null ||
      clientId === null ||
      phoneLocalStorage !== values?.phone_number
    )
      router.push("/lisensi", {
        query: { phone_number: values?.phone_number },
      });
    else {
      localStorage.setItem("phone", values?.phone_number);
      axiosInstance
        .post("/authenticate", {
          grantType: "client_credentials",
          additionalInfo: {
            phoneNumber: values?.phone_number,
            onboardingPartner: "KODIKA",
          },
        })
        .then((res) => {
          localStorage.setItem("accessToken", res?.data?.accessToken);
          dispatch(setAuthCode(res.data.additionalInfo.authCode));
          router?.push("/otp");
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <Auth>
      <div className="auth-kontainer">
        <Image
          src={PatternImage}
          className="w-full h-3/6 absolute bottom-0"
          alt="Picture of the author"
          style={{ zIndex: 0 }}
        />
        <div className="auth-kontainer-wrapp">
          <div className="auth-kontainer-wrapp-icon">
            <ILogin />
            <div className="auth-kontainer-wrapp-icon-title">
              Masuk Ke Akun Anda
            </div>
          </div>

          <div className="p-16px">
            <div className="d-flex align-center gap-10px wrapper-login-warning">
              <ISeru />
              <div className="wrapper-login-warning-title">
                Gunakan nomor handphone yang telah terdaftar dan aktif
              </div>
            </div>
          </div>

          <hr />

          <Formik
            initialValues={{
              phone_number: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values?.phone_number) {
                errors.phone_number = "Nomer handphone tidak boleh kosong";
              } else if (!/^[0-9]+$/.test(values?.phone_number)) {
                errors.phone_number = "Hanya number";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => onLogin(values)}
          >
            {({
              isValid,
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
                <div className="w-100 p-16px d-flex flex-column gap-10px auth-kontainer-wrapp-input bg-red">
                  <div>
                    <h1 className="p-0 m-0 input-text-label">
                      No Handphone<span className="flag-red">*</span>
                    </h1>
                    <div className="flex space-x-2">
                      <select
                        className="dropdown-status-data-table-select select-no-w-min-w"
                        name="phone-number"
                        id="phone"
                      >
                        {phoneNumber.map((item) => (
                          <option
                            className="finance-penerimaan-create-dropdown-option"
                            value={item.phone_format}
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
                  style={{ paddingTop: "0px" }}
                  className="p-16px d-flex align-center gap-10px"
                >
                  <input
                    onClick={() => setcheckedRememberMe(!checkedRememberMe)}
                    checked={checkedRememberMe}
                    type="checkbox"
                  />
                  <div className="wrapper-login-warning-cekbox">Ingat Saya</div>
                </div>

                <div
                  style={{ paddingTop: "0px" }}
                  className="w-100 d-flex align-center gap-10px p-16px"
                >
                  <ButtonCancel
                    action={() => actionRegister()}
                    flex={1}
                    paddingBottom={"6px"}
                    paddingTop={"6px"}
                    title={"Daftar"}
                  />
                  <ButtonSubmitForm
                    isValid={isValid}
                    checkedRememberMe={checkedRememberMe}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <ModalError
        isModalUp={modalError}
        setisModalUp={setmodalError}
        title={titleRespon}
      />
      <ILoading isModalUp={modalLoading} setisModalUp={setmodalLoading} />
    </Auth>
  );
};

export default Login;

const ISeru = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10Z"
        fill="white"
      />
    </svg>
  );
};

const ILogin = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        d="M16 40H22.4C23.2444 40 23.9671 39.7004 24.568 39.1013C25.1689 38.5022 25.4684 37.7796 25.4667 36.9333V27.0667C25.4667 26.2222 25.1671 25.5004 24.568 24.9013C23.9689 24.3022 23.2462 24.0018 22.4 24H16V40ZM19.0667 36.9333V27.0667H22.4V36.9333H19.0667ZM29 40H35.5333V36.9333H30.0667V33.4667H33.5333V30.4H30.0667V27.0667H35.5333V24H29C28.4222 24 27.9449 24.1884 27.568 24.5653C27.1911 24.9422 27.0018 25.4204 27 26V38C27 38.5778 27.1893 39.056 27.568 39.4347C27.9467 39.8133 28.424 40.0018 29 40ZM42.7333 39.9333C43.3111 39.9333 43.8116 39.744 44.2347 39.3653C44.6578 38.9867 44.9351 38.5093 45.0667 37.9333L48.8 24H45.6L42.7333 34.9333L39.8667 24H36.6667L40.4 37.9333C40.5333 38.5111 40.8116 38.9893 41.2347 39.368C41.6578 39.7467 42.1573 39.9351 42.7333 39.9333ZM13.3333 56C11.8667 56 10.6116 55.4782 9.568 54.4347C8.52444 53.3911 8.00178 52.1351 8 50.6667V13.3333C8 11.8667 8.52267 10.6116 9.568 9.568C10.6133 8.52444 11.8684 8.00178 13.3333 8H50.6667C52.1333 8 53.3893 8.52267 54.4347 9.568C55.48 10.6133 56.0018 11.8684 56 13.3333V50.6667C56 52.1333 55.4782 53.3893 54.4347 54.4347C53.3911 55.48 52.1351 56.0018 50.6667 56H13.3333Z"
        fill="url(#paint0_linear_15113_110106)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_15113_110106"
          x1="55.9082"
          y1="15.5587"
          x2="36.2349"
          y2="58.8521"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0052CC" />
          <stop offset="0.9228" stop-color="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
