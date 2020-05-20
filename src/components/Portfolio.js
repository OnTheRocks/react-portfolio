import React from 'react'
import MainSec from './MainSec';
import Content from './Content'

function Portfolio(props) {

    return (
      <Content>
        <div>        
          <MainSec title={props.title} subTitle={props.subTitle} text={props.text}  />            
        </div>
      </Content>
    )
  }


export default Portfolio;