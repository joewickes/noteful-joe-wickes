import React from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Context from './context/Context';
import PropTypes from 'prop-types';
import {ErrorCatch} from './../App';
import './AddNote.css';

class AddNote extends React.Component {
  state = {
    name: '',
    content: '',
    selected: '',
  }

  static defaultProps = {
    history: {},
  }

  updateName = (name) => {
    this.setState({
      name: name,
      content: this.state.content,
      selected: this.selected,
    });
  }

  updateContent = (content) => {
    this.setState({
      name: this.state.name,
      content: content,
      selected: this.selected,
    });
  }

  updateSelected = (selected) => {
    this.setState({
      name: this.state.name,
      content: this.state.content,
      selected: selected,
    });
  }

  getTime = () => {
    const date = new Date();
    return date.toISOString();
  }

  validateNoteName = (name) => {
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

            const newNote = {
              id: uuidv4(),
              modified: null,
              folderId: this.state.selected,
              name: this.state.name,
              content: this.state.content,
            };

            return (
              <form className="AddNote" onSubmit={(e) => {
                newNote.modified = this.getTime();
                if (this.validateNoteName(newNote.name)) {
                  return value.handleNoteSubmit(e, JSON.stringify(newNote), this.props.history);
                } else {
                  e.preventDefault();
                  alert('Don\'t forget to add a note name!');
                }
                
              }}>
                <h2>New Note</h2>
                <div className="add-note-name-and-folder">
                  <label htmlFor="#AddNoteName">Note name: </label>
                  <input type="text" id="AddNoteName" onChange={(e) => this.updateName(e.target.value)} required />
                  <select name="folders" id="foldersSelect" onChange={(e) => this.updateSelected(e.target.options[e.target.selectedIndex].id)} required>
                    <option value="">Select a Folder</option>
                    {value.state.store.folders.map(folder => (<option key={folder.id} id={folder.id} value={folder.name}>{folder.name}</option>))}
                  </select>
                </div>
                <div className="add-note-content-container">
                  <label htmlFor="AddNoteContent">Description: </label>
                  <textarea name="AddNoteContent" id="AddNoteContent" cols="30" rows="10" onChange={(e) => this.updateContent(e.target.value)} />
                </div>
                <div className="add-note-buttons">
                  <button id="AddNoteSubmit" type="submit">Add</button>
                  <button id="AddNoteCancel" onClick={(e) => value.handleClickCancel(e, history)}>Cancel</button>
                </div>
              </form>);
          }}
        </Context.Consumer>
      </ErrorCatch>
      
    );
  }
}

AddNote.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(AddNote);