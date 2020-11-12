import React from 'react';
import { NavLink } from 'react-router-dom';
import Context from './context/Context';
import './Note.css';

class Note extends React.Component {
  render() {
    
    const {name, modified, id, hist} = this.props;

    return (
      <Context.Consumer>
        {(value) => {

          return (
            <li className="Note">
              <NavLink to={`/note/${id}`}>
                <div className="Note-top">
                  <h3>{name}</h3>
                </div>
                <div className='Note-bottom'>
                  <p>Last modified on {modified}</p>
                  <button className="delete" onClick={(e) => value.clickDelete(e, id, hist)}>Delete</button>
                </div>
              </NavLink>
            </li>
          );
        }}
        
      </Context.Consumer>
    );
  } 
}

export default Note;