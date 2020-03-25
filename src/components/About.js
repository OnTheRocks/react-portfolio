import React, { Component } from 'react'
import profile from '../img/Nathan.jpg';
import '../CSS/About.css';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col offset-md-5 page-header">
            <h1>About Me</h1>
        </div>
        </div>
        <div class="row">
            <div className="col-lg-3 content">
             <img className="profile" src={profile} alt="Nathan" />
            </div>
            <div className="col-lg-9 content">
              <p>I'm originally from Southwestern Kansas, I moved to Illinois in 2002.</p>      
              <p>I'm currently in the IT Support field, where I have over 15 years of experience.
                  I'm excited about starting a new career in full stack development.</p>
              <p>Just a few of the hobbies that I enjoy are: poker, motorcycles and attending concerts. I have a Commercial drivers licence, 
                I am also a licensed commercial drone pilot.</p>
          </div>
        </div>
      </div>
    )
  }
}


/* <div className="container">
<div className="row">
  <div className="col-md-12">
   <div className="page-header">
     <h1>About Me</h1>
    </div>


    <div >
      <div className="col-md-5 content">
        <img className="profile" src={profile} alt="Nathan" />
      </div>
    </div>

    <div className="col-md-7 content">
      <p>I'm originally from Southwestern Kansas, I moved to Illinois in 2002.</p>
      
      <p>I'm currently in the IT Support field, where I have over 15 years of experience.
        I'm excited about starting a new career in full stack development.
      </p>
      <p>
        Just a few of the hobbies that I enjoy are: poker, motorcycles and attending concerts. I have a Commercial drivers licence, 
        I am also a licensed commercial drone pilot.
      </p>
  </div>

  </div>  
</div>
</div>         */