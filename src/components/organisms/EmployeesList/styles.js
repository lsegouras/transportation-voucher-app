import styled from "styled-components";

export const EmployeeListContainer = styled.div`
  overflow-x: auto;
  max-width: 100%;
`;

export const EmployeeList = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const ListHeader = styled.div`
  display: flex;
  gap: 70px;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
  justify-content: center;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  padding: 10px 0;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const ItemContent = styled.div`
  flex: 1;
`;
