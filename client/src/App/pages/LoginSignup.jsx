import React, { Component } from 'react';
import Modal from 'react-modal';

import Signup from '../components/Signup'
import Login from '../components/Login'

import { Container, Row, Col } from 'react-bootstrap'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '70vw'
    }
};

const LoginSignup = (props) => (
    <Modal
        isOpen={!!props.isModalOpen}
        onRequestClose={props.closeModal}
        contentLabel="Login/Signup Modal"
        style={customStyles}
    >
        <Container>
            <Row>
                <Col style={{borderRight: "1px solid grey"}}><Login /></Col>
                <Col><Signup /></Col>
            </Row>
        </Container>
    </Modal>
)

export default LoginSignup;