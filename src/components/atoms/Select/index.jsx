import React from "react";
import * as C from "./styles";

const Select = ({ options, value, onChange, placeholder }) => {
  return (
    <C.Select value={value} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </C.Select>
  );
};

export default Select;
