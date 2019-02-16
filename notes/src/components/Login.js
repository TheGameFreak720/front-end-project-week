import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../img/logo.png';
import { BodyInput } from '../Styles/Form';
import { AuthContainer, Form, Button, Title, SectionHeading } from '../Styles/Auth';

class Login extends Component {
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
            <AuthContainer>
                <>
                    <Title>Lambda Notes</Title>
                    <img src={Logo} alt='logo' />
                </>
                <Form onSubmit={this.handleSubmit}>
                    <SectionHeading>Login: </SectionHeading>
                    <label>
                        Name:
                        <BodyInput type="text" name='name' value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email:
                        <BodyInput type="email" name='email' value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <BodyInput type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <Button type="submit">Submit</Button>
                </Form>
                <>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>Don't an account? Click this link to Register</NavLink>
                </>
            </AuthContainer>
            
        )
    }
}

export default Login;