import React, { Component } from 'react';
import Notepad from './Notepad';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui text container">
        <br/>
        <p className="first"><b> Songwriter </b> by Shreyas Jaganmohan</p>
        <div className="ui one column grid">
          <Notepad />
        </div>
      </div>
    );
  }
}

export default App;
