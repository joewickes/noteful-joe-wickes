import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Folder.css';

class Folder extends React.Component {

  static defaultProps = {

  }

  render() {

    const {id, name} = this.props;

    return (
      <li className="Folder">
        <NavLink to={`/folder/${id}`}>
          <h2>{name}</h2>
        </NavLink>
      </li>
    );
  }
}

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Folder;