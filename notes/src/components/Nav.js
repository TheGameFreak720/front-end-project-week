import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import NavStyle from '../Styles/Nav';
import { Title, Button } from '../Styles/GeneralStyles';

class Nav extends Component {
    render() {
        return (
            <NavStyle>
                <Title>Lambda Notes</Title>
                <Link to='/note' onClick={this.props.getNotes}>
                    <Button>View Your Notes</Button>
                </Link>
                <Link to='/note/create-note'>
                    <Button>+Create New Note</Button>
                </Link>
            </NavStyle>
        );
    }
}

export default Nav;