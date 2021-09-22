import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Experience extends React.Component {
    constructor() {
        super();

        this.state = {items: [
            {
                title: "Software Engineer I",
                company: "Raytheon Intelligence and Space",
                period: "Sep 2020 - Present",
                location: "Goleta, CA",
                description: ["To be filled out later"],
            },
            {
                title: "IT Tech Support",
                company: "Tu Luc",
                period: "Sep 2019 - Dec 2019",
                location: "Westminster, CA",
                description: ["Perform software and hardware troubleshooting", 
                    "Manage database system and network infrastructure"],
            },
            {
                title: "Software Engineering Intern",
                company: "cFive Solutions",
                period: "Oct 2018 - Apr 2019",
                location: "Laguna Hills, CA",
                description: [` Performed large-scale data migration between multiple different versions of
                    databases (Microsoft SQL Server and Oracle Database).`, `Created SQL scripts to effectively 
                    extract, validate, and transfer large amount of legacy data to new system’s database.`],
            },
            {
                title: "STEM Tutor",
                company: "Mesa Court Housing",
                period: "Jan 2019 - Mar 2019",
                location: "Irvine, CA",
                description: ["Tutored small groups of UCI students in STEM subjects including Physics, Math, and ICS and assisted in hosting review sessions for major exams."],
            },
            {
                title: "Lab Tutor",
                company: "UCI School of ICS",
                period: "Sep 2018 - Dec 2018",
                location: "Irvine, CA",
                description: ["Tutored classroom of 30 UCI students for Accelerated Programming in Python class at UCI."],
            }
        ]}
    }

    render() {
        let items = this.state.items;
        return (
            <div className="experience-section content-section-container" id="my-experience">
                <h2 className="section-title font-weight-bold">Experience</h2>

                <Container className="experience-container">
                    {items.map(item =>
                        <Row className="experience-item">
                            <Col xs="2">
                            </Col>
                            <Col className="card">
                                <h4 key={item.title}>{item.title}</h4>
                                <h5>{item.company}</h5>
                                <b>{item.period} &nbsp;&nbsp;⋅&nbsp;&nbsp; {item.location}</b>
                                <ul>
                                    {item.description.map(desc =>
                                        <li>{desc}</li>
                                    )}
                                </ul>
                            </Col>
                        </Row>)}
                </Container>
            </div>
        );
    }
}

export default Experience;