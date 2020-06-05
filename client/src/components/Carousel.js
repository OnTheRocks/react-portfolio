import React from 'react';

import Card from './Card';

import castCall from '../images/CastCall.PNG';
import Cumpleaños from '../images/Cumpleanos.gif';
import WeatherSearch from '../images/weather.gif';
import burger from '../images/burger.PNG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'CastCall',
                    subTitle: 'Curate and Share your podcast collection',
                    imgSrc: castCall,
                    gitHub: 'https://github.com/OnTheRocks/CastCall.git',
                    link: 'https://castcall.herokuapp.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Cumpleaños',
                    subTitle: 'A fun Birthday App',
                    imgSrc: Cumpleaños,
                    gitHub: 'https://github.com/OnTheRocks/Cumpleanos.git',
                    link: 'https://ontherocks.github.io/Cumpleanos/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Burger Time',
                    subTitle: 'Design and virtually eat a burger',
                    imgSrc: burger,
                    gitHub: 'https://github.com/OnTheRocks/BurgerTime.git',
                    link: 'https://burger-time-54.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Weather Search',
                    subTitle: 'Search weather for your city',
                    imgSrc: WeatherSearch,
                    gitHub: 'https://github.com/OnTheRocks/WeatherSearch.git',
                    link: 'https://ontherocks.github.io/WeatherSearch/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;