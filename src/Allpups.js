import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import PupperCard from './PupperCard';

class Allpups extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <Container className='justify-content-md-center pt-5'>
                    <Row className="justify-content-md-center pt-5" >
                        {this.props.indDog.map((dog, idx) => (
                            <Col xs={6} md={4}>
                                <div key={idx}>
                                    <Image src={`${dog.src}`} width={171} height={180} roundedCircle />
                                    <Link exact to={`/${dog.name}`}><h2 style={{ textAlign: 'center', padding: '10px', marginRight: '175px' }}  > {dog.name} </h2></Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Allpups;