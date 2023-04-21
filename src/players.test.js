/* eslint-disable new-cap */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */

import gameBoard from './gameBoard';
import {
  hPlayer, comPlayer,
} from './players';

let playerBoard = new gameBoard('playerOne');
let aiBoard = new gameBoard('playerTwo');
let aiPlayer = comPlayer(playerBoard);
let humanPlayer = hPlayer(aiBoard);

beforeEach(() => {
  playerBoard = new gameBoard('playerOne');
  aiBoard = new gameBoard('playerTwo');
  aiPlayer = comPlayer(playerBoard);
  humanPlayer = hPlayer(aiBoard);
});

test('if coordinate is added to attack cord', () => {
  aiPlayer.randomAttack(playerBoard, 0, 9, 0, 9);
  expect(aiPlayer.attackCord[0]).toEqual([expect.any(Number), expect.any(Number)]);
});

test('if coordinate is added to attack cord', () => {
  humanPlayer.chooseAttack(aiBoard, 1, 2);
  expect(humanPlayer.attackCord[0]).toEqual([expect.any(Number), expect.any(Number)]);
});

test('if hits is calculated correctly', () => {
  aiBoard.placeShipV(aiBoard.ships.carrier, 0, 0);
  humanPlayer.chooseAttack(aiBoard, 0, 0);
  expect(aiBoard.ships.carrier.hits).toEqual(1);
});
