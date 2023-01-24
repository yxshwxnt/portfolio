import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="upperpart">
        <img src="./avatar.png" alt="" /> 
        <h3 className='name'>YASHWANT LALWANI</h3>
        <span>Web Dev | BlockChain Dev</span>
      </div>
      <hr />
      <ul className="lowerpart">
        <li className="mail flexx">
          <i className="fa-solid fa-envelope"></i>
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
          <i className="fa-solid fa-calendar-day"></i>
          <li className='col'>
            <h2>BIRTHDAY</h2>
            <p>1/1/22</p>
          </li>
        </li>
        <li className="Lloc flexx">
          <i className="fa-solid fa-location-dot"></i>
          <li className='col'>
            <h2>LOCATION</h2>
            <p>Nagpur</p>
          </li>
        </li>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
      </ul>
    </div>
  )
}

export default Sidebar
