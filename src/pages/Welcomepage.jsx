import React from "react";
import { Link } from 'react-router-dom';
import usersmanagement from "../Images/users-management.png";
import Bookmanagement from "../Images/lib.png";

const Welcomepage = () => {
  return (
    <div>
      <>
        <h1>Welcome Coders</h1>
        <h6 className="mb-4">Module1:</h6>
        <div className="row"> 
          <div className="col-md-6">
            <div className="container desgn">
              <img src={Bookmanagement} alt="Avatar" className="image" />
              <Link to="/Bookmanagement"> <div className="overlay">BookManagement </div></Link>
            </div>
          </div>
          
          <div className="col-md-6">
          <h6 className="mb-4">Module2:</h6>
          <div className="container desgn">
              <img src={usersmanagement} alt="Avatar" className="image " />
              <Link to="/Usermanagement"><div className="overlay">users-management</div></Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Welcomepage;
