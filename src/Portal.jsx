import React from "react";
import ReactDOM from "react-dom";

const Portal = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>Hello Portal</h1>
    </div>,
    document.getElementById("portal_root")
  );
};

export default Portal;
