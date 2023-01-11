import React, { useCallback, useState } from "react";
import { todoRequest, createTodoRequest } from "../apis/todo";
import Todo from "../components/Todo";
import TodoPage from "../Pages/TodoPage";

interface Todos {
  todoData: any;
  handleChange: any;
  createTodoFunction: any;
  todoValue: string;
  getTodo: any;
}
export const TodoContext = React.createContext<Todos | undefined>(undefined);

export const TodoStore = () => {
  const [todoData, setTodoData] = useState();
  const [todoValue, setTodoValue] = useState("");

  const getTodo = useCallback(() => todoRequest(setTodoData), [setTodoData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <TodoPage />
      <Todo />
    </TodoContext.Provider>
  );
};
