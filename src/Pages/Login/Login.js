import React, { useState } from "react";
import * as S from "./Login.Style.js";
import { useNavigate } from "react-router-dom";
import { API } from "../../config.js";
export default function Login() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    e.preventDefault();
  };

  const navigate = useNavigate();
  const goToSignup = (e) => {
    e.preventDefault();
    navigate(`/SignUp`);
  };

  const handleRequest = (e) => {
    e.preventDefault();
    fetch(API.Login, {
      method: "POST",
      headers: { "Content-Type": " application/json" },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          alert("로그인이 완료되었습니다");
          navigate(`/Todo`);
        } else {
          alert("아이디 또는 비밀번호를 확인해주세요");
        }
      });
  };
  return (
    <S.login>
      <S.loginForm onSubmit={handleRequest}>
        <S.titie>Pre-On-boarding</S.titie>
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
