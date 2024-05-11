import React, { useEffect, useState } from "react";
import { deleteUserById, getUsers } from "../Services/UserService";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Usermanagement = () => {
  const [Users, setUsers] = useState([]);

  const deleteUser = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Your file has been deleted.",
        // footer: '<a href="#">Why do I have this issue?</a>'
      })
    ) {
      deleteUserById(id);
      setUsers(getUsers());
    }
  };

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  return (
    <div>
      <>
      <div class="table-tile">
          <h1>User Details</h1>
        </div>
       
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
            {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <div className="dropdown">
                    <button className="dropbtn">
                      Show rows <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                      <Link href="#">Link 1</Link>
                      <Link href="#">Link 2</Link>
                      <Link href="#">Link 3</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/CreateNewUser">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ margin: "10px" }}
                    >
                      Add New User
                    </button>
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        
        <div className="table-responsive"  >
          <table className="tables ">
            <thead className="table__head">
              <tr>
                <th>id</th>
                <th>name</th>
                <th>rollno</th>
                <th>branch</th>
                <th>phone</th>
                <th>email</th>
                <th>date_of_issue</th>
                <th>date_of_return</th>
                <th>More edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Users.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.rollno}</td>
                  <td>{student.branch}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>{student.date_of_issue}</td>
                  <td>{student.date_of_return}</td>
                  <td>
                    <Link to={`/update-User/${student.id}`}>
                      <i className="material-icons">mode_edit</i>
                    </Link>
                  </td>
                  <td>
                    <i
                      className="material-icons"
                      onClick={() => deleteUser(student.id)}
                    >
                      delete
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/library-mgmt-react" className="previous">
          &laquo;{" "}
        </Link>
        </div>
      </>
    </div>
  );
};
export default Usermanagement;
