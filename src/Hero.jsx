import React from "react";

const Hero = ({ heroname }) => {
  if (heroname == "Ubaid") {
    throw new Error("Not a Hero");
  }
  return <div>{heroname}</div>;
};
export default Hero;
