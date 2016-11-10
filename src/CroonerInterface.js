import React, { Component } from 'react';

class CroonerInterface extends Component {
  render() {
    return (
      <div className="column">
        <button className="ui left attached button">Add Chord</button>
        <button className="right attached ui button">Add Box</button>
        <div className="ui clearing divider"></div>
        <h3 className="ui header">Analysis</h3>
        <div className="ui label">
          # Unique Chords
          <div className="detail">3</div>
        </div>
        <div className="ui label">
          Key
          <div className="detail">G</div>
        </div>
        <br /><br />
        <p> <b> Rhyme Structure: </b> </p>
        <p> <b> Verbs Used: </b> </p>


        <div className="ui clearing divider"></div>
        <h3 className="ui header"> Brainstorm </h3>
        <textarea style={{ maxWidth: '350px', maxHeight: '200px' }} className="freeform"
              placeholder={`Who
What
Where
When
Why
How`}
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

export default CroonerInterface;
