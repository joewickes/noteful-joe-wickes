import React from 'react';

const Context = React.createContext();

export class ContextProvider extends React.Component {
  state = {
    store: {
      folders: [],
      notes: [],
    },
  }

  getFolders = () => {
    return fetch('https://murmuring-citadel-66935.herokuapp.com/api/folders')
      .then(response => {
        return response.json()
      });
  }

  getNotes = () => {
    return fetch('https://murmuring-citadel-66935.herokuapp.com/api/notes')
      .then(response => response.json());
  }

  componentDidMount() {
    Promise
      .all([this.getFolders(), this.getNotes()])
      .then(parsed => {
        this.setState({
          store: {
            folders: parsed[0],
            notes: parsed[1],
          },
        });
      });
  }


  deleteNote = (id) => {
    return fetch(`https://murmuring-citadel-66935.herokuapp.com/api/notes/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
      })
      .catch(error => {
        console.log(error.message);
      })
    ;
  }

  postFolder = (folderInfo) => {
    return fetch('https://murmuring-citadel-66935.herokuapp.com/api/folders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: folderInfo,
    })
      .then(response => {
        if (response.ok) {
          this.setState({
            store: {
              folders: [...this.state.store.folders, JSON.parse(folderInfo)],
              notes: [...this.state.store.notes],
            }
          });
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .catch(error => {
        console.log(error.message);
      })
    ;
  }

  postNote = (noteInfo) => {
    return fetch('https://murmuring-citadel-66935.herokuapp.com/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: noteInfo,
    })
      .then(response => {
        if (response.ok) {
          this.setState({
            store: {
              folders: [...this.state.store.folders],
              notes: [...this.state.store.notes, JSON.parse(noteInfo)],
            }
          });
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .catch(error => {
        console.log(error.message);
      })
    ;
  }

  clickDelete = (e, id, history) => {
    e.preventDefault();
    this.deleteNote(id).then(() => history.push('/', this.setState({
      store: {
        folders: [...this.state.store.folders],
        notes: this.state.store.notes.filter(note => note.id !== id),
      },
    })));
  }

  handleClickCancel = (e, history) => {
    e.preventDefault();
    history.push('/');
  }

  handleFolderSubmit = (e, newFolder, history) => {
    e.preventDefault();
    this.postFolder(newFolder)
      .then(() => history.push('/'));
  }

  handleNoteSubmit = (e, newNote, history) => {
    e.preventDefault();

    this.postNote(JSON.stringify(newNote))
      .then(() => history.push('/'));
  }

  render() {

    return (
      <Context.Provider value={{
        state: this.state,
        clickDelete: this.clickDelete,
        addNote: this.addNote,
        addFolder: this.addFolder,
        handleFolderSubmit: this.handleFolderSubmit,
        handleNoteSubmit: this.handleNoteSubmit,
        handleClickCancel: this.handleClickCancel,
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;