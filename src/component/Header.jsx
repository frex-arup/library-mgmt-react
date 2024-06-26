import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };


  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/library-mgmt-react">Library Management App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/library-mgmt-react">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Privacy Policy</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/"> <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: '-8px' }}
                  >
                    Login/Register
                  </button></Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={handleLogout}><i className="fa fa-sign-out" /> Logout </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </>
    </div>
  )
}

export default Header