export function getBooks() {
  const books = localStorage.getItem('books');
  if (!books) {
    setDefaultValues();
    return JSON.parse(localStorage.getItem('books'));
  } else {
    return JSON.parse(books);
  }
}

function setDefaultValues() {
  localStorage.setItem('books', JSON.stringify([
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
  ]));
}

export function getBookById(id) {
  return getBooks().find(book => book.id == id);
}

export function addBook(newBook) {
  let books = getBooks();
  books.push({ ...newBook, id: books.sort()[books.length - 1].id + 1 });
  localStorage.setItem('books', JSON.stringify(books));
}

export function updateBook(updatedBook) {
  let books = getBooks().map(book =>
    book.id == updatedBook.id ? updatedBook : book
  );
  localStorage.setItem('books', JSON.stringify(books));
}

export function deleteBookById(id) {
  let books = getBooks().filter(book => book.id != id);
  localStorage.setItem('books', JSON.stringify(books));
}