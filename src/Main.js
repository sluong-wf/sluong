import React from 'react';
import Nav from './Nav'
import Home from './Home'

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.contact = React.createRef();
        this.projects = React.createRef();
        
        this.scrolling = this.scrolling.bind(this);
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
            <div>
                <Nav contact={this.contact} scrolling={this.scrolling}/>
                <Home />
            </div>
        );
    }
}

export default Main;