import React from 'react';
import MainSec from './MainSec';
import Content from './Content';
import Carousel from './Carousel';

import Container from 'react-bootstrap/Container';

function Portfolio(props) {

    return ( 
       <div>
      <Content>     
        <MainSec title={props.title} subTitle={props.subTitle} text={props.text}  />      
      </Content>

      <Carousel />
      </div>
    )
  }


export default Portfolio;