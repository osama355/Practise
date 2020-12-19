// import React, { Component, useState } from "react";
// import Child from "./Child";

// const Parent = () => {
//   const [parent, setParent] = useState("Nadeem");

//   const GetAlert = () => {
//     alert(`Hello ${parent} from `);
//   };

//   return (
//     <div>
//       <Child getFunction={GetAlert} />
//     </div>
//   );
// };

// export default Parent;

import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentname, setParentName] = useState("Nadeem");
  const GetAlert = (children) => {
    alert(`Hello ${parentname} from ${children}`);
  };
  return (
    <div>
      <Child getFunction={GetAlert} />
    </div>
  );
};

export default Parent;
