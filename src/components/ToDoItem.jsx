import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li title="Click to delete">{props.item}</li>
    </div>
  );
}

export default ToDoItem;