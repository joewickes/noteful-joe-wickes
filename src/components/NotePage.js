import React from 'react';
import {withRouter} from 'react-router-dom';
import './NotePage.css';

class NotePage extends React.Component {
  render() {

    const {note, history} = this.props;

    return (
      <div className="NotePage">
        <div className="sidebar">
          <button className="go-back" onClick={() => history.goBack()}>Go Back</button>
        </div>
        <div className="main">
          <h3 id="expanded-name">{note.name}</h3>
          <p id="expanded-mod">Last Modified: {Date(note.modified)}</p>
          <p id="expanded-info">Info: {note.content}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(NotePage);