import startBrainGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const generateRoundData = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startPrimeGame = () => startBrainGame(gameInstruction, generateRoundData);

export default startPrimeGame;
