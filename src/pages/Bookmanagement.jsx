import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../Services/BookService";

export default function Bookmanagement() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks());
  }, []);
  
  return (
    <div>
      <Link to="/library-mgmt-react" class="previous">&laquo; </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <div class="dropdown">
                  <button class="dropbtn">
                    Show rows <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/Createnewbook"><button
                  type="button"
                  class="btn btn-primary"
                  style={{ margin: "10px" }}
                >
                  New book
                </button></Link>
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

      <div class="table-responsive">
        <table class="table table-info table-hover">
          <thead className="table-danger">
            <tr>
              <th>id</th>
              <th>title</th>
              <th>author</th>
              <th>genre</th>
              <th>publisher</th>
              <th>isbn</th>
              <th>price</th>
              <th>stock</th>
              <th>More edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.title}</td>
                <td>{employee.author}</td>
                <td>{employee.genre}</td>
                <td>{employee.publisher}</td>
                <td>{employee.isbn}</td>
                <td>{employee.price}</td>
                <td>{employee.stock}</td>
                <td>
                  <i className="material-icons">mode_edit</i>
                </td>
                <td>
                  <i className="material-icons">delete</i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
