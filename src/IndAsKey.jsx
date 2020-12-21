import React from "react";

const IndAsKey = () => {
  const names = ["Osama", "Mishal", "Hamza", "Ali", "Amir", "Ubaid"];

  return (
    <div>
      {names.map((name, index) => (
        <h1 key={index}>
          {index} {name}
        </h1>
      ))}
    </div>
  );
};

export default IndAsKey;
