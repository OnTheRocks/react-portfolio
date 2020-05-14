import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import {NavBar} from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Portfolio }from './components/Portfolio';
import { Contact } from './components/Contact';
import {About} from './components/About.js';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />}
          {/* <a href="https://www.github.com/OnTheRocks" target="blank"/> component=<i class="fab fa-github"></i> */}
          <Route path="*" component={About} />
        </Switch>
  
      
      </div>
    </Router>
  );
}

export default App;
