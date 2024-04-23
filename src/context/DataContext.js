import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState();
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    try {
      const employeesStorage = localStorage.getItem("employees_bd");

      if (employeesStorage) {
        const hasEmployee = JSON.parse(employeesStorage);

        if (Array.isArray(hasEmployee) && hasEmployee.length) {
          setFormData(hasEmployee[0]);
          setEmployees(hasEmployee);
        }
      }
    } catch (error) {
      console.error("Error loading employee session:", error);
    }
  }, []);

  const generateRandomID = () => {
    return Math.floor(Math.random() * 1000000);
  };
  const addEmployee = (
    fullName,
    email,
    position,
    department,
    admissionDate,
    salaryLevel,
    hasTransportationVoucher,
    transportationVoucherType
  ) => {
    try {
      let employeesStorage = JSON.parse(localStorage.getItem("employees_bd"));

      if (!Array.isArray(employeesStorage)) {
        employeesStorage = [];
      }

      const newEmployee = {
        ID: generateRandomID(),
        fullName,
        email,
        position,
        department,
        admissionDate,
        salaryLevel,
        hasTransportationVoucher,
        transportationVoucherType,
      };

      const updatedEmployees = [...employees, newEmployee];

      localStorage.setItem("employees_bd", JSON.stringify(updatedEmployees));
      setEmployees(updatedEmployees);

      if (!formData) {
        setFormData(updatedEmployees[0]);
      }

      return null;
    } catch (error) {
      console.error("Error during adding employee: ", error);
      return error.message;
    }
  };

  const getEmployeesList = () => {
    try {
      return employees;
    } catch (error) {
      console.error("Error getting employees list:", error);
      return [];
    }
  };

  const searchEmployees = (searchTerm) => {
    try {
      if (!searchTerm) {
        setFilteredEmployees([]);
        return;
      }

      const results = employees.filter((employee) => {
        if (!employee || typeof employee !== "object") return false;
        if (!employee.fullName || typeof employee.fullName !== "string")
          return false;

        const searchTermLower = searchTerm.toLowerCase();
        const idMatch =
          employee.ID &&
          employee.ID.toString().toLowerCase().includes(searchTermLower);
        const nameMatch = employee.fullName
          .toLowerCase()
          .includes(searchTermLower);

        return idMatch || nameMatch;
      });

      setFilteredEmployees(results);
    } catch (error) {
      console.error("Error searching employees:", error);
      return [];
    }
  };

  return (
    <DataContext.Provider
      value={{
        employees,
        formData,
        addEmployee,
        getEmployeesList,
        searchEmployees,
        filteredEmployees,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
