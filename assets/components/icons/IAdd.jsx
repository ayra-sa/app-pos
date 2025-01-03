import React from "react";

const IAdd = ({ width = 24, height = 24, color = "white", className = "" }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 11V3.993C12.9989 3.72876 12.893 3.47574 12.7055 3.28954C12.518 3.10335 12.2643 2.99921 12 3C11.444 3 11 3.445 11 3.993V11H3.993C3.72876 11.0011 3.47574 11.107 3.28954 11.2945C3.10335 11.482 2.99921 11.7358 3 12C3 12.557 3.445 13 3.993 13H11V20.007C11 20.555 11.448 21 12 21C12.556 21 13 20.555 13 20.007V13H20.007C20.2713 12.9989 20.5243 12.893 20.7105 12.7055C20.8967 12.518 21.0008 12.2643 21 12C21 11.444 20.555 11 20.007 11H13Z" fill={color} />
      </svg>

    </>
  );
};

export default IAdd;
