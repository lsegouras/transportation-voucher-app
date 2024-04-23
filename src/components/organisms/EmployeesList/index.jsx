import React from "react";
import useDataContext from "./../../../hooks/useDataContext";
import * as C from "./styles";

const EmployeeList = () => {
  const { filteredEmployees, getEmployeesList } = useDataContext();
  const employees = filteredEmployees.length
    ? filteredEmployees
    : getEmployeesList();

  return (
    <C.EmployeeListContainer>
      <C.EmployeeList>
        <C.ListHeader>
          <C.ListItem>ID</C.ListItem>
          <C.ListItem>Name</C.ListItem>
          <C.ListItem>Email</C.ListItem>
          <C.ListItem>Department</C.ListItem>
          <C.ListItem>Position</C.ListItem>
          <C.ListItem>Admission Date</C.ListItem>
          <C.ListItem>Salary Level</C.ListItem>
          <C.ListItem>Has Transportation Voucher</C.ListItem>
          <C.ListItem>Voucher Type</C.ListItem>
        </C.ListHeader>
        {employees.map((employee) => (
          <C.ListItem key={employee.ID}>
            <C.ItemContent>{employee.ID}</C.ItemContent>
            <C.ItemContent>{employee.fullName}</C.ItemContent>
            <C.ItemContent>{employee.email}</C.ItemContent>
            <C.ItemContent>{employee.department}</C.ItemContent>
            <C.ItemContent>{employee.position}</C.ItemContent>
            <C.ItemContent>{employee.admissionDate}</C.ItemContent>
            <C.ItemContent>{employee.salaryLevel}</C.ItemContent>
            <C.ItemContent>
              {employee.hasTransportationVoucher ? "Yes" : "No"}
            </C.ItemContent>
            <C.ItemContent>
              {employee.hasTransportationVoucher &&
                employee.transportationVoucherType}
            </C.ItemContent>
          </C.ListItem>
        ))}
      </C.EmployeeList>
    </C.EmployeeListContainer>
  );
};

export default EmployeeList;
