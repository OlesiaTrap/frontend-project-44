import startBrainGame from '../index.js';

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const startRound = () => {
  const randomNumber = Math.round(Math.random() * 98) + 2;
  const num = randomNumber;
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const isPrimeGame = () => {
  startBrainGame(rulesGame, startRound);
};
export default isPrimeGame;
