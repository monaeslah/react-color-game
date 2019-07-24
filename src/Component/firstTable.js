import React, { Component } from 'react'
import './assets/mainTable.scss'
import { Container, Row, Col } from 'react-bootstrap'

export default class MainTable extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Container id="new">
                    <Row>
                        <Col className="background-style">1 of 4</Col>
                        <Col className="background-style">2 of 4</Col>
                        
                    </Row>
                    <Row>
                        <Col className="background-style">3 of 4</Col>
                        <Col className="background-style">4 of 4</Col>
                    </Row>

                </Container>
                <Container id="new2">
                <Row>
                    <Col className="background-style-2">1 of 4</Col>
                    <Col className="background-style-2">2 of 4</Col>
                    <Col className="background-style-2">2 of 4</Col>
                    
                </Row>
                <Row>
                    <Col className="background-style-2">3 of 4</Col>
                    <Col className="background-style-2">4 of 4</Col>
                    <Col className="background-style-2">4 of 4</Col>
                </Row>
                <Row>
                <Col className="background-style-2">3 of 4</Col>
                <Col className="background-style-2">4 of 4</Col>
                <Col className="background-style-2">4 of 4</Col>
            </Row>
            </Container>
            </React.Fragment>
        );
    }
}