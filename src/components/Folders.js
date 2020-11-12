import React from 'react';
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
              <button className="add-folder" onClick={(e) => value.addFolder(e)}>+</button>
            </ul>);
        }}
          

      </Context.Consumer>
    );
  }
}

export default Folders;