import React from "react";

const SkeletonCustom = ({
  width = "10px",
  height = "10px",
  borderRadius = "2px",
}) => {
  return (
    <div role="status" class="animate-pulse">
      <div
        class="
                  bg-gray-200  
                  dark:bg-gray-600  
                  "
        style={{
          width: width,
          height: height,
          borderRadius: borderRadius,
        }}
      ></div>
    </div>
  );
};

export default SkeletonCustom;
