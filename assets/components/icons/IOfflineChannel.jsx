import React from "react";

const IOfflineChannel = ({ width = 24, height = 24, color = "#319795", className = "" }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <path d="M4 7V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8M4 17V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V7M16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V17M10 11V13M19 11V13M5 11H6V13H5V11ZM14 11H15V13H14V11Z" stroke="#44546F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </>
  );
};

export default IOfflineChannel;
