import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [edit, setEditStatus] = useState(false);
  // const [insert, setInsert] = useState(false);
  const [currVal, setCurrVal] = useState("");
  const collectTodos = (items) => {
    setTodos([...todos, { todo: items, id: Math.random() * 1000 }]);
  };
  // console.log(todos);

  const editFunction = (val, ran, i) => {
    return (ran[i] = val);
  };

  return (
    <div>
      <TodoForm collectItems={collectTodos} inputVal={currVal} />
      {edit ? (
        <input
          type="text"
          value={currVal}
          onChange={(e) => {
            setCurrVal(e.target.value);
            console.log(currVal);
          }}
        />
      ) : null}
      {/* {edit ? (
        <button
          onClick={() => {
            setEditStatus(false);
            setInsert(true);
            // setCurrVal("");
          }}
        >
          Edit
        </button>
      ) : null} */}
      <ul className="adjust">
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span>{todo.todo}</span>
            <div>
              <i
                className="fas fa-edit"
                onClick={() => {
                  setEditStatus(edit ? false : true);
                  setCurrVal(todo.todo);
                  todos[index].todo = currVal;
                }}
              ></i>
              <i
                className="fas fa-trash-alt"
                onClick={() => {
                  setTodos(todos.filter((items, i) => items.id !== todo.id));
                }}
              ></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
