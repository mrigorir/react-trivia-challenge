import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row, Col, Image, Container, ListGroup, ProgressBar,
} from 'react-bootstrap';
import trivia from '../questions/questions';
import Score from './Score';

const Trivia = () => {
  const questions = trivia.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const timer = trivia.questions[currentQuestion].lifetimeSeconds;
  const next = currentQuestion + 1;
  const [counter, setCounter] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [highlight, setHighlight] = useState('');
  const [score, setScore] = useState(0);
  const percentage = 100 / questions;
  const [progress, setProgress] = useState(percentage);
  const add = () => setTimeout(() => setHighlight('bold'), timer - 1000);
  const remove = () => setTimeout(() => setHighlight(''), timer);

  const handleSelectedQuestion = (e, correct) => {
    e.preventDefault();
    e.target.classList.add('selected-question');
    if (correct) {
      setScore(score + 1);
      e.target.classList.remove('d-none');
    }
  };

  const temp = () => {
    setTimeout(() => {
      if (next < questions) {
        setCurrentQuestion(next);
        setProgress(progress + percentage);
        setCounter(counter + 1);
      }
      if (next >= questions) setShowScore(true);
    }, timer);
  };

  useEffect(() => {
    add();
    remove();
  }, [currentQuestion]);

  temp();

  return (
    (showScore) ? <Score score={score} questions={questions} />
      : (
        <>
          <Row>
            <Col md={12} className="d-flex align-items-center flex-start border-bottom border-secondary py-3 mb-5 w-75 mx-auto">
              <Link to="/" className="btn btn-secondary text-content rounded-circle me-3">
                <FontAwesomeIcon icon={['fas', 'arrow-left']} />
              </Link>
              <h1 className="text-content">
                TestShow
              </h1>
            </Col>
          </Row>
          <Container className="bg-content w-100 mx-auto d-flex align-items-center justify-content-center flex-column text-center">
            <Row>
              <Col md={12}>
                <h1 className="text-center text-content fw-bold py-5">
                  Pregunta
                  {' '}
                  {trivia.questions[currentQuestion].questionNumber}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Image fluid src={trivia.questions[currentQuestion].questionImage} alt="big animal" className="rounded shadow-lg" />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h1 className="text-content fw-bold my-5">
                  {trivia.questions[currentQuestion].questionText}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <ListGroup className="list-unstyled mt-3 mb-5">
                  {trivia.questions[currentQuestion].options.map((option, index) => {
                    const { text, correct } = option;
                    return (
                      <ListGroup.Item key={text} className="shadow-lg p-3 px-5 bg-dark list">
                        <Link to="/" className={`${correct === true ? highlight : ''} text-question fs-2 text-decoration-none p-3 px-5 answer`} onClick={(e) => handleSelectedQuestion(e, correct)}>
                          {index + 1}
                          . -
                          {text}
                        </Link>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mb-5">
                <h1 className="text-center text-content fw-bold mb-5">
                  Pregunta
                  <span className="ps-2">
                    {counter}
                  </span>
                  /3
                </h1>
                <ProgressBar animated variant="secondary" now={progress} />
              </Col>
            </Row>
          </Container>
        </>
      )
  );
};

export default Trivia;
