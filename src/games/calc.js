import startBrainGame from '../index.js';

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
const hasRandomOperations = () => {
  const operators = ['-', '+', '*'];
  const operatorIndex = Math.floor(Math.random() * operators.length);
  return operators[operatorIndex];
};

const generateRoundData = () => {
  const randomNumber1 = Math.round(Math.random() * 100);
  const randomNumber2 = Math.round(Math.random() * 100);
  const operators = hasRandomOperations();
  const correctAnswer = calculate(operators, randomNumber1, randomNumber2).toString();
  const question = `${randomNumber1} ${operators} ${randomNumber2}`;
  return [question, correctAnswer];
};
const startCalcGame = () => startBrainGame(gameInstruction, generateRoundData);

export default startCalcGame;
