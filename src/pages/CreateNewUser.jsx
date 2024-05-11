import React, { useEffect, useState } from 'react'
// import { addBook, getBookById, updateBook } from '../Services/BookService';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addUser, getUserById,updateUser } from '../Services/UserService';

const Createnewbook = () => {
  const { id } = useParams();
 
  const [name, setName] = useState('');
  const handleNameChange = (e) => setName(e.target.value);
  const [rollno, setRollno] = useState('');
  const handleRollnoChange = (e) => setRollno(e.target.value);
  const [branch, setBranch] = useState('');
  const handleBranchChange = (e) => setBranch(e.target.value);
  const [phone, setPhone] = useState('');
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => setEmail(e.target.value);
  const [date_of_issue, setDateofissue] = useState('');
  const handleDateofissueChange = (e) => setDateofissue(e.target.value);
  const [date_of_return, setDateofreturn] = useState('');
  const handleDateofreturnChange = (e) => setDateofreturn(e.target.value);

  useEffect(() => {
    if (id) {
      const Users = getUserById(id);
      setName(Users.name);
      setRollno(Users.rollno);
      setBranch(Users.branch);
      setPhone(Users.phone);
      setEmail(Users.email);
      setDateofissue(Users.date_of_issue);
      setDateofreturn(Users.date_of_return);
    }
  }, [id]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      const updatedUser = { id, name, rollno, branch, phone, email, date_of_issue, date_of_return };
      console.log(updatedUser);
      updateUser(updatedUser);
      navigate('/Usermanagement');
      Swal.fire({
        icon: "success",
        // name: "Oops...",
        text: "Successfully updated!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    } else {
      const newUser = { name, rollno, branch, phone, email, date_of_issue, date_of_return };
      console.log(newUser);
      addUser(newUser) 
      navigate('/Usermanagement');
      Swal.fire({
        icon: "success",
        // name: "Oops...",
        text: "Successfully added!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }
  return (
    <div>
      <>
        <div className="container">
        <Link to="/Usermanagement" className="previous">&laquo; </Link>
          <div className="row" style={{ textAlign: 'center' }}>

            <div className="book">
              <div className="manage">
                <form className="form " style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                  <h1 className="mbook" style={{ textAlign: 'center' }} >Manage Book</h1>
                  <div className="form-group">
                    <label htmlFor="name">name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rollno">rollno:</label>
                    <input type="text" id="rollno" value={rollno} onChange={handleRollnoChange} name="rollno" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="branch">branch:</label>
                    <input type="text" id="branch" value={branch} onChange={handleBranchChange} name="branch" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">phone</label>
                    <input type="text" id="phone" name="phone" value={phone} onChange={handlePhoneChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date_of_issue">date_of_issue</label>
                    <input type="date" id="date_of_issue" name="date_of_issue" value={date_of_issue} onChange={handleDateofissueChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date_of_return">date_of_return :</label>
                    <input type="date" id="date_of_return" value={date_of_return} onChange={handleDateofreturnChange} name="date_of_return" required />
                  </div>
                  <div style={{marginTop:'20px'}}>
                  <button type="reset" className="btn btn-primary" style={{ marginRight: '10px' }}>Reset</button>
                  <button type="submit"  className="btn btn-primary">{id ? 'update User' : 'Add User'}</button>
                </div>
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
