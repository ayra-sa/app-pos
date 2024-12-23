import React from "react";

const ButtonSubmitForm = ({ title = "Submit", checkedRememberMe, isValid }) => {
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <button
        type="submit"
        style={{
          justifyContent: "center",
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: checkedRememberMe && isValid ? "#0C66E4" : "#F8F8F9",
          cursor: checkedRememberMe && isValid ? "pointer" : "not-allowed",
        }}
        disabled={checkedRememberMe === true && isValid ? false : true}
        className={`finance-penerimaan-buttont-buat-wrapp`}
      >
        <div
          style={{
            marginLeft: "0px",
            textAlign: "start",
            cursor: "pointer",
            color: checkedRememberMe && isValid ? "white" : "#091E424F",
          }}
          className="finance-penerimaan-buttont-buat"
        >
          {title}
        </div>
      </button>
    </div>
  );
};

export default ButtonSubmitForm;
