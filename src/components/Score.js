import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import Win from './Win';
import Lose from './Lose';

const Score = ({ score, questions }) => (
  <Container className="bg-content vh-100">
    <Row>
      <Col md={12}>
        <p className="text-dark d-flex align-items-center justify-content-center rounded fw-bold p-5 bg-secondary rounded mt-100 message">
          Respondiste
          <strong className="mx-2 text-warning">
            {score}
          </strong>
          de
          <strong className="mx-2 text-warning">
            {questions}
          </strong>
          preguntas
        </p>
      </Col>
    </Row>
    <div>
      {score > (questions / 2) ? <Win /> : <Lose />}
    </div>
    <div className="d-flex align-items-center justify-content-center mt-5">
      <Link to="/" className="btn btn-secondary fs-4 fw-bold px-5 py-2">
        Volver a empezar
      </Link>
    </div>
  </Container>
);

Score.propTypes = {
  questions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Score;
