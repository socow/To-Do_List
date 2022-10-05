import styled from "styled-components";

export const login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const loginForm = styled.form`
  background-color: #ebe4f9;
  border-radius: 5px;
  width: 33%;
  height: 50vh;
`;

export const titie = styled.div`
  text-align: center;
  margin: 35px;
  font-size: 40px;
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
export const email = styled.input`
  height: 30px;
  width: 70%;
`;
export const password = styled.input`
  height: 30px;
  width: 70%;
`;

export const buttonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const loginButton = styled.button`
  height: 30px;
  width: 70%;
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
  height: 30px;
  width: 70%;
  padding: 5px 30px;
  margin: 5px;
  background-color: #9563fb;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
`;
