import React, { useState } from "react";
import { API } from "../../config.js";
import * as S from "./TodoListStyle";

export default function TodoList({ id, isCompleted, todo, getTodo }) {
  const [check, setcheck] = useState(isCompleted);
  const [isUpdata, setIsUpdata] = useState(false);
  const [todoValue, setTodoValue] = useState({ todo: "" });
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
  const updateTodo = () => {
    setIsUpdata(false);
    fetch(`${API.Todo}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": " Application/json",
      },
      body: JSON.stringify({
        todo: todoValue.todo,
        isCompleted: check,
      }),
    });
    setTimeout(() => {
      getTodo();
    }, 200);
  };

  const deleteTodo = () => {
    fetch(`${API.Todo}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setTimeout(() => {
      getTodo();
    }, 200);
  };

  return (
    <>
      <S.todoList>
        {!isUpdata ? (
          <S.checkBox check={check} />
        ) : (
          <S.checkBox check={check} onClick={() => setcheck((prev) => !prev)} />
        )}

        {!isUpdata ? (
          <S.todo check={check}>{todo}</S.todo>
        ) : (
          <S.todoInput value={todoValue.todo} onChange={handleChange} />
        )}
        {!isUpdata ? (
          <>
            <S.todoModify onClick={modifyContent}>수정</S.todoModify>
            <S.delBtn onClick={deleteTodo}>삭제</S.delBtn>
          </>
        ) : (
          <>
            <S.todoModify onClick={updateTodo}>수정완료</S.todoModify>
            <S.delBtn onClick={deleteContent}>취소</S.delBtn>
          </>
        )}
      </S.todoList>
    </>
  );
}
