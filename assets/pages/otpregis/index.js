import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import { ActKirimUlang, ActKirimUlangRegis, ActOTPLogin, ActOTPRegis } from 'components/config/api/login'
import ILoading from 'components/ILoading'
import InputDropdown from 'components/Input/InputDropdown'
import InputText from 'components/Input/InputText'
import ModalError from 'components/modalError'
import ModalSukses from 'components/modalSukses'
import { Formik } from 'formik'
import Auth from 'layouts/Auth'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const OTPRegis = () => {

  const { auth_code } = useSelector((state) => state?.ResponRegistrasiReducer)

  const [isModalUp, setisModalUp] = useState(false)
  const [otp, setOtp] = useState("");
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [modalSukses, setmodalSukses] = useState(false)
  const [modalLoading, setmodalLoading] = useState(false)
  const [modalError, setmodalError] = useState(false)
  const [titleRespon, settitleRespon] = useState('')
  const [timer, setTimer] = useState(30);
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch()
  const router = useRouter()

  const handleChangeOTP = (value) => {
    setOtp(value);
  };

  const handleOtpComplete = (isComplete) => {
    setIsOtpComplete(isComplete);
  };

  useEffect(() => {
    if (!auth_code) {
      router?.push('/login')
    }
  }, [])

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setIsDisabled(false);
    }
  }, [timer]);

  const handleResend = () => {
    dispatch(
      ActKirimUlangRegis(
        otp,
        router,
        setmodalError,
        settitleRespon,
        setmodalLoading,
        setmodalSukses,
      )
    )
    // Handle the resend OTP logic here
    setTimer(30);
    setIsDisabled(true);
  };

  return (
    <Auth>
      <div className='auth-kontainer'>
        <div className='auth-kontainer-wrapp'>

          <Formik
            initialValues={{}}
            validate={values => {
              const errors = {};
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (isOtpComplete) {
                dispatch(
                  ActOTPRegis(
                    otp,
                    router,
                    setmodalError,
                    settitleRespon,
                    setmodalLoading,
                    setmodalSukses,
                  ))
              }
            }}
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

                <div className='p-16px d-flex flex-column align-center'>
                  <IkodeOTP />
                  <div className='mt-16px wrapper-otp-title'>KODE OTP</div>
                  <div className='mt-16px wrapper-otp-title-sub'>Masukon kode OTP yang telah kami kirim ke no handphone anda</div>
                </div>

                <div style={{
                  paddingLeft: '62px',
                  paddingRight: '62px',
                }} className='d-flex gap-10px p-16px'>
                  <OTPInput onComplete={handleOtpComplete} length={6} onChange={handleChangeOTP} />
                </div>

                <div style={{ paddingTop: '0px' }} className='w-100 d-flex align-center gap-10px p-16px'>

                  <div style={{
                    flex: 1,
                  }}>
                    <button
                      type='submit'
                      disabled={!isOtpComplete}
                      style={{
                        justifyContent: 'center',
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: isOtpComplete ? "#007bff" : "#cccccc",
                        color: isOtpComplete ? "#ffffff" : "#666666",
                        cursor: isOtpComplete ? "pointer" : "not-allowed",
                      }}

                      className='cursor-pointer finance-penerimaan-buttont-buat-wrapp'>
                      <div style={{
                        marginLeft: '0px',
                        textAlign: 'center',
                        cursor: 'pointer',
                      }} className='finance-penerimaan-buttont-buat'>Konfirmasi</div>
                    </button>
                  </div>

                  <button
                    disabled={isDisabled}
                    onClick={() => { handleResend() }}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      cursor: isDisabled ? "not-allowed" : "pointer",
                      backgroundColor: isDisabled ? "#091E420F" : "#007bff",
                      padding: '8px 16px',
                      borderRadius: '3px',
                      color: isDisabled ? "#172B4D" : "#ffffff",
                      fontSize: '14px',
                      fontFamily: 'Poppins',
                    }}>
                    {isDisabled ? `Kirim Ulang(${timer})` : "Kirim Ulang"}
                  </button>

                </div>
              </form>
            )}
          </Formik>

        </div>
      </div>
      <ModalSukses
        title={titleRespon}
        isModalUp={modalSukses}
        setisModalUp={setmodalSukses}
      />
      <ModalError
        isModalUp={modalError}
        setisModalUp={setmodalError}
        title={titleRespon}
      />
      <ILoading
        isModalUp={modalLoading}
        setisModalUp={setmodalLoading}
      />
    </Auth>

  )
}

