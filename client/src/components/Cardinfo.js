import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="myCard-info" style={style}>
            <p className="myCard-title" style={{color:'#5cb85c'}}>{props.title}</p>
            <p className="myCard-sub-title" style={{color:'#BFBFBF'}} >{props.subTitle}</p>
            <a href={props.gitHub} target="_blank" style={{color:'#BFBFBF'}} rel="noopener noreferrer">View GItHub Repository</a><br></br>
            <a href={props.link} target="_blank" style={{color:'#BFBFBF'}} rel="noopener noreferrer">View Deployed App</a>
        </animated.div>
    );

}

export default CardInfo;