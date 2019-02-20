import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {  ViewNoteStyle, LinkContainer } from '../Styles/ViewNoteStyle';
import { SectionHeading, P } from '../Styles/GeneralStyles';
import ModalOption from './Modal';

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
    }

    toggle = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    };

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteNote(this.props.match.params.id);
        this.props.history.push('/');
    };

    render() {
        return (
            <ViewNoteStyle>
                <LinkContainer>
                    <Link to={`/edit-note/${this.props.match.params.id}`}>edit</Link>
                    <Link to='' onClick={this.toggle}>delete</Link>
                </LinkContainer>
                {this.props.notes.map(note => {
                    if (this.props.match.params.id === note.id.toString()) {
                        return (
                            <div key={note.id}>
                                <SectionHeading>{note.title}</SectionHeading>
                                <hr></hr>
                                <P>{note.description}</P>
                            </div>
                        );
                    }
                })} 
                <ModalOption 
                    modal={this.state.modal}
                    handleDelete={this.handleDelete}
                    toggle={this.toggle}
                />
            </ViewNoteStyle>
        );
    }
}

export default ViewNote;