
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="footie mt-5">
            <Container fluid={true}>
                <Row className="border-top border-success justify-center p-3" style={{color:'#5cb85c'}}>
               
                <div className='footie '> &copy; {new Date().getFullYear()} Nathan Huber</div>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
