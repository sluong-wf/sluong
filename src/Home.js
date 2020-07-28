import React from 'react';
import Projects from './Projects'
import Contact from './Contact'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    navEffect() {
        window.addEventListener("scroll", () => {
            var navBar = document.getElementById("navbar");
        })
    }
    
    render() {
        return (
            <div>
                <Projects
                    ref={this.projects}
                    id="my-projects"
                />
                <Contact
                    ref={this.contact}
                    id="my-contact"
                />
            </div>
        );
    }
}

export default Home;