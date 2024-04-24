import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #676767;
  margin-bottom: 50px;
`;

export const ChartContainer = styled.div`
  width: 80%;
  max-width: 800px;
`;
