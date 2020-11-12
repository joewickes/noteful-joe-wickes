import React from 'react';
import { withRouter } from 'react-router-dom';
import Context from './context/Context';
import Folders from './Folders';
import Notes from './Notes';
import './FolderPage.css';

class FolderPage extends React.Component {

  render() {
    const hist = this.props.history;
    const matched = this.props.match.params.id;

    return (
      <Context.Consumer>
        {(value) => {

          const folders = value.state.store.folders;
          const notes = value.state.store.notes.filter(notes => notes.folderId === matched);

          return (
            <div className="FolderPage">
              <div className="sidebar">
                <Folders folders={folders}/>
              </div>
              <div className="main">
                <Notes notes={notes} hist={hist} />
              </div>
            </div>
          );
        }}
        
      </Context.Consumer>
    );
  }
}

export default withRouter(FolderPage);