/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-plusplus */

// imported ship object for future testing

import { carrier } from './ship';

export default class gameBoard {
  constructor() {
    this.gameB = this.createBoard();
    this.missCount = [];
  }

  createBoard() {
    const columns = 10;
    const rows = 10;
    const boardArray = [];
    for (let i = 0; i < rows; i++) {
      boardArray[i] = [];
      for (let j = 0; j < columns; j++) {
        boardArray[i][j] = [i, j];
      }
    }
    return boardArray;
  }

  getBoard() {
    return this.gameB;
  }

  getxy(boardArray) {
    const cordX = boardArray[x][y][0];
    const cordY = boardArray[x][y][1];

    return cordX, cordY;
  }

  placeShipH(cordX) {
    if (carrier.length + cordX + 1 <= 7) { 'can be placed'; } else { 'cannot be placed'; }
  }

  placeShipV(cordY) {
    if (carrier.length + cordY + 1 <= 7) { 'can be placed'; } else { 'cannot be placed'; }
  }

  receiveAttack() {
    attackCord = boardArray[x][y];
    if (attackCord = NaN) {
      attackCord = 0;
      updateBoard();
    } else { this.missCount.push(attackCord); }
  }
}

const playerBoard = new gameBoard();

module.exports = gameBoard;
