import { useState } from 'react';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;

  const [role, setRole] = useState('dev');

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
            <Employee
              name='Michael'
              role={role}
              img='https://i.pravatar.cc/300'
            />
            <Employee name='Lauren' img='https://i.pravatar.cc/300' />
            <Employee name='Dan' img='https://i.pravatar.cc/300' />
            <Employee
              name='Michael'
              role={role}
              img='https://i.pravatar.cc/300'
            />
            <Employee name='Lauren' img='https://i.pravatar.cc/300' />
            <Employee name='Dan' img='https://i.pravatar.cc/300' />
            <Employee
              name='Michael'
              role={role}
              img='https://i.pravatar.cc/300'
            />
            <Employee name='Lauren' img='https://i.pravatar.cc/300' />
            <Employee name='Dan' img='https://i.pravatar.cc/300' />
            <Employee
              name='Michael'
              role={role}
              img='https://i.pravatar.cc/300'
            />
            <Employee name='Lauren' img='https://i.pravatar.cc/300' />
            <Employee name='Dan' img='https://i.pravatar.cc/300' />
          </div>
        </>
      ) : (
        <p>You can't see the employees!</p>
      )}
    </div>
  );
}

export default App;
