import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="pt-5 px-5">
                    <Col md={8} sm={12}>
                        <h1 className="display-1 font-weight-bolder">{props.name}</h1>
                        <h3 className="display-4 font-weight-light">{props.title}</h3>
                        <h3 className="lead font-weight-light">{props.info}</h3>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;