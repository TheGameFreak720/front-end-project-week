import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        alert(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name='email' value={this.state.email} onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Register" />
            </form>
        )
    }
}

export default Register;