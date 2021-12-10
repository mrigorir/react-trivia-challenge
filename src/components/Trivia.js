import React, { useState, useEffect } from 'react';
import trivia from '../questions/questions';
import Score from './Score';

const Trivia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const timer = trivia.questions[currentQuestion].lifetimeSeconds;
  const questions = trivia.questions.length;

  useEffect(() => {
    const next = currentQuestion + 1;
    setInterval(() => {
      if (next < questions) setCurrentQuestion(next);
    }, timer);
  }, [currentQuestion]);

  return (
    (currentQuestion > questions) ? <Score />
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
                <span key={text} data={correct.toString()}>
                  {index + 1}
                  {' '}
                  . -
                  {text}
                  <br />
                  <br />
                </span>
              );
            })}
          </p>
        </div>
      )
  );
};

export default Trivia;
