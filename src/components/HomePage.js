import React from 'react';
import {withRouter} from 'react-router-dom';
import Folders from './Folders';
import Notes from './Notes';
import './HomePage.css';

class HomePage extends React.Component {
  render() {
    const {folders, notes} = this.props;

    return (
      <div className="HomePage">
        <section className="sidebar">
          <Folders folders={folders} />
        </section>
        <main className="main">
          <Notes notes={notes} />
        </main>
      </div>
    );
  }
}

export default withRouter(HomePage);