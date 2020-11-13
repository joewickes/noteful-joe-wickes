import React from 'react';
import {withRouter} from 'react-router-dom';
import Context from './context/Context';
import PropTypes from 'prop-types';
import {ErrorCatch} from './../App';
import './NotePage.css';

class NotePage extends React.Component {

  static defaultProps = {
    match: {},
    history: {},
  }

  render() {

    const matched = this.props.match.params.id;
    const history = this.props.history;

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
      <ErrorCatch>
        <Context.Consumer>
          {(value) => {

            const note = value.state.store.notes.find(note => note.id === matched);

            const date = new Date(note.modified);
            const month = date.getMonth();
            const day = date.getDate();
            const year = date.getFullYear();
            
            return (
              <div className="NotePage">
                <div className="sidebar">
                  <button className="go-back" onClick={() => history.goBack()}>Go Back</button>
                </div>
                <div className="main">
                  <h3 id="expanded-name">{note.name}</h3>
                  <p id="expanded-mod">Last Modified: {`${monthNames[month]} ${day}, ${year}`}</p>
                  <p id="expanded-info">Info: {note.content}</p>
                </div>
              </div>
            );
          }}
            
        </Context.Consumer>
      </ErrorCatch>
    );
  }
}

NotePage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(NotePage);