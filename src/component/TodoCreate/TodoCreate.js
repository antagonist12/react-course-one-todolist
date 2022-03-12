import React, { useState } from "react";
import "./TodoCreate.css";

function TodoCreate(props) {
  //? state untuk mengambil data dari inputan text yang akan ditaruh ke title
  const [getInputTodo, setInputTodo] = useState("");

  //! Function JS untuk Event Form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInputTodo,
    };

    //!  Fungsi untuk push data dari child ke parrent
    props.onCreateTodo(newTodo);
    setInputTodo("");
    // console.log(newTodo);
  };

  const handleInputTodo = (e) => {
    setInputTodo(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        name="text"
        placeholder="Add a todo"
        value={getInputTodo}
        onChange={handleInputTodo}
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
}

export default TodoCreate;
