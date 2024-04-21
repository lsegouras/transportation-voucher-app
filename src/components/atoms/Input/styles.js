import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #ff5f6d;
  }
`;
