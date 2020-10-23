import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';


class PupperCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.newPup);
        return (

            <Col md="auto" >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.newPup.src} />
                    <Card.Body>
                        <Card.Title> {this.props.newPup.name} </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        <Link exact to='/'  >
                            <Button variant="primary">Go Back</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        );
    }
}

export default PupperCard;