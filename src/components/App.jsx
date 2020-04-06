import React, { useState } from "react";
import unique from "uniqid";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [listofID, setListofID] = useState(Object.keys(localStorage));

  function addItem(item) {
    if (item !== "") {
      const key = unique();
      localStorage.setItem(key, item);
      console.log(localStorage);
      console.log(Object.keys(localStorage));
      setListofID(Object.keys(localStorage));
    }
  }

  function deleteItem(id) {
    console.log(id);
    localStorage.removeItem(id);
    setListofID(Object.keys(localStorage));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {listofID.map(itemKey => (
            <ToDoItem
              key={itemKey}
              id={itemKey}
              item={localStorage.getItem(itemKey)}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
