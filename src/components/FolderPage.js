import React from 'react';
import { withRouter } from 'react-router-dom';
import Folders from './Folders';
import Notes from './Notes';
import './FolderPage.css';

class FolderPage extends React.Component {
  render() {
    const {folders, notes} = this.props;

    return (
      <div className="FolderPage">
        <div className="sidebar">
          <Folders folders={folders}/>
        </div>
        <div className="main">
          <Notes notes={notes} />
        </div>
      </div>
    );
  }
}

export default withRouter(FolderPage);