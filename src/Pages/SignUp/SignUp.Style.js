import styled from "styled-components";

export const signup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const signupForm = styled.form`
  width: 33%;
  height: 50vh;
  border-radius: 5px;
  background-color: #ffff;
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
  background-color: #7dc9fc;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
`;
export const SignupButton = styled.button`
  height: 30px;
  width: 70%;
  padding: 5px 30px;
  margin: 5px;
  background-color: #7dc9fc;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
  }
`;
