import React, { useState } from "react";

const CondRendering = () => {
  const [state, setState] = useState(false);

  // first approch
  // if (state) {
  //   return <div>Welcome Osama</div>;
  // } else {
  //   return <div>Welcome Guest</div>;
  // }

  // second approch
  // let message;
  // if (state) {
  //   message = "Hello Osama";
  // } else {
  //   message = "Hello Guest";
  // }
  // return <div>{message}</div>;

  //third approch, ternary conditional operator approch
  // return state?
  // <div>Helo Osama</div>:
  // <div>Hello Guests</div>

  // fourth approch, short circuit approch
  return state && <div>Welcome Osama</div>;
};

export default CondRendering;
