import readlineSync from 'readline-sync';

const randomOperations = () => {
  const symbol = ['-', '+', '*'];
  const randomSymbol = Math.floor(Math.random() * symbol.length);
  return symbol[randomSymbol];
};

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

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 100);
    const symbol = randomOperations();
    const correctAnswerofExpressions = correctAnswer(symbol, randomNumber1, randomNumber2);
    console.log(`'Question: ${randomNumber1} ${symbol} ${randomNumber2}'`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (correctAnswerofExpressions === answer) {
      console.log('Correct!');
    } else {
      console.log(`"'${answer}' is wrong answer ;(. Correct answer was '${correctAnswerofExpressions}'.\n Let's try again, ${userName}!"`);
      return;
    }
  }
  console.log(`'Congratulations, ${userName}!'`);
};
export default calc;
