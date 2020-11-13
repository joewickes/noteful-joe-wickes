import React from 'react';
import {withRouter} from 'react-router-dom';
import Context from './context/Context';
import Folders from './Folders';
import Notes from './Notes';
import PropTypes from 'prop-types';
import {ErrorCatch} from './../App';
import './HomePage.css';

class HomePage extends React.Component {

  static defaultProps = {
    history: {},
  }

  render() {

    return (
      <ErrorCatch>
        <Context.Consumer>
          {(value) => {
          
            const folders = value.state.store.folders;
            const notes = value.state.store.notes;

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
      </ErrorCatch>
      
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HomePage);