import React from 'react';
import { Link } from 'react-router-dom';
import Context from './context/Context';
import Folder from './Folder';
import PropTypes from 'prop-types';
import './Folders.css';

class Folders extends React.Component {

  static defaultProps = {
    folders: [],
  }

  render() {

    const {folders} = this.props;

    return (
      <Context.Consumer>
        {(value) => {

          return (
            <ul className="folders-list">
              {folders.map(folder => <Folder key={folder.id} id={folder.id} name={folder.name} />)}
              <li>
                <Link to="/form/add-folder" >
                  <button className="add-folder">+</button>
                </Link>
              </li>
            </ul>);
        }}
          

      </Context.Consumer>
    );
  }
}

Folders.propTypes = {
  folders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Folders;