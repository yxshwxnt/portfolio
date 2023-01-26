import React from 'react'
import './sidebar.css' 
import Button from 'react-bootstrap/Button';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="upperpart">
        <img src="./avatar.png" alt="" /> 
        <h3 className='name'>YASHWANT LALWANI</h3>
        <span>Full Stack Developer</span>
      </div>
      <hr />
      <ul className="lowerpart">
        <li className="mail flexx">
        <i className="fa-brands fa-linkedin"></i>
          <li className='col'>
            <h2>EMAIL</h2>
            <p>mail@gmail.com</p>
          </li>
        </li>
        <li className="phone flexx">
          <i className="fa-solid fa-phone"></i>
          <li className='col'>
            <h2>PHONE</h2>
            <p>1234567894</p>
          </li>
        </li>
        <li className="bday flexx">
        <i className="fa-brands fa-instagram"></i>
          <li className='col'>
            <h2>BIRTHDAY</h2>
            <p>1/1/22</p>
          </li>
        </li>
        <li className="Lloc flexx">
        <i className="fa-brands fa-github"></i>
          <li className='col'>
            <h2>LOCATION</h2>
            <p>Nagpur</p>
          </li>
        </li>
      </ul> 
      <Button variant="primary" className='btn'>Download Resume</Button>{' '}
    </div>
  )
}

export default Sidebar
