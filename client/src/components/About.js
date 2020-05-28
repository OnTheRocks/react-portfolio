import React from 'react'
import MainSec from './MainSec'
import Content from './Content'
// import profile from '../img/Nathan.jpg';
// import '../CSS/About.css';

function About(props) {

    return (
      <Content>
       <div>
        <MainSec title={props.title}/>
      </div>

      <div>
       <h3 style={{color:'#bfbfbf'}}>My name is Nathan Huber. I'm a full stack web developer with experience in React, Express JS, Node JS, MySQL, and MongoDB.</h3>
       <h3 style={{color:'#bfbfbf'}}>I have a background in IT which has helped me develop great communication and troubleshooting skills as well has excellent organizational skills.</h3>
       <h3 style={{color:'#bfbfbf'}}>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, Node JS as well as Python.</h3>
      </div>

      </Content>
    )
  }

export default About;