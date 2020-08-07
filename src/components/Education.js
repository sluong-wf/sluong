import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Education extends React.Component {
    render() {
        return (
            <div className="education-section content-section-container" id="my-education">
                <h2 className="section-title font-weight-bold">Education</h2>
                <Container fluid={true}>
                    <Row className="pt-3 education-item">
                        <Col className="education-item-main">
                            <h4>University of California, Irvine</h4>
                            <b>Sept 2016 - June 2020</b> <br/>
                            <p>Graduated Cum Laude</p>
                        </Col>
                        <Col className="education-item-details">
                            <b style={{fontWeight:"bold"}}>Computer Science and Engineering, B.S.</b> <br/>
                            <b>GPA: 3.78</b> <br/>
                            <b>Relevant Courses:</b>
                            <div className="row">
                                <div className="col course-list">
                                    <ul>
                                        <li>Database Management</li>
                                        <li>Computer Networks</li>
                                        <li>Artificial Intelligence</li>
                                        <li>Computer Vision</li>
                                        <li>Machine Learning</li>
                                        <li>Compilers & Intepreter</li>
                                    </ul>
                                </div>
                                <div className="col course-list">
                                    <ul>
                                        <li>Data Structure & Algorithms</li>
                                        <li>Embedded Software</li>
                                        <li>Operating Systems</li>
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
                            <b>Lab Research: High-speed projection mapping on dynamical surfaces using systems and algorithms optimized for vision processing.</b>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Education;