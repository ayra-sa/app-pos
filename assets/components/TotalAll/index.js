import React from "react";

function TotalAll({ title, value, color = "#0052CC", className = "" }) {
  return (
    <div className={className}>
      <div className="total-all">{title}</div>
      <div
        style={{
          color: color ? color : "#0052CC",
        }}
        className="total-all-value"
      >
        Rp {value}
      </div>
    </div>
  );
}

export default TotalAll;
