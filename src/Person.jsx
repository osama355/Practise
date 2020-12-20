import React from "react";

const Person = ({ person, key }) => {
  return (
    <h1>
      {key} My name is {person.name}. I am {person.age} years old. I am in{" "}
      {person.program} department.
    </h1>
  );
};

export default Person;
