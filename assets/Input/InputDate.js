import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function InputDate({
  valueStart,
  setValueStart,
  title,
  flexParent,
  pad8Px,
  classTitle,
  marginLeftTitle,
}) {
  return (
    <div
      style={{
        flex: flexParent,
      }}
      className="input-tanggal"
    >
      <div
        style={{
          marginLeft: marginLeftTitle,
        }}
        className={
          classTitle
            ? classTitle
            : "finance-penerimaan-filter-tgl-style-pad-8px"
        }
      >
        <div className={classTitle ? classTitle : "mb-4px input-text-label"}>
          {title?.includes("*") ? (
            <>
              <p>
                {title.split("*")[0]} <span className="flag-red">*</span>
              </p>
            </>
          ) : (
            title
          )}
        </div>
      </div>
      <div>
        <DatePicker onChange={setValueStart} value={valueStart} />
      </div>
    </div>
  );
}

export default InputDate;
