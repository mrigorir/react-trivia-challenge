import React from 'react';
import { Image } from 'react-bootstrap';
import sadFace from '../assets/images/face.png';

const Lose = () => (
  <div className="d-flex align-items-center justify-content-center mt-100 flex-column bg-secondary mx-auto animate-lose">
    <p className="text-center pt-2 face-message fw-bold">
      ¡Suerte para la próxima!
    </p>
    <Image fluid src={sadFace} alt="sad face" width="80" height="80" />
  </div>
);

export default Lose;
