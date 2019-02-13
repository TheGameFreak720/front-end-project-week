import React, { Component } from 'react';

import { Form, TitleInput, BodyInput, Button } from '../Styles/Form';
import { SectionHeading } from '../Styles/GeneralStyles';

class EditNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        }
    }

    componentDidMount() {
        this.props.notes.map(note => {
            if (this.props.match.params.id === note.id.toString()) {
              this.setState({ 
                  title: note.title, 
                  description: note.description 
              });
            }
          });
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()

        const id = this.props.match.params.id;

        const note = {
            title: this.state.title,
            description: this.state.description
        };

        this.props.editNote(id, note);
        this.props.history.push('/');
     }

    render() {
        return (
            <Form>
                <SectionHeading>Edit Note:</SectionHeading>
                <form onSubmit={this.submitHandler}>
                    <TitleInput type="text" name="title" value={this.state.title} onChange={this.inputHandler} placeholder="Title"/>
                    <BodyInput type="text" name="description" value={this.state.description} onChange={this.inputHandler} placeholder="Description"/>
                    <Button type="submit">Save</Button>
                </form>
            </Form>
        )
    }
}

export default EditNote;