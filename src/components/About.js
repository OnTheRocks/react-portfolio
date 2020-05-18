import React from 'react'
import MainSec from './MainSec'
import Content from './Content'
// import profile from '../img/Nathan.jpg';
// import '../CSS/About.css';

function About(props) {

    return (
      <div>
        <MainSec title={props.title} subTitle={props.subTitle} text={props.text} />
        {/* <Content>
          <h1>Hello from About.</h1>
        </Content> */}
      </div>
    )
  }

export default About;