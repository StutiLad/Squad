import React from "react";

function Person({person}) {
  return (
    <div className="text-center mt-3">
      <p>
        This is {person.name} and the age is {person.age}.
      </p>
    </div>
  );
}

export default Person;
