// import React, { Component } from "react";

// const RefDemo = () => {
//   var inputRef = React.createRef();
//   console.log(inputRef);

//   const componetnDidMount = () => {
//     inputRef.current.focus();
//     console.log(inputRef);
//   };
//   const handle = () => {
//     alert(inputRef.current.value);
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handle}>Click</button>
//     </div>
//   );
// };

// export default RefDemo;

import React from "react";

const RefDemo = () => {
  const inputRef = React.createRef();
  const compDidMount = () => {
    inputRef.current.focus();
  };

  const handle = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handle}>Click</button>
    </div>
  );
};

export default RefDemo;
