import React, { useState } from 'react'
import { addBook } from '../Services/BookService';

const Createnewbook = () => {
  const [bookt, setBookt] = useState('');
  const [desp, setDesp] = useState('');
  const [count, setCount] = useState('');
  const [availability, setAvailability] = useState('yes');

  const handleBooktChange = (event) => {
    setBookt(event.target.value);
  };

  const handleDespChange = (event) => {
    setDesp(event.target.value);
  };

  const handleCountChange = (event) => {
    setCount(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { bookt, desp, count, availability };
    console.log(newBook);
    addBook(newBook);
  }
  return (
    <div>
      <>
        <div className="container">
          <div className="row" style={{ textAlign: 'center' }}>

            <div className="book">
              <div className="manage">
                <form className="form " style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                  <h1 className="mbook" style={{ textAlign: 'center' }} >Manage Book</h1>
                  <div className="form-group">
                    <label htmlFor="fullname">Title:</label>
                    <input type="text" id="bookt" name="bookt" value={bookt} onChange={handleBooktChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="desp">Description</label>
                    <input type="text" id="desp" name="desp" value={desp} onChange={handleDespChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fullname">Book Count :</label>
                    <input type="text" id="count" name="count" value={count} onChange={handleCountChange} required />
                  </div>
                  <div className="form-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <label htmlFor="subject">Availability :</label>
                    <label htmlFor="yes">Yes</label>
                    <input
                      type="radio"
                      id="yes"
                      value="yes"
                      checked={availability === 'yes'}
                      onChange={handleAvailabilityChange}
                    />

                    <label htmlFor="no">No</label>
                    <input
                      type="radio"
                      id="no"
                      value="no"
                      checked={availability === 'no'}
                      onChange={handleAvailabilityChange}
                    />
                  </div>
                  <button type="reset" className="btn btn-primary" style={{ marginRight: '10px' }}>Reset</button>
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