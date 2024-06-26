import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loginimage1 from '../Images/login.png';
import Loginimage from '../Images/loginpage.png';
import Swal from 'sweetalert2';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
  };

  const handleRegister = () => {
    console.log('Registering with:', { username, password });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('isLoggedIn', 'true');
      // Redirect to the protected route
      navigate('/library-mgmt-react');
      Swal.fire({
        icon: "success",
        // title: "Oops...",
        text: " Logged In Successfully.",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    } else {
      // Show an error message
      // alert('Invalid username or password');
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid username or password!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <>
      <h1 style={{textAlign:'center'}}>Library Management App</h1>
      <div className="container-fluid p-t80">
        <div className="row" style={{ gap: '50px' }}>
          <div className="col-md-6 ">
            <img src={Loginimage} className='login-image' alt="Login" />

          </div>
          <div className="col-md-6 login-form">
            <form onSubmit={handleSubmit}>
              <img src={Loginimage1} className='login-image1' alt="Login" />
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
              <Link to="/Register"><button type="button" className="btn btn-secondary ms-2" onClick={handleRegister}>Register</button></Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
