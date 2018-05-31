/* eslint no-console: 0 */
const readline = require('readline');
const Game = require('./Game.js');

let game = new Game();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Command-tac-toe!');
console.log(`Current player: ${game.getCurrPlayer()}`);

rl.question('Enter position: ', (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
});

