/* eslint-disable new-cap */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */

import gameBoard from './gameBoard';
import {
  hPlayer, comPlayer, turnCount,
} from './players';

const aiPlayer = comPlayer();
const humanPlayer = hPlayer();
const playerBoard = new gameBoard('playerOne');
const aiBoard = new gameBoard('playerTwo');

aiBoard.placeShipV(aiBoard.ships.carrier, 0, 0);

test('displays the correct turn count', () => {
  aiPlayer.turnDecide();
  expect(turnCount).toEqual(1);
});

test('displays the correct turn count', () => {
  humanPlayer.chooseAttack(2, 2);
  expect(turnCount).toEqual(2);
});

test('if coordinate is added to attack cord', () => {
  aiPlayer.turnDecide();
  expect(aiPlayer.attackCord[0]).toEqual([expect.any(Number), expect.any(Number)]);
});

test('if coordinate is added to attack cord', () => {
  humanPlayer.chooseAttack(1, 2);
  expect(humanPlayer.attackCord[0]).toEqual([expect.any(Number), expect.any(Number)]);
});

test('if hits is calculated correctly', () => {
  humanPlayer.chooseAttack(0, 0);
  expect(aiBoard.ships.carrier.hits).toEqual(1);
});

test('if error shows up if the same coord is selected twice for the human player', () => {
  humanPlayer.chooseAttack(1, 1);
  expect(humanPlayer.chooseAttack(1, 1)).toBe('invalid coordinate');
});
