import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;

  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    { name: 'Michael', role: 'CFO', img: 'https://i.pravatar.cc/150?img=68' },
    { name: 'Lauren', role: 'CTO', img: 'https://i.pravatar.cc/150?img=49' },
    { name: 'Dan', role: 'CFO', img: 'https://i.pravatar.cc/150?img=51' },
    {
      name: 'Michelle',
      role: 'Developer',
      img: 'https://i.pravatar.cc/150?img=38',
    },
    { name: 'Inga', role: 'Sales', img: 'https://i.pravatar.cc/150?img=32' },
    { name: 'Brian', role: 'CFO', img: 'https://i.pravatar.cc/150?img=12' },
  ]);

  return (
    <div className='App '>
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={e => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map(employee => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You can't see the employees!</p>
      )}
    </div>
  );
}

export default App;
