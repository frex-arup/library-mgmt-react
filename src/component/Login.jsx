import React, { useState } from 'react';
import Loginimage from '../Images/loginpage.png';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
  };

  const handleRegister = () => {
    console.log('Registering with:', { username, password });
  };

  return (
<>
<h1>Library Management App</h1>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 login-image">
        <img src={Loginimage} alt="Login" />

        </div>
        <div className="col-md-6 login-form">
          <form>
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
            <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={handleRegister}>Register</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
