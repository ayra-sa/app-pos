import React from "react";

const IPengaturan = ({ width = 24, height = 24, color = "#319795", className = "" }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 20" fill="white">
        <path d="M16.6501 5.5L9.0001 1L1.3501 5.5V14.5L9.0001 19L16.6501 14.5V5.5Z" stroke="#44546F" stroke-width="2" stroke-linejoin="round" />
        <path d="M9.00015 9.10078V12.7008M12.6001 7.30078V12.7008M5.40015 10.9008V12.7008" stroke="#44546F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </>
  );
};

export default IPengaturan;
