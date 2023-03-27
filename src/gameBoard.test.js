/* eslint-disable import/no-duplicates */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
import shipFactory from './ship';
import gameBoard from './gameBoard';

const playerBoard = new gameBoard('playerOne');

test('displays the correct length', () => {
  expect(playerBoard.gameB.length).toEqual(10);
});

test('displays the correct message', () => {
  expect(playerBoard.placeShipH(playerBoard.ships.carrier, 0)).toBe(true);
});

test('testing for a false answer', () => {
  playerBoard.currCordY = 9;
  expect(playerBoard.placeShipV()).toBe(false);
});
