import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import { FaTabletAlt, FaLaptopCode, FaMobileAlt, FaCodeBranch } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { AiOutlineCode } from "react-icons/ai"


export default class Skills extends React.Component {
    render() {
        return (
            <div className="skills-section content-section-container">
                <h2 className="section-title font-weight-bold">Skills Overview</h2>
                <Container>
                    <Row>
                        <Col className="skill-col">
                            <h5><FaLaptopCode className="icon-size-adjust"/> Programming</h5>
                            <ul>
                                <li>Python</li>
                                <li>C/C++</li>
                                <li>Java</li>
                                <li>SQL</li>
                                <li>HTML/CSS/JS</li>
                            </ul>
                        </Col>
                        
                        <Col className="skill-col">
                            <h5><IoIosApps/> Development</h5>
                            <ul>
                                <li>.NET</li>
                                <li>Spring Boot</li>
                                <li>React</li>
                                <li>Django</li>
                                <li>Android Studio</li>
                                <li>C#/Unity</li>
                            </ul>
                        </Col>
                        
                        <Col className="skill-col">
                            <h5><FaCodeBranch/> ML/DM</h5>
                            <ul>
                                <li>Mahout</li>
                                <li>OpenCV</li>
                                <li>PyTorch</li>
                                <li>Tensorflow</li>
                                <li>Matlab/R</li>
                            </ul>
                        </Col>
                        
                        <Col className="skill-col">
                            <h5><AiOutlineCode/> Other</h5>
                            <ul>
                                <li>Hadoop</li>
                                <li>Git</li>
                                <li>Linux</li>
                                <li>AWS/CGP</li>
                                <li>Adobe Suite</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}