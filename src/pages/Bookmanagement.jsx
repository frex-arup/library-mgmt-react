export default function Bookmanagement() {
  const bookmanagement = [
    {
      id: 1,
      title: "Book Title 1",
      author: "Author 1",
      genre: "Genre 1",
      publisher: "Publisher 1",
      isbn: "ISBN 1",
      price: 20.0,
      stock: 10,
    },
    {
      id: 2,
      title: "Book Title 2",
      author: "Author 2",
      genre: "Genre 2",
      publisher: "Publisher 2",
      isbn: "ISBN 2",
      price: 25.0,
      stock: 15,
    },
    {
      id: 3,
      title: "Book Title 3",
      author: "Author 3",
      genre: "Genre 3",
      publisher: "Publisher 3",
      isbn: "ISBN 3",
      price: 18.0,
      stock: 20,
    },
    {
      id: 4,
      title: "Book Title 4",
      author: "Author 4",
      genre: "Genre 4",
      publisher: "Publisher 4",
      isbn: "ISBN 4",
      price: 87,
      stock: 55,
    },
    {
      id: 5,
      title: "Book Title 5",
      author: "Author 5",
      genre: "Genre 5",
      publisher: "Publisher 5",
      isbn: "ISBN 5",
      price: 54,
      stock: 76,
    },
    {
      id: 6,
      title: "Book Title 6",
      author: "Author 6",
      genre: "Genre 6",
      publisher: "Publisher 6",
      isbn: "ISBN 6",
      price: 45,
      stock: 57,
    },
    {
      id: 7,
      title: "Book Title 7",
      author: "Author 7",
      genre: "Genre 7",
      publisher: "Publisher 7",
      isbn: "ISBN 7",
      price: 69,
      stock: 99,
    },
  ];
  return (
    <div>
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
                    Dropdown <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ margin: "10px" }}
                >
                  New book
                </button>
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
            {bookmanagement.map((employee) => (
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
