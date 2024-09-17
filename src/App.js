import Employee from './components/Employee';
import './App.css';

function App() {
  const showEmployees = true;

  return (
    <div className='App'>
      {showEmployees ? (
        <>
          <Employee name='Michael' role='CEO' />
          <Employee name='Lauren' role='Programmer' />
          <Employee name='Dan' />
        </>
      ) : (
        <p>You can't see the employees!</p>
      )}
    </div>
  );
}

export default App;
