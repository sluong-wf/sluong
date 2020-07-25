import React from 'react';
import './App.css';

import SideBar from './components/SideBar'
import Content from './components/Content'

class App extends React.Component {
  render() {
    return (
      <div fluid={true}>
        <SideBar/>
        <Content/>
      </div>
    );
  }
    
}

export default App;
