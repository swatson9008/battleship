/* eslint-disable import/no-duplicates */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
import gameBoard from './gameBoard';

const playerBoard = new gameBoard();

test('displays the correct length', () => {
  expect(playerBoard.gameB.length).toEqual(10);
});

test('displays the correct message', () => {
  expect(playerBoard.placeShipH()).toBe(true);
});

test('testing for a false answer', () => {
  playerBoard.currCordY = 9;
  expect(playerBoard.placeShipV()).toBe(false);
});
