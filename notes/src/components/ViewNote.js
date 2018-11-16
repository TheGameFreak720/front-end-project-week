import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteNote(this.props.match.params.id);
    };

    render() {
        return (
            <div>
                <Link to={`/edit-note/${this.props.match.params.id}`}>edit</Link>
                <a onClick={this.handleDelete}>delete</a>
                {this.props.notes.map(note => {
                    if (this.props.match.params.id === note._id) {
                        return (
                            <div key={note._id}>
                                <p>{note.title}</p>
                                <p>{note.textBody}</p>
                            </div>
                        );
                    }
                })} 
            </div>
        );
    }
}

export default ViewNote;