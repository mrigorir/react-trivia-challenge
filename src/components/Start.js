import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => (
  <>
    <h1>
      ¡Bienvenidos a las preguntas del mundo animal!
    </h1>
    <img src="https://live.staticflickr.com/65535/51739619613_716b5cf72d_z.jpg" alt="camaleon" />
    <button type="button">
      <Link to="/trivia">
        Comenzar
      </Link>
    </button>
  </>
);

export default Start;