export default OTPRegis

const OTPInput = ({ length, onChange, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    if (/[^0-9]/.test(element.value)) return; // Reject non-numeric input

    const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))];
    setOtp(newOtp);

    // Focus on the next input box if the current one is filled
    if (element.value !== "" && index < length - 1) {
      document.getElementById(`otpInput-${index + 1}`).focus();
    }

    // Call the parent onChange function with the new OTP value
    onChange(newOtp.join(""));

    // Check if OTP is fully entered
    if (newOtp.every((val) => val !== "")) {
      onComplete(true);
    } else {
      onComplete(false);
    }

  };

  const handleKeyDown = (event, index) => {
    // Handle backspace to focus on the previous input field
    if (event.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        document.getElementById(`otpInput-${index - 1}`).focus();
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      {otp.map((data, index) => {
        return (
          <input
            className="otp-input"
            type="text"
            name="otp"
            maxLength="1"
            id={`otpInput-${index}`}
            key={index}
            value={otp[index]}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        );
      })}
    </div>
  );
};

const IkodeOTP = () => {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 33.3C20 25.9533 25.9533 20 33.3 20H126.7C134.047 20 140 25.9533 140 33.3V126.7C140 130.227 138.599 133.61 136.105 136.105C133.61 138.599 130.227 140 126.7 140H33.3C29.7726 140 26.3897 138.599 23.8955 136.105C21.4012 133.61 20 130.227 20 126.7V33.3ZM70 110L60 100L40 120H120V102L100 80L70 110ZM53.3333 66.6667C56.8696 66.6667 60.2609 65.2619 62.7614 62.7614C65.2619 60.2609 66.6667 56.8696 66.6667 53.3333C66.6667 49.7971 65.2619 46.4057 62.7614 43.9052C60.2609 41.4048 56.8696 40 53.3333 40C49.7971 40 46.4057 41.4048 43.9052 43.9052C41.4048 46.4057 40 49.7971 40 53.3333C40 56.8696 41.4048 60.2609 43.9052 62.7614C46.4057 65.2619 49.7971 66.6667 53.3333 66.6667Z" fill="#44546F" />
    </svg>

  )
}

const ISeru = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10Z" fill="white" />
    </svg>

  )
}

const ILogin = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path d="M16 40H22.4C23.2444 40 23.9671 39.7004 24.568 39.1013C25.1689 38.5022 25.4684 37.7796 25.4667 36.9333V27.0667C25.4667 26.2222 25.1671 25.5004 24.568 24.9013C23.9689 24.3022 23.2462 24.0018 22.4 24H16V40ZM19.0667 36.9333V27.0667H22.4V36.9333H19.0667ZM29 40H35.5333V36.9333H30.0667V33.4667H33.5333V30.4H30.0667V27.0667H35.5333V24H29C28.4222 24 27.9449 24.1884 27.568 24.5653C27.1911 24.9422 27.0018 25.4204 27 26V38C27 38.5778 27.1893 39.056 27.568 39.4347C27.9467 39.8133 28.424 40.0018 29 40ZM42.7333 39.9333C43.3111 39.9333 43.8116 39.744 44.2347 39.3653C44.6578 38.9867 44.9351 38.5093 45.0667 37.9333L48.8 24H45.6L42.7333 34.9333L39.8667 24H36.6667L40.4 37.9333C40.5333 38.5111 40.8116 38.9893 41.2347 39.368C41.6578 39.7467 42.1573 39.9351 42.7333 39.9333ZM13.3333 56C11.8667 56 10.6116 55.4782 9.568 54.4347C8.52444 53.3911 8.00178 52.1351 8 50.6667V13.3333C8 11.8667 8.52267 10.6116 9.568 9.568C10.6133 8.52444 11.8684 8.00178 13.3333 8H50.6667C52.1333 8 53.3893 8.52267 54.4347 9.568C55.48 10.6133 56.0018 11.8684 56 13.3333V50.6667C56 52.1333 55.4782 53.3893 54.4347 54.4347C53.3911 55.48 52.1351 56.0018 50.6667 56H13.3333Z" fill="url(#paint0_linear_15113_110106)" />
      <defs>
        <linearGradient id="paint0_linear_15113_110106" x1="55.9082" y1="15.5587" x2="36.2349" y2="58.8521" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0052CC" />
          <stop offset="0.9228" stop-color="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}