import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Allpups.css';
import Image from 'react-bootstrap/Image'


class Allpups extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Container className='pt-5'>
                <Row className="" >
                    {this.props.indDog.map((dog, idx) => (
                        <Col sm={6} md={4} lg={4} className='' key={dog.name}>
                            <div key={dog.name}>
                                <Image src={`${dog.src}`} width={171} height={180} className='pupImg' roundedCircle />
                                <Link exact to={`/allpups/${dog.name}`} style={{ textDecoration: 'none', color: 'lightslategray' }} ><h2 style={{ textAlign: 'center', padding: '20px', marginRight: '175px' }}  > {dog.name} </h2></Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Allpups;

// 