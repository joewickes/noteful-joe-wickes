import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/form/add-note">
                  <button className="add-note">+</button>
                </Link>
              </ul>
            </div>
          );
        }}
      </Context.Consumer>
      
    );
  }
}

export default Notes;