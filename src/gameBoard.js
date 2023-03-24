/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-plusplus */

import shipFactory from './ship';

export default class gameBoard {
  constructor() {
    this.gameB = this.createBoard();
    this.missCount = [];
    this.currCordX = 0;
    this.currCordY = 0;
    this.shipList = [
      carrier = shipFactory('carrier', 5, 0),
      battleShip = shipFactory('battleship', 4, 0),
      destroyer = shipFactory('destroyer', 3, 0),
      submarine = shipFactory('submarine', 3, 0),
      patrol = shipFactory('patrol', 2, 0),
    ];
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

  placeShipH(ship) {
    if (ship.length + this.currCordX + 1 < 10) { return true; } else { return false; }
  }

  placeShipV(ship) {
    if (ship.length + this.currCordY + 1 < 10) { return true; } else { return false; }
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
