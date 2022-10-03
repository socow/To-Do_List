import styled from "styled-components";

export const login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const loginForm = styled.form`
  border: 2px solid black;
  background-color: #ebe4f9;
`;

export const titie = styled.div`
  text-align: center;
  margin: 10px;
  font-size: 30px;
`;

export const emailWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const passwordWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;
export const email = styled.input``;
export const password = styled.input``;

export const buttonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const loginButton = styled.button`
  padding: 5px 36px;
  margin: 5px;
  background-color: #9563fb;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  &:disabled {
    opacity: 0.5;
  }
`;
export const SignupButton = styled.button`
  padding: 5px 30px;
  margin: 5px;
  background-color: #9563fb;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
`;
