import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import Toggle from './components/Toggle'
// import App from './App';

import { Header }from './components/Header';
import { NavBar } from './components/NavBar';
import About from './components/About';




export const App = () => {
  return (
    
  <div>
    <NavBar />
    <Header title="Nathan Huber"/>  
    <About />    
  </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root')
);


