import './App.css';
import React from 'react';
import { EmployeeProvider } from './components/employeeContext'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
            <Route exact path='/' element={<CreateEmployee />} />
            <Route path='/employee-list' element={<EmployeeList />}/>
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
