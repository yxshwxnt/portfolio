import React from 'react' 
import './navbar.css'; 
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const Navbar = () => { 
  const pathName=window.location.pathname; 
  return (
    <nav className='navbar'>
      <ul> 
        <li><Link to='/' className={pathName==='/' ? "header-link-active": "header-link" }>About</Link></li>
        <li><Link to='/resume' className={pathName==='/resume' ? "header-link-active": "header-link"}>Resume</Link></li>
        <li><Link to='/portfolio' className={pathName==='/portfolio' ? "header-link-active": "header-link"}>Portflio</Link></li>
        <li><Link to='/contact' className={pathName==='/contact' ? "header-link-active": "header-link"}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
