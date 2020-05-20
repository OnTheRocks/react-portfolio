import React from 'react'
import MainSec from './MainSec'
import Content from './Content'
// import profile from '../img/Nathan.jpg';
// import '../CSS/About.css';

function Index(props) {

    return (
      <Content>
       <div id="iPad">
        <MainSec title={props.title} text={props.text} text2={props.text2} />
        </div>
      </Content>
    )
  }

export default Index;