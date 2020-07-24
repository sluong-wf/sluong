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
            <div style={{marginLeft:250}}>
                <p>Content</p>
            </div>
        );
    }
}

export default Content;