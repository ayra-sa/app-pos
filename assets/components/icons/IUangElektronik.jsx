import React from "react";

const IUangElektronik = ({ width = 24, height = 24, color = "#319795", className = "" }) => {
  return (
    <div style={{
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        left: '25%',
        bottom: '30%',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <g clip-path="url(#clip0_15077_56681)">
            <path d="M22.0355 6H4.16675C3.75237 6 3.41675 5.66437 3.41675 5.25C3.41675 4.83562 3.75237 4.5 4.16675 4.5H22.1667C22.5811 4.5 22.9167 4.16438 22.9167 3.75C22.9167 2.50734 21.9094 1.5 20.6667 1.5H3.41675C1.75972 1.5 0.416748 2.84297 0.416748 4.5V19.5C0.416748 21.157 1.75972 22.5 3.41675 22.5H22.0355C23.3489 22.5 24.4167 21.4908 24.4167 20.25V8.25C24.4167 7.00922 23.3489 6 22.0355 6ZM19.9167 15.75C19.0885 15.75 18.4167 15.0783 18.4167 14.25C18.4167 13.4217 19.0885 12.75 19.9167 12.75C20.745 12.75 21.4167 13.4217 21.4167 14.25C21.4167 15.0783 20.745 15.75 19.9167 15.75Z" fill="#BB6BD9" />
          </g>
          <defs>
            <clipPath id="clip0_15077_56681">
              <rect width="24" height="24" fill="white" transform="translate(0.416748)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56" fill="none">
        <ellipse cx="27.4167" cy="28" rx="27.4167" ry="28" fill="#FAFAFA" />
      </svg>
    </div>
  );
};

export default IUangElektronik;
