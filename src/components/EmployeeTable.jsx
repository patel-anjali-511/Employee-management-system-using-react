import React from "react";

const EmployeeTable = ({ employees, deleteEmployee, editEmp }) => {
  return (
    <div>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees added</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job Title</th>
              <th>Description</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.jobTitle}</td>
                <td>{emp.jobDescription}</td>
                <td>{emp.jobRole}</td>
                <td>
                  <button onClick={() => editEmp(emp)}>Edit</button>
                  <button onClick={() => deleteEmployee(emp.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeTable;
