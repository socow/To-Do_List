import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupRequest } from "../../api/signup.js";
import * as S from "./SignUp.Style.js";

export default function SignUp() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const email = inputValue.email;
  const password = inputValue.password;

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
    <S.signup>
      <S.signupForm onSubmit={signupSubmit}>
        <S.titie>회원가입</S.titie>
        <S.emailWrap>
          <S.email
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            value={inputValue.email}
            onChange={handleChange}
          />
        </S.emailWrap>
        <S.passwordWrap>
          <S.password
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={inputValue.password}
            onChange={handleChange}
          />
        </S.passwordWrap>
        <S.buttonWrap>
          <S.SignupButton
            disabled={
              !(
                inputValue.email.includes("@") && inputValue.password.length > 7
              )
            }
          >
            회원가입
          </S.SignupButton>
          <S.loginButton onClick={goToLogin}>로그인</S.loginButton>
        </S.buttonWrap>
      </S.signupForm>
    </S.signup>
  );
}
