import startBrainGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no". ';
const isEven = (number) => (number % 2 === 0);

const generateRoundData = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startEvenGame = () => startBrainGame(gameInstruction, generateRoundData);

export default startEvenGame;
