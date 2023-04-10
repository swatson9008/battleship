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

const playerOne = function (name) {
  const p1AttackCord = [];

  function chooseAttack(num1, num2) {
    if (p1AttackCord.includes([num1, num2])) { alert('not a valid coordinate'); }
    if (aiBoard.gameB[num1][num2] != null) {
      p1AttackCord.push([num1, num2]);
      aiBoard.receiveAttack(num1, num2);
    } else {
      p1AttackCord.push([num1, num2]);
      aiBoard.receiveAttack(num1, num2);
      turnCount++;
    }
  }

  return { chooseAttack, p1AttackCord };
};

const comPlayer = function (name) {
  let p2AttackCord = [];
  function randomAttack(arr, numRows, numCols, rowMin, rowMax, colMin, colMax) {
    const row = Math.floor(Math.random() * (rowMax - rowMin + 1) + rowMin);
    const col = Math.floor(Math.random() * (colMax - colMin + 1) + colMin);
    if (p2AttackCord.includes([row, col])) { randomAttack(playerBoard.gameB, 10, 10, 0, 9, 0, 9); }
    if (playerBoard.gameB[col][row] != null) {
      p2AttackCord.push([col, row]);
      playerBoard.receiveAttack(col, row);
      randomAttack(playerBoard.gameB, 10, 10, 0, 9, 0, 9);
    } else {
      p2AttackCord.push([col, row]);
      playerBoard.receiveAttack(col, row);
    }
  }
  function turnDecide() {
    randomAttack(playerBoard.gameB, 10, 10, 0, 9, 0, 9);
    turnCount++;
  }

  return { p2AttackCord, randomAttack, turnDecide };
};

export {
  playerOne, comPlayer, turnCount,
};
