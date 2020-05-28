import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title" style={{color:'#5cb85c'}}>{props.title}</p>
            <p className="g-card-sub-title" style={{color:'#BFBFBF'}} >{props.subTitle}</p>
            <a href={props.link} target="_blank" style={{color:'#BFBFBF'}} rel="noopener noreferrer">View</a>
        </animated.div>
    );

}

export default CardInfo;