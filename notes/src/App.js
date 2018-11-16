import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Nav from './components/Nav';
import NoteContainer from './components/NoteContainer';
import AppStyled from './Styles/App';
import ViewNote from './components/ViewNote';
import NewNote from './components/NewNote';
import EditNote from './components/EditNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };


  render() {
    return (
      <AppStyled>
        <Route path='/' render={props => <Nav {...props} getNotes={this.getNotes} />} />
        <Route exact path='/' render={props => <NoteContainer {...props} notes={this.state.notes} />} />
        <Route path='/view-note/:id' render={props => <ViewNote {...props} notes={this.state.notes} />} />
        <Route path='/create-note' render={props => <NewNote {...props} />} />
        <Route path='/edit-note/:id' render={props => <EditNote {...props} notes={this.state.notes} />} />
      </AppStyled>
    );
  }
}

export default App;
