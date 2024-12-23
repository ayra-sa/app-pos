import React from "react";

function InputRadio({
  title,
  titleCheck,
  multi = false,
  valueMulti = [],
  name = "radioGroup",
  handleChange,
  checked,
  id
}) {
  return (
    <div>
      <div className="finance-simpanan-add-pengaturan-top-title-sub">
        {title}
      </div>

      <div className="d-flex align-center mt-2">
        {multi ? (
          <>
            {valueMulti?.map((res, id) => {
              return (
                <div
                  key={id}
                  style={{
                    gap: "5px",
                  }}
                  className="d-flex align-center mr-3"
                >
                  <input
                    id={id}
                    type="radio"
                    name={name}
                    value={res.value}
                    checked={checked === res.value}
                    onChange={handleChange}
                  />
                  <label for="vehicle1"> {res?.titleCheck}</label>
                </div>
              );
            })}
          </>
        ) : (
          <div
            style={{
              gap: "5px",
            }}
            className="d-flex align-center mr-3"
          >
            <input
              id={id}
              type="radio"
              name={name}
              value={titleCheck}
              checked={checked === titleCheck}
              onChange={handleChange}
            />
            <label for="vehicle1"> {titleCheck}</label>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputRadio;
