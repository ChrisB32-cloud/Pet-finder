import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './PuuperCard.css'


class PupperCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='myCont' key={this.props.id}  >
                <Col md="auto"  >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.newPup.src} />
                        <Card.Body>
                            <Card.Title> {this.props.newPup.name} </Card.Title>
                            <Card.Subtitle className='text-muted'>
                                Age {this.props.newPup.age}
                            </Card.Subtitle  >
                            <br />
                            {this.props.newPup.facts.map((fact, idx) => (
                                <Card.Text key={idx} >
                                    {fact}
                                </Card.Text>
                            ))}
                            <Link exact to='/allpups'  >
                                <Button variant="primary">Go Back</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </div>

        );
    }
}

export default PupperCard;