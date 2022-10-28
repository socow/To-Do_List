import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "./TodoList.js";
import { todoRequest, createTodoRequest } from "../../api/todo.js";
import * as S from "./Todo.Style.js";

export default function Todo() {
  const navigate = useNavigate();
  const [todoData, setTodoData] = useState();
  const [todoValue, setTodoValue] = useState({ todo: "" });
  const todo = todoValue.todo;

  const getTodo = () => todoRequest(setTodoData);

  useEffect(() => {
    getTodo();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate(`/`);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoValue({ ...todoValue, todo: value });
    e.preventDefault();
  };

  const createTodoFunction = () => {
    createTodoRequest(todo, setTodoValue);
    setTimeout(() => {
      getTodo();
    }, 200);
  };

  return (
    <S.todoWrapper>
      <S.todoTitle>To-Do List</S.todoTitle>
      <S.postInputWrapper>
        <S.postInput
          name="todo"
          value={todoValue.todo}
          onChange={handleChange}
        />
        <S.postButton onClick={createTodoFunction}>작성</S.postButton>
      </S.postInputWrapper>
      <S.todoBox>
        <S.todoListWrapper>
          {todoData?.map(({ id, isCompleted, todo }) => (
            <TodoList
              key={id}
              id={id}
              isCompleted={isCompleted}
              todo={todo}
              getTodo={getTodo}
            />
          ))}
        </S.todoListWrapper>
      </S.todoBox>
    </S.todoWrapper>
  );
}
