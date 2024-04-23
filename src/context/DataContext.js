import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState();

  useEffect(() => {
    try {
      const employeesStorage = localStorage.getItem("employees_bd");

      if (employeesStorage) {
        const hasEmployee = JSON.parse(employeesStorage);

        if (Array.isArray(hasEmployee) && hasEmployee.length) {
          setFormData(hasEmployee[0]);
        }
      }
    } catch (error) {
      console.error("Error loading employee session:", error);
    }
  }, []);

  const addEmployee = (
    fullName,
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
        fullName,
        position,
        department,
        admissionDate,
        salaryLevel,
        hasTransportationVoucher,
        transportationVoucherType,
      };

      const updatedEmployees = [...employeesStorage, newEmployee];

      localStorage.setItem("employees_bd", JSON.stringify(updatedEmployees));

      return null;
    } catch (error) {
      console.error("Error during adding employee: ", error);
      return error.message;
    }
  };

  return (
    <DataContext.Provider value={{ formData, addEmployee }}>
      {children}
    </DataContext.Provider>
  );
};
