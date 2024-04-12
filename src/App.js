import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Bookmanagement from './pages/Bookmanagement';
import Createnewbook from './pages/Createnewbook';
import Login from './pages/Login';
import Register from './pages/Register';
import Usermanagement from './pages/Usermanagement';
import Welcomepage from './pages/Welcomepage';


const PrivateRoutes = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  return (
    isLoggedIn ? <Outlet /> : <Navigate to='/login' />
  )
}

function App() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  return (
    <Router>
      {isLoggedIn && <Header />}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/Register" element={<Register />} />
          <Route path="/Bookmanagement" element={<Bookmanagement />} />
          <Route path="/Createnewbook" element={<Createnewbook />} />
          <Route path="/update-book/:id" element={<Createnewbook />} />
          <Route path="/Usermanagement" element={<Usermanagement />} />
          <Route path="/library-mgmt-react" element={<Welcomepage />} />
          <Route path="/" element={<Welcomepage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      {isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;