import React, { useEffect, useState } from "react";
import { loginRequest } from "../../api/login";
import { useNavigate } from "react-router-dom";
import * as S from "./Login.Style.js";

export default function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const email = inputValue.email;
  const password = inputValue.password;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`/todo`);
    }
  }, [navigate]);

  const goToSignup = (e) => {
    e.preventDefault();
    navigate(`/SignUp`);
  };

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
    <S.login>
      <S.loginForm onSubmit={loginsubmit}>
        <S.titie>로그인</S.titie>
        <S.emailWrap>
          <S.email
            type="email"
            name="email"
            placeholder="이메일"
            value={inputValue.email}
            onChange={handleChange}
          />
        </S.emailWrap>
        <S.passwordWrap>
          <S.password
            type="password"
            name="password"
            placeholder="비밀번호"
            value={inputValue.password}
            onChange={handleChange}
          />
        </S.passwordWrap>
        <S.buttonWrap>
          <S.loginButton
            disabled={
              !(
                inputValue.email.includes("@") && inputValue.password.length > 7
              )
            }
          >
            로그인
          </S.loginButton>
          <S.SignupButton onClick={goToSignup}>회원가입</S.SignupButton>
        </S.buttonWrap>
      </S.loginForm>
    </S.login>
  );
}
