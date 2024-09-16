import Employee from './components/Employee';
import './App.css';

function App() {
  const showEmployees = false;

  return (
    <div className='App'>
      <header className='App-header'>
        {showEmployees ? <Employee /> : <p>You can't see the employees!</p>}
      </header>
    </div>
  );
}

export default App;
