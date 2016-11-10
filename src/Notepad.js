import React, { Component } from 'react';
import './Notepad.css';

class Notepad extends Component {
  constructor(props){
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
      song: '',
    }
  }

  handleTextChange(e){
    console.log(e.target.value);
    if(e.target.value.slice(-1) == " "){
      console.log(e.target.value.split(" "));
      // get syllables of last word
    }
    this.setState({song: e.target.value});
  }
  render() {
    console.log(this.state.song);
    return (
        <div className="column">
          <textarea placeholder="The times they are a changing"
                rows="20"
                id="comment_text"
                cols="40"
                className="ui-autocomplete-input"
                autoComplete="off"
                role="textbox"
                aria-autocomplete="list"
                aria-haspopup="true"></textarea>
        </div>
    );
  }
}

export default Notepad;
