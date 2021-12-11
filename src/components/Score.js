import React from 'react';
import PropTypes from 'prop-types';
import Win from './Win';
import Lose from './Lose';

const Score = ({ score, questions }) => (
  <div>
    ¡Has respondido
    {' '}
    { score }
    {' '}
    de
    {' '}
    { questions }
    {' '}
    preguntas!

    <div>
      {score > (questions / 2) ? <Win /> : <Lose />}
    </div>
  </div>
);

Score.propTypes = {
  questions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Score;
