/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-plusplus */

import shipFactory from './ship';

const gameBoard = function (player) {
  const gameB = createBoard();
  const missCount = [];
  const currCordX = 0;
  const currCordY = 0;

  function createBoard() {
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

  const carrier = shipFactory('carrier', 5, 0);
  const battleShip = shipFactory('battleship', 4, 0);
  const destroyer = shipFactory('destroyer', 3, 0);
  const submarine = shipFactory('submarine', 3, 0);
  const patrol = shipFactory('patrol', 2, 0);

  function placeShipH(ship) {
    if (ship.length + currCordX + 1 < 10) { return true; } else { return false; }
  }

  function placeShipV() {
    if (1 + currCordY + 1 < 10) { return true; } else { return false; }
  }

  return {
    player, gameB, carrier, battleShip, destroyer, submarine, patrol, placeShipH, placeShipV,
  };
};

/* export default class gameBoard {
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

  placeShipH(ship) {
    if (ship.length + this.currCordX + 1 < 10) { return true; } else { return false; }
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
} */

const playerBoard = new gameBoard('playerOne');

module.exports = gameBoard;
