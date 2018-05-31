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

  isFilled(pos) {
    return this.board[pos - 1] === 'x' || this.board[pos - 1] === 'o';
  }

  fill(pos) {
    this.board[pos - 1] = this.currPlayer;
    this.currPlayer = this.currPlayer === 'x' ? 'o' : 'x';
  }
}

module.exports = Game;

