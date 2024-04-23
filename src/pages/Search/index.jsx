import React from "react";
import SearchBar from "../../components/molecules/SearchBar/index";
import EmployeeList from "../../components/organisms/EmployeesList/index";
import Button from "../../components/atoms/Button";
import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";

const Search = () => {
  const navigate = useNavigate();

  const handleNavigateToEmployees = () => {
    navigate("/employees");
  };
  return (
    <C.Container>
      <C.Title>Employees List</C.Title>
      <SearchBar />
      <EmployeeList />
      <Button Text="Add New Employee" onClick={handleNavigateToEmployees} />
      <Link to="/home">
        <Button Text="Back to Home" />
      </Link>
    </C.Container>
  );
};

export default Search;
