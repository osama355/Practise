import React from "react";

const Memo = ({ name }) => {
  console.log("Memo Component");
  return <div>{name}</div>;
};

export default React.memo(Memo);
