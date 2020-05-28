import React from 'react';
// import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import {NavBar} from './components/NavBar';
import Portfolio from './components/Portfolio';
import { Contact } from './components/Contact';
import About from './components/About.js';
import Index from './components/Index.js';

const indexText = [
  <a href="https://www.github.com/OnTheRocks" className="icon" target="blank"><i className="mr-3 pt-1 fab fa-github " style={{color:'#5cb85c'}} ></i></a>,
  <a href="https://www.linkedin.com/in/nathan-huber-93172053/" target="blank"><i className="fab fa-linkedin "style={{color:'#5cb85c'}}></i></a>
]


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      
      Index: {
        title: "Nathan Huber",
        text: "Full Stack Web Developer",
        text2: indexText        
      },
      About: {
        title: 'About Me',        
      },
      Portfolio: {
        title: 'Portfolio',
        subTitle: 'This page will continue to evolve',
        text: 'Checkout my latest projects below'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }

render(){
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>

          <Route path="/" exact render={() => <Index title={this.state.Index.title} text={this.state.Index.text} text2={this.state.Index.text2} />} />
          <Route path="/about" render={() => <About title={this.state.About.title} />} />
          <Route path="/portfolio" render={() => <Portfolio title={this.state.Portfolio.title} subTitle={this.state.Portfolio.subTitle} text={this.state.Portfolio.text}  />} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />

          <Route path="*" component={About} />
        </Switch>
  
      
      </div>
    </Router>
  );
}
}

export default App;
