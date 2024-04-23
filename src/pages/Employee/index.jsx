import React, { useState } from "react";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import Select from "../../components/atoms/Select";
import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import useDataContext from "./../../hooks/useDataContext";

const Employees = () => {
  const navigate = useNavigate();
  const { addEmployee } = useDataContext();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [salaryLevel, setSalaryLevel] = useState("");
  const [hasTransportationVoucher, setHasTransportationVoucher] =
    useState(false);
  const [transportationVoucherType, setTransportationVoucherType] =
    useState("");
  const [error, setError] = useState("");

  const handleAddEmployee = async () => {
    if (
      !name |
      !lastName |
      !email |
      !position |
      !department |
      !admissionDate |
      !salaryLevel |
      (hasTransportationVoucher && !transportationVoucherType)
    ) {
      setError("Fill in all fields!");
      return;
    }

    const fullName = `${name} ${lastName}`;

    if (!hasTransportationVoucher) {
      setTransportationVoucherType("");
    }

    const res = addEmployee(
      fullName,
      email,
      position,
      department,
      admissionDate,
      salaryLevel,
      hasTransportationVoucher,
      hasTransportationVoucher ? transportationVoucherType : ""
    );

    if (res) {
      setError(res);
      return;
    }

    const newEmployee = {
      fullName,
      email,
      position,
      department,
      admissionDate,
      salaryLevel,
      hasTransportationVoucher,
      transportationVoucherType: hasTransportationVoucher
        ? transportationVoucherType
        : "",
    };
    console.log(newEmployee);

    alert("Employee successfully registered!!");
    console.log();
    navigate("/search");
  };

  return (
    <C.Container>
      <C.Title>Employees</C.Title>
      <C.Content>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Enter your Last Name"
          name="lastName"
          value={lastName}
          onChange={(e) => [setLastName(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Position"
          name="position"
          value={position}
          onChange={(e) => [setPosition(e.target.value), setError("")]}
        />
        <Select
          options={[
            "Information Technology",
            "Human Resources",
            "Marketing",
            "Sales",
            "Finance",
            "Administrative",
            "Engineering",
            "Logistics",
            "Legal",
          ]}
          placeholder="Department"
          name="department"
          value={department}
          onChange={(e) => {
            const selectedDepartment = e.target.value;
            setDepartment(selectedDepartment);
            console.log("department: ", selectedDepartment);
            setError("");
          }}
        />
        <Input
          type="date"
          placeholder="Admission Date"
          name="admissionDate"
          value={admissionDate}
          onChange={(e) => [setAdmissionDate(e.target.value), setError("")]}
        />
        <Select
          options={["Junior", "Middle", "Senior"]}
          placeholder="Salary Level"
          name="salaryLevel"
          value={salaryLevel}
          onChange={(e) => [setSalaryLevel(e.target.value), setError("")]}
        />
        <C.labelHasTransportation>
          Has Transportation Voucher?
          <input
            type="checkbox"
            name="hasTransportationVoucher"
            checked={hasTransportationVoucher}
            onChange={(e) => {
              const checked = e.target.checked;
              setHasTransportationVoucher(checked);
              setError("");
            }}
          />
        </C.labelHasTransportation>
        {hasTransportationVoucher && (
          <Select
            options={["Bilhete Único", "Card"]}
            placeholder="Transportation Voucher Type"
            name="transportationVoucherType"
            value={transportationVoucherType}
            onChange={(e) => {
              const selectedVoucherType = e.target.value;
              setTransportationVoucherType(
                selectedVoucherType === "true" ? true : selectedVoucherType
              );
              console.log("type: ", selectedVoucherType);
              setError("");
            }}
          />
        )}
        <C.labelError>{error}</C.labelError>
        <Button Text="Send" onClick={handleAddEmployee} />
        <Link to="/home">
          <Button Text="Back to Home" />
        </Link>
      </C.Content>
    </C.Container>
  );
};

export default Employees;
