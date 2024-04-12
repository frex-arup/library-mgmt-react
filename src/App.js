import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Bookmanagement from './pages/Bookmanagement';
import Createnewbook from './pages/Createnewbook';
import Usermanagement from './pages/Usermanagement';
import Welcomepage from './pages/Welcomepage';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <Router>
      <Header/> 
      <Routes> 
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Register" element={<Register/>}/>
        <Route exact path="/Bookmanagement" element={<Bookmanagement/>}/>
        <Route exact path="/Createnewbook" element={<Createnewbook/>}/>
        <Route exact path="/update-book/:id" element={<Createnewbook/>}/>
        <Route exact path="/Usermanagement" element={<Usermanagement/>}/>
        <Route exact path="/library-mgmt-react" element={<Welcomepage/>}/>      
      </Routes> 
      <Footer/>
    </Router>
  );
}

export default App;