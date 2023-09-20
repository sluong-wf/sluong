import React, { Fragment } from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa"
import { FiMail } from 'react-icons/fi'

import Hero from './Hero'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import ResumeModal from './Modal'
import Skills from './Skills'

import profile_pic from "../assets/images/profile_pic.jpg"
import resume_pdf from "../assets/sluong-resume.pdf"

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
                // title: 'Software Engineer',
                info: `Hi there! Welcome to my web portfolio where I show off all the content I couldn't squeeze into my resume. I\'m an aspiring software developer
                currently pursuing a Master's degree in Computer Science. I enjoy working on personal projects involving building software or web applications in my 
                free time. I also dabble in a bit of tennis, guitar, and graphic design. I\'m always eager to learn something new that helps me make better sense of
                the world!`
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

                        {/* <h2>SHAYLA LUONG</h2> */}

                        <div className="email-container">
                            <span className="pr-1"><FiMail className="icon-size-adjust"/></span>
                            <a className="e-mail" href="mailto:sluong910@gmail.com">sluong910@gmail.com</a>
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
                        <a className="social-icon" title="Github" href="https://github.com/sluong-wf" target="_blank"><FaGithub size="1.2em"/></a>
                        <a className="social-icon" title="LinkedIn" href="https://linkedin.com/in/shayla-luong" target="_blank"><FaLinkedin size="1.2em"/></a>
                        <a className="social-icon" title="Facebook" href="https://facebook.com/" target="_blank"><FaFacebook size="1.2em"/></a>
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
