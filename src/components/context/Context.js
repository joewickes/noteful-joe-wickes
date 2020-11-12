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
    return fetch('http://localhost:9090/folders')
      .then(response => response.json());
  }

  getNotes = () => {
    return fetch('http://localhost:9090/notes')
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
    return fetch(`http://localhost:9090/notes/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
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

  addFolder = (e) => {
    e.preventDefault();
    console.log('Adding Folder');
    const n = new Promise((resolve, reject) => resolve());
    n.then(() => true);
  }

  addNote = (e) => {
    e.preventDefault();
    console.log('Adding Note');
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

  render() {

    return (
      <Context.Provider value={{
        state: this.state,
        clickDelete: this.clickDelete,
        addNote: this.addNote,
        addFolder: this.addFolder,
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;