import readlineSync from 'readline-sync';

const greeting = () => {
let userName = readlineSync.question('May I have your name?');
console.log('Welcome to the Brain Games!');
console.log(`Hello, ${userName}!`);
};
export default greeting;
