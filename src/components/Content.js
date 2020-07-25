import React from 'react';
import Container from 'react-bootstrap/Container';

import Hero from './Hero'

// right side column containing all sections
class Content extends React.Component {

    constructor(props) {
        super(props);
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

    render() {
        return (
            <div className="content">
                <div className="about-section">
                    <Hero name={this.state.profile.name} title={this.state.profile.title} info={this.state.profile.info}/>
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