import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #676767;
  margin-top: 30px;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const labelError = styled.label`
  font-size: 14px;
  color: #ff234f;
  font-weight: 500;
  margin-top: 8px;
`;

export const labelHasTransportation = styled.label`
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
  }
`;
