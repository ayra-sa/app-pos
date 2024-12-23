import React from "react";

const ITokenListrik = ({ width = 24, height = 24, color = "#319795", className = "" }) => {
  return (
    <div style={{
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        left: '25%',
        bottom: '30%',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
          <path d="M12.292 26.25V22.5L7.91699 18.125V8.75H10.417V3.75H12.917V8.75H17.917V3.75H20.417V8.75H22.917V18.125L18.542 22.5V26.25H12.292Z" fill="#EB5757" />
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56" fill="none">
        <ellipse cx="27.4167" cy="28" rx="27.4167" ry="28" fill="#FAFAFA" />
      </svg>
    </div>
  );
};

export default ITokenListrik;
