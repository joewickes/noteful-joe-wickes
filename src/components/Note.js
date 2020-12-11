import React from 'react';
import { NavLink } from 'react-router-dom';
import Context from './context/Context';
import PropTypes from 'prop-types';
import './Note.css';

class Note extends React.Component {

  static defaultProps = {
    name: '',
    modified: '',
    id: '',
    hist: {},
  }

  render() {
    
    const {name, modified, id, hist} = this.props;

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date(modified);
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();


    return (
      <Context.Consumer>
        {(value) => {

          return (
            <li className="Note">
              <NavLink to={`/note/${id}`}>
                <div className="Note-top">
                  <h2>{name}</h2>
                </div>
                <div className='Note-bottom'>
                  <p>Last modified on {`${monthNames[month]} ${day}, ${year}`}</p>
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

Note.propTypes = {
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  hist: PropTypes.object.isRequired,
};

export default Note;