import React from "react";

const ButtonCancel = ({
  title,
  action,
  paddingTop,
  paddingBottom,
  flex,
  borderBtn3,
}) => {
  return (
    <div
      style={{
        border: borderBtn3 ? "2px solid #172B4D" : "2px solid #0052CC",
        flex: flex ? flex : "",
        paddingBottom: paddingBottom ? paddingBottom : "2px",
        paddingTop: paddingTop ? paddingTop : "5.5px",
      }}
      onClick={action}
      className="cursor-pointer button-cancel"
    >
      {title}
    </div>
  );
};

export default ButtonCancel;
