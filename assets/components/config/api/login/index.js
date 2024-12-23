import axios from "axios";
import { PATH } from "../index";
import AXIOS_BASE from "../index";
import { ClientHit, method, service, version } from "../customHook/apiHook";

export function ActLogin(
  values,
  history,
  setmodalError,
  settitleRespon,
  setmodalLoading
) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const url = `/api/login-kodika`;
      const payload = {
        phone_number: values.phone_number,
      };

      setmodalLoading(true);
      ClientHit("SERVICE_USER", method?.post, url, payload)
        .then((res) => {
          console.log("LOGIN", res);
          dispatch({
            type: "PAYLOAD_LOGIN",
            phone_number: values?.phone_number,
            remember_me: values?.remember_me,
            language_code: "id",
          });
          dispatch({
            type: "RESPON_LOGIN",
            status: res?.data?.status,
            auth_code: res?.data?.auth_code,
          });
          history.push("/otp");
          setmodalLoading(false);
        })
        .catch(function (error) {
          setmodalError(true);
          settitleRespon(error?.response?.data?.message);
          setmodalLoading(false);
        });
    });
  };
}

export function Registrasi(
  values,
  history,
  setmodalError,
  settitleRespon,
  setmodalLoading
) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const url = `/api/${version?.v2}/g/${service?.users}/register`;
      const payload = {
        email: values.email,
        name: values.name,
        phone_number: values?.phone_number,
        group_code: values?.group_code,
      };

      setmodalLoading(true);
      ClientHit("SERVICE_USER", method?.post, url, payload)
        .then((res) => {
          dispatch({
            type: "PAYLOAD_REGISTRASI",
            email: values.email,
            name: values.name,
            phone_number: values?.phone_number,
            group_code: values?.group_code,
          });
          dispatch({
            type: "RESPON_REGISTRASI",
            status: res?.data?.status,
            auth_code: res?.data?.auth_code,
          });
          history.push("/otpregis");
          setmodalLoading(false);
        })
        .catch(function (error) {
          setmodalError(true);
          settitleRespon(error?.response?.data?.message);
          setmodalLoading(false);
        });
    });
  };
}

export function ActOTPLogin(
  values,
  history,
  setmodalError,
  settitleRespon,
  setmodalLoading,
  setmodalSukses
) {
  return (dispatch, getState) => {
    const payloadLogin = getState()?.PayloadLoginReducer;
    const responLogin = getState()?.ResponLoginReducer;
    const url = `/api/${version?.v1}/g/${service?.users}/verify-otp`;
    const payload = {
      action: "VOTPA_LOGIN",
      phone_number: payloadLogin.phone_number,
      auth_code: responLogin?.auth_code,
      otp: values,
    };

    return new Promise((resolve, reject) => {
      setmodalLoading(true);
      ClientHit("SERVICE_USER", method?.post, url, payload)
        .then((res) => {
          setmodalLoading(false);
          dispatch({
            type: "PAYLOAD_VERIFY_OTP_LOGIN",
            phone_number: payloadLogin.phone_number,
            auth_code: responLogin?.auth_code,
            otp: values,
          });
          dispatch({
            type: "RESPON_VERIFY_OTP_LOGIN",
            access_token: res?.data?.data?.access_token?.value,
            refresh_token: res?.data?.data?.refresh_token?.value,
          });
          settitleRespon("Berhasil Masuk");
          setmodalSukses(true);
          setTimeout(() => {
            history?.push("/");
          }, 2000);
        })
        .catch(function (error) {
          setmodalError(true);
          settitleRespon(error?.response?.data?.message);
          setmodalLoading(false);
        });
    });
  };
}

