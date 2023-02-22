import startBrainGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameInstruction = 'What number is missing in the progression?';
const generateProgression = (startNumber, step, length) => {
  const progression = [startNumber];
  // from linter - error  Assignment to function parameter 'startNumber'
  let elemProgression = startNumber;
  for (let i = 1; i < length; i += 1) {
    elemProgression += step;
    progression.push(elemProgression);
  }
  return progression;
};

const generateRoundData = () => {
  const randomStartNum = getRandomNumber();
  const randomLength = getRandomNumber(5, 10);
  const randomStep = getRandomNumber(1, 10);
  const randomProgression = generateProgression(randomStartNum, randomStep, randomLength);
  const randomEmptyNum = getRandomNumber(0, randomProgression.length - 1);
  const correctAnswer = randomProgression[randomEmptyNum];
  randomProgression[randomEmptyNum] = '..';
  const question = randomProgression.join(' ');
  return [question, String(correctAnswer)];
};

const startProgressionGame = () => startBrainGame(gameInstruction, generateRoundData);

export default startProgressionGame;
