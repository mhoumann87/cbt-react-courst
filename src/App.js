import { useState } from 'react';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import { v4 as uuidv4 } from 'uuid';
import EditEmployee from './components/EditEmployee';

function App() {
  const showEmployees = true;

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Michael',
      role: 'CFO',
      img: 'https://i.pravatar.cc/150?img=68',
    },
    {
      id: 2,
      name: 'Lauren',
      role: 'CTO',
      img: 'https://i.pravatar.cc/150?img=49',
    },
    {
      id: 3,
      name: 'Dan',
      role: 'CFO',
      img: 'https://i.pravatar.cc/150?img=51',
    },
    {
      id: 4,
      name: 'Michelle',
      role: 'Developer',
      img: 'https://i.pravatar.cc/150?img=38',
    },
    {
      id: 5,
      name: 'Inga',
      role: 'Sales',
      img: 'https://i.pravatar.cc/150?img=32',
    },
    {
      id: 6,
      name: 'Brian',
      role: 'CFO',
      img: 'https://i.pravatar.cc/150?img=12',
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map(employee => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function addEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name,
      role,
      img,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <>
      <div className='flex flex-wrap justify-center'>
        {employees.map(employee => {
          const editEmployee = (
            <EditEmployee
              id={employee.id}
              name={employee.name}
              role={employee.role}
              updateEmployee={updateEmployee}
            />
          );

          return (
            <Employee
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              editEmployee={editEmployee}
            />
          );
        })}
      </div>
      <AddEmployee addEmployee={addEmployee} />
    </>
  );
}

export default App;
