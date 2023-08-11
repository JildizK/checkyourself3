import React from 'react';
import EmployeeRow from './EmployeeRow';

const EmployeeTable = ({ employees, onDaysChange, onSalaryPerDayChange }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Days Worked</th>
          <th>Salary Per Day</th>
          <th>Total Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <EmployeeRow
            key={index}
            employee={employee}
            onDaysChange={(days) => onDaysChange(index, days)}
            onSalaryPerDayChange={(salaryPerDay) => onSalaryPerDayChange(index, salaryPerDay)}
          />
          ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;