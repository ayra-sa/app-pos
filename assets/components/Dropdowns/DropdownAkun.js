import { ActLogout } from "global-states/actions/global";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const DropdownAkun = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(ActLogout());
    dispatch({ type: "IS_DROPDOWN_AKUN" });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("authCode");
    router?.push("/login");
  };

  return (
    <>
      <div className="dropdown-pengaturan-akun-wrapp">
        <Link href={"/akun"}>
          <div
            onClick={() => {
              dispatch({ type: "IS_PAGE_AKUN_TRUE" });
              dispatch({ type: "IS_DROPDOWN_AKUN" });
            }}
            className="cursor-pointer d-flex align-center px-6px pt-16px pb-16px garis"
          >
            <IProfileAkun />
            <div className="ml-16px mr-12px mw-216px">
              <div className="profil-account-title">Profile Akun</div>
              <div className="profil-account-title-sub">
                Pengaturan file akun
              </div>
            </div>
            <INext />
          </div>
        </Link>

        <div className="d-flex align-center px-6px pt-16px pb-16px garis">
          <IUsaha />
          <div className="ml-16px mr-12px mw-216px">
            <div className="profil-account-title">Profile Usaha</div>
            <div className="profil-account-title-sub">
              Pengaturan profile usaha
            </div>
          </div>
          <INext />
        </div>

        <div
          onClick={() => {
            handleLogout();
          }}
          className="cursor-pointer d-flex align-center px-6px pt-16px pb-16px"
        >
          <ILogout />
          <div className="ml-16px mr-12px mw-216px">
            <div className="profil-account-title">Keluar</div>
          </div>
          <INextLog />
        </div>
      </div>
    </>
  );
};

const ILogout = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.875 12V4.5C10.875 4.20163 10.9935 3.91548 11.2045 3.7045C11.4155 3.49353 11.7016 3.375 12 3.375C12.2984 3.375 12.5845 3.49353 12.7955 3.7045C13.0065 3.91548 13.125 4.20163 13.125 4.5V12C13.125 12.2984 13.0065 12.5845 12.7955 12.7955C12.5845 13.0065 12.2984 13.125 12 13.125C11.7016 13.125 11.4155 13.0065 11.2045 12.7955C10.9935 12.5845 10.875 12.2984 10.875 12ZM17.1141 4.3125C16.8643 4.15868 16.5642 4.10853 16.278 4.17274C15.9917 4.23694 15.7419 4.41043 15.5817 4.6562C15.4215 4.90197 15.3637 5.2006 15.4205 5.4884C15.4774 5.77621 15.6444 6.03043 15.8859 6.19687C17.9447 7.53469 19.125 9.65625 19.125 12C19.125 13.8897 18.3743 15.7019 17.0381 17.0381C15.7019 18.3743 13.8897 19.125 12 19.125C10.1103 19.125 8.29806 18.3743 6.96186 17.0381C5.62567 15.7019 4.875 13.8897 4.875 12C4.875 9.65625 6.05531 7.53469 8.11406 6.19219C8.34278 6.02077 8.49768 5.76871 8.54729 5.48722C8.5969 5.20573 8.5375 4.9159 8.38116 4.67662C8.22482 4.43734 7.98326 4.26653 7.70555 4.1989C7.42783 4.13127 7.13479 4.17189 6.88594 4.3125C4.1775 6.07313 2.625 8.87719 2.625 12C2.625 14.4864 3.61272 16.871 5.37087 18.6291C7.12903 20.3873 9.5136 21.375 12 21.375C14.4864 21.375 16.871 20.3873 18.6291 18.6291C20.3873 16.871 21.375 14.4864 21.375 12C21.375 8.87719 19.8225 6.07313 17.1141 4.3125Z"
        fill="#EB5757"
      />
    </svg>
  );
};

