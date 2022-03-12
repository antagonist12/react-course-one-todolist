import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import TodoCreate from "../TodoCreate/TodoCreate";
import "./Todo.css";

function Todo() {
  //? State
  //? getTodo => trigger fungsi untuk mendapatkan data baru pada state scr realtime
  //? setTodo => untuk memberikan nilai baru / mengubah data ke data state scr realtime

  const [getTodos, setTodos] = useState([]);

  const eventCreateTodo = (todo) => {
    // if (!todo.text || /^\s*$/.test(todo.text)) {
    //   return;
    // }

    const newestTodo = [todo, ...getTodos];
    setTodos(newestTodo);
    // setTodos(getTodos.concat(todo));
    // console.log(newestTodo);
  };

  const updateTodo = (todoId, newTitle) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newTitle : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...getTodos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  return (
    <div>
      <h1 className="Todo">Todo</h1>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList
        dataTodos={getTodos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default Todo;
