import React from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Context from './context/Context';
import PropTypes from 'prop-types';
import {ErrorCatch} from './../App';
import './AddFolder.css';

class AddFolder extends React.Component {
  state = {
    name: '',
  }
 
  static defaultProps = {
    history: {},
  }

  updateName = (name) => {
    this.setState({
      name: name,
    });
  }

  validateFolderName = (name) => {
    console.log(name);
    const nameTrimmed = name.trim();
    if (nameTrimmed !== '') {
      return true;
    } else {
      console.log('was empty');
      return false;
    }
  }
  
  render() {
    const history = this.props.history;

    return (
      <ErrorCatch>
        <Context.Consumer>
          {(value) => {

            const newFolder = {
              id: uuidv4(),
              name: this.state.name,
            };

            return (
              <form className="AddFolder" onSubmit={(e) => {
                if (this.validateFolderName(newFolder.name)) {
                  return value.handleFolderSubmit(e, JSON.stringify(newFolder), history);
                } else {
                  e.preventDefault();
                  alert('Don\'t forget to add a folder name!');
                }
              }}>
                <h2>New Folder</h2>
                <div className="folder-name-input">
                  <label htmlFor="#AddFolderName" className="folder-name-label">Folder Name:</label>
                  <input type="text" id="AddFolderName" onChange={(e) => this.updateName(e.target.value)} />
                </div>
                <div className="folder-buttons">
                  <button htmlFor=".AddFolder" id="folder-submit-button" type="submit">Add</button>
                  <button className="cancel" onClick={(e) => value.handleClickCancel(e, history)}>Cancel</button>
                </div>
              </form>
            );
          }}
        </Context.Consumer>
      </ErrorCatch>
      
    );
  }
}

AddFolder.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(AddFolder);