/* eslint-disable new-cap */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */

import gameBoard from './gameBoard';
import {
  player, comPlayer, turnCount, p1AttackCord, p2AttackCord, playerBoard, aiBoard,
} from './players';

const aiPlayer = comPlayer();

test('displays the correct turn count', () => {
  aiPlayer.turnDecide();
  expect(turnCount).toEqual(1);
});

test('if coordinate is added to attack cord', () => {
  aiPlayer.turnDecide();
  expect(p2AttackCord[0]).toEqual([expect.any(Number), expect.any(Number)]);
});
