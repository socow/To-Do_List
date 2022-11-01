import React from "react";
import SignUp from "../components/Signup";
import styled from "styled-components";

export default function SignUpPage() {
  return (
    <SignupWrap>
      <SignUp />
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
