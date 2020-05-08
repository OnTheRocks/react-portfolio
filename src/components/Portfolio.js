import React from 'react'
import '../CSS/Portfolio.css'
import cumple from '../img/cumpleanos.png';
import Password from '../img/Password.jpg';
import Weather from '../img/Weather.png';
import Planner from '../img/Planner.jpg';
import QuizTime from '../img/QuizTime.jpg';
import CastCall from '../img/CastCall.PNG';

// import { render } from '@testing-library/react';


export const Portfolio = () => {
  return (
   

<div className="container">
    
      <h1 className="display-4">My Portfolio</h1>
      <p className="lead">Here are a few of the projects I've enjoyed working on.</p>
      <hr className="my-4"/>
      
      <div className="row justify-content-lg-center ">

        <div className="card">
          <img className="card-img-top" src={cumple}  alt="..."/>
          <div className="card-body">
            <h4 className="card-title">Cumpleanos</h4>
            <p className="card-text">This is an app completed with a group from my coding bootcamp. You enter in the Month and Day you were born, and it pulls
              back some interesting infromation about that day.</p>
              <button type="button" class="btn btn-success">Success</button>
            {/* <a href="https://github.com/OnTheRocks/Cumpleanos.git" className="btn btn-success">Cumpleanos</a> */}
            <button type="button" class="btn btn-success">Cumpleaños</button>
          </div>
        </div>

        <div className="card">
          <img src={Password} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Password Generator</h5>
            <p className="card-text">This app wil let you insert a few paramaters and then generate a random password to meet your needs.</p>
            <a href="https://ontherocks.github.io/Password-Generator/" target="blank" className="btn btn-success">Password Generator</a>
          </div>
        </div>

        <div className="card">
          <img src={Weather} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Weather Search</h5>
            <p className="card-text">This app will give the the current conditions as well as a 5-day forecast wherever you are.</p>
            <a href="https://ontherocks.github.io/WeatherSearch/" target="blank" className="btn btn-success">Weather Search</a>
        </div>
      </div>

      <div className="row justify-content-lg-center ">

        <div className="card">
          <img src={Planner} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title">Day Planner</h4>
            <p className="card-text">This is a simple app that will help you plan your day.</p>
            <a href="https://ontherocks.github.io/PlannerDay/" target="blank" className="btn btn-success">Planner</a>
          </div>
        </div>
  
        <div className="card" >
          <img src={QuizTime} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Quiz Time</h5>
            <p className="card-text">Care to take a quiz I created?</p>
            <a href="https://ontherocks.github.io/TimedQuiz/" target="blank" className="btn btn-success">Quiz Time</a>
          </div>
        </div>
  
        <div className="card">
          <img src={CastCall} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">CastCall : Podcast Collection</h5>
            <p className="card-text">This is another group project from my BootCamp.  It's a great place to create and share a Podcast collection.</p>
            <a href="https://project2-020420.herokuapp.com/" target="blank" className="btn btn-success">CastCall</a>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

