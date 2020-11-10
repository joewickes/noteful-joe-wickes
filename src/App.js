import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

import dummyStore from './components/dummy-store';

import HomePage from './components/HomePage';
import FolderPage from './components/FolderPage';
import NotePage from './components/NotePage';
import NotFoundPage from './components/NotFoundPage';

import './App.css';

class App extends React.Component {

  state = {
    store: dummyStore,
  }

  render() { 

    console.log(this.state.store);

    return (

      <div className="App">
        <header>
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>
        <Switch>
          <Route exact path='/' component={() => <HomePage folders={this.state.store.folders} notes={this.state.store.notes} />} />
          <Route exact path='/folder/:id' component={(props) => <FolderPage folders={this.state.store.folders} notes={this.state.store.notes.filter(notes => notes.folderId === props.match.params.id)} />} />
          <Route exact path='/note/:id' render={(props, history) => <NotePage note={this.state.store.notes.find(note => note.id === props.match.params.id)} history={history} />} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
