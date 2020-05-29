import React from 'react'
import { BrowserRouter as Router,} from "react-router-dom";
import '../css/NavBar.css';

export class NavBar extends React.Component {
 render() {
  return (
    <Router>
     <nav className="navbar navbar-expand-lg nav">
    <a className="navbar-brand" style={{color:'#5cb85c'}}>Nathan Huber</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-ico">   
    <i className="fas fa-bars" style={{color:'#5cb85c'}}></i>
</span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mx-auto">
        <li className="nav-item active">
          <a className="nav-link" style={{color:'#5cb85c'}}  href="/about">About <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:'#5cb85c'}}  href="/portfolio">Portfolio</a>
        </li>        
        <li className="nav-item ">
          <a className="nav-link " style={{color:'#5cb85c'}}  href="/contact">Contact</a>
        </li>        
      </ul>
      <div className="info" >
       <a href="https://www.github.com/OnTheRocks" className="icon" target="blank"><i className="mr-2 fab fa-github" style={{color:'#5cb85c'}} ></i></a>
       <a href="https://www.linkedin.com/in/nathan-huber-93172053/" target="blank"><i className="fab fa-linkedin"style={{color:'#5cb85c'}}></i></a>
  
      </div>
      </div>
  </nav>
  </Router>


  ) 
}
}
