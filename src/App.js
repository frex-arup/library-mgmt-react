import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Bookmanagement from './pages/Bookmanagement';
import Createnewbook from './pages/Createnewbook';
import Tablecontents from './pages/Tablecontents';
import Usermanagement from './pages/Usermanagement';
import Welcomepage from './pages/Welcomepage';
import Login from './component/Login';
import Register from './component/Register';



function App() {
  return (
    <Router>
      <Header/>
      
      <Login />
      <Register />
      <Routes>
        <Route exact path="/" element={<Bookmanagement/>}/>
        <Route exact path="/" element={<Createnewbook/>}/>
        <Route exact path="/" element={<Tablecontents/>}/>
        <Route exact path="/" element={<Usermanagement/>}/>
        <Route exact path="/" element={<Welcomepage/>}/>
       
      </Routes> 
      <Footer/>
    </Router>
  );
}

export default App;