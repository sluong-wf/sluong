import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

import img_asl_learner_game from '../assets/images/project-asl-learner-game.jpg'
import img_dojumbo from '../assets/images/project-dojumbo.jpg'
import img_smartbins from '../assets/images/project-smartbins.jpg'
import img_blink from '../assets/images/project-blink.jpg'
import img_inbetween from '../assets/images/project-inbetween.jpg'
import img_dare from '../assets/images/project-dare.jpg'
import img_chick from '../assets/images/project-chickinfinite.jpg'

class Projects extends React.Component {
    constructor() {
        super();

        this.state = {items: [
            {
                image: img_asl_learner_game,
                link: "https://sluong910.github.io/uid-asl-learning/",
                title: "Web-based ASL Learner Game",
                subtitle: "User Interface Design",
                text: `Trained a Convolutional Neural Network classification model that predicts ASL letters from images. Developed a kid-friendly,
                    interactive web-based game that encourages kids to learn the ASL alphabet by incorporating the trained
                    model and real-time webcam feed.`,
                github: "https://github.com/sluong910/uid-asl-learning",
                tags: ["TensorflowJS","CNN","HTML","CSS","JavaScript"]
            },
            {
                image: img_dojumbo,
                link: "https://github.com/sluong910/Dojumbo",
                title: "Dojumbo",
                subtitle: "Personal Project",
                text: `A simulation role-playing game inspired by the Karate martial art and Stardew Valley gameplay. Game is created using the Unity game engine
                    and original pixelart artwork drawn on Asesprite. This project heavily relies on the concepts of the Model-View-Controller architecture and Observer design pattern.`,
                github: "https://github.com/sluong910/Dojumbo",
                tags: ["Unity","C#","Aseprite"]
            },
            {
                image: img_smartbins,
                link: "http://projects.eng.uci.edu/projects/2019-2020/smart-bins",
                title: "Smart Bins - Automated Trash-Sorting System",
                subtitle: "Senior Design Project - UCI",
                text: `Built and image processing pipeline to collect and process images received
                    from physical trash bin with camera and sensors attached. Implemented a CNN
                    classifier to automatically sort waste into trash, recycle, and compost bins.`,
                github: "",
                tags: ["Azure","Python","Keras"]
            },
            {
                image: img_blink,
                link: "https://devpost.com/software/blink-w8ypt3",
                title: "blink - Digital Business Card Sharing Through NFC",
                subtitle: "SD Hacks 2018",
                text: `Developed an Android application that uses NFC technology to communicate and
                    share digital business profiles between devices. Integrated Google's Firebase
                    database and authentication services to store and fetch user data.`,
                github: "https://github.com/mi-chellenguyen/blink",
                tags: ["Android Studio","Java","Firebase"]
            },
            {
                image: img_dare,
                link: "https://devpost.com/software/sbhacks-gpdtq1",
                title: "DARE - Dictionary & Augmented Reality Explorer",
                subtitle: "SB Hacks V",
                text: `We developed a web application that revolved around translating images with 
                    foreign text into English, which would then be stored into flash cards. We built 
                    our application with the hopes that students studying abroad or anyone who likes 
                    to travel can spend less time learning the language and more time soaking in the 
                    culture.`,
                github: "https://github.com/sluong910/SBHacks",
                tags: ["OpenCV","CSS/HTML","Python","Flask","GCP"]
            },
            {
                image: img_inbetween,
                link: "https://devpost.com/software/inbetween",
                title: "InBetween - Navigation for Meetups",
                subtitle: "LA Hacks 2018",
                text: `Built a web application that calculates real-time distance between two locations
                    and suggests nearby interest points, based on user activity.`,
                github: "https://github.com/uci-mars/InBetween",
                tags: ["HTML/CSS","JavaScript","Django","Python","GCP"]
            },
            {
                image: img_chick,
                link: "https://devpost.com/software/hackuci-chicken",
                title: "ChickInfinite - Mobile Game",
                subtitle: "HackUCI 2018",
                text: `Worked on all aspects of the application - implemented the game logic, incorporating
                    graphics and sound. Awarded Most Polished App at HackUCI by Gigabyte.`,
                github: "https://github.com/JLONH56589/HackUCI-chicken",
                tags: ["Python","Kivy"]
            }
        ]}
    }

    render() {
        let items = this.state.items;

        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                View Code
            </Tooltip>
        );

        return (
            <div className="projects-section content-section-container" id="my-projects">
                <h2 className="section-title font-weight-bold">Projects</h2>
                <Container className="project-item">
                    {items.map(item =>
                        <Row>
                            <Col xs="4">
                                <div className="project-image">
                                    <a href={item.link} target="_blank">
                                        <img src={item.image}/>
                                        <div className="overlay">
                                            <h4>View Project <FiExternalLink size="1.1em" className="icon-size-adjust"/></h4>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            <Col>
                                <h4 key={item.title}>{item.title}</h4>
                                {item.subtitle && <b style={{color:"gray"}}>{item.subtitle}</b>}
                                <p key={item.name}>{item.text}</p>
                                <div className="tech-stack">
                                    {item.github && 
                                        <OverlayTrigger placement="bottom" delay={{ show: 300, hide: 250 }} overlay={renderTooltip}>
                                            <a className="project-github-link" href={item.github} target="_blank"><FaGithub size="1.4em"/></a>                
                                        </OverlayTrigger>
                                    }
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