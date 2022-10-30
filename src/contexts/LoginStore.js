import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../apis/login";
import Login from "../components/Login";
import LoginPage from "../Pages/LoginPage";
export const LoginContext = React.createContext();

export const LoginStore = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const email = inputValue.email;
  const password = inputValue.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    e.preventDefault();
  };

  const goToSignup = (e) => {
    e.preventDefault();
    navigate(`/SignUp`);
  };

  const loginsubmit = (e) => {
    e.preventDefault();
    loginRequest(email, password);
  };

  return (
    <LoginContext.Provider
      value={{
        inputValue,
        loginsubmit,
        handleChange,
        goToSignup,
      }}
    >
      <LoginPage>
        <Login />
      </LoginPage>
    </LoginContext.Provider>
  );
};
