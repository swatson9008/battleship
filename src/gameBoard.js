/* eslint-disable no-undef */
/* eslint-disable no-shadow */
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
        boardArray[i][j] = null;
      }
    }
    return boardArray;
  }

  const ships = {
    carrier: shipFactory(5, 0),
    battleship: shipFactory(4, 0),
    destroyer: shipFactory(3, 0),
    submarine: shipFactory(3, 0),
    patrol: shipFactory(2, 0),
  };

  function placeShipH(ships, currCordX, currCordY) {
    if (ships.length + currCordX + 1 < 10 && gameB[currCordX][currCordY] === null) {
      for (let i = 0; i < ships.length; i++) {
        gameB[currCordX][currCordY + i] = ships;
      }
      return gameB;
    } else { return false; }
  }

  function placeShipV(ships, currCordX, currCordY) {
    if (ships.length + currCordY + 1 < 10 && gameB[currCordX][currCordY] === null) {
      for (let i = 0; i < ships.length; i++) {
        gameB[currCordX + i][currCordY] = ships;
      }
      return gameB;
    } else { return false; }
  }

  function placeShipD(ships, currCordX, currCordY) {
    if (ships.length + currCordY + 1 < 10 && gameB[currCordX][currCordY] === null) {
      for (let i = 0; i < ships.length; i++) {
        gameB[currCordX + i][currCordY + i] = ships;
      }
      return gameB;
    } else { return false; }
  }

  return {
    player, gameB, ships, placeShipH, placeShipV, placeShipD,
  };
};

/* receiveAttack() {
    attackCord = boardArray[x][y];
    if (attackCord = NaN) {
      attackCord = 0;
      updateBoard();
    } else { this.missCount.push(attackCord); }
  }
} */

const playerBoard = new gameBoard('playerOne');

module.exports = gameBoard;
