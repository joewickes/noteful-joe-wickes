import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';

class Folder extends React.Component {
  render() {

    const {id, name} = this.props;

    return (
      <li className="Folder">
        <NavLink to={`/folder/${id}`}>
          <h3>{name}</h3>
        </NavLink>
      </li>
    );
  }
}

export default Folder;