import React, { useState } from "react";
import { updateTodoRequest, deleteTodoRequsest } from "../apis/todo";
import styled from "styled-components";

export default function TodoList({ id, isCompleted, todo, getTodo }) {
  const [check, setcheck] = useState(isCompleted);
  const [isUpdata, setIsUpdata] = useState(false);
  const [todoValue, setTodoValue] = useState("");
  const [before, setBefore] = useState(isCompleted);

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoValue({ ...todoValue, todo: value });
    e.preventDefault();
  };

  const modifyContent = () => {
    setIsUpdata(true);
    setTodoValue({ todo: todo });
    setBefore(check);
  };

  const deleteContent = () => {
    setIsUpdata(false);
    setcheck(before);
  };

  const updateRequsest = () => {
    updateTodoRequest(setIsUpdata, id, todo, { isCompleted: check });
  };

  const deleteRequsest = () => {
    deleteTodoRequsest(id);
    setTimeout(() => {
      getTodo();
    }, 200);
  };

  return (
    <>
      <TodoListWrap>
        {!isUpdata ? (
          <CheckBox check={check} />
        ) : (
          <CheckBox check={check} onClick={() => setcheck((prev) => !prev)} />
        )}

        {!isUpdata ? (
          <todo check={check}>{todo}</todo>
        ) : (
          <todoInput value={todoValue.todo} onChange={handleChange} />
        )}
        {!isUpdata ? (
          <>
            <todoModify onClick={modifyContent}>수정</todoModify>
            <delBtn onClick={deleteRequsest}>삭제</delBtn>
          </>
        ) : (
          <>
            <todoModify onClick={updateRequsest}>수정완료</todoModify>
            <DelBtn onClick={deleteContent}>취소</DelBtn>
          </>
        )}
      </TodoListWrap>
    </>
  );
}

export const TodoListWrap = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  margin-top: 5px;
`;

export const CheckBox = styled.div`
  width: 20px;
  height: 16px;
  background-color: ${(props) => (props.check ? " #7dc9fc" : "white")};
  border-radius: 50px;
  border: 1px solid lightgray;
  cursor: pointer;
  text-align: center;
`;

export const todo = styled.p`
  width: 80%;
  margin-left: 8px;
  font-size: 16px;
  font-weight: ${(props) => (props.check ? " 500" : "600")};
  text-decoration: ${(props) => (props.check ? " line-through" : "none")};
`;

export const todoInput = styled.input`
  width: 80%;
`;

export const todoModify = styled.button`
  width: 100px;
  height: 25px;
  background-color: ${({ theme }) => theme.white};
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
export const DelBtn = styled.button`
  width: 60px;
  height: 25px;
  background-color: ${({ theme }) => theme.white};
  color: red;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
