import React from 'react'
import MainSec from './MainSec'
import Content from './Content'
import profile from '../images/Nathan.jpg';


function About(props) {

    return (
      <Content>
        <div>
         <MainSec title={props.title} subTitle={props.subTitle} /> 

         <img src={profile} className="ProfilePic mr-5 mb-5" alt="ProfilePic"/>
 
         <p className="pt-4" style={{color:'#bfbfbf'}}>
           My name is Nathan Huber. I'm a full stack web developer with experience in React, Express JS, Node JS, MySQL, and MongoDB.
           I have a background in IT which has helped me develop great communication and troubleshooting skills as well as excellent organizational skills.
           I'm constantly learning new things. Currently those things include gaining more experience with MongoDB, React, Express JS, Node JS as well as Python.</p>
    
        </div>
      </Content>
    )
  }

export default About;