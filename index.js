/* eslint no-console: 0 */
const readline = require('readline');
const Game = require('./Game.js');

let game = new Game();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const handlePrompt = (input) => {
  const castInput = Number(input);
  if (Number.isNaN(castInput) || castInput < 1 || castInput > 9) {
    rl.question('Invalid input. Please enter position between 1 and 9: ', handlePrompt);
  }
};


console.log('Welcome to Command-tac-toe!');
console.log(game.stringifyBoard());
console.log(`Current player: ${game.getCurrPlayer()}`);
rl.question('Enter position: ', handlePrompt);

