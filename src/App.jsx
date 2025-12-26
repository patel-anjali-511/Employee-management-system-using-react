import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

 
  const addEmployee = (employee) => {
    if (editEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editEmployee.id ? employee : emp
        )
      );
      setEditEmployee(null);
    } else {
      setEmployees([...employees, employee]);
    }
  };

 
  //for delete
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  //for edit
  const editEmp = (employee) => {
    setEditEmployee(employee);
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <EmployeeForm
        addEmployee={addEmployee}
        editEmployee={editEmployee}
      />

      <EmployeeTable
        employees={employees}
        deleteEmployee={deleteEmployee}
        editEmp={editEmp}
      />
    </div>
  );
}

export default App;
