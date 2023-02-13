import readlineSync from 'readline-sync';

const startBrainGame = (rulesGame, startRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesGame);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = startRound();
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
