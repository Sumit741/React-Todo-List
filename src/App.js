import React from "react";
import Header from "./components/Header";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
