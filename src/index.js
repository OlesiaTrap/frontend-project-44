import readlineSync from 'readline-sync';

const startBrainGame = (gameInstruction, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameInstruction);
  const countRounds = 3;
  for (let i = 0; i < countRounds; i += 1) {
    const [question, correctAnswer] = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!"`);
      return;
    }
  }
  console.log(`'Congratulations, ${userName}!'`);
};
export default startBrainGame;
