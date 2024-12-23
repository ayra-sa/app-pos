import React from "react";

const IpulsaReguler = ({ width = 24, height = 24, color = "#319795", className = "" }) => {
  return (
    <div style={{
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        left: '37%',
        bottom: '30%',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
          <g clip-path="url(#clip0_15077_56492)">
            <path d="M13.1667 0H2.66675C1.42456 0 0.416748 1.00781 0.416748 2.25V21.75C0.416748 22.9922 1.42456 24 2.66675 24H13.1667C14.4089 24 15.4167 22.9922 15.4167 21.75V2.25C15.4167 1.00781 14.4089 0 13.1667 0ZM7.91675 22.5C7.08706 22.5 6.41675 21.8297 6.41675 21C6.41675 20.1703 7.08706 19.5 7.91675 19.5C8.74644 19.5 9.41675 20.1703 9.41675 21C9.41675 21.8297 8.74644 22.5 7.91675 22.5Z" fill="#2F80ED" />
          </g>
          <defs>
            <clipPath id="clip0_15077_56492">
              <rect width="15" height="24" fill="white" transform="translate(0.416748)" />
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

export default IpulsaReguler;
