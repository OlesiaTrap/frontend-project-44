import startBrainGame from '../index.js';

const gameInstruction = 'Find the greatest common divisor of given numbers.';
const nodFind = (num1, num2) => {
  if (num2 > 0) {
    const num3 = num1 % num2;
    return nodFind(num2, num3);
  }
  return num1;
};

const generateRoundData = () => {
  const randomNumber1 = Math.round(Math.random() * 100);
  const randomNumber2 = Math.round(Math.random() * 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = nodFind(randomNumber1, randomNumber2).toString();
  return [question, correctAnswer];
};

const startGcdGame = () => startBrainGame(gameInstruction, generateRoundData);

export default startGcdGame;
