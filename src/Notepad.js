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
          <textarea
            placeholder={`Come gather around people
Wherever you roam
And admit that the waters
Around you have grown
And accept it that soon
You'll be drenched to the bone
And if your breath to you is worth saving
Then you better start swimming or you'll sink like a stone
For the times they are a-changing`}
            onChange={this.handleTextChange}/>
        </div>
    );
  }
}

export default Notepad;
