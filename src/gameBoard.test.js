/* eslint-disable import/no-duplicates */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
import gameBoard from './gameBoard';
import { carrier } from './ship';

test('displays the correct length', () => {
  const playerBoard = new gameBoard();
  expect(playerBoard.gameB.length).toEqual(10);
});

test('displays the correct message', () => {
  const playerBoard = new gameBoard();
  expect(playerBoard.placeShipH()).toBe(true);
});
