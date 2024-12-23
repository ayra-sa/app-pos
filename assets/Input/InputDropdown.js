import ICeklis from 'components/icons/ICeklis'
import React, { useState } from 'react'

const InputDropdown = ({
  title,
  styleParent,
  styleChild,
  marginRightChild,
  marginLeftChild,
  flexParent,
  classTitle,
  otomatis,
  valueStatis1,
  typeAction,
  onChange
}) => {
  const [selectedValue, setSelectedValue] = useState("1");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <>
      {typeAction ? (
        <>
          <div
            style={{
              flexDirection: "column",
              marginLeft: "0px",
              flex: flexParent,
              styleParent,
            }}
            className="dropdown-status-data-table-wrapp d-flex"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginRight: marginRightChild,
                marginLeft: marginLeftChild,
                // marginTop: '2px',
              }}
              className={
                classTitle ? classTitle : "dropdown-status-data-table-title"
              }
            >
              {otomatis ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{title}</div>
                  <div
                    style={{ gap: "10px", marginRight: "8px" }}
                    className="d-flex align-center"
                  >
                    <div
                      style={{ fontWeight: 400 }}
                      className="finance-penerimaan-create-title-penerima-input"
                    >
                      Otomatis
                    </div>
                    <ICeklis />
                  </div>
                </div>
              ) : (
                title
              )}
            </div>
            {
              typeAction == 'ask' ? <>
                <div className='d-flex align-center gap-10px w-100'>
                  <select style={{
                    marginTop: '2px',
                    padding: '8px 16px',
                  }} className='dropdown-status-data-table-select' name="cars" id="cars" value={selectedValue} onChange={handleChange}>
                    <option className='finance-penerimaan-create-dropdown-option' value="1">{valueStatis1 ? valueStatis1 : 'Value 1'}</option>
                    <option className='finance-penerimaan-create-dropdown-option' value="2">Value 2</option>
                    <option className='finance-penerimaan-create-dropdown-option' value="3">Value 3</option>
                    <option className='finance-penerimaan-create-dropdown-option' value="4">Value 4</option>
                  </select>
                  <IAsk />
                </div>
              </>
            : null}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              flexDirection: "column",
              marginLeft: "0px",
              flex: flexParent,
              styleParent,
            }}
            className="dropdown-status-data-table-wrapp d-flex"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginRight: marginRightChild,
                marginLeft: marginLeftChild,
                // marginTop: '2px',
              }}
              className={
                classTitle ? classTitle : "dropdown-status-data-table-title"
              }
            >
              {otomatis ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{title}</div>
                  <div
                    style={{ gap: "10px", marginRight: "8px" }}
                    className="d-flex align-center"
                  >
                    <div
                      style={{ fontWeight: 400 }}
                      className="finance-penerimaan-create-title-penerima-input"
                    >
                      Otomatis
                    </div>
                    <ICeklis />
                  </div>
                </div>
              ) : (
                <div>
                  {title?.includes("*") ? (
                    <>
                      <p>
                        {title.split("*")[0]}{" "}
                        <span className="flag-red">*</span>
                      </p>
                    </>
                  ) : (
                    title
                  )}
                </div>
              )}
            </div>
            <select style={{
              marginTop: '2px',
              padding: '8px 16px',
            }} className='dropdown-status-data-table-select' name="cars" id="cars" value={selectedValue} onChange={handleChange}>
              <option className='finance-penerimaan-create-dropdown-option' value="1">{valueStatis1 ? valueStatis1 : 'Value 1'}</option>
              <option className='finance-penerimaan-create-dropdown-option' value="2">Value 2</option>
              <option className='finance-penerimaan-create-dropdown-option' value="3">Value 3</option>
              <option className='finance-penerimaan-create-dropdown-option' value="4">Value 4</option>
            </select>
          </div>
        </>
      )}
    </>
  );
};

const IAsk = () => {
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM14.8284 7.15997C15.3505 7.67945 15.7181 8.3338 15.89 9.04999C16.1223 10.008 15.9918 11.0181 15.5235 11.8856C15.0552 12.7531 14.2824 13.4165 13.354 13.748C13.149 13.821 13.004 14.003 13.004 14.22V15.002C13.004 15.2677 12.8984 15.5226 12.7105 15.7105C12.5226 15.8984 12.2677 16.004 12.002 16.004C11.7363 16.004 11.4814 15.8984 11.2935 15.7105C11.1056 15.5226 11 15.2677 11 15.002V12.988C11.0034 12.725 11.1103 12.474 11.2975 12.2893C11.4846 12.1046 11.7369 12.001 11.9998 12.001H11.993C13.098 12.001 13.996 11.103 13.996 10.001C13.984 9.47739 13.7676 8.97927 13.3929 8.61327C13.0183 8.24727 12.5153 8.04248 11.9915 8.04275C11.4678 8.04301 10.9649 8.2483 10.5907 8.61467C10.2164 8.98104 10.0004 9.47937 9.989 10.003C9.987 10.554 9.539 11.001 8.987 11.001C8.74019 10.9995 8.50281 10.906 8.32123 10.7388C8.13964 10.5717 8.02689 10.3428 8.005 10.097L8 9.94999C8.017 7.44599 10.321 5.51399 12.933 6.10799C13.6501 6.27628 14.3063 6.64048 14.8284 7.15997ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z"
        fill="#44546F"
      />
    </svg>
  );
};

export default InputDropdown;
