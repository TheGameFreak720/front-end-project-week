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
      notes: [],
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios
      .get('http://localhost:5000/note/get/all')
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addNewNote = note => {
    axios
      .post('http://localhost:5000/note/create', note)
        .then(res => {
          this.getNotes();
        })
        .catch(() => console.log('Error: Note wasn\'t added'));
  };

  deleteNote = id => {
    axios
      .delete(`http://localhost:5000/note/delete/${id}`)
      .then(res => {
        this.getNotes();
      })
      .catch(err => {
        console.log('Error: Note wasn\'t deleted');
      });
  };

  editNote = (id, note) => {
    axios
      .put(`http://localhost:5000/note/edit/${id}`, note)
        .then(res => {
          this.getNotes();
        })
        .catch(err => {
          console.log(note);
          console.log('Error: Note wasn\'t edited')
        });
  };

  render() {
    return (
      <AppStyled>
          <Route path='/' render={props => <Nav {...props} getNotes={this.getNotes} />} />
          <Route exact path='/' render={props => <NoteContainer {...props} notes={this.state.notes} />} />
          <Route path='/view-note/:id' render={props => <ViewNote {...props} notes={this.state.notes} deleteNote={this.deleteNote} />} />
          <Route path='/create-note' render={props => <NewNote {...props} addNewNote={this.addNewNote} />} />
          <Route path='/edit-note/:id' render={props => <EditNote {...props} notes={this.state.notes} editNote={this.editNote} />} /> 
      </AppStyled>
    )  
  }
}

export default App;
