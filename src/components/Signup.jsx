import React, { useState } from "react";
import { signupRequest } from "../apis/signup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const email = inputValue.email;
  const password = inputValue.password;
  const navigate = useNavigate();

  const goToLogin = (e) => {
    e.preventDefault();
    navigate(`/`);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    e.preventDefault();
  };

  const signupSubmit = (e) => {
    e.preventDefault();
    signupRequest(email, password);
  };

  return (
    <SignupForm onSubmit={signupSubmit}>
      <Titie>회원가입</Titie>
      <EmailWrap>
        <Email
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={inputValue.email}
          onChange={handleChange}
        />
      </EmailWrap>
      <PasswordWrap>
        <Password
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={inputValue.password}
          onChange={handleChange}
        />
      </PasswordWrap>
      <ButtonWrap>
        <SignupButton
          disabled={
            !(inputValue.email.includes("@") && inputValue.password.length > 7)
          }
        >
          회원가입
        </SignupButton>
        <LoginButton onClick={goToLogin}>로그인</LoginButton>
      </ButtonWrap>
    </SignupForm>
  );
}

export const SignupForm = styled.form`
  width: 33%;
  height: 50vh;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.white};
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

  &:disabled {
    opacity: 0.5;
  }
`;
