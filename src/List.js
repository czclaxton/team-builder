import React from "react";

function List(props) {
  const teamArray = props.teamArray;
  return teamArray.map(person => {
    return (
      <div>
        <p>
          {` Name: ${person.name} - Email: ${person.email} - Role: ${
            person.role
          }`}
        </p>
      </div>
    );
  });
}

export default List;
