import React from 'react'
import './Header.css'
import { Link,useNavigate } from "react-router-dom";


const Header = () => {
  return (
     <header className="header" id='header'>
      <div className="container header-container">

        <div className="logo">
          <Link to="/" className="logo-text">
            CareerHub
          </Link>
        </div>

        <nav className="navbar">
         <Link to="/" className="nav-link">
            Home
          </Link>

          <a href="#featured-jobs" className="nav-link">
            Jobs
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

      </div>
    </header>
  )
}

export default Header

