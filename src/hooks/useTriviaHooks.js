import { useState, useEffect } from 'react';
import trivia from '../questions/questions';

const triviaHooks = () => {
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
    if (correct) setScore(score + 1);
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

  return {
    handleSelectedQuestion,
    showScore,
    highlight,
    trivia,
    counter,
    questions,
    score,
    currentQuestion,
    progress,
  };
};

export default triviaHooks;
