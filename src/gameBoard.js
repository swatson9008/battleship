/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-plusplus */

import { carrier } from './ship';

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
        boardArray[i][j] = j + ((i * 10) + 11);
      }
    }
    return boardArray;
  }

  getBoard() {
    return this.gameB;
  }

  getxy(boardArray) {
    let xyCord = boardArray[][];
    let x = xyCord.Math.floor((xyCord / 10) % 10);
    let y = xyCord.Math.floor((xyCord / 1) % 10);

    return x, y;
  };

  placeShipH(x) {
    if (carrier.length + x + 1 <= 7) { 'can be placed'; } else { 'cannot be placed'; }
  }

  placeShipV(y) {
    if (carrier.length + y + 1 <= 7) { 'can be placed'; } else { 'cannot be placed'; }
  }
}

const playerBoard = new gameBoard();

module.exports = gameBoard;
