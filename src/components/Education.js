import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Education() {
    return (
        <div className="education-section content-section-container">
            <h2 className="section-title font-weight-bold">Education</h2>
            <Container fluid={true}>
                <Row className="pt-3 education-item">
                    <Col className="education-item-main">
                        <h4>University of California, Irvine</h4>
                        <b>Sept 2016 - June 2020</b> <br/>
                        <b style={{fontWeight:"normal"}}>Graduated Cum Laude</b>
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
                                    <li>Computer Networks</li>
                                    <li>Databases</li>
                                </ul>
                            </div>
                            <div className="col course-list">
                                <ul>
                                    <li>Embedded Systems</li>
                                    <li>Data Structure & Algorithms</li>
                                    <li>Compilers</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-3 education-item">
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