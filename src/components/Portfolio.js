import React from 'react'
import MainSec from './MainSec';

function Portfolio(props) {

    return (
      <div>
        <MainSec title={props.title} />
        <h1>Hello from Portfolio.</h1>
      </div>
    )
  }


export default Portfolio;