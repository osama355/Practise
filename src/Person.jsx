import React from "react";

const Person = ({ person }) => {
  return (
    <h1>
      My name is {person.name}. I am {person.age} years old. I am in{" "}
      {person.program} department.
    </h1>
  );
};

export default Person;
