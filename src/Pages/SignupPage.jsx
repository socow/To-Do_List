import { useNavigate } from "react-router-dom";
import SignUp from "../components/Signup";
import styled from "styled-components";

export default function SignUpPage() {
  const navigate = useNavigate();

  const goToLogin = (e) => {
    e.preventDefault();
    navigate(`/`);
  };
  return (
    <SignupWrap>
      <SignUp goToLogin={goToLogin} />
    </SignupWrap>
  );
}

export const SignupWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.gray};
`;
