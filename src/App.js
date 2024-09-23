import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Employees from './pages/Employees';
import Clients from './pages/Clients';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/clients' element={<Clients />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
