import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Bookmanagement from './pages/Bookmanagement';
import Createnewbook from './pages/Createnewbook';

import Usermanagement from './pages/Usermanagement';
import Welcomepage from './pages/Welcomepage';
import EmployeeView from './component/EmployeeView';



function App() {
  return (
    <Router>
      <Header/>
      <EmployeeView/>
      <Routes> 
        <Route exact path="/" element={<Bookmanagement/>}/>
        <Route exact path="/" element={<Createnewbook/>}/>
        <Route exact path="/" element={<Usermanagement/>}/>
        <Route exact path="/" element={<Welcomepage/>}/>      
      </Routes> 
      <Footer/>
    </Router>
  );
}

export default App;