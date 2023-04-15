/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

import gameBoard from './gameBoard';

const playerBoard = new gameBoard('playerOne');
const aiBoard = new gameBoard('playerTwo');

let turnCount = 0;

const hPlayer = function (name) {
  let attackCord = [];

  function chooseAttack(row, col) {
    if (attackCord.find((element) => [row, col]) || col > 10 || row > 10) { return 'invalid coordinate'; }
    if (aiBoard.gameB[row][col] != null) {
      attackCord.push([row, col]);
      aiBoard.receiveAttack(row, col);
    } else {
      attackCord.push([row, col]);
      aiBoard.receiveAttack(row, col);
      turnCount++;
    }
  }

  return { chooseAttack, attackCord };
};

const comPlayer = function (name) {
  let attackCord = [];

  function randomAttack(arr, rowMin, rowMax, colMin, colMax) {
    const row = Math.floor(Math.random() * (rowMax - rowMin + 1) + rowMin);
    const col = Math.floor(Math.random() * (colMax - colMin + 1) + colMin);
    if (attackCord.some((element) => element[0] === col && element[1] === row)) { randomAttack(playerBoard.gameB, 10, 10, 0, 9, 0, 9); }
    if (playerBoard.gameB[row][col] != null) {
      attackCord.push([row, col]);
      playerBoard.receiveAttack(row, col);
      randomAttack(playerBoard.gameB, 0, 9, 0, 9);
    } else {
      attackCord.push([row, col]);
      playerBoard.receiveAttack(row, col);
    }
  }
  function turnDecide() {
    randomAttack(playerBoard.gameB, 0, 9, 0, 9);
    turnCount++;
  }

  return { attackCord, randomAttack, turnDecide };
};

export {
  hPlayer, comPlayer, turnCount,
};