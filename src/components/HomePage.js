import React from 'react';
import {withRouter} from 'react-router-dom';
import Context from './context/Context';
import Folders from './Folders';
import Notes from './Notes';
import './HomePage.css';

class HomePage extends React.Component {
  render() {

    console.log(this.props.history);

    return (
      <Context.Consumer>
        {(value) => {
        
          const folders = value.state.store.folders;
          console.log('Folders', folders);
          const notes = value.state.store.notes;
          console.log('Notes', notes);

          return (
            <div className="HomePage">
              <section className="sidebar">
                <Folders folders={folders}/>
              </section>
              <main className="main">
                <Notes notes={notes} hist={this.props.history} />
              </main>
            </div>
          );
        }}
      </Context.Consumer>
      
    );
  }
}

export default withRouter(HomePage);