import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "../components/Todo";
import styled from "styled-components";

export default function TodoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate(`/`);
    }
  }, [navigate]);

  return (
    <TodoWrapper>
      <Todo />
    </TodoWrapper>
  );
}

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
`;
