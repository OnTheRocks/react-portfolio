import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Content(props) {

    return(
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={7}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;