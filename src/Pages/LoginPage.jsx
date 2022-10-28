import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import styled from "styled-components";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`/todo`);
    }
  }, [navigate]);
  const goToSignup = (e) => {
    e.preventDefault();
    navigate(`/SignUp`);
  };
  return (
    <LoginWrap>
      <Login goToSignup={goToSignup} />
    </LoginWrap>
  );
}

export const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.gray};
`;
