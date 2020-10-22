import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import whiskey from './imgscopy/whiskey.jpg';
import tubby from './imgscopy/tubby.jpg';
import hazel from './imgscopy/hazel.jpg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PupperCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.passDog);
        return (
            <div>
                <Col md="auto" >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src='' />
                        <Card.Body>
                            <Card.Title> Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go Back</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </div>
        );
    }
}

export default PupperCard;