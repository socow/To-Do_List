import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./Pages/SignupPage.jsx";
import { LoginStore } from "./contexts/LoginStore";
import { TodoStore } from "./contexts/TodoStore";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginStore />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