export function ActOTPRegis(
  values,
  history,
  setmodalError,
  settitleRespon,
  setmodalLoading,
  setmodalSukses
) {
  return (dispatch, getState) => {
    const payloadRegistrasi = getState()?.PayloadRegistrasiReducer;
    const responRegistrasi = getState()?.ResponRegistrasiReducer;
    const url = `/api/${version?.v1}/g/${service?.users}/verify-otp`;
    const payload = {
      action: "VOTPA_REGISTER",
      phone_number: payloadRegistrasi.phone_number,
      auth_code: responRegistrasi?.auth_code,
      otp: values,
    };

    return new Promise((resolve, reject) => {
      setmodalLoading(true);
      ClientHit("SERVICE_USER", method?.post, url, payload)
        .then((res) => {
          setmodalLoading(false);
          dispatch({
            type: "PAYLOAD_VERIFY_OTP_REGISTRASI",
            phone_number: payloadRegistrasi.phone_number,
            auth_code: responRegistrasi?.auth_code,
            otp: values,
          });
          dispatch({
            type: "RESPON_VERIFY_OTP_REGISTRASI",
            access_token: res?.data?.data?.access_token?.value,
            refresh_token: res?.data?.data?.refresh_token?.value,
          });
          dispatch({
            type: "RESPON_VERIFY_OTP_LOGIN",
            access_token: res?.data?.data?.access_token?.value,
            refresh_token: res?.data?.data?.refresh_token?.value,
          });
          settitleRespon("Berhasil Masuk");
          setmodalSukses(true);
          setTimeout(() => {
            history?.push("/");
          }, 2000);
        })
        .catch(function (error) {
          setmodalError(true);
          settitleRespon(error?.response?.data?.message);
          setmodalLoading(false);
        });
    });
  };
}

export function ActKirimUlang(
  values,
  history,
  setmodalError,
  settitleRespon,
  setmodalLoading,
  setmodalSukses
) {
  return (dispatch, getState) => {
    const payloadLogin = getState()?.PayloadLoginReducer;
    const responLogin = getState()?.ResponLoginReducer;
    const url = `/api/${version?.v2}/g/${service?.users}/login`;
    const payload = {
      phone_number: payloadLogin.phone_number,
      remember_me: payloadLogin.remember_me,
    };

    return new Promise((resolve, reject) => {
      setmodalLoading(true);
      ClientHit("SERVICE_USER", method?.post, url, payload)
        .then((res) => {
          setmodalLoading(false);
          dispatch({
            type: "PAYLOAD_LOGIN",
            phone_number: payloadLogin?.phone_number,
            remember_me: payloadLogin?.remember_me,
          });
          dispatch({
            type: "RESPON_LOGIN",
            status: res?.data?.status,
            auth_code: res?.data?.auth_code,
          });
          settitleRespon("Berhasil kirim ulang, cek OTP kembali");
          setmodalSukses(true);
        })
        .catch(function (error) {
          setmodalError(true);
          settitleRespon(error?.response?.data?.message);
          setmodalLoading(false);
        });
    });
  };
}

export function ActKirimUlangRegis(
  values,
  history,
  setmodalError,
  settitleRespon,
  setmodalLoading,
  setmodalSukses
) {
  return (dispatch, getState) => {
    const payloadRegis = getState()?.PayloadRegistrasiReducer;
    const responRegis = getState()?.ResponRegistrasiReducer;
    const url = `/api/${version?.v2}/g/${service?.users}/register`;
    const payload = {
      email: payloadRegis.email,
      name: payloadRegis.name,
      phone_number: payloadRegis?.phone_number,
      group_code: payloadRegis?.group_code,
    };

    return new Promise((resolve, reject) => {
      setmodalLoading(true);
      ClientHit("SERVICE_USER", method?.post, url, payload)
        .then((res) => {
          setmodalLoading(false);
          dispatch({
            type: "PAYLOAD_REGISTRASI",
            email: payloadRegis.email,
            name: payloadRegis.name,
            phone_number: payloadRegis?.phone_number,
            group_code: payloadRegis?.group_code,
          });
          dispatch({
            type: "RESPON_REGISTRASI",
            status: res?.data?.status,
            auth_code: res?.data?.auth_code,
          });
          settitleRespon("Berhasil kirim ulang, cek OTP kembali");
          setmodalSukses(true);
        })
        .catch(function (error) {
          setmodalError(true);
          settitleRespon(error?.response?.data?.message);
          setmodalLoading(false);
        });
    });
  };
}
