import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row>
                    <Col className="px-0 main-section">
                        <h1 className="display-2 font-weight-bolder px-0">{props.name}</h1>
                        <h3 className="display-5 font-weight-normal">{props.title}</h3>
                        <p>{props.info}</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;