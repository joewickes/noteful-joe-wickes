import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

import {ContextProvider} from './components/context/Context';

import HomePage from './components/HomePage';
import FolderPage from './components/FolderPage';
import NotePage from './components/NotePage';
import NotFoundPage from './components/NotFoundPage';
import AddFolder from './components/AddFolder';
import AddNote from './components/AddNote';

import './App.css';

export class ErrorCatch extends React.Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {      
      return (
        <h2>Could not display the page.</h2>
      );
    }
    return this.props.children;
  }  
}

class App extends React.Component {

  render() { 

    return (
      <ContextProvider>
        <div className="App">
          <header>
            <Link to="/">
              <h1>Noteful</h1>
            </Link>
          </header>
          <Switch>
            <Route exact path='/' component={() => <HomePage />} />
            <Route exact path='/form/add-folder' component={() => <AddFolder />} />
            <Route exact path='/form/add-note' component={() => <AddNote />} />
            <Route exact path='/folder/:id' component={() => <FolderPage />} />
            <Route exact path='/note/:id' component={() => <NotePage />} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </ContextProvider>
    );
  }
}

export default App;
