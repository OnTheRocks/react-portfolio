import React from 'react';

import CardInfo from './Cardinfo';


function Card(props) {

    return(
        <div className="d-inline-block myCard" onClick={(e) => props.click(props.item)}>
            <img className="myCard-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} gitHub={props.item.gitHub} link={props.item.link} /> }
        </div>
    );

}

export default Card;