import React, { useState } from "react";
import Memo from "./Memo";

const ParentMemo = () => {
  const [name, setname] = useState("Osama");
  console.log("Parent Component");

  const ComponentDidMount = () => {
    setInterval(2000);
  };

  return (
    <div>
      <Memo name={name} />
    </div>
  );
};

export default ParentMemo;
