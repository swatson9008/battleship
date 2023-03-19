/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-plusplus */

import carrier from "./ship";

export default class gameBoard {
  constructor() {
    this.gameB = this.createBoard();
  }

  createBoard() {
    const columns = 7;
    const rows = 7;
    const boardArray = [];
    for (let i = 0; i < rows; i++) {
      boardArray[i] = [];
      for (let j = 0; j < columns; j++) {
        boardArray[i][j] = j + 1 + (i * columns);
      }
    }
    return boardArray;
  }

  getBoard() {
    return this.gameB;
  }

  placeShipH(x, y) {
    const Hcord = boardArray[x][y];
    if (carrier.length + boardArray[x] + 1 <= 7)('can be placed');
  }
}

const playerBoard = new gameBoard();

module.exports = gameBoard;
