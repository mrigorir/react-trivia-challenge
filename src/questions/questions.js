const trivia = {
  triviaTitle: 'Bienvenido a la proueba de animales',
  triviaImage: 'https://48tools.com/wp-content/uploads/2015/09/shortlink.png',
  questions: [
    {
      questionNumber: 1,
      questionText: '¿En que país existen mas zebras?',
      questionImage:
  'https://live.staticflickr.com/65535/51738721907_30abaf1c8a_z.jpg',
      lifetimeSeconds: 10000,
      options: [
        { text: 'Africa', correct: true },
        { text: 'Australia', correct: false },
        { text: 'Estados Unidos', correct: false },
      ],
    },
    {
      questionNumber: 2,
      questionText: '¿Cual es la máxima velocidad que puede alcanzar una pantera?',
      questionImage:
  'https://live.staticflickr.com/65535/51739548636_8f6bceb6a5_z.jpg',
      lifetimeSeconds: 10000,
      options: [
        { text: '20 km/h', correct: false },
        { text: '114km/h', correct: true },
        { text: '990km/h', correct: false },
      ],
    },
    {
      questionNumber: 3,
      questionText: '¿Cuantos años perrunos equivalen a un año humano?',
      questionImage:
  'https://live.staticflickr.com/65535/51738744402_9d0f43dca1_n.jpg',
      lifetimeSeconds: 10000,
      options: [
        { text: '1 año humano / 13 años perrunos', correct: false },
        { text: '1 año humano / 20 años perrunos', correct: false },
        { text: '1 año humano / 7 años perrunos', correct: true },
      ],
    },
  ],
};

export default trivia;
