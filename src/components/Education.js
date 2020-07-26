import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import tohokuLogo from '../assets/images/tohoku_logo.png'
import uciLogo from '../assets/images/uci_logo.png'

function Education() {
    return (
        <div className="education-section content-section-container">
            <h2 className="section-title font-weight-bold">Education</h2>
            <Container fluid={true}>
                <Row className="pt-3 education-item">
                    <img className="school-logo" src={uciLogo} alt/>
                    <Col className="education-item-main">
                        <h4>University of California, Irvine</h4>
                        <b>2016 - 2020</b>
                    </Col>
                    <Col className="education-item-details">
                        <b style={{fontWeight:"bold"}}>Computer Science and Engineering, B.S.</b> <br/>
                        <b>GPA: 😀</b> <br/>
                        <b>Relevant Courses:</b>
                        <div className="row">
                            <div className="col course-list">
                                <ul>
                                    <li>Artificial Intelligence</li>
                                    <li>Computer Vision</li>
                                    <li>Machine Learning</li>
                                    <li>Databases</li>
                                </ul>
                            </div>
                            <div className="col course-list">
                                <ul>
                                    <li>Computer Networks</li>
                                    <li>Embedded Systems</li>
                                    <li>Compilers</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-3 education-item">
                    <img className="school-logo" src={tohokuLogo} alt/>
                    <Col className="education-item-main">
                        <h4>Tohoku University, Japan</h4>
                        <b>Spring 2019</b>
                    </Col>
                    <Col className="education-item-details">
                        <b style={{fontWeight:"bold"}}>UC Education Abroad Program</b> <br/>
                        <b>Lab Research: Computer Vision</b>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}





export default Education;