import React from 'react';
// import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import {NavBar} from './components/NavBar';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import { Contact } from './components/Contact';
import About from './components/About.js';

// const email = 


const indexText = [
  <a href="https://www.github.com/OnTheRocks" className="icon" target="blank"><i className="mr-3 pt-1 fab fa-github " style={{color:'#5cb85c'}} ></i></a>,
  <a href="https://www.linkedin.com/in/nathan-huber-93172053/" target="blank"><i className="fab fa-linkedin "style={{color:'#5cb85c'}}></i></a>
]


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      
      About: {
        title: "Nathan Huber",
        subTitle: 'Full Stack Web Developer'        
      },
      Portfolio: {
        title: 'Portfolio',
        subTitle: 'This page will continue to evolve',
        text: 'Check out my latest projects below, click on image for more information'
      },
      Contact: {
        title: 'Contact Me',
        eMail: 'Nathan_Huber@Yahoo.com'
      }
    }
  }

render(){
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>

          <Route path="/" exact render={() => <About title={this.state.About.title} subTitle={this.state.About.subTitle} />} />
          <Route path="/about" render={() => <About title={this.state.About.title} subTitle={this.state.About.subTitle} />} />
          <Route path="/portfolio" render={() => <Portfolio title={this.state.Portfolio.title} subTitle={this.state.Portfolio.subTitle} text={this.state.Portfolio.text}  />} />
          <Route path="/contact" render={() => <Contact title={this.state.Contact.title} eMail={this.state.Contact.eMail} />} />

          <Route path="*" component={About} />
        </Switch>
  
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;
