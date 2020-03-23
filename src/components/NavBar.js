import React from 'react'
import { BrowserRouter as Router,Link } from "react-router-dom";


import '../CSS/NavBar.css';

export const NavBar = () => {
  const menuItems = ['Home', 'About', 'Works', 'Contact'];
  const menuLinks = menuItems.map(menuItem => {
      return (
        <Link to={"/" + menuItem }>{menuItem}</Link>
      )
  });
  return (
    <Router>
    <div className="navbar">
      <div className="logo">
        Nathan Huber
      </div>
      {/* <button className="btn">
        <span></span>
        <span></span>
        <span></span>
      </button> */}
      <div className="menu show">
        {menuLinks}

        
      </div>

    </div>
    </Router>
  )
 
}
