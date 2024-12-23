const { default: ReactSwitch } = require("react-switch");

const InputKDK = ({
  title,
  label,
  data,
  switchMode,
  setIsSwtich,
  isSwitch = true,
  name,
  values,
  value,
  onChangeSelect,
  handleChange,
  placeholder = "Masukan sub akun",
  className,
}) => {
  return (
    <div className="flex-1">
      {switchMode ? (
        <div className="w-full flex justify-between">
          <h3 className={`input-text-label ${className}`}>
            {title?.includes("*") ? (
              <>
                <p>
                  {title.split("*")[0]} <span className="flag-red">*</span>
                </p>
              </>
            ) : (
              title
            )}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {true ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ gap: "10px" }} className="d-flex align-center">
                  <div
                    style={{ fontWeight: 400 }}
                    className="finance-penerimaan-create-title-penerima-input"
                  >
                    Jadikan sub akun
                  </div>
                  <ReactSwitch
                    onChange={(a) => setIsSwtich(a)}
                    checked={isSwitch}
                    width={50}
                    height={20}
                  />
                </div>
              </div>
            ) : (
              title
            )}
          </div>
        </div>
      ) : (
        <h3 className={`input-text-label ${className}`}>
          {title?.includes("*") ? (
            <>
              <p>
                {title.split("*")[0]} <span className="flag-red">*</span>
              </p>
            </>
          ) : (
            title
          )}
        </h3>
      )}
      {isSwitch ? (
        <select
          className="dropdown-status-data-table-select"
          name={name}
          id="cars"
          value={value}
          onChange={onChangeSelect}
        >
          <option
            className="finance-penerimaan-create-dropdown-option"
            value=""
          >
            {label}
          </option>
          {data?.map((item) => (
            <option
              className="finance-penerimaan-create-dropdown-option"
              value={item.id}
              key={item}
            >
              {item.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="input-text-label-value mt-1"
          placeholder={placeholder}
          name={name}
          value={values}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default InputKDK;
