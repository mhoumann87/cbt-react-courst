import { useState } from 'react';
import Employee from './components/Employee';
import './App.css';

function App() {
  const showEmployees = true;

  const [role, setRole] = useState('dev');

  return (
    <div className='App'>
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={e => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />

          <Employee name='Michael' role={role} />
          <Employee name='Lauren' />
          <Employee name='Dan' />
        </>
      ) : (
        <p>You can't see the employees!</p>
      )}
    </div>
  );
}

export default App;
