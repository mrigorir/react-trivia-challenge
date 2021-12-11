import React, { useState, useEffect } from 'react';
import trivia from '../questions/questions';
import Score from './Score';
import '../styles/styles.css';

const Trivia = () => {
  const [counter, setCounter] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [highlight, setHighlight] = useState('');
  const timer = trivia.questions[currentQuestion].lifetimeSeconds;
  const questions = trivia.questions.length;
  const next = currentQuestion + 1;
  const add = () => setTimeout(() => setHighlight('bold'), timer - 1000);
  const remove = () => setTimeout(() => setHighlight(''), timer);

  const handleSelectedQuestion = (e) => {
    e.preventDefault();
    e.target.classList.add('selected-question');
  };

  const temp = () => {
    setTimeout(() => {
      if (next < questions) {
        setCurrentQuestion(next);
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
    (showScore) ? <Score />
      : (
        <div>
          <p>
            {trivia.questions[currentQuestion].questionNumber}
          </p>
          <img src={trivia.questions[currentQuestion].questionImage} alt="big animal" width="100" height="100" />
          <p>
            {trivia.questions[currentQuestion].questionText}
          </p>
          <p>
            {trivia.questions[currentQuestion].options.map((option, index) => {
              const { text, correct } = option;
              return (
                <a href="/" key={text} className={`${correct === true ? highlight : ''}`} onClick={handleSelectedQuestion}>
                  {index + 1}
                  . -
                  {text}
                  <br />
                  <br />
                </a>
              );
            })}
          </p>
          <h1>
            Pregunta
            {' '}
            {counter}
            {' '}
            / 3
          </h1>
        </div>
      )
  );
};

export default Trivia;
