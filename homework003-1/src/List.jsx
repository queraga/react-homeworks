import { useState } from "react";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Mary", age: 22 },
    { id: 3, name: "Alex", age: 21 },
    { id: 4, name: "Marina", age: 19 },
    { id: 5, name: "Daisy", age: 23 },
    { id: 6, name: "Gleb", age: 24 },
    { id: 7, name: "Daniel", age: 18 },
    { id: 8, name: "Greg", age: 20 },
    { id: 9, name: "Samuel", age: 21 },
  ]);

  function handleDelete(id) {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  }

  return (
    <div>
      <div>
        {people.map((person) => (
          <div key={person.id}>
            <span>
              {person.name} - {person.age} years
            </span>
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
