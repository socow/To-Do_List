import React, { useState } from "react";
import * as S from "./TodoListStyle";
import { updateTodoRequest, deleteTodoRequsest } from "../../api/todo";

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
            <S.delBtn onClick={deleteRequsest}>삭제</S.delBtn>
          </>
        ) : (
          <>
            <S.todoModify onClick={updateRequsest}>수정완료</S.todoModify>
            <S.delBtn onClick={deleteContent}>취소</S.delBtn>
          </>
        )}
      </S.todoList>
    </>
  );
}
