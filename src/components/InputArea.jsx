import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");

  return (
    <div className="form">
      <input
        onChange={event => setItem(event.target.value)}
        type="text"
        name="item"
        placeholder="Add item"
        value={item}
      />

      <button
        onClick={() => {
          props.onAdd(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
