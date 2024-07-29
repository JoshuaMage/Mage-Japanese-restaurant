import React from "react";
import "../css/CenterWrapper.css"; // Import the CSS for the wrapper

const CenterWrapper = ({ children }) => {
  return (
    <div className="center-wrapper">
      {children}
    </div>
  );
};

export default CenterWrapper;
