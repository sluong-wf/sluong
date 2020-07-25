import React from 'react';
import Container from 'react-bootstrap/Container';

// right side column containing all sections
class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        return (
            <div className="content">
                <div className="about-section">
                    <h1>Shayla Luong</h1>
                    <p>Software Engineer</p>
                    <button className="resume-modal">View Resume</button>
                </div>

                <div className="education-section">
                </div>

                <div className="experience-section">
                </div>

                <div className="projects-section">
                </div>
            </div>
        );
    }
}

export default Content;