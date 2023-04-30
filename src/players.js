/* eslint-disable no-console */
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

const hPlayer = function (name) {
  let attackCord = [];

  function chooseAttack(board, row, col) {
    if (board.gameB[row][col] != null) {
      attackCord.push([row, col]);
      board.receiveAttack(row, col);
    } else {
      attackCord.push([row, col]);
      board.receiveAttack(row, col);
    }
  }

  return { chooseAttack, attackCord };
};

const comPlayer = function (name) {
  let attackCord = [];

  function randomAttack(board, rowMin, rowMax, colMin, colMax) {
    const row = Math.floor(Math.random() * (rowMax - rowMin + 1) + rowMin);
    const col = Math.floor(Math.random() * (colMax - colMin + 1) + colMin);
    if (attackCord.some((element) => element[0] === col && element[1] === row)) { randomAttack(board, 0, 9, 0, 9); }
    if (board.gameB[row][col] != null) {
      attackCord.push([`${row}${col}`]);
      board.receiveAttack(row, col);
      return 'hit';
    } else {
      attackCord.push([`${row}${col}`]);
      board.receiveAttack(row, col);
    }
  }

  function randomSelection(board, ship) {
    let randomPick = Math.floor(Math.random() * 2);
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    if (randomPick === 0) {
      if (board.placeShipH(ship, row, col) === false) {
        randomSelection(board, ship);
      }
    } else if (board.placeShipV(ship, row, col) === false) {
      randomSelection(board, ship);
    }
  }

  function smartPick(n) {
    let min = Math.max(n - 1);
    let max = Math.min(n + 1);
    let randno = Math.floor(Math.random() * (max - min + 1) + min);
    if (randno > 9) { randno = 9; }
    return randno;
  }

  function smartAttack(board, row, col) {
    let smartRow = smartPick(row);
    let smartCol = smartPick(col);
    if (attackCord.some((element) => element[0] === smartCol && element[1] === smartRow)) { smartAttack(board, row, col); }
    if (board.gameB[smartRow][smartCol] != null) {
      attackCord.push([`${smartRow}${smartCol}`]);
      board.receiveAttack(smartRow, smartCol);
      return 'hit';
    } else {
      attackCord.push([`${smartRow}${smartCol}`]);
      board.receiveAttack(smartRow, smartCol);
    }
  }

  return {
    attackCord, smartPick, smartAttack, randomAttack, randomSelection,
  };
};

export {
  hPlayer, comPlayer,
};
