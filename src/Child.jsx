// import React from "react";

// const Child = (props) => {
//   return <button onClick={props.getFunction}>Click</button>;
// };

// export default Child;

import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.getFunction("Osama")}>Click</button>
    </div>
  );
};

export default Child;