const IProfileAkun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 15 18"
      fill="none"
    >
      <path
        d="M13.4444 16.9974V15.2196C13.4444 14.2766 13.0698 13.3723 12.403 12.7055C11.7362 12.0387 10.8319 11.6641 9.88889 11.6641H4.55556C3.61256 11.6641 2.70819 12.0387 2.0414 12.7055C1.3746 13.3723 1 14.2766 1 15.2196V16.9974"
        stroke="#2F80ED"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.22157 8.11111C9.18525 8.11111 10.7771 6.51923 10.7771 4.55556C10.7771 2.59188 9.18525 1 7.22157 1C5.25789 1 3.66602 2.59188 3.66602 4.55556C3.66602 6.51923 5.25789 8.11111 7.22157 8.11111Z"
        stroke="#2F80ED"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const INext = () => {
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
        d="M14.9947 10.9931C15.1821 11.1806 15.2875 11.435 15.2875 11.7001C15.2875 11.9653 15.1821 12.2196 14.9947 12.4071L10.4017 17.0001C10.2154 17.1827 9.96458 17.2843 9.70375 17.283C9.44292 17.2817 9.19315 17.1775 9.00871 16.9931C8.82428 16.8086 8.72008 16.5589 8.71876 16.298C8.71745 16.0372 8.81911 15.7864 9.00168 15.6001L12.9017 11.7001L9.00168 7.80012C8.81911 7.61383 8.71745 7.36302 8.71876 7.10219C8.72008 6.84136 8.82428 6.59159 9.00871 6.40715C9.19315 6.22272 9.44292 6.11852 9.70375 6.1172C9.96458 6.11588 10.2154 6.21755 10.4017 6.40012L14.9947 10.9931Z"
        fill="#44546F"
      />
    </svg>
  );
};

const INextLog = () => {
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
        d="M14.9947 10.9931C15.1821 11.1806 15.2875 11.435 15.2875 11.7001C15.2875 11.9653 15.1821 12.2196 14.9947 12.4071L10.4017 17.0001C10.2154 17.1827 9.96458 17.2843 9.70375 17.283C9.44292 17.2817 9.19315 17.1775 9.00871 16.9931C8.82428 16.8086 8.72008 16.5589 8.71876 16.298C8.71745 16.0372 8.81911 15.7864 9.00168 15.6001L12.9017 11.7001L9.00168 7.80012C8.81911 7.61383 8.71745 7.36302 8.71876 7.10219C8.72008 6.84136 8.82428 6.59159 9.00871 6.40715C9.19315 6.22272 9.44292 6.11852 9.70375 6.1172C9.96458 6.11588 10.2154 6.21755 10.4017 6.40012L14.9947 10.9931Z"
        fill="red"
      />
    </svg>
  );
};

const IUsaha = () => {
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
        d="M4 11H6V16H4V11ZM4.556 3.888C4.801 3.398 5.45 3 6.006 3H17.993C18.549 3 19.199 3.398 19.443 3.888L21 7H3L4.556 3.888ZM3 7H21V8H3V7ZM18 11H20V16H18V11ZM3 8C3.14 9.128 4.094 10 5.25 10C6.406 10 7.36 9.128 7.5 8H3ZM7.5 8C7.64 9.128 8.594 10 9.75 10C10.906 10 11.86 9.128 12 8H7.5ZM12 8C12.14 9.128 13.094 10 14.25 10C15.406 10 16.36 9.128 16.5 8H12ZM16.5 8C16.64 9.128 17.594 10 18.75 10C19.906 10 20.86 9.128 21 8H16.5ZM4 16H20V18.995C20.0013 19.5253 19.792 20.0343 19.4181 20.4103C19.0442 20.7863 18.5363 20.9984 18.006 21H5.994C5.73133 20.9996 5.47131 20.9474 5.22885 20.8464C4.98639 20.7453 4.76624 20.5975 4.58101 20.4112C4.39579 20.225 4.24912 20.004 4.14943 19.761C4.04973 19.518 3.99895 19.2577 4 18.995V16Z"
        fill="#219653"
      />
    </svg>
  );
};

export default DropdownAkun;
