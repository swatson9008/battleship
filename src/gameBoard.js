/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-empty */
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
  const sunkShips = [];

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
    if (ships.size + currCordX + 1 < 10 && gameB[currCordX][currCordY] === null) {
      for (let i = 0; i < ships.size; i++) {
        if (gameB[currCordX][i] !== null) {
          return false;
        }
      }
      for (let i = 0; i < ships.size; i++) {
        gameB[currCordX][i] = ships;
      }
      return gameB;
    } else { return false; }
  }

  function placeShipV(ships, currCordX, currCordY) {
    if (ships.size + currCordY + 1 < 10 && gameB[currCordX][currCordY] === null) {
      for (let i = 0; i < ships.size; i++) {
        if (gameB[currCordX][i] !== null) {
          return false;
        }
      }
      for (let i = 0; i < ships.size; i++) {
        gameB[currCordX + i][currCordY] = ships;
      }
      return gameB;
    } else { return false; }
  }

  function placeShipD(ships, currCordX, currCordY) {
    if (ships.size + currCordY + 1 < 10 && gameB[currCordX][currCordY] === null) {
      for (let i = 0; i < ships.size; i++) {
        gameB[currCordX + i][currCordY + i] = ships;
      }
      return gameB;
    } else { return false; }
  }

  function receiveAttack(currCordX, currCordY) {
    if (gameB[currCordX][currCordY] != null) {
      gameB[currCordX][currCordY].hit();
      sunkShipCheck(currCordX, currCordY);
    } else { missCount.push(currCordX, currCordY); }
  }

  function sunkShipCheck(currCordX, currCordY) {
    if (gameB[currCordX][currCordY].isSunk === true) {
      sunkShips.push(gameB[currCordX][currCordY]);
    }
  }
  return {
    player, gameB, ships, missCount, sunkShips, placeShipH, placeShipV, placeShipD, receiveAttack, sunkShipCheck,
  };
};

const playerBoard = new gameBoard('playerOne');

module.exports = gameBoard;
