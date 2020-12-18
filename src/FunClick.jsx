import React from "react";

const FunClick = () => {
  const clickfun = () => {
    console.log("Functio Click");
  };
  return (
    <div>
      <button onClick={clickfun}>Click</button>
    </div>
  );
};

export default FunClick;
