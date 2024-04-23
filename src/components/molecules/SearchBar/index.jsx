// SearchBar.jsx
import React from "react";
import * as C from "./styles";
import { Input } from "./../../atoms/Input/styles";
import useDataContext from "./../../../hooks/useDataContext";

const SearchBar = () => {
  const { searchEmployees } = useDataContext();
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    searchEmployees(term);
  };

  return (
    <C.SearchBar>
      <Input
        type="text"
        placeholder="Search employees"
        value={searchTerm}
        onChange={handleSearch}
      />
    </C.SearchBar>
  );
};

export default SearchBar;
