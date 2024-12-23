import React from "react";

const IAir = ({ width = 36, height = 30, color = "#319795", className = "" }) => {
  return (
    <>
      <div style={{
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          left: '37%',
          bottom: '30%',
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
            <g clip-path="url(#clip0_15077_56689)">
              <path d="M10.0362 1.03549C9.664 -0.313577 7.71869 -0.376389 7.29682 1.03549C5.10447 8.43049 0.416504 10.44 0.416504 15.652C0.416504 20.2664 4.1065 24 8.6665 24C13.2265 24 16.9165 20.2664 16.9165 15.652C16.9165 10.4138 12.2388 8.46424 10.0362 1.03549ZM8.6665 21C5.77197 21 3.4165 18.6445 3.4165 15.75C3.4165 15.3356 3.75213 15 4.1665 15C4.58088 15 4.9165 15.3356 4.9165 15.75C4.9165 17.8177 6.59885 19.5 8.6665 19.5C9.08088 19.5 9.4165 19.8356 9.4165 20.25C9.4165 20.6644 9.08088 21 8.6665 21Z" fill="#2D9CDB" />
            </g>
            <defs>
              <clipPath id="clip0_15077_56689">
                <rect width="16.5" height="24" fill="white" transform="translate(0.416504)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56" fill="none">
          <ellipse cx="27.4167" cy="28" rx="27.4167" ry="28" fill="#FAFAFA" />
        </svg>
      </div>

    </>
  );
};

export default IAir;
