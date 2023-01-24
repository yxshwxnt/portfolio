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
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
        <li><Link to='/portfolio'>Portflio</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
