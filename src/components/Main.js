import React, { Fragment } from 'react';
import { Tooltip } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaDownload } from "react-icons/fa";

import Hero from './Hero';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import ResumeModal from './Modal';
import Skills from './Skills';

import profile_pic from "../assets/images/profile_pic.jpg";
import resume_pdf from "../assets/sluong-resume.pdf";

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
            }
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
                            <a className="nav-link px-3 py-1" onClick={()=>window.scrollTo({top: 0,behavior: "smooth"})}>ABOUT ME</a></li>
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
                    <div className="about-section">
                        <Hero {...this.state.profile}/>
                        <div>
                            <ResumeModal />
                            <span style={{margin: 5}}></span>
                            <a href={resume_pdf} download="sluong-resume.pdf">
                                <button className="button dark-gray">
                                    <FaDownload className="icon-size-adjust"/> Download
                                </button>
                            </a>
                        </div>
                    </div>

                    <Skills />

                    <Education ref={this.education} id="my-education"/>
                    <Experience ref={this.experience} id="my-experience"/>
                    <Projects ref={this.projects} id="my-projects"/>
                    <footer style={{color:"lightgray", marginLeft:30}}>© 2020 SHAYLA LUONG | THANKS FOR VISITING!</footer>
                </div>
            </Fragment>
        );
    }
}

export default Main;