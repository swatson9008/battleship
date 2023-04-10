/* eslint-disable new-cap */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */

import gameBoard from './gameBoard';
import {
  playerOne, comPlayer, turnCount,
} from './players';

const aiPlayer = comPlayer();
const playerBoard = new gameBoard('playerOne');
const aiBoard = new gameBoard('playerTwo');

test('displays the correct turn count', () => {
  aiPlayer.turnDecide();
  expect(turnCount).toEqual(1);
});

test('if coordinate is added to attack cord', () => {
  aiPlayer.turnDecide();
  expect(aiPlayer.p2AttackCord[0]).toEqual([expect.any(Number), expect.any(Number)]);
});
