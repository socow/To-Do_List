import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "./TodoList.js";
import { API } from "../../config.js";
import * as S from "./Todo.Style.js";

export default function Todo() {
  const navigate = useNavigate();
  const [todoData, setTodoData] = useState();
  const [todoValue, setTodoValue] = useState({ todo: "" });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate(`/`);
    }
  });
  const handleChange = (e) => {
    const { value } = e.target;
    setTodoValue({ ...todoValue, todo: value });
    e.preventDefault();
  };

  const getTodo = () => {
    fetch(API.Todo, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTodoData(res);
      });
  };

  useEffect(() => {
    getTodo();
  }, []);
  const createTodoFunction = () => {
    fetch(API.Todo, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": " Application/json",
      },
      body: JSON.stringify({
        todo: todoValue.todo,
      }),
    });
    setTimeout(() => {
      getTodo();
    }, 200);

    setTodoValue({ todo: "" });
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
