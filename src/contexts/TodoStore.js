import React, { useState } from "react";
import { todoRequest, createTodoRequest } from "../apis/todo";
import Todo from "../components/Todo";
import TodoPage from "../Pages/TodoPage";
export const TodoContext = React.createContext();

export const TodoStore = () => {
  const [todoData, setTodoData] = useState();
  const [todoValue, setTodoValue] = useState("");

  const getTodo = () => todoRequest(setTodoData);

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoValue(value);
    e.preventDefault();
  };

  const createTodoFunction = () => {
    createTodoRequest(todoValue, setTodoValue, todoData, setTodoData);
  };

  return (
    <TodoContext.Provider
      value={{
        todoData,
        handleChange,
        createTodoFunction,
        todoValue,
        getTodo,
      }}
    >
      <TodoPage>
        <Todo />
      </TodoPage>
    </TodoContext.Provider>
  );
};
