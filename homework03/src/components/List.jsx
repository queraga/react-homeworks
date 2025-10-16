import { useState } from "react";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Bob", age: 20 },

    { id: 2, name: "Mary", age: 22 },

    { id: 3, name: "Alex", age: 21 },

    { id: 4, name: "Tiffany", age: 19 },

    { id: 5, name: "Melony", age: 23 },

    { id: 6, name: "Garry", age: 24 },

    { id: 7, name: "Bill", age: 18 },

    { id: 8, name: "Kylian", age: 20 },

    { id: 9, name: "Osman", age: 21 },
  ]);
  const handleRemove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <div>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name}({person.age})
            <button
              onClick={() => handleRemove(person.id)}
              style={{
                padding: "6px 4px",
                margin: "6px",
                borderRadius: "10px",
                border: "none",
                fontSize: "12px",
                backgroundColor: "#706363ff",
                color: "white",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
