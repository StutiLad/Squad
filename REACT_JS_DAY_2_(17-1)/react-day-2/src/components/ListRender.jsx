import React from "react";
import Person from "./Person";

export default function ListRender() {
  /* const names = ["Hello", "I'm", "Stuti"];
  const nameList = names.map((name, index) => <p key= {index}>{name}</p>); */  // with list and key 

  const persons = [
    { id: 1, name: 'ABC', age: 20 },
    { id: 2, name: 'XYZ', age: 25 },
    { id: 3, name: 'MNO', age: 15 },
  ];
  const personList = persons.map(person => <Person key={person.id} person={person}/>);
  return (
    <>
      {/* <div className="text-center mt-3">{nameList}</div> */}
      <div>{personList}</div>
    </>
  );
}
