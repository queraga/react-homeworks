import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  useEffect(() => {
    console.log("Component ListItems has been updated");
  }, []);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Text here"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}

export default ListItems;
