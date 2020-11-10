import React from 'react';

import Note from './Note';
import './Notes.css';

class Notes extends React.Component {
  
  render() {
 
    const {notes} = this.props;

    return (
      <div className="Notes">
        <ul>
          {notes.map(note => <Note key={note.id} id={note.id} name={note.name} modified={note.modified} />)}
          <button className="add-note">+</button>
        </ul>
      </div>
    );
  }
}

export default Notes;