import React from 'react';

import Context from './context/Context';
import Note from './Note';
import './Notes.css';

class Notes extends React.Component {
  
  render() {
 
    const {notes, hist} = this.props;

    return (
      <Context.Consumer>
        {(value) => {

          return (
            <div className="Notes">
              <ul>
                {notes.map(note => <Note key={note.id} id={note.id} name={note.name} modified={note.modified} hist={hist} />)}
                <button className="add-note" onClick={(e) => value.addNote(e)}>+</button>
              </ul>
            </div>
          );
        }}
      </Context.Consumer>
      
    );
  }
}

export default Notes;