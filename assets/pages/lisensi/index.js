import InputText from "components/Input/InputText";
import Auth from "layouts/Auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { Formik } from "formik";
import ILoading from "components/ILoading";
import ButtonSubmitForm from "components/Button/buttonSubmitForm";
import Image from "next/image";
import PatternImage from "../../public/img/pattern.png";
import IBack from "components/icons/IBack";
import axiosInstance from "global-states/api";
import { setAuthCode } from "global-states/actions/global";
import { generateSign } from "utils";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

const Lisensi = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const params = useSearchParams();

  const [modalLoading, setmodalLoading] = useState(false);

  const onSubmit = (values) => {
    localStorage.setItem("secretKey", values.secretKey);
    localStorage.setItem("clientId", values.clientId);

    const time = moment().format();
    const sign = generateSign(values.clientId, values.secretKey, time);

    axiosInstance
      .post(
        "/authenticate",
        {
          grantType: "client_credentials",
          additionalInfo: {
            phoneNumber: params.get("phone_number"),
            onboardingPartner: "KODIKA",
          },
        },
        {
          headers: {
            "X-SIGNATURE": sign,
            "X-TIMESTAMP": time,
          },
          withCredentials: true,
          withXSRFToken: true,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          const data = res.data

          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("phone", params.get("phone_number"));
          localStorage.setItem("authCode", data.additionalInfo.authCode);
          dispatch(setAuthCode(data.additionalInfo.authCode));
          router?.push("/otp");
        }
      })
      .catch((e) => {
        console.log("error = ", e);
        alert("Error");
      });
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
          <div className="flex space-x-2 p-4 items-center">
            <div
              className="cursor-pointer"
              onClick={() => router.push("/login")}
            >
              <IBack />
            </div>
            <div className="auth-kontainer-wrapp-icon-title">Input Lisensi</div>
          </div>

          <hr />

          <Formik
            initialValues={{
              clientId: "",
              secretKey: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values?.clientId) {
                errors.clientId = "ClientID tidak boleh kosong";
              }

              if (!values?.secretKey) {
                errors.secretKey = "Secret Key tidak boleh kosong";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => onSubmit(values)}
          >
            {({
              isValid,
              values,
              errors,
              handleChange,
              handleSubmit,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div
                  className="w-100 d-flex flex-column gap-10px auth-kontainer-wrapp-input"
                  style={{ paddingTop: "0px" }}
                >
                  <div className="mt-5">
                    <div
                      className="w-100 d-flex flex-column gap-10px auth-kontainer-wrapp-input mb-4"
                      style={{ padding: "0px" }}
                    >
                      <InputText
                        handleChange={handleChange}
                        name={"clientId"}
                        value={values?.clientId}
                        placeholder={"Masukan ClientID"}
                        type="text"
                        flexParent={1}
                        title={"ClientID*"}
                      />
                      {errors?.clientId && (
                        <div className="error-phone-number">
                          {errors?.clientId}
                        </div>
                      )}
                    </div>

                    <div
                      className="w-100 d-flex flex-column gap-10px auth-kontainer-wrapp-input"
                      style={{ padding: "0px" }}
                    >
                      <InputText
                        handleChange={handleChange}
                        name={"secretKey"}
                        value={values?.secretKey}
                        placeholder={"Masukan Secret Key"}
                        type="text"
                        flexParent={1}
                        title={"Secret Key*"}
                      />
                      {errors?.secretKey && (
                        <div className="error-phone-number">
                          {errors?.secretKey}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  style={{ paddingTop: "0px" }}
                  className="w-100 d-flex align-center gap-10px p-16px mt-5"
                >
                  <ButtonSubmitForm
                    isValid={isValid}
                    checkedRememberMe={true}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <ILoading isModalUp={modalLoading} setisModalUp={setmodalLoading} />
    </Auth>
  );
};

export default Lisensi;
