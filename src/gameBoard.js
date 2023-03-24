/* eslint-disable import/no-duplicates */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-plusplus */

import { shipFactory } from './ship';
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

  placeShipH() {
    if (carrier.length + this.currCordX + 1 < 10) { return true; } else { return false; }
  }

  placeShipV() {
    if (1 + this.currCordY + 1 < 10) { return true; } else { return false; }
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
