import React from 'react'
import './sidebar.css' 
import Button from 'react-bootstrap/Button';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="upperpart"> 
      <div className="image-box">
        <img src="./avatr.png" alt="" /> 
      </div>
        <h3 className='name'>YASHWANT LALWANI</h3>
        <span>Full Stack Developer</span>
      </div>
      <hr /> 
      <ul className="lowerpart">
        <li className="linkedin flexx">
        <i className="fa-brands fa-linkedin"></i>
          <li className='col'>
            <h2>LinkedIn</h2>
            <p><a href="https://www.linkedin.com/in/lalwaniyl/">lalwaniyl</a></p>
          </li>
        </li>
        <li className="phone flexx">
          <i className="fa-solid fa-phone"></i>
          <li className='col'>
            <h2>PHONE</h2>
            <p>+918007182403</p>
          </li>
        </li>
        <li className="bday flexx">
        <i className="fa-brands fa-instagram"></i>
          <li className='col'>
            <h2>Instagram</h2>
            <p><a href="https://www.instagram.com/yashwant7_/">yashwant7_</a></p>
          </li>
        </li>
        <li className="Lloc flexx">
        <i className="fa-brands fa-github"></i>
          <li className='col'>
            <h2>GitHub</h2>
            <p><a href="https://github.com/yxshwxnt">yxshwxnt</a></p>
          </li>
        </li>
      </ul> 
      <Button variant="primary" className='btn'><a href='https://drive.google.com/file/d/1g77PODLj1gnOE0o-06WXteKuHpqbJ0gp/view?usp=sharing' target={"_blank"}>Download Resume</a></Button>{' '}
    </div>
  )
}

export default Sidebar
