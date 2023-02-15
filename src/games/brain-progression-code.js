import startBrainGame from '../index.js';

const rulesGame = 'What number is missing in the progression?';
const randomArray = (num1, numCount, arrayLength) => {
  const arrayProgression = [];
  let randomNumber = num1;
  for (let i = 1; i < arrayLength; i += 1) {
    arrayProgression.push(randomNumber);
    randomNumber += numCount;
  }
  return arrayProgression;
};

const startRound = () => {
  const arrayNum1 = Math.round(Math.random() * 100);
  const arrayLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const arrayNumCount = Math.round(Math.random() * 9);
  const arrayRandomProg = randomArray(arrayNum1, arrayNumCount, arrayLength);
  const arrayEmptyNum = Math.round(Math.random() * arrayRandomProg.length - 1);
  const correctAnswer = arrayRandomProg[arrayEmptyNum];
  arrayRandomProg[arrayEmptyNum] = '..';
  const question = arrayRandomProg.join(' ');
  return [question, String(correctAnswer)];
};

const progressionGame = () => {
  startBrainGame(rulesGame, startRound);
};
export default progressionGame;
