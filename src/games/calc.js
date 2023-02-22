import startBrainGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameInstruction = 'What is the result of the expression?';

const calculate = (operation, num1, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${operation}!'`);
  }
};
const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  return operators[operatorIndex];
};

const generateRoundData = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const operator = getRandomOperator();
  const correctAnswer = calculate(operator, randomNumber1, randomNumber2).toString();
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  return [question, correctAnswer];
};
const startCalcGame = () => startBrainGame(gameInstruction, generateRoundData);

export default startCalcGame;
