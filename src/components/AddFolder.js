import React from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Context from './context/Context';

class AddFolder extends React.Component {
  state = {
    name: '',
  }

  updateName = (name) => {
    this.setState({
      name: name,
    });
  }
  
  render() {
    const history = this.props.history;

    return (
      <Context.Consumer>
        {(value) => {

          const newFolder = {
            id: uuidv4(),
            name: this.state.name,
          };

          return (
            <form className="AddFolder" onSubmit={(e) => value.handleFolderSubmit(e, JSON.stringify(newFolder), history)}>
              <input type="text" id="AddFolderName" onChange={(e) => this.updateName(e.target.value)} />
              <button htmlFor=".AddFolder" type="submit">Add</button>
              <button className="cancel" onClick={(e) => value.handleClickCancel(e, history)}>Cancel</button>
            </form>
          );
        }}
      </Context.Consumer>
      
    );
  }
}

export default withRouter(AddFolder);