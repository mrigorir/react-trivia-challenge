import React from 'react';
import { Image } from 'react-bootstrap';
import happyFace from '../assets/images/h-face.png';

const Win = () => (
  <div className="d-flex align-items-center justify-content-center mt-100 flex-column bg-secondary mx-auto animate-lose">
    <p className="text-center pt-2 face-message fw-bold">
      Felicidades, ¡Ganaste!
    </p>
    <Image fluid src={happyFace} alt="happy face" width="80" height="80" />
  </div>
);

export default Win;
