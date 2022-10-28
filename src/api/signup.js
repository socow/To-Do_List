import { API } from "./api";

export const signupRequest = (email, password) => {
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
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "동일한 이메일이 이미 존재합니다.") {
        return alert(data.message);
      }
      localStorage.setItem("token", data.access_token);
      alert("회원가입이 완료되었습니다");
      window.location.replace(`/Todo`);
    });
};
