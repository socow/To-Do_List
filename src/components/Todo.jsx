import React, { useEffect, useState } from "react";
import TodoList from "./TodoList.jsx";
import { todoRequest, createTodoRequest } from "../apis/todo";
import styled from "styled-components";

export default function Todo() {
  const [todoData, setTodoData] = useState();
  const [todoValue, setTodoValue] = useState({ todo: "" });
  const todo = todoValue.todo;

  const getTodo = () => todoRequest(setTodoData);

  useEffect(() => {
    getTodo();
  }, []);

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
    <>
      <TodoTitle>To-Do List</TodoTitle>
      <PostInputWrapper>
        <PostInput name="todo" value={todoValue.todo} onChange={handleChange} />
        <PostButton onClick={createTodoFunction}>작성</PostButton>
      </PostInputWrapper>
      <TodoBox>
        <TodoListWrapper>
          {todoData?.map(({ id, isCompleted, todo }) => (
            <TodoList
              key={id}
              id={id}
              isCompleted={isCompleted}
              todo={todo}
              getTodo={getTodo}
            />
          ))}
        </TodoListWrapper>
      </TodoBox>
    </>
  );
}

export const TodoTitle = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const TodoBox = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
`;

export const PostInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  margin: 10px;
`;
export const PostInput = styled.input`
  width: 70%;
  height: 30px;
`;

export const PostButton = styled.button`
  width: 20%;
  height: 30px;
  margin-left: 32px;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 3px;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.deepBlue};
  }
`;

export const TodoListWrapper = styled.ul`
  width: 400px;
  margin: 10px;
`;
