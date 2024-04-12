import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../Services/BookService";
import { deleteBookById } from "../Services/BookService";

export default function Bookmanagement() {
  const [books, setBooks] = useState([]);

  const deleteBook = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete this book?")) {
      deleteBookById(id);
      setBooks(getBooks());
    }
  };


  useEffect(() => {
    setBooks(getBooks());
  }, []);


  return (
    <div>
      <Link to="/library-mgmt-react" className="previous">&laquo; </Link>
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
                <div className="dropdown">
                  <button className="dropbtn">
                    Show rows <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/Createnewbook"><button
                  type="button"
                  className="btn btn-primary"
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

      <div className="table-responsive">
        <table className="table table-info table-hover">
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
                  <Link to={`/update-book/${employee.id}`}><i className="material-icons" >mode_edit</i></Link>
                </td>
                <td>
                  <i className="material-icons" onClick={() => deleteBook(employee.id)}>delete</i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
