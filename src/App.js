import React, { Component } from 'react';
import Notepad from './Notepad';
import CroonerInterface from './CroonerInterface';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <br/>
          <p style={{ fontFamily: 'Avenir Next', fontSize: '18px', marginLeft: '15px'}}><b> Crooner </b> by Shreyas Jaganmohan</p>
          <span style={{ display: 'inline-block', marginLeft: '50px', marginRight: '100px' }}>
                <Notepad />
          </span>
          <span style={{display: 'inline-block', position: 'fixed'}}>
              <CroonerInterface />
          </span>
      </div>
    );
  }
}

export default App;
