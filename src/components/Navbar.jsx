import React from 'react' 
import './navbar.css'; 
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul> 
        <li><Link to='/about' />About</li>
        <li><Link to='/resume' />Resume</li>
        <li><Link to='/portfolio'></Link> Portflio</li>
        <li><Link to='/contact'></Link> Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
