import React, { useState, useEffect } from "react";


const EmployeeForm = ({ addEmployee, editEmployee }) => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    jobDescription: "",
    jobRole: "",
  });



  useEffect(() => {
    if (editEmployee) {
      setEmployee(editEmployee);
    }
  }, [editEmployee]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee.firstName || !employee.lastName) {
      alert("Please fill required fields");
      return;
    }



    addEmployee({
      ...employee,
      id: editEmployee ? employee.id : Date.now(),
    });

    

    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      jobDescription: "",
      jobRole: "",
    });
  };



  return (
    <form onSubmit={handleSubmit}>
      <h2>{editEmployee ? "Edit Employee" : "Add Employee"}</h2>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={employee.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={employee.lastName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={employee.jobTitle}
        onChange={handleChange}
      />

      <input
        type="text"
        name="jobDescription"
        placeholder="Job Description"
        value={employee.jobDescription}
        onChange={handleChange}
      />

      <input
        type="text"
        name="jobRole"
        placeholder="Job Role"
        value={employee.jobRole}
        onChange={handleChange}
      />

      <button type="submit">
        {editEmployee ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default EmployeeForm;
