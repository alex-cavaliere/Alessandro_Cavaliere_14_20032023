import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<CreateEmployee />} />
        <Route path='/employee-list' element={<EmployeeList />}/>
      </Routes>
    </Router>
  );
}

export default App;
