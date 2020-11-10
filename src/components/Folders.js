import React from 'react';
import Folder from './Folder';
import './Folders.css';

class Folders extends React.Component {
  render() {

    const {folders} = this.props;

    return (
      <ul className="folders-list">
        {folders.map(folder => <Folder key={folder.id} id={folder.id} name={folder.name} />)}
        <button className="add-folder">+</button>
      </ul>
    );
  }
}

export default Folders;