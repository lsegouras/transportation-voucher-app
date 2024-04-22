import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type, isLeaveButton = false }) => {
  return (
    <C.Button type={Type} onClick={onClick} $isLeaveButton={isLeaveButton}>
      {Text}
    </C.Button>
  );
};

export default Button;
