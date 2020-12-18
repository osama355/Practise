import React from "react";

const Name = (props) => {
  const { name, children } = props;
  console.log(props);
  console.log(name);
  return (
    <>
      <h1>Hello {name}</h1>
      {children}
    </>
  );
};

export default Name;
