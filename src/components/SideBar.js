import React, { Image } from 'react';
import Container from 'react-bootstrap/Container';

import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

import profile_pic from "../images/profile_pic.png";
import { Tooltip } from 'react-bootstrap';

// left column of Home page, containing basic Profile, Navigation, and Contacts
class SideBar extends React.Component {
    render() {
        return (
            <nav className="sidebar">
                <div className="header-section">
                    <img className="profile_img" src={profile_pic} alt/>

                    <h4>SHAYLA LUONG</h4>

                    <div className="email-container">
                        <span className="pr-2"><FaEnvelope /></span>
                        <a className="e-mail" href="mailto:luongnh1@uci.edu">luongnh1@uci.edu</a>
                    </div>
                </div>

                <ul className="nav nav-section">
                    <li className="nav-item">
                        <a className="nav-link" href="#">ABOUT ME</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#education">EDUCATION</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">EXPERIENCE</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="Projects">PROJECTS</a></li>
                </ul>


                <div className="footer-section">
                    <div className="social_contacts">
                        <a className="social-icon" href="https://github.com/nluong1021"><FaGithub /></a>
                        <a className="social-icon" href="https://linkedin.com/in/shayla-luong"><FaLinkedin /></a>
                        <a className="social-icon" href="https://facebook.com/ngan.luong.58"><FaFacebook /></a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SideBar;