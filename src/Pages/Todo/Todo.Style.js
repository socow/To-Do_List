import styled from "styled-components";

export const todoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
`;

export const todoTitle = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const todoBox = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
`;

export const postInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  margin: 10px;
`;
export const postInput = styled.input`
  width: 70%;
  height: 30px;
`;

export const postButton = styled.button`
  width: 20%;
  height: 30px;
  margin-left: 32px;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 3px;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.deepBlue};
  }
`;

export const todoListWrapper = styled.ul`
  width: 400px;
  margin: 10px;
`;
