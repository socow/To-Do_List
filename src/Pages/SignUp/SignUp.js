import React, { useState } from "react";
import * as S from "./SignUp.Style.js";
import { useNavigate } from "react-router-dom";
import { API } from "../../config.js";

export default function SignUp() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

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

  const handleSubmit = (e) => {
    const { email, password } = inputValue;
    console.log(email);
    e.preventDefault();
    if (email === "" && password === "") {
      return alert("필수 입력 항목입니다.");
    } else if (!email.includes("@")) {
      return alert("이메일을 확인해주세요");
    } else if (password.length < 8) {
      return alert("비밀번호를 확인해주세요");
    }

    fetch(API.Signup, {
      method: "POST",
      headers: { "Content-Type": " application/json" },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "동일한 이메일이 이미 존재합니다.") {
          return alert(data.message);
        }
        localStorage.setItem("token", data.access_token);
        alert("회원가입이 완료되었습니다");
        navigate(`/`);
      });
  };

  return (
    <S.signup>
      <S.signupForm onSubmit={handleSubmit}>
        <S.titie>Pre-On-boarding</S.titie>
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
