import React from 'react'
import { BrowserRouter as Router,} from "react-router-dom";


import '../CSS/NavBar.css';

export const NavBar = () => {
  const menuItems = ['About', 'Portfolio', 'Contact', ];
  const menuLinks = menuItems.map(menuItem => {
      return (
        <a href={"/" + menuItem }>{menuItem}</a>
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
       <a href="https://www.github.com/OnTheRocks" target="blank"><i class="fab fa-github"></i></a>
       <a href="https://www.linkedin.com/in/nathan-huber-93172053/" target="blank"><i class="fab fa-linkedin"></i></a>

        
      </div>

    </div>
    </Router>
  )
 
}
