import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav id="navbar" className="navbar">
                <div className="navbar-nav">
                    <a
                        onClick={() => {
                            this.scrolling(this.projects);
                        }}
                        className="btn-style nav-item nav-link">
                        Projects
                    </a>
                    <a
                        onClick={() => {
                            this.scrolling(this.contact);
                        }}
                        className="btn-style nav-item nav-link">
                        Contact
                    </a>
                </div>
            </nav>
        );
    }
}

export default Nav;