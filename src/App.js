import React from 'react';
// import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import {NavBar} from './components/NavBar';
import Portfolio from './components/Portfolio';
import { Contact } from './components/Contact';
import About from './components/About.js';




class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      
      About: {
        title: 'Be Relentless',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      Portfolio: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

render(){
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>

          <Route path="/" exact render={() => <About title={this.state.About.title} subTitle={this.state.About.subTitle} text={this.state.About.text} />} />
          <Route path="/about" render={() => <About title={this.state.About.title} subTitle={this.state.About.subTitle} text={this.state.About.text} />} />
          <Route path="/portfolio" render={() => <Portfolio title={this.state.Portfolio.title} />} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />

          <Route path="*" component={About} />
        </Switch>
  
      
      </div>
    </Router>
  );
}
}

export default App;
