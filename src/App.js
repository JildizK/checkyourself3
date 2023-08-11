import React, { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';

const employees =  [
  { name: 'SALAMAT', surname: 'BAIKE', days: 20, salaryPerDay: 80 }, 
  { name: 'Dastan', surname: 'aaa', days: 15, salaryPerDay: 40 }, 
  { name: 'Emir', surname: 'bbb', days: 22, salaryPerDay: 60 }, 
  { name: 'Sheraman', surname: 'ccc', days: 15, salaryPerDay: 55 }, 
  { name: 'Albina', surname: 'kkk', days: 18, salaryPerDay: 44 }, 
  { name: 'Azret', surname: 'hhh', days: 10, salaryPerDay: 22 }, 
  { name: 'Mirdin', surname: 'Agai', days: 20, salaryPerDay: 70 }, 
  { name: 'Bayish', surname: 'zzz', days: 16, salaryPerDay: 33 }, 
  { name: 'Adilet', surname: 'Gazybekov', days: 11, salaryPerDay: 16 }
]

function App() {
  const [employeeData, setEmployeeData] = useState(employees);

  const handleDaysChange = (index, days) => {
    const updatedEmployees = [...employeeData];
    updatedEmployees[index].days = parseInt(days);
    setEmployeeData(updatedEmployees);
  };

  const handleSalaryPerDayChange = (index, salaryPerDay) => {
    const updatedEmployees = [...employeeData];
    updatedEmployees[index].salaryPerDay = parseInt(salaryPerDay);
    setEmployeeData(updatedEmployees);
  };

  const calculateTotalSalary = () => {
    return employeeData.reduce((total, employee) => total + employee.days * employee.salaryPerDay, 0);
  };
  return (
    <div className="App">
      <EmployeeTable
        employees={employeeData}
        onDaysChange={handleDaysChange}
        onSalaryPerDayChange={handleSalaryPerDayChange}
      />
      <p>Total Salary: {calculateTotalSalary()}</p>
    </div>
  );
}

export default App;