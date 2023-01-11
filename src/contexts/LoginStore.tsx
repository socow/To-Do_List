import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../apis/login";
import Login from "src/components/Login";
import LoginPage from "src/Pages/LoginPage";

interface LoginProps {
  inputValue: object;
  loginsubmit: any;
  handleChange: any;
  goToSignup: any;
}

export const LoginContext = React.createContext<LoginProps | undefined>(
  undefined
);

export const LoginStore = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const email = inputValue.email;
  const password = inputValue.password;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    e.preventDefault();
  };

  const goToSignup = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/SignUp`);
  };

  const loginsubmit = (e: React.SyntheticEvent) => {
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
      <LoginPage />
      <Login />
    </LoginContext.Provider>
  );
};
