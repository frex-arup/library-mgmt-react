import React from 'react'
import { Link } from 'react-router-dom'

const Usermanagement = () => {
  return (
    <div>
      <>
     <section className="page-not-found">
  <img src="https://image.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1884.jpg" alt />
  <h1>Page NOt Found</h1>
  <p>
    sorry can't find the page you are looking for click
    Below to come back to home page.
  </p>
  <Link to="/library-mgmt-react"><button type="button">Back</button></Link>
</section>

      </>
    </div>
  )
}

export default Usermanagement