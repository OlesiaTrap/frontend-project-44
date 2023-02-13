import startBrainGame from '../index.js';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no". ';
const isEven = (number) => (number % 2 === 0);

const startRound = () => {
  const RandomNumber = Math.round(Math.random() * 100);
  const num = RandomNumber;
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const isEvenGame = () => {
  startBrainGame(rulesGame, startRound);
};
export default isEvenGame;
