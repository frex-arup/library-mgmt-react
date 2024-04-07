import React from 'react'

const Createnewbook = () => {
  return (
    <div>
      <>
        <div className="container">
          <div className="row" style={{ textAlign: 'center' }}>

            <div className="book">
              <div className="manage">
                <form className="form " style={{ textAlign: 'center' }}>
                  <h1 className="mbook" style={{ textAlign: 'center' }} >Manage Book</h1>
                  <div className="form-group">
                    <label htmlFor="fullname">Title:</label>
                    <input type="text" id="bookt" name="bookt" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="desp">Description</label>
                    <input type="text" id="desp" name="desp" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fullname">Book Count :</label>
                    <input type="text" id="count" name="count" required />
                  </div>
                  <div className="form-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <label htmlFor="subject">Availability :</label>
                    <label htmlFor="Yes">Yes</label>
                    <input type="radio" id="y" name="Yes" defaultValue="yes" required />
                    <label htmlFor="No">No</label>
                    <input type="radio" id="n" name="No" defaultValue="no" required />
                  </div>
                </form></div>
              <button type="cancel" className="btnn">Cancel</button>
              <button type="add" className="btnn">Add book</button>
            </div>

          </div>
        </div>

      </>
    </div>
  )
}

export default Createnewbook