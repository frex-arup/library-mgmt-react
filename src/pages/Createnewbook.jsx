import React, { useState } from 'react'
import { addBook } from '../Services/BookService';
import { Link } from 'react-router-dom';

const Createnewbook = () => {
  const [title, setTitle] = useState('');
  const handleTitleChange = (e) => setTitle(e.target.value);
  const [author, setAuthor] = useState('');
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const [genre, setGenre] = useState('');
  const handleGenreChange = (e) => setGenre(e.target.value);
  const [publisher, setPublisher] = useState('');
  const handlePublisherChange = (e) => setPublisher(e.target.value);
  const [isbn, setIsbn] = useState('');
  const handleIsbnChange = (e) => setIsbn(e.target.value);
  const [price, setPrice] = useState('');
  const handlePriceChange = (e) => setPrice(e.target.value);
  const [stock, setStock] = useState('');
  const handleStockChange = (e) => setStock(e.target.value);

  const handleSubmit = (event) => {
    // event.preventDefault();
    const newBook = { title, author, genre, publisher, isbn, price, stock };
    console.log(newBook);
    addBook(newBook);

    alert("success");
  }
  return (
    <div>
      <>
        <div className="container">
        <Link to="/Bookmanagement" className="previous">&laquo; </Link>
          <div className="row" style={{ textAlign: 'center' }}>

            <div className="book">
              <div className="manage">
                <form className="form " style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                  <h1 className="mbook" style={{ textAlign: 'center' }} >Manage Book</h1>
                  <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={handleTitleChange} title="title" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="author">author:</label>
                    <input type="text" id="author" value={author} onChange={handleAuthorChange} title="author" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="genre">genre:</label>
                    <input type="text" id="genre" value={genre} onChange={handleGenreChange} title="genre" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="publisher">publisher</label>
                    <input type="text" id="publisher" title="publisher" value={publisher} onChange={handlePublisherChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="isbn">isbn</label>
                    <input type="text" id="isbn" title="isbn" value={isbn} onChange={handleIsbnChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">price</label>
                    <input type="text" id="price" title="price" value={price} onChange={handlePriceChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="stock">stock :</label>
                    <input type="text" id="stock" value={stock} onChange={handleStockChange} title="stock" required />
                  </div>
                  <button type="reset" className="btn btn-primary" style={{ margin: '20px' }}>Reset</button>
                  <button type="submit" className="btn btn-primary">Add book</button>
                </form>
              </div>

            </div>

          </div>
        </div>

      </>
    </div>
  )
}

export default Createnewbook
