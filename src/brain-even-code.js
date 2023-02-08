import readlineSync from 'readline-sync';

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  for (let i = 0; i < 3; i += 1) {
    const RandomNumber = Math.round(Math.random() * 100);
    const correctAnswer = RandomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`'Question: ${RandomNumber}'`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}.\n Let's try again, ${userName}!'."`);
      return;
    }
  }
  console.log(`'Congratulations, ${userName}!'`);
};
export default isEvenGame;
