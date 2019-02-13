import React, { Component } from 'react';


import Note from './Note';
import NoteListStyle from '../Styles/NoteList';

class NoteList extends Component {
    render() {
        return (
            <NoteListStyle>
                {this.props.notes.map(note => (
                    <Note key={note.id} title={note.title} body={note.description} id={note.id} />
                ))}
            </NoteListStyle>     
        )
    }
}

export default NoteList;