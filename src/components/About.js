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
      </Content>
    )
  }

export default About;