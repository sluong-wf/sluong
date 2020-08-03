import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Projects extends React.Component {
    constructor() {
        super();

        this.state = {items: [
            {
                image: {},
                name: "Smart Bins - Automated Trash-Sorting System",
                text: `Built and image processing pipeline to collect and process images received
                    from physical trash bin with camera and sensors attached. Implemented a CNN
                    classifier to automatically sort waste into trash, recycle, and compost bins.`,
                tags: ["Azure","Python","Keras"]
            },
            {
                image: {},
                name: "blink - Digital Business Card Sharing Through NFC",
                text: `Built and image processing pipeline to collect and process images received
                    from physical trash bin with camera and sensors attached. Implemented a CNN
                    classifier to automatically sort waste into trash, recycle, and compost bins.`,
                tags: ["Android Studio","Java","Firebase"]
            },
            {
                image: {},
                name: "InBetween - Navigation for Meetups",
                text: `Built a web application that calculates real-time distance between two locations
                    and suggests nearby interest points, based on user activity.`,
                tags: ["HTML/CSS","Boostrap","JavaScript","Django","Python"]
            }
        ]
        }
    }

    render() {
        let items = this.state.items
        return (
            <div className="projects-section content-section-container" id="my-projects">
                <h2 className="section-title font-weight-bold">Projects</h2>
                <Container className="project-item">
                    {items.map(item =>
                        <Row>
                            <Col xs="2">
                                <img src={item.image} alt/>
                            </Col>
                            <Col>
                                <h4 key={item.name}>{item.name}</h4>
                                <p key={item.name}>{item.text}</p>
                                <div>
                                    {item.tags.map(tag =>
                                        <span key={item.name}>{tag}</span>)}
                                </div>
                            </Col>
                        </Row>)}
                </Container>
            </div>
        );
    }
}

export default Projects;