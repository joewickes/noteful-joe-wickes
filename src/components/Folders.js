import React from 'react';
import { Link } from 'react-router-dom';
import Context from './context/Context';
import Folder from './Folder';
import './Folders.css';

class Folders extends React.Component {
  render() {

    const {folders} = this.props;

    return (
      <Context.Consumer>
        {(value) => {

          return (
            <ul className="folders-list">
              {folders.map(folder => <Folder key={folder.id} id={folder.id} name={folder.name} />)}
              <Link to="/form/add-folder" >
                <button className="add-folder">+</button>
              </Link>
            </ul>);
        }}
          

      </Context.Consumer>
    );
  }
}

export default Folders;