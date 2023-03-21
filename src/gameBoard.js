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
    this.currCordX = 0;
    this.currCordY = 0;
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

  getX() {
    const X = this.gameB[this.currCordX][this.currCordY][0];
    return X;
  }

  getY() {
    const Y = this.gameB[this.currCordX][this.currCordY][1];
    return Y;
  }

  placeShipH(X) {
    if (carrier.length + X + 1 <= 9) { 'can be placed'; } else { 'cannot be placed'; }
  }

  placeShipV(cordY) {
    if (carrier.length + cordY + 1 <= 9) { 'can be placed'; } else { 'cannot be placed'; }
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
