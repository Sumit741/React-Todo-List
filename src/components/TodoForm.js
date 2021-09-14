import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      props.collectItems(input);
    }

    setInput("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          onChange={changeHandler}
          ref={inputRef}
        />
        <button className="todo-button">Add todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
