import React, { Component } from 'react';
import { NavLink, Route, Switch, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import whiskey from './imgscopy/whiskey.jpg';
import tubby from './imgscopy/tubby.jpg';
import hazel from './imgscopy/hazel.jpg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PupperCard from './PupperCard';
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

    // console.log(this.props.dogs);

    return (
      <>
        <Navbar bg="dark" variant="dark" >
          <Navbar.Brand as={NavLink} exact to='/'>Doggo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} exact to='/'>Home</Nav.Link>
            {this.props.dogs.map((dog) => (
              <Nav.Link as={NavLink} exact to={`/${dog.name}`}   > {dog.name} </Nav.Link>
            ))}
          </Nav>
        </Navbar>



        <Container className='justify-content-md-center pt-5'>
          <Row className="justify-content-md-center pt-5" >
            {this.props.dogs.map((dog, idx) => (
              <Col xs={6} md={4}>
                <div key={idx}>
                  <Image src={`${dog.src}`} width={171} height={180} roundedCircle />
                  <Link exact to={`/${dog.name}`} render={(routeProps) => <PupperCard {...routeProps} passDog={dog} />}  ><h2 style={{ textAlign: 'center', padding: '10px', marginRight: '175px' }}  > {dog.name} </h2></Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>


      </>
    );
  }
}

export default App;
