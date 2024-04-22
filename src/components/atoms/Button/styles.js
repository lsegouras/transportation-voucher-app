import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #ff5f6d;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff434f;
  }

  ${({ isLeaveButton }) =>
    isLeaveButton &&
    `
    background-color: #ccc;
    color: black;
  `}
`;
