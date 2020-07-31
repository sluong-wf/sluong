import React, {useState, Fragment} from 'react';
import { Tooltip,Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaFileAlt, FaDownload } from "react-icons/fa";

import Hero from './Hero'
import Education from './Education'
import Experience from './Experience';
import Projects from './Projects';

import profile_pic from "../assets/images/profile_pic.png";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.education = React.createRef();
        this.experience = React.createRef();
        this.projects = React.createRef();
        
        this.scrolling = this.scrolling.bind(this);

        this.state = {
            profile: {
                name: 'Shayla Luong',
                title: 'Software Developer',
                info: 'something something'
            },
            experience: [
                {
                    id: 0,
                    jobTitle: '',
                    description: '',
                    selected: false
                }
            ],
            education: [
                {
                    id: 0,
                    school: 'University of California, Irvine',
                    description: '',
                    selected: false
                }
            ]
        }
    }
    
	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

    render() {
        return (
            <Fragment>
                <nav className="sidebar">
                    <div className="header-section">
                        <img className="profile_img" src={profile_pic} alt/>

                        <h2>SHAYLA LUONG</h2>

                        <div className="email-container">
                            <span className="pr-2"><FaEnvelope className="icon-size-adjust"/></span>
                            <a className="e-mail" href="mailto:luongnh1@uci.edu">luongnh1@uci.edu</a>
                        </div>
                    </div>

                    <ul className="nav nav-section">
                        <li className="nav-item">
                            <a className="nav-link px-3 py-1" href="#">ABOUT ME</a></li>
                        <li className="nav-item">
                            <a className="nav-link px-3 py-1" onClick={()=>this.scrolling(this.education)}>EDUCATION</a></li>
                        <li className="nav-item">
                            <a className="nav-link px-3 py-1" onClick={()=>this.scrolling(this.experience)}>EXPERIENCE</a></li>
                        <li className="nav-item">
                            <a className="nav-link px-3 py-1" onClick={()=>this.scrolling(this.projects)}>PROJECTS</a></li>
                    </ul>


                    <footer className="footer-section social_contacts">
                        <a className="social-icon" href="https://github.com/nluong1021"><FaGithub size="1.2em"/></a>
                        <a className="social-icon" href="https://linkedin.com/in/shayla-luong"><FaLinkedin size="1.2em"/></a>
                        <a className="social-icon" href="https://facebook.com/ngan.luong.58"><FaFacebook size="1.2em"/></a>
                    </footer>
                </nav>

                <div className="content">
                    <div className="about-section content-section-container">
                        <Hero {...this.state.profile}/>
                        <div>
                            <button className="button" data-toggle="modal" data-target="#myModal">
                                <FaFileAlt className="icon-size-adjust"/> View Resume
                            </button>
                            <span style={{margin: 5}}></span>
                            <a href="../assets/sluong-resume.pdf" download="resume.pdf">
                                <button className="button dark-gray">
                                    <FaDownload className="icon-size-adjust"/> Download
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="skills-section content-section-container">
                        <h2 className="section-title font-weight-bold">Skills Overview</h2>
                    </div>

                    <Education ref={this.education} id="my-education"/>
                    <Experience ref={this.experience} id="my-experience"/>
                    <Projects ref={this.projects} id="my-projects"/>
                </div>
            </Fragment>
        );
    }
}

export default Main;