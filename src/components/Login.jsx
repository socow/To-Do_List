import React, { useState } from "react";
import { loginRequest } from "../apis/login";
import styled from "styled-components";

export default function Login(goToSignup) {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const email = inputValue.email;
  const password = inputValue.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    e.preventDefault();
  };

  const loginsubmit = (e) => {
    e.preventDefault();
    loginRequest(email, password);
  };
  return (
    <LoginForm onSubmit={loginsubmit}>
      <Titie>로그인</Titie>
      <EmailWrap>
        <Email
          type="email"
          name="email"
          placeholder="이메일"
          value={inputValue.email}
          onChange={handleChange}
        />
      </EmailWrap>
      <PasswordWrap>
        <Password
          type="password"
          name="password"
          placeholder="비밀번호"
          value={inputValue.password}
          onChange={handleChange}
        />
      </PasswordWrap>
      <ButtonWrap>
        <LoginButton
          disabled={
            !(inputValue.email.includes("@") && inputValue.password.length > 7)
          }
        >
          로그인
        </LoginButton>
        <SignupButton onClick={goToSignup}>회원가입</SignupButton>
      </ButtonWrap>
    </LoginForm>
  );
}

export const LoginForm = styled.form`
  width: 33%;
  height: 50vh;
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
`;

export const Titie = styled.div`
  text-align: center;
  margin: 35px;
  font-size: 40px;
`;

export const EmailWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const PasswordWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;
export const Email = styled.input`
  height: 30px;
  width: 70%;
`;
export const Password = styled.input`
  height: 30px;
  width: 70%;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoginButton = styled.button`
  height: 30px;
  width: 70%;
  padding: 5px 36px;
  margin: 5px;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
  }
`;
export const SignupButton = styled.button`
  height: 30px;
  width: 70%;
  padding: 5px 30px;
  margin: 5px;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
`;
