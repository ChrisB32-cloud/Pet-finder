import React, { Component } from 'react';
import whiskey from './imgscopy/whiskey.jpg';
import tubby from './imgscopy/tubby.jpg';
import hazel from './imgscopy/hazel.jpg';
import NavBarComp from './Components/NavBarComp';
import AllRoutes from './Components/AllRoutes';
import './App.css';

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
      {
        name: "Zippy",
        age: 2,
        src: tubby,
        facts: [
          "Zippy is a smart pupper",
          "Zippy loves walks.",
          "Zippy loves eating food."
        ]
      },
      {
        name: "Jack Jack",
        age: 1,
        src: tubby,
        facts: [
          "Jack is a smart pupper",
          "Jack loves walks.",
          "Jack loves eating food."
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
        <NavBarComp dogs={this.props.dogs} />
        <AllRoutes dogs={this.props.dogs} />
      </>
    );
  }
}

export default App;
