/* eslint-disable no-use-before-define */
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
let turnCount = 0;

const comPlayer = function (name) {
  const attackCord = [];

  function randomAttack(row, col) {
    if (attackCord.some((element) => element[0] === col && element[1] === row)) { return 'try again'; }
    if (playerBoard.gameB[row][col] != null) {
      attackCord.push([row, col]);
      playerBoard.receiveAttack(row, col);
      return 'good job';
    } else {
      attackCord.push([row, col]);
      playerBoard.receiveAttack(row, col);
      return 'you missed';
    }
  }

  return { attackCord, randomAttack };
};

const aiPlayer = comPlayer();

test('tries to hit again if successful', () => {
  playerBoard.placeShipH(playerBoard.ships.submarine, 3, 3);
  expect(aiPlayer.randomAttack(3, 3)).toBe('good job');
});

test('displays the correct message', () => {
  aiPlayer.randomAttack(1, 1);
  aiPlayer.randomAttack(2, 2);
  expect(aiPlayer.randomAttack(2, 2)).toBe('try again');
});

test('displays the correct message for a miss', () => {
  expect(aiPlayer.randomAttack(0, 0)).toBe('you missed');
});
