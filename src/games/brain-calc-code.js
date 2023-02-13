import startBrainGame from '../index.js';

const rulesGame = 'What is the result of the expression?';

const correctAnswer = (operation, num1, num2) => {
  let result;
  if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  } else if (operation === '*') {
    result = num1 * num2;
  }
  return result;
};

const randomOperations = () => {
  const symbol = ['-', '+', '*'];
  const randomSymbol = Math.floor(Math.random() * symbol.length);
  return symbol[randomSymbol];
};

const startRound = () => {
  const randomNumber1 = Math.round(Math.random() * 100);
  const randomNumber2 = Math.round(Math.random() * 100);
  const symbol = randomOperations();
  const correctAnswerofExpressions = correctAnswer(symbol, randomNumber1, randomNumber2).toString();
  const question = `${randomNumber1} ${symbol} ${randomNumber2}`;
  return [question, correctAnswerofExpressions];
};
const calc = () => {
  startBrainGame(rulesGame, startRound);
};
export default calc;
