import React from 'react';
import Container from 'react-bootstrap/Container';

// left column of Home page, containing basic Profile, Navigation, and Contacts
class SideBar extends React.Component {
    render() {
        return (
            <nav id="sidebar">
                <Container className="justify-content-center py-5"><h3>Shayla Luong</h3></Container>
                <ul className="nav flex-item">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Me</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#education">Education</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="Projects">Projects</a></li>
                </ul>
            </nav>

        );
    }
}

export default SideBar;