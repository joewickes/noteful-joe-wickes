import React from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Context from './context/Context';

class AddNote extends React.Component {
  state = {
    name: '',
    content: '',
    selected: '',
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

  
  render() {

    const history = this.props.history;

    return (

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
              return value.handleNoteSubmit(e, JSON.stringify(newNote), this.props.history);
            }}>
              <input type="text" id="AddNoteName" onChange={(e) => this.updateName(e.target.value)} required />
              <textarea name="" id="AddNoteContent" cols="30" rows="10" onChange={(e) => this.updateContent(e.target.value)} />
              <select name="folders" id="foldersSelect" onChange={(e) => this.updateSelected(e.target.options[e.target.selectedIndex].id)} required>
                <option value="">Select a Folder</option>
                {value.state.store.folders.map(folder => (<option key={folder.id} id={folder.id} value={folder.name}>{folder.name}</option>))}
              </select>
              <button id="AddNoteSubmit" type="submit">Add</button>
              <button id="AddNoteCancel" onClick={(e) => value.handleClickCancel(e, history)}>Cancel</button>
            </form>);
        }}
      </Context.Consumer>
      
    );
  }
}

export default withRouter(AddNote);