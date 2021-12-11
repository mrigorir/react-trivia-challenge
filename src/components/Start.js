import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col, Image, Container,
} from 'react-bootstrap';

const Start = () => (
  <Container className="bg-content vh-100">
    <Row>
      <Col md={12}>
        <h2 className="text-center text-content mt-100 mb-5 bg-dark rounded w-75 mx-auto p-2 start-title">
          ¡Bienvenidos a las preguntas del mundo animal!
        </h2>
      </Col>
    </Row>
    <Row>
      <Col md={12} className="w-100 mx-auto d-flex align-items-center justify-content-center flex-column">
        <Image fluid src="https://live.staticflickr.com/65535/51740136479_e49cdd69df_z.jpg" alt="camaleon" className="rounded shadow-lg start-image" />
        <Link to="/trivia" className="btn btn-secondary my-5 fs-4 fw-bold begin-button">
          Comenzar
        </Link>
      </Col>
    </Row>
  </Container>
);

export default Start;
