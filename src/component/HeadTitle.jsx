// ReusableComponent.js
import React from 'react';
import "../css/headtitle.css"

const HeadTitle = ({ children }) => {
  return (
    <div className="head-title-container">
      {children}
    </div>
  );
};

export default HeadTitle;
