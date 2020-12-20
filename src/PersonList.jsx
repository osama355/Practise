import React from "react";
import Person from "./Person";

const PersonList = () => {
  const persons = [
    {
      name: "Osama",
      age: 20,
      program: "BSCS"
    },
    {
      name: "Ali",
      age: 24,
      program: "Aviation"
    },
    {
      name: "Ubaid",
      age: 23,
      program: "BSSE"
    },
    {
      name: "Hamza",
      age: 26,
      program: "Avionics"
    }
  ];

  return (
    <div>
      {persons.map((person) => (
        <Person person={person} />
      ))}
      {/* {persons.map((person) => (
        <h1>
          My name is {person.name}. I am {person.age} years old. I am in{" "}
          {person.program} department.
        </h1>
      ))} */}
    </div>
  );
};

export default PersonList;
