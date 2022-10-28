import { API } from "./api";

export const loginRequest = (email, password) => {
  fetch(API.Login, {
    method: "POST",
    headers: { "Content-Type": " application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        alert("로그인이 완료되었습니다");
        window.location.replace("/todo");
      } else {
        alert("아이디 또는 비밀번호를 확인해주세요");
      }
    });
};
