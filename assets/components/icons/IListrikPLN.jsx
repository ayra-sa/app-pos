import React from "react";

const IListrikPLN = ({ width = 24, height = 24, color = "#319795", className = "" }) => {
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
          <g clip-path="url(#clip0_15077_56620)">
            <path d="M14.292 7.5H8.88262L10.8795 1.41563C11.067 0.703125 10.5279 0 9.792 0H3.042C2.4795 0 2.00137 0.417187 1.92637 0.975L0.426375 12.225C0.337312 12.9 0.862312 13.5 1.542 13.5H7.10606L4.94512 22.6172C4.77637 23.3297 5.32012 24 6.03731 24C6.43106 24 6.80606 23.7938 7.01231 23.4375L15.2623 9.1875C15.6983 8.44219 15.1592 7.5 14.292 7.5Z" fill="#F2994A" />
          </g>
          <defs>
            <clipPath id="clip0_15077_56620">
              <rect width="15" height="24" fill="white" transform="translate(0.416992)" />
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

export default IListrikPLN;
