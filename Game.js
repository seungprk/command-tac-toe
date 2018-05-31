class Game {
  constructor() {
    this.currPlayer = 'x';
    this.board = [];
    for (let i = 1; i < 10; i += 1) {
      this.board.push(i);
    }
  }

  getCurrPlayer() {
    return this.currPlayer;
  }

  stringifyBoard() {
    let str = '';
    for (let i = 0; i < this.board.length; i += 1) {
      str += this.board[i];
      if ((i + 1) % 3 === 0 && i < this.board.length - 1) {
        str += '\n';
      }
    }

    return str;
  }
}

module.exports = Game;

