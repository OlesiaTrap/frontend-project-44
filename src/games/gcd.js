import startBrainGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  if (num2 > 0) {
    const tmp = num1 % num2;
    return getGcd(num2, tmp);
  }
  return num1;
};

const generateRoundData = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGcd(randomNumber1, randomNumber2).toString();
  return [question, correctAnswer];
};

const startGcdGame = () => startBrainGame(gameInstruction, generateRoundData);

export default startGcdGame;
