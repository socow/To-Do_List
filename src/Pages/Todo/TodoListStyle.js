import styled from "styled-components";

export const todoList = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  margin-top: 5px;
`;

export const checkBox = styled.div`
  width: 20px;
  height: 16px;
  background-color: ${(props) => (props.check ? " #7dc9fc" : "white")};
  border-radius: 50px;
  border: 1px solid lightgray;
  cursor: pointer;
  text-align: center;
`;

export const todo = styled.div`
  width: 80%;
  margin-left: 8px;
  font-size: 16px;
  font-weight: 600;
`;

export const todoInput = styled.input`
  width: 80%;
`;

export const todoModify = styled.button`
  width: 100px;
  height: 25px;
  background-color: #ffff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
export const delBtn = styled.button`
  width: 60px;
  height: 25px;
  background-color: #ffff;
  color: red;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
