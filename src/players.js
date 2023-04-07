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

const player = [

  attackCord = [],

  function chooseAttack(num1, num2) {
    if (this.attackCord.includes([num1, num2])) { alert('not a valid coordinate'); }
    if (aiBoard.gameB[num1][num2] != null) {
      this.attackCord.push([num1, num2]);
      aiBoard.receiveAttack(num1, num2);
    } else {
      this.attackCord.push([num1, num2]);
      aiBoard.receiveAttack(num1, num2);
      turnCount++;
    }
  },

];

const comPlayer = [

  attackCord = [],

  function turnDecide() {
    randomAttack(playerBoard.gameB, 10, 10, 0, 9, 0, 9);
    turnCount++;
  },

  function randomAttack(arr, numRows, numCols, rowMin, rowMax, colMin, colMax) {
    const row = Math.floor(Math.random() * (rowMax - rowMin + 1) + rowMin);
    const col = Math.floor(Math.random() * (colMax - colMin + 1) + colMin);
    if (this.attackCord.includes([row, col])) { randomAttack(playerBoard.gameB, 10, 10, 0, 9, 0, 9); }
    if (playerBoard.gameB[col][row] != null) {
      this.attackCord.push([col, row]);
      playerBoard.receiveAttack(col, row);
      randomAttack(playerBoard.gameB, 10, 10, 0, 9, 0, 9);
    } else {
      this.attackCord.push([col, row]);
      playerBoard.receiveAttack(col, row);
    }
  },

];

module.exports = player;
module.exports = comPlayer;
module.exports = turnCount;
