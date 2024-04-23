import React from "react";
import SearchBar from "../../components/molecules/SearchBar/index";
import EmployeeList from "../../components/organisms/EmployeesList/index";
import Button from "../../components/atoms/Button";
import { Link } from "react-router-dom";
import * as C from "./styles";

const Search = () => {
  return (
    <C.Container>
      <C.Title>Employees List</C.Title>
      <SearchBar />
      <EmployeeList />
      <Link to="/employees">
        <Button Text="Back to Employees" />
      </Link>
    </C.Container>
  );
};

export default Search;
