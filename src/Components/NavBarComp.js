import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBarComp extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark" >
                    <Navbar.Brand as={NavLink} exact to='/allpups'>Doggo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} exact to='/allpups'>Home</Nav.Link>
                            {this.props.dogs.map((dog) => (
                                <Nav.Link as={NavLink} exact to={`/allpups/${dog.name}`} key={dog.name} > {dog.name} </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default NavBarComp;