import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type }) => {
  return <C.Button type={Type} onClick={onClick} text={Text}></C.Button>;
};

export default Button;
