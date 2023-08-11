import React from 'react';

const EmployeeRow = ({ employee, onDaysChange, onSalaryPerDayChange }) => {
  const { name, surname, days, salaryPerDay } = employee;
  const totalSalary = days * salaryPerDay;

  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>
        <input
          type="number"
          value={days}
          onChange={(e) => onDaysChange(e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={salaryPerDay}
          onChange={(e) => onSalaryPerDayChange(e.target.value)}
        />
      </td>
      <td>{totalSalary}</td>
    </tr>
  );
};

export default EmployeeRow;