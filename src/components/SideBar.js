import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';

import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

import profile_pic from "../assets/images/profile_pic.png";
import { Tooltip } from 'react-bootstrap';

const [activeSection, setActiveSection] = useState();

// left column of Home page, containing basic Profile, Navigation, and Contacts
class SideBar extends React.Component {
    render() {
        return (
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
                        <a className="nav-link px-3 py-1" href="#education">EDUCATION</a></li>
                    <li className="nav-item">
                        <a className="nav-link px-3 py-1" href="#experience">EXPERIENCE</a></li>
                    <li className="nav-item">
                        <a className="nav-link px-3 py-1" href="Projects">PROJECTS</a></li>
                </ul>


                <div className="footer-section">
                    <div className="social_contacts">
                        <a className="social-icon" href="https://github.com/nluong1021"><FaGithub size="1.2em"/></a>
                        <a className="social-icon" href="https://linkedin.com/in/shayla-luong"><FaLinkedin size="1.2em"/></a>
                        <a className="social-icon" href="https://facebook.com/ngan.luong.58"><FaFacebook size="1.2em"/></a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SideBar;