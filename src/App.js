import React, { Component } from 'react';
import { NavLink, Route, Switch, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import whiskey from './imgscopy/whiskey.jpg';
import tubby from './imgscopy/tubby.jpg';
import hazel from './imgscopy/hazel.jpg';
import './App.css';
import PupperCard from './PupperCard';
import Allpups from './Allpups';
class App extends Component {

  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      },

    ]
  }

  constructor(props) {
    super(props)


  }

  render() {

    return (
      <>
        <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark" >
          <Navbar.Brand as={NavLink} exact to='/'>Doggo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} exact to='/'>Home</Nav.Link>
              {this.props.dogs.map((dog) => (
                <Nav.Link as={NavLink} exact to={`/${dog.name}`} key={dog.name} > {dog.name} </Nav.Link>
              ))}
            </Nav>
            {/* <i className="fa fa-bars fa-2x" aria-hidden="true"></i> */}
          </Navbar.Collapse>
        </Navbar>


        <Switch>
          <Route exact path='/' render={(routeProps) => <Allpups {...routeProps} indDog={this.props.dogs} />} />
          {this.props.dogs.map((dog, idx) => (
            <Route exact path={`/${dog.name}`} render={(routeProps) => <PupperCard {...routeProps} newPup={dog} id={dog.name} />} />
          ))}
        </Switch>

      </>
    );
  }
}

export default App;
