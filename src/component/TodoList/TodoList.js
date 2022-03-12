import React, { useState } from "react";
import TodoCreate from "../TodoCreate/TodoCreate";
import "./TodoList.css";

function TodoList({ dataTodos, removeTodo, updateTodo }) {
  const [getEditTodo, setEditTodo] = useState({
    id: null,
    title: "",
  });

  const submitUpdate = (value) => {
    updateTodo(getEditTodo.id, value);
    setEditTodo({
      id: null,
      value: "",
    });
  };

  if (getEditTodo.id) {
    return <TodoCreate getEditTodo={getEditTodo} onCreateTodo={submitUpdate} />;
  }

  return (
    <ul>
      {/* propsnya di looping dengan map */}
      {dataTodos.map((todos) => {
        return (
          <li key={todos.id}>
            {todos.title}
            <button onClick={() => removeTodo(todos.id)}> Delete Todo</button>
            <button
              onClick={() => setEditTodo({ id: todos.id, title: todos.title })}
            >
              Update Todo
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
